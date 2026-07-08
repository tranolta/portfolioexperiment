# Signalstockholm

Reads the Swedish financial press (Dagens Industri, SvD Näringsliv, DN Ekonomi,
SVT Ekonomi, Breakit) and uses an LLM to surface investment trends, opportunities,
and risks — grounded in the source articles. Live at **johntran.dev**.

Not financial advice.

## Stack
- **Next.js** (App Router) — deployed to **Cloudflare Workers** via [OpenNext](https://opennext.js.org/cloudflare).
- **RSS ingestion** — `src/lib/rss.ts`, fetch-based (Workers-safe).
- **Signal extraction** — `src/lib/analysis.ts`, OpenAI SDK pointed at the
  **Chalmers AI Gateway** (`ai-gateway.portal.chalmers.se`), function-calling for
  structured output.
- **Design system** — `tokens.css` / `design.md`, extracted from vinnova.se.

## Environment
Set as a Cloudflare Worker **secret** (never commit it):

| Var | Required | Default |
|-----|----------|---------|
| `AI_GATEWAY_API_KEY` | yes | — |
| `AI_MODEL` | no | `gpt-4o-mini` |
| `AI_GATEWAY_BASE_URL` | no | `https://ai-gateway.portal.chalmers.se/llm/openai/v1` |

Local dev: copy `.env.example` → `.env.local` and fill in the key.

## Commands
```bash
npm run dev        # local dev (http://localhost:3000)
npm run preview    # build + run on the Workers runtime locally
npm run deploy     # build + deploy to Cloudflare (manual)
```

Cloudflare Workers Builds (auto-deploy on push to `main`):
- **Build command:** `npx opennextjs-cloudflare build`
- **Deploy command:** `npx wrangler deploy`
