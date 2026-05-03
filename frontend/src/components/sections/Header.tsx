import { profile } from '../../data/profile'

const processSteps = ['Research', 'Define', 'Ideate', 'Prototype', 'Test', 'Build']

const currentlyAt = [
  'Smart Campus @ Chalmers',
  'Master Thesis @ Autoliv',
  'Business Development @ Talkamatic',
]

export default function Header() {
  const linkedinUrl = profile.social.find(s => s.label === 'LinkedIn')?.url ?? '#'

  return (
    <header
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#F9F8F5',
        fontFamily: 'Epilogue, sans-serif',
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 56px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: '0.04em',
            color: '#1A1918',
          }}
        >
          John Tran
        </span>

        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {[
            { label: 'About',   href: '#about-me' },
            { label: 'Work',    href: '#work' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: '#1A1918',
                textDecoration: 'none',
                opacity: 0.5,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
            >
              {label}
            </a>
          ))}

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: '#1A1918',
              textDecoration: 'none',
              padding: '8px 20px',
              border: '1.5px solid rgba(26,25,24,0.2)',
              letterSpacing: '0.04em',
              transition: 'border-color 0.2s, opacity 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#1A1918'
              e.currentTarget.style.opacity = '0.7'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(26,25,24,0.2)'
              e.currentTarget.style.opacity = '1'
            }}
          >
            LinkedIn ↗
          </a>
        </div>
      </nav>

      {/* Hero body */}
      <div
        className="hero-body"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '60px 56px 80px',
          maxWidth: 1280,
          margin: '0 auto',
          width: '100%',
          gap: 80,
        }}
      >
        {/* Left: Text */}
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          {/* Availability badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              marginBottom: 44,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#4E9E6B',
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: 12,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#888078',
              }}
            >
              Business Design · Gothenburg, Sweden
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontWeight: 800,
              fontSize: 'clamp(54px, 7vw, 96px)',
              lineHeight: 0.93,
              letterSpacing: '-0.04em',
              color: '#1A1918',
              marginBottom: 40,
            }}
          >
            Business
            <br />
            Designer &amp;
            <br />
            Builder.
          </h1>

          {/* Description */}
          <p
            style={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: 1.75,
              color: '#888078',
              maxWidth: 520,
              marginBottom: 28,
            }}
          >
            {profile.positioning}
          </p>

          {/* Design process strip */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 0,
              marginBottom: 52,
            }}
          >
            {processSteps.map((step, i) => (
              <span key={step} style={{ display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#888078',
                  }}
                >
                  {step}
                </span>
                {i < processSteps.length - 1 && (
                  <span
                    style={{
                      fontSize: 10,
                      color: 'rgba(136,128,120,0.35)',
                      margin: '0 10px',
                    }}
                  >
                    →
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#work"
              style={{
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '0.02em',
                padding: '16px 36px',
                background: '#1A1918',
                color: '#F9F8F5',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View Work
            </a>
            <a
              href={`mailto:${profile.email}`}
              style={{
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '0.02em',
                padding: '16px 36px',
                background: 'transparent',
                color: '#1A1918',
                border: '1.5px solid #1A1918',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div
          className="hero-photo"
          style={{
            flexShrink: 0,
            width: 'clamp(240px, 28vw, 380px)',
            paddingRight: 24,
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Offset color block — the design detail that says "designed" */}
            <div
              style={{
                position: 'absolute',
                top: 18,
                right: -18,
                width: '100%',
                height: '100%',
                background: '#D6CCC6',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden',
                aspectRatio: '4/5',
                background: '#EDE6E0',
              }}
            >
              <img
                src={profile.photo}
                alt={profile.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          <div style={{ marginTop: 24, paddingLeft: 2 }}>
            <p
              style={{
                fontWeight: 700,
                fontSize: 15,
                color: '#1A1918',
                marginBottom: 4,
              }}
            >
              {profile.name}
            </p>
            <p
              style={{
                fontWeight: 400,
                fontSize: 13,
                color: '#888078',
                lineHeight: 1.6,
              }}
            >
              MSc Entrepreneurship &amp; Business Design
              <br />
              Chalmers University of Technology
            </p>
          </div>
        </div>
      </div>

      {/* Bottom "currently" strip */}
      <div
        style={{
          padding: '18px 56px',
          borderTop: '1px solid rgba(26,25,24,0.08)',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#888078',
            flexShrink: 0,
          }}
        >
          Currently
        </span>
        <div
          style={{
            width: 1,
            height: 12,
            background: 'rgba(26,25,24,0.12)',
            flexShrink: 0,
          }}
        />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          {currentlyAt.map((item, i) => (
            <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                style={{
                  fontSize: 13,
                  color: '#1A1918',
                  opacity: 0.5,
                }}
              >
                {item}
              </span>
              {i < currentlyAt.length - 1 && (
                <span style={{ color: 'rgba(26,25,24,0.2)', fontSize: 12 }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}
