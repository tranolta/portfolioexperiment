import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { fetchAllArticles } from "@/lib/rss";
import { analyzeSignals, type Signal } from "@/lib/analysis";

export const dynamic = "force-dynamic";

const MAX_PER_DAY = 10;
// Spacing that naturally yields ≤ MAX_PER_DAY generations across a day.
const MIN_INTERVAL_MS = Math.floor((24 * 60 * 60 * 1000) / MAX_PER_DAY);
const LATEST_KEY = "signals:latest";
const COUNTER_TTL_S = 2 * 24 * 60 * 60;

type Payload = { signals: Signal[]; articleCount: number; generatedAt: string };
type Cached = { payload: Payload; at: number };

/** Minimal shape of the KV binding we use. */
type KV = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, opts?: { expirationTtl?: number }): Promise<void>;
};

async function getKV(): Promise<KV | undefined> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return (env as unknown as { SIGNALS_KV?: KV }).SIGNALS_KV;
  } catch {
    return undefined;
  }
}

// Dev fallback when no KV binding exists (local `next dev`).
let memCache: Cached | null = null;

function json(payload: Payload, cache: string) {
  return NextResponse.json(payload, { headers: { "x-cache": cache } });
}

export async function GET() {
  const kv = await getKV();
  const now = Date.now();

  // 1. Read the last generated payload.
  let latest: Cached | null = memCache;
  if (kv) {
    const raw = await kv.get(LATEST_KEY);
    latest = raw ? (JSON.parse(raw) as Cached) : null;
  }

  // 2. Fresh enough → serve it, no model call.
  if (latest && now - latest.at < MIN_INTERVAL_MS) {
    return json(latest.payload, "hit");
  }

  // 3. Enforce the hard daily budget before spending a generation.
  const dateKey = `count:${new Date(now).toISOString().slice(0, 10)}`;
  let count = 0;
  if (kv) {
    const raw = await kv.get(dateKey);
    count = raw ? parseInt(raw, 10) || 0 : 0;
  }
  if (kv && count >= MAX_PER_DAY) {
    if (latest) return json(latest.payload, "stale-budget");
    return NextResponse.json(
      { error: "Daily signal budget reached. Come back tomorrow." },
      { status: 429 },
    );
  }

  // 4. Generate.
  try {
    const articles = await fetchAllArticles();
    if (articles.length === 0) {
      if (latest) return json(latest.payload, "stale-no-articles");
      return NextResponse.json({ error: "No articles could be fetched from any source." }, { status: 502 });
    }

    const signals = await analyzeSignals(articles);
    const payload: Payload = {
      signals,
      articleCount: articles.length,
      generatedAt: new Date(now).toISOString(),
    };

    if (kv) {
      await kv.put(LATEST_KEY, JSON.stringify({ payload, at: now }));
      await kv.put(dateKey, String(count + 1), { expirationTtl: COUNTER_TTL_S });
    } else {
      memCache = { payload, at: now };
    }
    return json(payload, "miss");
  } catch (err) {
    const message = (err as Error).message ?? "Unknown error";
    console.error("[api/signals]", message);
    // Keep the site useful: serve the last good payload if the model errors.
    if (latest) return json(latest.payload, "stale-error");
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
