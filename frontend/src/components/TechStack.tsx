type TechRow = {
  category: string
  tools: string[]
  note?: string
}

type TechStackProps = {
  rows: TechRow[]
}

const categoryColors: Record<string, string> = {
  Language:          '#E8F4FD',
  Backend:           '#FFF3E8',
  Frontend:          '#EDFAF3',
  'Primary AI':      '#F9E6F0',
  'Object Detection':'#FFF9E6',
  'Panoramic ML':    '#F0EDFB',
  'Computer Vision': '#E6F9FA',
  'Deep Learning':   '#FAF0ED',
  Data:              '#F0F4E8',
  Infrastructure:    '#F4F4F4',
}

export default function TechStack({ rows }: TechStackProps) {
  return (
    <div style={{ fontFamily: 'Epilogue, sans-serif', width: '100%' }}>
      <p style={{
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(45,45,45,0.35)',
        marginBottom: 16,
      }}>
        Tech Stack
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {rows.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr',
              gap: 0,
              borderTop: '1px solid rgba(45,45,45,0.08)',
              borderBottom: i === rows.length - 1 ? '1px solid rgba(45,45,45,0.08)' : 'none',
              padding: '10px 0',
              alignItems: 'start',
            }}
          >
            {/* Category */}
            <div style={{ paddingRight: 12 }}>
              <span style={{
                display: 'inline-block',
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(45,45,45,0.55)',
                background: categoryColors[row.category] || '#F4F4F4',
                padding: '3px 8px',
              }}>
                {row.category}
              </span>
            </div>

            {/* Tools */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
              {row.tools.map((tool, j) => (
                <span key={j} style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#2D2D2D',
                  background: 'rgba(45,45,45,0.05)',
                  border: '1px solid rgba(45,45,45,0.1)',
                  padding: '3px 10px',
                }}>
                  {tool}
                </span>
              ))}
              {row.note && (
                <span style={{
                  fontSize: 11,
                  color: 'rgba(45,45,45,0.4)',
                  fontStyle: 'italic',
                  marginLeft: 4,
                }}>
                  — {row.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
