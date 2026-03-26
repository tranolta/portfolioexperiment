/**
 * HeroFullCard — full-width editorial card.
 * Information flows top-to-bottom in natural reading order:
 * role + year → title → summary → tags
 */
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

export default function HeroFullCard({ project, index }: Props) {
  const textColor =
    project.theme === 'dark' || project.theme === 'signal'
      ? 'var(--c-dark-text)'
      : 'var(--c-ink)'

  const accentColor = project.accentColor || 'var(--c-signal)'

  return (
    <a
      href={project.link || '#'}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(1.5rem, 2.5vw, 2rem)',
        background: project.theme === 'dark' ? 'var(--c-dark)' : 'var(--c-dark-surface)',
        color: textColor,
        padding: 'clamp(2rem, 4vw, 3.5rem)',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'background 0.3s ease',
        cursor: project.link ? 'pointer' : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.querySelector<HTMLElement>('.card-arrow')!.style.opacity = '1'
        e.currentTarget.querySelector<HTMLElement>('.card-arrow')!.style.transform = 'translateX(0)'
      }}
      onMouseLeave={e => {
        e.currentTarget.querySelector<HTMLElement>('.card-arrow')!.style.opacity = '0'
        e.currentTarget.querySelector<HTMLElement>('.card-arrow')!.style.transform = 'translateX(-12px)'
      }}
    >
      {/* Row 1: Role badge + year — who did what, when */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: accentColor,
              background: `${accentColor}22`,
              padding: '0.3rem 0.75rem',
              borderRadius: '2px',
            }}
          >
            {project.role}
          </span>
          <span className="section-index" style={{ color: textColor, opacity: 0.4 }}>
            0{index + 1}
          </span>
        </div>
        <span className="text-mono" style={{ color: textColor, opacity: 0.4 }}>
          {project.year}
        </span>
      </div>

      {/* Row 2: Title — the identity of the project */}
      <div style={{ position: 'relative', paddingLeft: '1.25rem', borderLeft: `3px solid ${accentColor}` }}>
        <h2
          className="text-card-title"
          style={{
            color: textColor,
            lineHeight: 0.9,
          }}
        >
          {project.title}
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
            color: textColor,
            opacity: 0.7,
            marginTop: '0.75rem',
            lineHeight: 1.5,
            fontStyle: 'italic',
          }}
        >
          {project.tagline}
        </p>
      </div>

      {/* Row 3: Summary — what was accomplished */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 1vw, 1rem)',
          color: textColor,
          opacity: 0.6,
          maxWidth: '60ch',
          lineHeight: 1.7,
        }}
      >
        {project.summary}
      </p>

      {/* Row 4: Tags + arrow — skills used */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              className="tag"
              style={{ color: textColor, borderColor: `${textColor}30` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="card-arrow"
          style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '2.5rem',
            lineHeight: 1,
            color: accentColor,
            opacity: 0,
            transform: 'translateX(-12px)',
            transition: 'opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out)',
            flexShrink: 0,
          }}
        >
          →
        </div>
      </div>

      {/* Ghost title in background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-0.05em',
          bottom: '-0.2em',
          fontFamily: 'var(--font-condensed)',
          fontSize: 'clamp(6rem, 18vw, 20rem)',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.025)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        {project.title}
      </div>
    </a>
  )
}
