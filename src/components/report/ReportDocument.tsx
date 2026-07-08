import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import type { Signal } from "@/lib/analysis";

export type ReportData = {
  signals: Signal[];
  articleCount: number;
  generatedAt: string;
};

const COLOR = {
  ink: "#21272A",
  slate: "#4D5358",
  rule: "#D9DEE3",
  band: "#F6F5F1",
  accent: "#F5D000", // report yellow
  bull: "#2E7D32",
  bear: "#C0392B",
  watch: "#B8860B",
};

const DIR_LABEL: Record<Signal["direction"], string> = {
  bull: "Opportunity",
  bear: "Risk",
  watch: "Watch",
};
const DIR_COLOR: Record<Signal["direction"], string> = {
  bull: COLOR.bull,
  bear: COLOR.bear,
  watch: COLOR.watch,
};

const s = StyleSheet.create({
  page: { paddingTop: 54, paddingBottom: 56, paddingHorizontal: 54, fontFamily: "Helvetica", color: COLOR.ink, fontSize: 9.5, lineHeight: 1.5 },

  // Cover header
  brandRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 },
  brand: { flexDirection: "row", alignItems: "center", gap: 7 },
  brandMark: { width: 14, height: 14, backgroundColor: COLOR.ink, transform: "rotate(45deg)" },
  brandName: { fontFamily: "Helvetica-Bold", fontSize: 11 },
  brandSub: { color: COLOR.slate, fontSize: 8 },
  titleGray: { color: "#9AA0A6", fontSize: 22 },
  titleBold: { fontFamily: "Helvetica-Bold", fontSize: 22 },
  intro: { width: 250, color: COLOR.slate, fontSize: 8.5, lineHeight: 1.55, textAlign: "right" },

  // Headline band
  band: { backgroundColor: COLOR.band, marginHorizontal: -54, paddingHorizontal: 54, paddingVertical: 22, flexDirection: "row", gap: 28, marginBottom: 22 },
  bandLeft: { width: 150 },
  bandMonth: { fontFamily: "Helvetica-Bold", fontSize: 15 },
  bandMeta: { color: COLOR.slate, fontSize: 8, marginTop: 4 },
  bandHeadline: { flex: 1, fontFamily: "Helvetica-Bold", fontSize: 15, lineHeight: 1.3 },

  // KPI tiles
  kpiRow: { flexDirection: "row", borderTopWidth: 1, borderTopColor: COLOR.rule, marginBottom: 26 },
  kpi: { flex: 1, paddingVertical: 12, paddingHorizontal: 12, borderRightWidth: 1, borderRightColor: COLOR.rule },
  kpiHi: { backgroundColor: COLOR.accent, marginTop: -1, paddingTop: 13 },
  kpiLabel: { fontFamily: "Helvetica-Bold", fontSize: 8.5, marginBottom: 8 },
  kpiValue: { fontSize: 20, fontFamily: "Helvetica-Bold" },
  kpiUnit: { color: COLOR.slate, fontSize: 8, marginTop: 3 },

  sectionTitle: { fontFamily: "Helvetica-Bold", fontSize: 12, marginBottom: 12, marginTop: 4 },

  // At a glance rows
  glanceRow: { flexDirection: "row", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: COLOR.rule },
  glanceDir: { width: 74, fontFamily: "Helvetica-Bold", fontSize: 8.5 },
  glanceName: { flex: 1, fontSize: 9.5, paddingRight: 12 },
  glanceConv: { width: 60, textAlign: "right", color: COLOR.slate, fontSize: 9 },

  disclaimer: { position: "absolute", bottom: 30, left: 54, right: 54, borderTopWidth: 1, borderTopColor: COLOR.rule, paddingTop: 8, color: COLOR.slate, fontSize: 7.5, lineHeight: 1.4 },

  // Running header (pages 2+)
  runHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", borderBottomWidth: 1, borderBottomColor: COLOR.rule, paddingBottom: 6, marginBottom: 22 },
  runBrand: { flexDirection: "row", alignItems: "center", gap: 5 },
  runMark: { width: 9, height: 9, backgroundColor: COLOR.slate, transform: "rotate(45deg)" },
  runName: { fontFamily: "Helvetica-Bold", fontSize: 8.5, color: COLOR.slate },
  runMeta: { color: COLOR.slate, fontSize: 7.5, textAlign: "right", lineHeight: 1.3 },

  // Signal detail
  accentBar: { position: "absolute", left: 0, top: 120, width: 6, height: 90, backgroundColor: COLOR.accent },
  sigTitle: { fontFamily: "Helvetica-Bold", fontSize: 13, marginTop: 16 },
  sigMetaRow: { flexDirection: "row", gap: 16, marginTop: 5, marginBottom: 8 },
  sigTag: { fontFamily: "Helvetica-Bold", fontSize: 8 },
  sigThesis: { fontSize: 9.5, lineHeight: 1.55, marginBottom: 6, color: COLOR.ink },
  sigSub: { color: COLOR.slate, fontSize: 8, marginBottom: 2 },
  sigSource: { color: COLOR.slate, fontSize: 8, lineHeight: 1.4 },
});

function fmtDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function ReportDocument({ data }: { data: ReportData }) {
  const date = fmtDate(data.generatedAt);
  const bull = data.signals.filter((x) => x.direction === "bull").length;
  const bear = data.signals.filter((x) => x.direction === "bear").length;
  const watch = data.signals.filter((x) => x.direction === "watch").length;
  const top = [...data.signals].sort((a, b) => b.confidence - a.confidence)[0];

  return (
    <Document title={`Signal Report — ${date}`} author="Signalstockholm">
      {/* Cover page */}
      <Page size="A4" style={s.page}>
        <View style={s.brandRow}>
          <View>
            <View style={s.brand}>
              <View style={s.brandMark} />
              <View>
                <Text style={s.brandName}>Signalstockholm</Text>
                <Text style={s.brandSub}>Swedish Press Intelligence</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={s.titleGray}>Signal Report</Text>
            <Text style={s.titleBold}>Swedish Press</Text>
            <Text style={s.intro}>
              Automated research reading the Swedish financial press and distilling it into
              investment trends, opportunities, and risks — grounded in the source articles.
            </Text>
          </View>
        </View>

        <View style={s.band}>
          <View style={s.bandLeft}>
            <Text style={s.bandMonth}>{date}</Text>
            <Text style={s.bandMeta}>Sources: DI, SvD, DN, SVT, Breakit</Text>
            <Text style={s.bandMeta}>{data.articleCount} articles scanned</Text>
          </View>
          <Text style={s.bandHeadline}>{top ? top.title : "No clear signals in the current news cycle."}</Text>
        </View>

        <View style={s.kpiRow}>
          <View style={[s.kpi, s.kpiHi]}>
            <Text style={s.kpiLabel}>Signals</Text>
            <Text style={s.kpiValue}>{data.signals.length}</Text>
            <Text style={s.kpiUnit}>This report</Text>
          </View>
          <View style={s.kpi}>
            <Text style={s.kpiLabel}>Opportunities</Text>
            <Text style={s.kpiValue}>{bull}</Text>
            <Text style={s.kpiUnit}>Bullish</Text>
          </View>
          <View style={s.kpi}>
            <Text style={s.kpiLabel}>Risks</Text>
            <Text style={s.kpiValue}>{bear}</Text>
            <Text style={s.kpiUnit}>Bearish</Text>
          </View>
          <View style={[s.kpi, { borderRightWidth: 0 }]}>
            <Text style={s.kpiLabel}>Watch</Text>
            <Text style={s.kpiValue}>{watch}</Text>
            <Text style={s.kpiUnit}>Developing</Text>
          </View>
        </View>

        <Text style={s.sectionTitle}>Signals at a glance</Text>
        {data.signals.map((sig, i) => (
          <View key={i} style={s.glanceRow}>
            <Text style={[s.glanceDir, { color: DIR_COLOR[sig.direction] }]}>{DIR_LABEL[sig.direction]}</Text>
            <Text style={s.glanceName}>{sig.title}</Text>
            <Text style={s.glanceConv}>{sig.confidence}% conv.</Text>
          </View>
        ))}

        <Text style={s.disclaimer} fixed>
          Risk information: This is automated research generated by an AI model reading public news
          feeds. It is not financial advice and may be inaccurate or incomplete. Verify every claim
          against primary sources before acting.
        </Text>
      </Page>

      {/* Detail page(s) */}
      <Page size="A4" style={s.page}>
        <View style={s.runHead} fixed>
          <View style={s.runBrand}>
            <View style={s.runMark} />
            <Text style={s.runName}>Signalstockholm</Text>
          </View>
          <Text style={s.runMeta} render={({ pageNumber }) => `Signal Report — ${date}\nPage ${pageNumber}`} />
        </View>

        <Text style={s.sectionTitle}>The signals in detail</Text>

        {data.signals.map((sig, i) => (
          <View key={i} wrap={false} style={{ marginBottom: 14 }}>
            <Text style={s.sigTitle}>{sig.title}</Text>
            <View style={s.sigMetaRow}>
              <Text style={[s.sigTag, { color: DIR_COLOR[sig.direction] }]}>{DIR_LABEL[sig.direction]}</Text>
              <Text style={[s.sigTag, { color: COLOR.slate }]}>Conviction {sig.confidence}%</Text>
              {sig.sectors.length > 0 && (
                <Text style={[s.sigTag, { color: COLOR.slate }]}>{sig.sectors.join(" · ")}</Text>
              )}
              {sig.tickers.length > 0 && (
                <Text style={[s.sigTag, { color: COLOR.ink }]}>{sig.tickers.join(", ")}</Text>
              )}
            </View>
            <Text style={s.sigThesis}>{sig.thesis}</Text>
            {sig.sources.length > 0 && (
              <View>
                <Text style={s.sigSub}>Sources</Text>
                {sig.sources.map((src, j) => (
                  <Text key={j} style={s.sigSource}>
                    {src.source} — {src.title}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}

        <Text style={s.disclaimer} fixed>
          Risk information: This is automated research generated by an AI model reading public news
          feeds. It is not financial advice and may be inaccurate or incomplete. Verify every claim
          against primary sources before acting.
        </Text>
      </Page>
    </Document>
  );
}
