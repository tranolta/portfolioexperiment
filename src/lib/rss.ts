import Parser from "rss-parser";

export type FeedSource = {
  id: string;
  name: string;
  url: string;
};

export type Article = {
  source: string;
  title: string;
  summary: string;
  link: string;
  isoDate?: string;
};

/** Swedish newspaper feeds, biased toward business / economy desks. */
export const SOURCES: FeedSource[] = [
  { id: "di", name: "Dagens Industri", url: "https://www.di.se/rss" },
  { id: "svd-naringsliv", name: "SvD Näringsliv", url: "https://www.svd.se/feed/articles.rss" },
  { id: "dn-ekonomi", name: "DN Ekonomi", url: "https://www.dn.se/ekonomi/rss/" },
  { id: "svt-ekonomi", name: "SVT Ekonomi", url: "https://www.svt.se/nyheter/ekonomi/rss.xml" },
  { id: "breakit", name: "Breakit", url: "https://www.breakit.se/feed/artiklar" },
];

const parser = new Parser({ timeout: 8000 });

const MAX_SUMMARY = 600;

function clean(html: string | undefined): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_SUMMARY);
}

/** Fetch and normalize one feed. Failures resolve to [] so one dead feed
 *  never takes the whole request down. Uses fetch + parseString (not
 *  parser.parseURL) so it runs on the Cloudflare Workers runtime. */
async function fetchOne(source: FeedSource, perFeed: number): Promise<Article[]> {
  try {
    const res = await fetch(source.url, {
      headers: { "user-agent": "Signalstockholm/1.0 (+https://johntran.dev)" },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const feed = await parser.parseString(xml);
    return (feed.items ?? []).slice(0, perFeed).map((item) => ({
      source: source.name,
      title: (item.title ?? "").trim(),
      summary: clean(item.contentSnippet ?? item.content ?? item.summary),
      link: item.link ?? "",
      isoDate: item.isoDate,
    }));
  } catch (err) {
    console.error(`[rss] failed to fetch ${source.id}:`, (err as Error).message);
    return [];
  }
}

/** Fetch all sources in parallel and return a flat, deduped article list. */
export async function fetchAllArticles(perFeed = 12): Promise<Article[]> {
  const results = await Promise.all(SOURCES.map((s) => fetchOne(s, perFeed)));
  const seen = new Set<string>();
  const articles: Article[] = [];
  for (const article of results.flat()) {
    if (!article.title || seen.has(article.title)) continue;
    seen.add(article.title);
    articles.push(article);
  }
  return articles;
}
