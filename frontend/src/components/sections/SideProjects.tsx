import { activeSideProjects, retiredSideProjects } from '../../data/sideProjects'

export default function SideProjects() {
  return (
    <section
      style={{
        padding: '96px 0',
        background: 'var(--c-surface)',
        borderBottom: '1px solid var(--c-border)',
      }}
    >
      <div className="container">
        <p
          style={{
            fontFamily: 'var(--font-main)',
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--c-text-muted)',
            marginBottom: 16,
          }}
        >
          Side projects & experiments
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-main)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 48px)',
            letterSpacing: '-0.02em',
            color: 'var(--c-text)',
            marginBottom: 56,
            lineHeight: 1.1,
          }}
        >
          Things I build and explore on the side
        </h2>

        {/* Active */}
        <div style={{ marginBottom: 48 }}>
          <p style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-muted)', marginBottom: 20 }}>
            Active
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {activeSideProjects.map((p) => (
              <div
                key={p.id}
                style={{
                  background: '#fff',
                  border: '1px solid var(--c-border)',
                  borderRadius: 4,
                  padding: '28px 24px',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'none'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 14, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--c-text)' }}>
                    {p.title}
                  </span>
                  <span style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 13, color: 'var(--c-text-muted)' }}>
                    {p.year}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: 'var(--c-text-muted)', marginBottom: 16 }}>
                  {p.tagline}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: 'var(--font-main)', fontWeight: 500, fontSize: 11, letterSpacing: '0.06em', padding: '3px 8px', background: 'var(--c-surface)', color: 'var(--c-text-muted)', borderRadius: 2, border: '1px solid var(--c-border)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Retired */}
        <div>
          <p style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-text-muted)', marginBottom: 20 }}>
            Retired
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {retiredSideProjects.map((p) => (
              <div
                key={p.id}
                style={{
                  background: '#fff',
                  border: '1px solid var(--c-border)',
                  borderRadius: 4,
                  padding: '18px 20px',
                  minWidth: 180,
                }}
              >
                <p style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--c-text)', marginBottom: 4 }}>
                  {p.title}
                </p>
                <p style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 13, color: 'var(--c-text-muted)', lineHeight: 1.5 }}>
                  {p.tagline}
                </p>
                <p style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 12, color: 'var(--c-text-muted)', marginTop: 8 }}>
                  {p.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
