export default function ChalmersGoTechStack() {
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
          Chalmers GO
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, alignItems: 'start' }}>
          {/* LEFT: Diamond Stack */}
          <div>
            {sectionLabel('Language & Framework', '#e85030')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 240, 120, 'Language', 'Python 3.10', -38, 0.97)}
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 195, 98, 'Backend', 'Flask', -30, 0.82)}
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 155, 78, 'Frontend', 'HTML Templates', 8, 0.67, 0.85)}
            </div>

            {sectionLabel('BIM & Geometry', '#2080a0')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#2080a0,#106080)', 230, 115, 'BIM / IFC', 'ifcopenshell', -36, 0.97)}
              {diamond('linear-gradient(135deg,#2080a0,#106080)', 185, 92, 'Geometry', 'Shapely', 8, 0.8, 0.9)}
            </div>

            {sectionLabel('Math / Science', '#7060c0')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#7060c0,#5040a0)', 210, 105, 'Math & Science', 'NumPy · SciPy', 8, 0.95)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
              <div style={{ width: 1, height: 24, background: '#bbb' }} />
            </div>

            <div style={{ borderTop: '1.5px solid #111', paddingTop: 12 }}>
              <div style={{ fontFamily: font, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#208080', marginBottom: 4 }}>Data</div>
              <div style={{ fontSize: 10, color: '#555', fontFamily: font }}>JSON files for building &amp; room data</div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Language & Framework', '#e85030')}
              {rgItem('Python 3.10', 'Primary language for backend logic, pathfinding, and IFC parsing', '#e85030')}
              {rgItem('Flask', 'Lightweight web server exposing the routing API to the mobile app', '#d06040')}
              {rgItem('Plain HTML templates', 'Simple server-rendered views for any web-facing UI', '#b08870')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('BIM & Geometry', '#2080a0')}
              {rgItem('ifcopenshell', 'Parses IFC building model files — extracts rooms, walls, and doors from architect source files', '#2080a0')}
              {rgItem('Shapely', '2D geometry library for computing room layouts, wall boundaries, and navigation polygons', '#408090')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Math / Science', '#7060c0')}
              {rgItem('NumPy', 'Numerical operations for coordinate transformations and pathfinding calculations', '#7060c0')}
              {rgItem('SciPy', 'Scientific computing — graph traversal and spatial algorithms for route optimization', '#9070b8')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Data', '#208080')}
              {rgItem('JSON files', 'Stores parsed building and room data — rooms, connections, and coordinates', '#208080')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
