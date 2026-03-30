export default function CampusFlowTechStack() {
  const font = 'Epilogue, sans-serif'

  const diamond = (
    bg: string,
    w: number,
    h: number,
    label: string,
    title: string,
    mb: number,
    opacity: number,
    fontSize = 1
  ) => (
    <div style={{
      position: 'relative',
      clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: w, height: h, background: bg,
      marginBottom: mb, opacity, flexShrink: 0,
    }}>
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 2, fontFamily: font }}>{label}</div>
        <div style={{ fontFamily: font, fontWeight: 700, fontSize: 12 * fontSize, textTransform: 'uppercase' }}>{title}</div>
      </div>
    </div>
  )

  const sectionLabel = (label: string, color: string) => (
    <div style={{ fontFamily: font, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color, marginBottom: 6, marginTop: 8 }}>{label}</div>
  )

  const rgItem = (name: string, desc: string, color: string) => (
    <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'flex-start' }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0, marginTop: 4 }} />
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, fontFamily: font, lineHeight: 1.2 }}>{name}</div>
        <div style={{ fontSize: 10, color: '#666', lineHeight: 1.4, fontFamily: font }}>{desc}</div>
      </div>
    </div>
  )

  const rgTitle = (label: string, color = '#999') => (
    <div style={{ fontFamily: font, fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color, marginBottom: 8, paddingBottom: 4, borderBottom: `0.5px solid ${color}` }}>{label}</div>
  )

  return (
    <div style={{ background: '#fff', fontFamily: font, color: '#111', padding: '40px 20px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <h1 style={{ fontFamily: font, fontSize: 'clamp(32px,6vw,56px)', fontWeight: 800, lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: 4 }}>
          Tech Stack
        </h1>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginBottom: 48, fontFamily: font }}>
          Campus Forecast &amp; Flow
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, alignItems: 'start' }}>
          {/* LEFT: Diamond Stack */}
          <div>
            {sectionLabel('Language & Framework', '#e85030')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 240, 120, 'Language', 'Python 3.10', -38, 0.97)}
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 195, 98, 'Backend', 'Flask', -30, 0.82)}
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 155, 78, 'Frontend', 'HTML / JS', 8, 0.67, 0.85)}
            </div>

            {sectionLabel('ML & Data', '#c040a0')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#c040a0,#902080)', 230, 115, 'Classifier', 'Random Forest', -36, 0.97, 0.9)}
              {diamond('linear-gradient(135deg,#c040a0,#902080)', 188, 94, 'Feature Eng.', 'pandas · numpy', -30, 0.82, 0.9)}
              {diamond('linear-gradient(135deg,#c040a0,#902080)', 150, 75, 'Serialization', 'joblib', 8, 0.67, 0.8)}
            </div>

            {sectionLabel('Data Sources', '#2080a0')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#2080a0,#106080)', 220, 110, 'Weather API', 'SMHI', -34, 0.97)}
              {diamond('linear-gradient(135deg,#2080a0,#106080)', 178, 89, 'Parsing', 'ijson · orjson', 8, 0.8, 0.85)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
              <div style={{ width: 1, height: 24, background: '#bbb' }} />
            </div>

            <div style={{ borderTop: '1.5px solid #111', paddingTop: 12 }}>
              <div style={{ fontFamily: font, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#208080', marginBottom: 4 }}>Visualization</div>
              <div style={{ fontSize: 10, color: '#555', fontFamily: font }}>Google Maps API — routes &amp; prediction overlay</div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Language & Framework', '#e85030')}
              {rgItem('Python 3.10.8', 'Primary language for data ingestion, ML pipeline, and API logic', '#e85030')}
              {rgItem('Flask 2.3.3', 'REST API server serving predictions and movement data to the frontend', '#d06040')}
              {rgItem('Vanilla HTML/CSS/JS (ES6+)', 'Lightweight frontend with no framework overhead', '#b08870')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('ML & Data', '#c040a0')}
              {rgItem('scikit-learn — Random Forest', 'Classifier trained on movement history, weather, and CO2 signals to predict next destination with confidence score', '#c040a0')}
              {rgItem('pandas / numpy', 'Feature engineering — time-of-day, day-of-week, weather, and occupancy features', '#a04090')}
              {rgItem('joblib', 'Model serialization for fast loading and serving', '#804080')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Data Sources', '#2080a0')}
              {rgItem('Historical movement data', 'Timestamped zone transition records — JSON/CSV datasets up to 7GB, streamed with memory-mapped techniques', '#2080a0')}
              {rgItem('SMHI API', 'Historical and real-time Swedish weather — temperature, precipitation, wind', '#408090')}
              {rgItem('CO2 sensors', 'Building-level air quality readings used as an occupancy proxy', '#507080')}
              {rgItem('GeoJSON', 'Campus zone and building geometry for map rendering', '#606070')}
              {rgItem('ijson / orjson', 'Streaming JSON parsers for multi-gigabyte files that exceed available RAM', '#408090')}
              {rgItem('requests', 'SMHI API calls for weather data ingestion', '#507080')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Visualization')}
              {rgItem('Google Maps API', 'Interactive map with historical playback, live prediction overlays, and predicted vs actual path comparisons. Routes pre-cached to minimize API calls', '#333')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
