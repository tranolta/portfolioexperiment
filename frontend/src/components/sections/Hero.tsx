import { profile } from '../../data/profile'

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0 80px',
        background: '#fff',
        borderBottom: '1px solid var(--c-border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 80,
        }}
      >
        {/* Left */}
        <div style={{ flex: '1 1 auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--c-text-muted)',
              marginBottom: 24,
            }}
          >
            Business Strategy · AI · Systems Thinking
          </p>

          <h1
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 800,
              fontSize: 'clamp(52px, 6vw, 80px)',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--c-text)',
              marginBottom: 32,
            }}
          >
            {profile.nameFirst}
            <br />
            {profile.nameLast}.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.65,
              color: 'var(--c-text-muted)',
              maxWidth: 500,
              marginBottom: 40,
            }}
          >
            {profile.positioning}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#work"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-main)',
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '0.04em',
                padding: '14px 28px',
                background: 'var(--c-text)',
                color: '#fff',
                borderRadius: 2,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View Work
            </a>
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-main)',
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '0.04em',
                padding: '14px 28px',
                background: 'transparent',
                color: 'var(--c-text)',
                border: '1.5px solid var(--c-text)',
                borderRadius: 2,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div
          style={{
            flexShrink: 0,
            width: 'clamp(260px, 30vw, 400px)',
          }}
        >
          <div
            style={{
              borderRadius: 4,
              overflow: 'hidden',
              background: 'var(--c-surface)',
              aspectRatio: '4/5',
            }}
          >
            <img
              src={profile.photo}
              alt={profile.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                mixBlendMode: 'multiply',
              }}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <p style={{ fontFamily: 'var(--font-main)', fontWeight: 600, fontSize: 14, color: 'var(--c-text)' }}>
              {profile.name}
            </p>
            <p style={{ fontFamily: 'var(--font-main)', fontWeight: 400, fontSize: 14, color: 'var(--c-text-muted)' }}>
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
