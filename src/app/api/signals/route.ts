import { NextResponse } from "next/server";
import { fetchAllArticles } from "@/lib/rss";
import { analyzeSignals, type Signal } from "@/lib/analysis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 min — the press moves slower than requests

type Payload = { signals: Signal[]; articleCount: number; generatedAt: string };
let cache: { payload: Payload; at: number } | null = null;

export async function GET() {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
    return NextResponse.json(cache.payload, { headers: { "x-cache": "hit" } });
  }

  try {
    const articles = await fetchAllArticles();
    if (articles.length === 0) {
      return NextResponse.json({ error: "No articles could be fetched from any source." }, { status: 502 });
    }

    const signals = await analyzeSignals(articles);
    const payload: Payload = {
      signals,
      articleCount: articles.length,
      generatedAt: new Date().toISOString(),
    };
    cache = { payload, at: Date.now() };
    return NextResponse.json(payload, { headers: { "x-cache": "miss" } });
  } catch (err) {
    const message = (err as Error).message ?? "Unknown error";
    console.error("[api/signals]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
