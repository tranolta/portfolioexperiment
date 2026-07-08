"use client";

import { useEffect, useState } from "react";
import type { Signal } from "@/lib/analysis";
import "./report.css";

type ApiResponse = { signals: Signal[]; articleCount: number; generatedAt: string };

const DIR_LABEL: Record<Signal["direction"], string> = {
  bull: "Opportunity",
  bear: "Risk",
  watch: "Watch",
};

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function ReportPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/signals")
      .then(async (res) => {
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Failed to load");
        setData(json);
      })
      .catch((e) => setError((e as Error).message));
  }, []);

  const signals = data?.signals ?? [];
  const bull = signals.filter((s) => s.direction === "bull").length;
  const bear = signals.filter((s) => s.direction === "bear").length;
  const watch = signals.filter((s) => s.direction === "watch").length;
  const top = [...signals].sort((a, b) => b.confidence - a.confidence)[0];

  return (
    <div className="reportRoot">
      <div className="toolbar">
        <a className="toolbarBack" href="/">← Back to signals</a>
        <button className="btn" onClick={() => window.print()} disabled={!data}>
          Save as PDF
        </button>
      </div>

      <div className="sheet">
        {error && <p className="rState">Couldn’t load the report: {error}</p>}
        {!data && !error && <p className="rState">Preparing report…</p>}

        {data && (
          <>
            {/* Cover */}
            <div className="rBrandRow">
              <div className="rBrand">
                <div className="rMark" />
                <div>
                  <div className="rBrandName">Signalstockholm</div>
                  <div className="rBrandSub">Swedish Press Intelligence</div>
                </div>
              </div>
              <div className="rTitle">
                <div className="rTitleGray">Signal Report</div>
                <div className="rTitleBold">Swedish Press</div>
                <p className="rIntro">
                  Automated research reading the Swedish financial press and distilling it into
                  investment trends, opportunities, and risks — grounded in the source articles.
                </p>
              </div>
            </div>

            {/* Headline band */}
            <div className="rBand">
              <div>
                <div className="rBandMonth">{fmtDate(data.generatedAt)}</div>
                <div className="rBandMeta">Sources: DI, SvD, DN, SVT, Breakit</div>
                <div className="rBandMeta">{data.articleCount} articles scanned</div>
              </div>
              <div className="rBandHeadline">
                {top ? top.title : "No clear signals in the current news cycle."}
              </div>
            </div>

            {/* KPIs */}
            <div className="rKpis">
              <div className="rKpi rKpiHi">
                <div className="rKpiLabel">Signals</div>
                <div className="rKpiValue">{signals.length}</div>
                <div className="rKpiUnit">This report</div>
              </div>
              <div className="rKpi">
                <div className="rKpiLabel">Opportunities</div>
                <div className="rKpiValue">{bull}</div>
                <div className="rKpiUnit">Bullish</div>
              </div>
              <div className="rKpi">
                <div className="rKpiLabel">Risks</div>
                <div className="rKpiValue">{bear}</div>
                <div className="rKpiUnit">Bearish</div>
              </div>
              <div className="rKpi">
                <div className="rKpiLabel">Watch</div>
                <div className="rKpiValue">{watch}</div>
                <div className="rKpiUnit">Developing</div>
              </div>
            </div>

            {/* Glance */}
            <h2 className="rSectionTitle">Signals at a glance</h2>
            <div className="rGlance">
              {signals.map((s, i) => (
                <div key={i} className="rGlanceRow">
                  <span className={`rDir ${s.direction}`}>{DIR_LABEL[s.direction]}</span>
                  <span className="rGlanceName">{s.title}</span>
                  <span className="rGlanceConv">{s.confidence}% conviction</span>
                </div>
              ))}
            </div>

            {/* Detail */}
            <div className="rDetailHead">
              <h2 className="rSectionTitle">The signals in detail</h2>
            </div>
            {signals.map((s, i) => (
              <div key={i} className="rSignal">
                <h3 className="rSigTitle">{s.title}</h3>
                <div className="rSigMeta">
                  <span className={`rDir ${s.direction}`}>{DIR_LABEL[s.direction]}</span>
                  <span className="m-slate">Conviction {s.confidence}%</span>
                  {s.sectors.length > 0 && <span className="m-slate">{s.sectors.join(" · ")}</span>}
                  {s.tickers.length > 0 && <span>{s.tickers.join(", ")}</span>}
                </div>
                <p className="rSigThesis">{s.thesis}</p>
                {s.sources.length > 0 && (
                  <>
                    <div className="rSigSrcLabel">Sources</div>
                    {s.sources.map((src, j) => (
                      <div key={j} className="rSigSrc">{src.source} — {src.title}</div>
                    ))}
                  </>
                )}
              </div>
            ))}

            <p className="rRisk">
              Risk information: This is automated research generated by an AI model reading public
              news feeds. It is not financial advice and may be inaccurate or incomplete. Verify
              every claim against primary sources before acting.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
