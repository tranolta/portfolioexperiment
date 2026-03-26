import { skillGroups } from '../../data/profile'
import { useInView } from '../../hooks/useInView'

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section
      style={{
        background: 'var(--c-cream)',
        padding: 'var(--pad-y) 0',
        borderTop: '1px solid var(--c-border)',
        borderBottom: '1px solid var(--c-border)',
      }}
    >
      <div className="container">
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          <span className="section-index">05</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-muted)' }}>Capabilities</span>
        </div>

        {/* Big statement */}
        <div
          style={{
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            className="text-display"
            style={{
              color: 'var(--c-ink)',
              maxWidth: '14ch',
              lineHeight: 0.95,
            }}
          >
            Tools of the trade
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--c-muted)',
              fontSize: '0.95rem',
              maxWidth: '36ch',
              lineHeight: 1.65,
            }}
          >
            A cross-disciplinary practice spanning design, engineering, and strategy — built up over eight years of shipping real products.
          </p>
        </div>

        {/* Skill grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1px',
            background: 'var(--c-border)',
          }}
        >
          {skillGroups.map((group, i) => {
            const delay = i === 0 ? 'd1' : i === 1 ? 'd2' : i === 2 ? 'd3' : 'd4'
            return (
              <div
                key={group.category}
                className={`reveal ${delay} ${inView ? 'in-view' : ''}`}
                style={{
                  background: 'var(--c-cream)',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                }}
              >
                {/* Category header with large ordinal */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid var(--c-border)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 800,
                      fontSize: '0.78rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--c-ink)',
                    }}
                  >
                    {group.category}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-condensed)',
                      fontSize: '3rem',
                      lineHeight: 0.8,
                      color: 'var(--c-border)',
                      userSelect: 'none',
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Skill pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="tag"
                      style={{ color: 'var(--c-ink)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
