import type { Signal } from "@/lib/analysis";
import "./signal-card.css";

const DIR_COLOR: Record<Signal["direction"], string> = {
  bull: "var(--color-bull)",
  bear: "var(--color-bear)",
  watch: "var(--color-watch)",
};

const DIR_LABEL: Record<Signal["direction"], string> = {
  bull: "Opportunity",
  bear: "Risk",
  watch: "Watch",
};

export function SignalCard({ signal }: { signal: Signal }) {
  return (
    <article className="card" style={{ ["--dir-color" as string]: DIR_COLOR[signal.direction] }}>
      <header className="cardHead">
        <h3 className="cardTitle">{signal.title}</h3>
        <span className="dirTag">{DIR_LABEL[signal.direction]}</span>
      </header>

      <p className="thesis">{signal.thesis}</p>

      <div className="meter">
        <div className="meterLabel">
          <span className="eyebrow">Conviction</span>
          <span className="eyebrow">{signal.confidence}%</span>
        </div>
        <div className="meterTrack" role="meter" aria-valuenow={signal.confidence} aria-valuemin={0} aria-valuemax={100} aria-label="Conviction">
          <div className="meterFill" style={{ width: `${signal.confidence}%` }} />
        </div>
      </div>

      {(signal.sectors.length > 0 || signal.tickers.length > 0) && (
        <div className="tags">
          {signal.tickers.map((t) => (
            <span key={t} className="tag ticker">{t}</span>
          ))}
          {signal.sectors.map((s) => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      )}

      {signal.sources.length > 0 && (
        <div className="sources">
          {signal.sources.map((src) => (
            <span key={src.link || src.title} className="sourceLink">
              <span className="sourceOrigin">{src.source}</span>{" · "}
              {src.link ? <a href={src.link} target="_blank" rel="noopener noreferrer">{src.title}</a> : src.title}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
