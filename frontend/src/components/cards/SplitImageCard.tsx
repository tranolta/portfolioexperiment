/**
 * SplitImageCard — two-panel editorial card.
 * Left: visual panel (image or generative gradient pattern).
 * Right: editorial text with large title.
 */
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

export default function SplitImageCard({ project, index }: Props) {
  const accent = project.accentColor || 'var(--c-signal)'

  return (
    <a
      href={project.link || '#'}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        textDecoration: 'none',
        color: 'var(--c-ink)',
        overflow: 'hidden',
        border: '1px solid var(--c-border)',
        transition: 'border-color 0.3s ease',
        cursor: project.link ? 'pointer' : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent
        e.currentTarget.querySelector<HTMLElement>('.split-visual')!.style.transform = 'scale(1.03)'
        e.currentTarget.querySelector<HTMLElement>('.split-title')!.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--c-border)'
        e.currentTarget.querySelector<HTMLElement>('.split-visual')!.style.transform = 'scale(1)'
        e.currentTarget.querySelector<HTMLElement>('.split-title')!.style.transform = 'translateY(0)'
      }}
    >
      {/* Left: visual panel */}
      <div
        style={{
          overflow: 'hidden',
          position: 'relative',
          minHeight: 'clamp(320px, 38vw, 500px)',
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ) : (
          /* Generative pattern when no image is provided */
          <GenerativeVisual project={project} />
        )}
      </div>

      {/* Right: editorial text */}
      <div
        style={{
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'var(--c-cream)',
        }}
      >
        {/* Top meta */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'auto',
          }}
        >
          <div>
            <span className="section-index" style={{ display: 'block', marginBottom: '0.35rem' }}>
              0{index + 1}
            </span>
            <span className="text-label" style={{ color: 'var(--c-muted)' }}>
              {project.role}
            </span>
          </div>
          <span className="text-mono" style={{ color: 'var(--c-muted)' }}>
            {project.year}
          </span>
        </div>

        {/* Title — the editorial moment */}
        <div style={{ padding: 'clamp(2rem, 4vw, 3rem) 0' }}>
          <h2
            className="split-title text-card-title"
            style={{
              color: 'var(--c-ink)',
              transition: 'transform 0.5s var(--ease-out)',
              willChange: 'transform',
            }}
          >
            {project.title}
          </h2>
        </div>

        {/* Bottom: tagline + tags */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.88rem, 1vw, 1rem)',
              color: 'var(--c-muted)',
              lineHeight: 1.65,
            }}
          >
            {project.tagline}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="tag" style={{ color: 'var(--c-ink)' }}>
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: accent,
                }}
              >
                View →
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  )
}

/** Generates a visually distinct pattern from the project's accent color */
function GenerativeVisual({ project }: { project: Project }) {
  const accent = project.accentColor || '#2B5BE8'
  const darkAccent = accent

  return (
    <div
      className="split-visual"
      style={{
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${darkAccent}22 0%, ${darkAccent}08 50%, var(--c-dark) 100%)`,
        backgroundColor: 'var(--c-dark)',
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.7s var(--ease-out)',
        willChange: 'transform',
        overflow: 'hidden',
      }}
    >
      {/* Large decorative letterform */}
      <div
        aria-hidden
        style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: 'clamp(10rem, 22vw, 26rem)',
          fontWeight: 900,
          lineHeight: 1,
          color: `${darkAccent}30`,
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        {project.title[0]}
      </div>

      {/* Accent color band */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: accent,
        }}
      />
    </div>
  )
}
