import { profile } from '../../data/profile'
import { skillGroups } from '../../data/profile'

// Quick-scan capabilities shown in the hero — edit to match your actual skills
const heroCapabilities = [
  skillGroups[0].skills.slice(0, 3),  // first 3 design skills
  skillGroups[1].skills.slice(0, 3),  // first 3 engineering skills
].flat()

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        padding: `0 var(--pad-x)`,
        paddingTop: '7rem',
        paddingBottom: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Top: availability badge ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          animation: 'fade-up 0.8s var(--ease-out) 0.3s both',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--c-signal)',
            flexShrink: 0,
          }}
        />
        <span className="text-mono" style={{ color: 'var(--c-muted)' }}>
          {profile.availability}
        </span>
      </div>

      {/* ── Giant name ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
        <div
          className="text-hero"
          style={{
            color: 'var(--c-ink)',
            display: 'block',
            animation: 'hero-in 1.4s var(--ease-out) 0.1s both',
            userSelect: 'none',
          }}
        >
          {profile.nameFirst}
        </div>
        <div
          className="text-hero text-outline"
          style={{
            color: 'var(--c-ink)',
            display: 'block',
            marginTop: '-0.06em',
            animation: 'hero-in 1.4s var(--ease-out) 0.22s both',
            userSelect: 'none',
          }}
        >
          {profile.nameLast}
        </div>
      </div>

      {/* ── What I do — immediately readable ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem clamp(3rem, 8vw, 8rem)',
          paddingTop: '2rem',
          borderTop: '1px solid var(--c-border)',
          animation: 'fade-up 0.9s var(--ease-out) 0.8s both',
        }}
      >
        {/* Left: role + positioning */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p
            className="text-label"
            style={{ color: 'var(--c-signal)', letterSpacing: '0.18em' }}
          >
            {profile.title}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: 'var(--c-ink)',
              lineHeight: 1.6,
            }}
          >
            {profile.positioning}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <a
              href="#work"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--c-bg)',
                background: 'var(--c-vivid)',
                padding: '0.65rem 1.4rem',
                textDecoration: 'none',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--c-ink)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--c-vivid)')}
            >
              See my work ↓
            </a>
            <a
              href={`mailto:${profile.email}`}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--c-ink)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                opacity: 0.6,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Right: what I bring to the table — quick scan */}
        <div>
          <p className="text-label" style={{ color: 'var(--c-muted)', marginBottom: '0.75rem' }}>
            What I do
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {heroCapabilities.map(cap => (
              <span
                key={cap}
                className="tag"
                style={{ color: 'var(--c-ink)' }}
              >
                {cap}
              </span>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--c-border)',
            }}
          >
            <Stat value="8" label="Years exp." />
            <Stat value="12M+" label="Users reached" />
            <Stat value="3" label="Global cos." />
          </div>
        </div>
      </div>

      {/* Decorative background numeral */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: 'var(--pad-x)',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: 'var(--font-condensed)',
          fontSize: 'clamp(8rem, 20vw, 22rem)',
          color: 'var(--c-border)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          animation: 'fade-in 1.5s var(--ease-out) 0.5s both',
          zIndex: 0,
        }}
      >
        01
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: '1.6rem',
          lineHeight: 1,
          color: 'var(--c-ink)',
        }}
      >
        {value}
      </span>
      <span className="text-mono" style={{ color: 'var(--c-muted)', fontSize: '0.65rem' }}>
        {label}
      </span>
    </div>
  )
}
