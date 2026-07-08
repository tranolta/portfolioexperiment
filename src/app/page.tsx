"use client";

import { useCallback, useEffect, useState } from "react";
import { SignalCard } from "@/components/SignalCard";
import type { Signal } from "@/lib/analysis";
import "./page.css";

const SOURCE_NAMES = ["Dagens Industri", "SvD Näringsliv", "DN Ekonomi", "SVT Ekonomi", "Breakit"];

type ApiResponse = { signals: Signal[]; articleCount: number; generatedAt: string };

export default function Home() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/signals");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to load signals");
      setData(json);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const generated = data?.generatedAt
    ? new Date(data.generatedAt).toLocaleString("sv-SE", { dateStyle: "medium", timeStyle: "short" })
    : null;

  return (
    <>
      <header className="hero">
        <div className="wrap heroInner">
          <p className="eyebrow heroEyebrow">Svenska pressen · Investeringssignaler</p>
          <h1 className="heroTitle">Signals from the Swedish press.</h1>
          <p className="heroLede">
            A tool that reads the day&rsquo;s Swedish financial press — Dagens Industri,
            SvD Näringsliv, DN Ekonomi, SVT Ekonomi and Breakit — for a quick read on how today
            looks and what to keep an eye on.
          </p>
          <div className="heroActions">
            <button className="btn" onClick={() => void load()} disabled={loading}>
              {loading ? "Reading the press…" : "Refresh signals"}
            </button>
            {data && (
              <span className="heroMeta">
                <strong>{data.signals.length}</strong> signals from{" "}
                <strong>{data.articleCount}</strong> articles
                {generated && <> · {generated}</>}
              </span>
            )}
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="wrap stripInner">
          <span className="eyebrow stripLabel">Sources</span>
          <div className="stripSources">
            {SOURCE_NAMES.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      <main className="signals">
        <div className="wrap">
          <div className="sectionHead">
            <h2 className="sectionTitle">Today&rsquo;s signals</h2>
            {data && data.signals.length > 0 && (
              <a className="btn btnPdf" href="/report">Download report (PDF)</a>
            )}
          </div>

          {error && (
            <div className="error" role="alert">
              <p><strong>Couldn&rsquo;t generate signals.</strong> {error}</p>
              <button className="btn" onClick={() => void load()} style={{ marginTop: "1rem" }}>
                Try again
              </button>
            </div>
          )}

          {loading && !error && (
            <>
              <div className="gathering" role="status" aria-live="polite">
                <span className="gatheringDot" aria-hidden="true" />
                <span>
                  Gathering signals from the Swedish press<span className="ellipsis" aria-hidden="true" />
                </span>
              </div>
              <div className="grid" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="skeleton">
                    <div className="bar short" />
                    <div className="bar med" />
                    <div className="bar" />
                    <div className="bar med" />
                  </div>
                ))}
              </div>
            </>
          )}

          {!loading && !error && data && (
            data.signals.length > 0 ? (
              <div className="grid">
                {data.signals.map((s) => (
                  <SignalCard key={s.title} signal={s} />
                ))}
              </div>
            ) : (
              <p className="state">No clear signals in the current news cycle.</p>
            )
          )}

        </div>
      </main>

      <footer className="foot">
        <div className="wrap">By John Tran</div>
      </footer>
    </>
  );
}
