import OpenAI from "openai";
import type { Article } from "./rss";

export type Signal = {
  title: string;
  thesis: string;
  direction: "bull" | "bear" | "watch";
  confidence: number; // 0-100
  sectors: string[];
  tickers: string[];
  sources: { title: string; source: string; link: string }[];
};

const DEFAULT_BASE_URL = "https://ai-gateway.portal.chalmers.se/llm/openai/v1";
const DEFAULT_MODEL = "gpt-4o-mini";

const SIGNAL_TOOL: OpenAI.Chat.Completions.ChatCompletionTool = {
  type: "function",
  function: {
    name: "report_signals",
    description: "Report the investment signals extracted from the news.",
    parameters: {
      type: "object",
      properties: {
        signals: {
          type: "array",
          items: {
            type: "object",
            properties: {
              title: { type: "string", description: "Short trend/opportunity headline (English)." },
              thesis: { type: "string", description: "2-3 sentence investment thesis grounded in the articles." },
              direction: { type: "string", enum: ["bull", "bear", "watch"] },
              confidence: { type: "number", description: "0-100 conviction based on signal strength across sources." },
              sectors: { type: "array", items: { type: "string" } },
              tickers: { type: "array", items: { type: "string" }, description: "Related public companies/tickers if identifiable, else []." },
              sourceTitles: { type: "array", items: { type: "string" }, description: "Exact article titles that support this signal." },
            },
            required: ["title", "thesis", "direction", "confidence", "sectors", "tickers", "sourceTitles"],
          },
        },
      },
      required: ["signals"],
    },
  },
};

const SYSTEM = `You are a buy-side analyst reading the Swedish financial press.
From the supplied articles, surface 4-7 distinct, actionable investment signals:
emerging trends, sector rotations, or single-name opportunities and risks.
Rules:
- Ground every thesis in the supplied articles. Do not invent facts or prices.
- Prefer signals corroborated by more than one article; set confidence accordingly.
- "bull" = opportunity to gain, "bear" = downside/risk to avoid, "watch" = developing.
- Reference real Stockholm-listed (OMX) or global tickers only when clearly implied.
- Write titles and theses in English; keep them concrete, not generic.
- This is research, not personalised financial advice.
- You MUST call the report_signals function with your answer.`;

function articlesToPrompt(articles: Article[]): string {
  return articles.map((a, i) => `[${i + 1}] (${a.source}) ${a.title}\n${a.summary}`).join("\n\n");
}

export async function analyzeSignals(articles: Article[]): Promise<Signal[]> {
  const apiKey = process.env.AI_GATEWAY_API_KEY;
  if (!apiKey) throw new Error("AI_GATEWAY_API_KEY is not set");

  const client = new OpenAI({
    apiKey,
    baseURL: process.env.AI_GATEWAY_BASE_URL ?? DEFAULT_BASE_URL,
  });
  const linkByTitle = new Map(articles.map((a) => [a.title, a]));

  const completion = await client.chat.completions.create({
    model: process.env.AI_MODEL ?? DEFAULT_MODEL,
    temperature: 0.3,
    tools: [SIGNAL_TOOL],
    tool_choice: { type: "function", function: { name: "report_signals" } },
    messages: [
      { role: "system", content: SYSTEM },
      {
        role: "user",
        content: `Here are the latest Swedish news articles. Extract the investment signals.\n\n${articlesToPrompt(articles)}`,
      },
    ],
  });

  const call = completion.choices[0]?.message.tool_calls?.[0];
  if (!call || call.type !== "function") throw new Error("Model returned no structured signals");

  let raw: { signals: RawSignal[] };
  try {
    raw = JSON.parse(call.function.arguments);
  } catch {
    throw new Error("Model returned malformed signal JSON");
  }
  return (raw.signals ?? []).map((s) => normalize(s, linkByTitle));
}

type RawSignal = Omit<Signal, "sources"> & { sourceTitles: string[] };

function normalize(s: RawSignal, linkByTitle: Map<string, Article>): Signal {
  const sources = (s.sourceTitles ?? [])
    .map((t) => linkByTitle.get(t))
    .filter((a): a is Article => Boolean(a))
    .map((a) => ({ title: a.title, source: a.source, link: a.link }));
  return {
    title: s.title,
    thesis: s.thesis,
    direction: s.direction,
    confidence: Math.max(0, Math.min(100, Math.round(s.confidence))),
    sectors: s.sectors ?? [],
    tickers: s.tickers ?? [],
    sources,
  };
}
