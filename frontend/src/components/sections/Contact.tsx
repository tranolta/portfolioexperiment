import { profile } from '../../data/profile'
import { useInView } from '../../hooks/useInView'

export default function Contact() {
  const { ref, inView } = useInView(0.08)

  return (
    <section
      id="contact"
      className="section-dark"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="container">
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: 'clamp(4rem, 8vw, 8rem)',
          }}
        >
          <span className="section-index" style={{ color: 'var(--c-dark-muted)' }}>
            06
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-dark-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-dark-muted)' }}>
            Let's work
          </span>
        </div>

        {/* Main CTA */}
        <div ref={ref} className={`reveal ${inView ? 'in-view' : ''}`}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            }}
          >
            {/* Headline */}
            <div>
              <p
                className="text-hero"
                style={{
                  color: 'var(--c-dark-text)',
                  display: 'block',
                  lineHeight: 0.88,
                }}
              >
                Got a
              </p>
              <p
                className="text-hero text-outline"
                style={{
                  color: 'var(--c-dark-text)',
                  display: 'block',
                  lineHeight: 0.88,
                  marginTop: '-0.05em',
                }}
              >
                project?
              </p>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
                color: 'var(--c-dark-muted)',
                maxWidth: '46ch',
                lineHeight: 1.65,
              }}
            >
              I take on a small number of projects each year — enough to stay focused and do work I'm genuinely proud of. If you have something ambitious in mind, let's talk.
            </p>

            {/* Email button */}
            <div style={{ paddingTop: '1rem' }}>
              <a
                href={`mailto:${profile.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                  color: 'var(--c-dark-text)',
                  borderBottom: '1px solid var(--c-dark-border)',
                  paddingBottom: '0.5rem',
                  transition: 'color 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--c-dark-accent)'
                  e.currentTarget.style.borderColor = 'var(--c-dark-accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--c-dark-text)'
                  e.currentTarget.style.borderColor = 'var(--c-dark-border)'
                }}
              >
                {profile.email}
                <span style={{ fontSize: '1.5em', lineHeight: 1 }}>↗</span>
              </a>
            </div>

            {/* Social links */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                paddingTop: '3rem',
                borderTop: '1px solid var(--c-dark-border)',
                flexWrap: 'wrap',
              }}
            >
              {profile.social.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 600,
                    fontSize: '0.72rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--c-dark-muted)',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-dark-text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--c-dark-muted)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            marginTop: 'clamp(4rem, 8vw, 8rem)',
            paddingTop: '2rem',
            borderTop: '1px solid var(--c-dark-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span className="text-mono" style={{ color: 'var(--c-dark-muted)' }}>
            {profile.name} — {new Date().getFullYear()}
          </span>
          <span className="text-mono" style={{ color: 'var(--c-dark-muted)' }}>
            {profile.location}
          </span>
        </div>
      </div>

      {/* Decorative background type */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-0.05em',
          bottom: '-0.15em',
          fontFamily: 'var(--font-condensed)',
          fontSize: 'clamp(10rem, 28vw, 30rem)',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.025)',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        HI
      </div>
    </section>
  )
}
