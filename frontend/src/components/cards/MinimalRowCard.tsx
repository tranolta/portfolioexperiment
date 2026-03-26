/**
 * MinimalRowCard — always-visible project row.
 * Key info (title, role, year, summary, tags) is readable at a glance.
 * No hiding behind hover — recruiters shouldn't need to interact to understand.
 */
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

export default function MinimalRowCard({ project, index }: Props) {
  const accent = project.accentColor || 'var(--c-signal)'

  return (
    <a
      href={project.link || '#'}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      style={{
        display: 'grid',
        gridTemplateColumns: '3rem 1fr',
        gap: '0 clamp(1rem, 2.5vw, 2rem)',
        padding: 'clamp(1.5rem, 2.5vw, 2rem) 0',
        borderBottom: '1px solid var(--c-border)',
        textDecoration: 'none',
        color: 'var(--c-ink)',
        position: 'relative',
        transition: 'background 0.25s ease, padding-left 0.25s ease, padding-right 0.25s ease',
        cursor: project.link ? 'pointer' : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--c-cream)'
        e.currentTarget.style.paddingLeft = 'var(--pad-x)'
        e.currentTarget.style.paddingRight = 'var(--pad-x)'
        e.currentTarget.style.marginLeft = 'calc(-1 * var(--pad-x))'
        e.currentTarget.style.marginRight = 'calc(-1 * var(--pad-x))'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.paddingLeft = '0'
        e.currentTarget.style.paddingRight = '0'
        e.currentTarget.style.marginLeft = '0'
        e.currentTarget.style.marginRight = '0'
      }}
    >
      {/* Accent bar */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '3px',
          background: accent,
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.25s var(--ease-out)',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scaleX(1)')}
      />

      {/* Index */}
      <span
        className="section-index"
        style={{ color: accent, paddingTop: '0.2rem', gridRow: '1 / 3' }}
      >
        0{index + 1}
      </span>

      {/* Content: all always visible */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {/* Title row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1,
              color: 'var(--c-ink)',
            }}
          >
            {project.title}
          </h3>

          {/* Role badge */}
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: accent,
              opacity: 0.8,
            }}
          >
            {project.role}
          </span>

          <span className="text-mono" style={{ color: 'var(--c-muted)', marginLeft: 'auto' }}>
            {project.year}
          </span>
        </div>

        {/* Tagline — always readable */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            color: 'var(--c-muted)',
            lineHeight: 1.6,
            maxWidth: '70ch',
          }}
        >
          {project.tagline}
        </p>

        {/* Tags — skills at a glance */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.25rem' }}>
          {project.tags.map(tag => (
            <span key={tag} className="tag" style={{ color: 'var(--c-ink)' }}>
              {tag}
            </span>
          ))}
          {project.link && (
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: accent,
                marginLeft: 'auto',
              }}
            >
              View →
            </span>
          )}
        </div>
      </div>
    </a>
  )
}
