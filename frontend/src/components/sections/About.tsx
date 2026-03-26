import { profile } from '../../data/profile'
import { useInView } from '../../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="section" style={{ paddingTop: 'var(--pad-y)', paddingBottom: 'var(--pad-y)' }}>
      <div className="container">
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <span className="section-index">02</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-muted)' }}>About</span>
        </div>

        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          {/* Statement — the memorable one-liner */}
          <p
            className="text-statement"
            style={{
              color: 'var(--c-ink)',
              maxWidth: '28ch',
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            "{profile.positioning}"
          </p>

          {/* Bio — readable paragraph */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
              color: 'var(--c-muted)',
              lineHeight: 1.75,
              maxWidth: '60ch',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            {profile.bio}
          </p>

          {/* Fast facts — scannable at a glance */}
          <div
            style={{
              display: 'flex',
              gap: '1px',
              background: 'var(--c-border)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'Location',     value: profile.location },
              { label: 'Experience',   value: '8 years' },
              { label: 'Focus',        value: 'Design + Engineering' },
              { label: 'Status',       value: profile.availability },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  background: 'var(--c-bg)',
                  padding: '1.25rem 1.75rem',
                  flex: '1 1 180px',
                }}
              >
                <p className="text-mono" style={{ color: 'var(--c-muted)', marginBottom: '0.3rem' }}>
                  {label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    color: 'var(--c-ink)',
                  }}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {profile.social.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link"
                style={{
                  color: 'var(--c-ink)',
                  opacity: 0.5,
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
