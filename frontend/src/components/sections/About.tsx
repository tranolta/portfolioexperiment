import { skillGroups } from '../../data/profile'

export default function About() {
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
          Capabilities
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-main)',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4vw, 48px)',
            letterSpacing: '-0.02em',
            color: 'var(--c-text)',
            marginBottom: 64,
            maxWidth: 600,
            lineHeight: 1.1,
          }}
        >
          Three things that describe me are business, technology, and design.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}
        >
          {skillGroups.map((group) => (
            <div
              key={group.category}
              style={{
                background: '#fff',
                border: '1px solid var(--c-border)',
                borderRadius: 4,
                padding: '32px 28px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-main)',
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: '-0.01em',
                  color: 'var(--c-text)',
                  marginBottom: 16,
                }}
              >
                {group.category}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    style={{
                      fontFamily: 'var(--font-main)',
                      fontWeight: 400,
                      fontSize: 15,
                      color: 'var(--c-text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
