export default function CampusVisionTechStack() {
  const font = 'Epilogue, sans-serif'
  const mono = 'Epilogue, sans-serif'

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
        <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.8, marginBottom: 2, fontFamily: mono }}>{label}</div>
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
          Campus Vision
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 32, alignItems: 'start' }}>
          {/* LEFT: Diamond Stack */}
          <div>
            {sectionLabel('Language & Framework', '#e85030')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 240, 120, 'Language', 'Python · TypeScript', -38, 0.97)}
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 195, 98, 'Backend', 'Flask', -30, 0.82)}
              {diamond('linear-gradient(135deg,#e85030,#c04020)', 155, 78, 'Frontend', 'React + HTML', 8, 0.67, 0.85)}
            </div>

            {sectionLabel('AI / ML', '#c040a0')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#c040a0,#902080)', 230, 115, 'Primary AI', 'Gemini 2.5 Pro', -36, 0.97)}
              {diamond('linear-gradient(135deg,#c040a0,#902080)', 188, 94, 'Detection', 'YOLOv8', -30, 0.82, 0.9)}
              {diamond('linear-gradient(135deg,#c040a0,#902080)', 150, 75, '360° CNN', 'BlitzNet', 8, 0.67, 0.8)}
            </div>

            {sectionLabel('Vision & Deep Learning', '#7060c0')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#7060c0,#5040a0)', 210, 105, 'Computer Vision', 'OpenCV · Pillow', -33, 0.95)}
              {diamond('linear-gradient(135deg,#7060c0,#5040a0)', 165, 82, 'Deep Learning', 'PyTorch · TF', 8, 0.75, 0.85)}
            </div>

            {sectionLabel('Data', '#208080')}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {diamond('linear-gradient(135deg,#208080,#106060)', 200, 100, 'Storage', 'CSV · JSON', 4, 1)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
              <div style={{ width: 1, height: 24, background: '#bbb' }} />
            </div>

            <div style={{ borderTop: '1.5px solid #111', paddingTop: 12 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 12 }}>
                <div style={{ fontFamily: font, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', minWidth: 76, paddingTop: 1, color: '#333' }}>Infra</div>
                <div style={{ fontSize: 10, color: '#555', lineHeight: 1.5, fontFamily: font }}>Docker — containerised deployment</div>
              </div>
              <div style={{ borderTop: '0.5px solid #ccc', paddingTop: 10 }}>
                <div style={{ fontFamily: font, fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#333', marginBottom: 4 }}>Cloud</div>
                <div style={{ fontSize: 10, color: '#555', fontFamily: font }}>Google Cloud Run / Heroku</div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Language & Framework', '#e85030')}
              {rgItem('Python', 'Primary backend language — ML, vision, and API logic', '#e85030')}
              {rgItem('TypeScript', 'Typed frontend development with React', '#d06040')}
              {rgItem('Flask', 'Lightweight Python backend serving REST endpoints', '#c07050')}
              {rgItem('React (TypeScript) + HTML templates', 'Interactive UI components alongside plain HTML views', '#b08870')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('AI / ML', '#c040a0')}
              {rgItem('Google Gemini 2.5 Pro Vision', 'Primary model — analyses room images for furniture, layout, and style', '#c040a0')}
              {rgItem('YOLOv8', 'Object detection to validate and cross-check Gemini results', '#a04090')}
              {rgItem('Panoramic-BlitzNet CNN', 'Specialised 360° model for panoramic room imagery', '#804080')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Vision & Deep Learning', '#7060c0')}
              {rgItem('OpenCV', 'Image processing, transformations, and pre-processing pipeline', '#7060c0')}
              {rgItem('Pillow', 'Image loading, resizing, and format conversion', '#9070b8')}
              {rgItem('PyTorch', 'Deep learning framework for YOLO and custom models', '#a080b0')}
              {rgItem('TensorFlow', 'Supporting ML framework for panoramic CNN', '#b090a8')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Data', '#208080')}
              {rgItem('CSV files', 'Room metadata — listings, dimensions, and attributes', '#208080')}
              {rgItem('JSON cache', 'Cached image analysis results to avoid redundant API calls', '#409090')}
            </div>
            <div style={{ marginBottom: 20 }}>
              {rgTitle('Infrastructure')}
              {rgItem('Docker', 'Containerised environment for consistent builds and deploys', '#333')}
              {rgItem('Google Cloud Run', 'Serverless container hosting — scales to zero', '#555')}
              {rgItem('Heroku', 'Alternative PaaS deployment target', '#777')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
