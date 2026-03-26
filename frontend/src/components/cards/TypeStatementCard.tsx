/**
 * TypeStatementCard — pure typography card.
 * No image needed: the project title and color treatment ARE the visual.
 * Used for work that speaks for itself conceptually.
 */
import type { Project } from '../../types'

interface Props {
  project: Project
  index: number
}

export default function TypeStatementCard({ project, index }: Props) {
  const accent = project.accentColor || 'var(--c-signal)'

  // Theme backgrounds
  const themeBg: Record<string, string> = {
    default: 'var(--c-cream)',
    dark:    'var(--c-dark)',
    signal:  'var(--c-bg)',
    tone:    'var(--c-bg)',
  }

  const themeText: Record<string, string> = {
    default: 'var(--c-ink)',
    dark:    'var(--c-dark-text)',
    signal:  'var(--c-ink)',
    tone:    'var(--c-ink)',
  }

  const bg   = themeBg[project.theme]  || themeBg.default
  const text = themeText[project.theme] || themeText.default

  return (
    <a
      href={project.link || '#'}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      style={{
        display: 'block',
        background: bg,
        color: text,
        border: `1px solid ${project.theme === 'dark' ? 'var(--c-dark-border)' : 'var(--c-border)'}`,
        padding: 'clamp(2rem, 4vw, 3.5rem)',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'border-color 0.3s ease',
        cursor: project.link ? 'pointer' : 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accent
        e.currentTarget.querySelector<HTMLElement>('.ts-title')!.style.transform = 'translateX(8px)'
        e.currentTarget.querySelector<HTMLElement>('.ts-bar')!.style.width = '100%'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor =
          project.theme === 'dark' ? 'var(--c-dark-border)' : 'var(--c-border)'
        e.currentTarget.querySelector<HTMLElement>('.ts-title')!.style.transform = 'translateX(0)'
        e.currentTarget.querySelector<HTMLElement>('.ts-bar')!.style.width = '3rem'
      }}
    >
      {/* Top row: index, tags, year */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="section-index" style={{ color: accent }}>
            0{index + 1}
          </span>
          {project.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="tag"
              style={{ color: text, borderColor: `${text}40` }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.2rem',
          }}
        >
          <span className="text-mono" style={{ color: text, opacity: 0.45 }}>
            {project.year}
          </span>
          <span className="text-label" style={{ color: text, opacity: 0.45 }}>
            {project.role}
          </span>
        </div>
      </div>

      {/* Accent bar — animates on hover */}
      <div
        className="ts-bar"
        style={{
          width: '3rem',
          height: '3px',
          background: accent,
          marginBottom: '1.5rem',
          transition: 'width 0.5s var(--ease-out)',
          transformOrigin: 'left',
        }}
      />

      {/* Title — the focal point */}
      <h3
        className="ts-title text-card-title"
        style={{
          color: text,
          marginBottom: '1.25rem',
          transition: 'transform 0.4s var(--ease-out)',
          willChange: 'transform',
        }}
      >
        {project.title}
      </h3>

      {/* Tagline */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
          color: text,
          opacity: 0.6,
          maxWidth: '50ch',
          lineHeight: 1.65,
        }}
      >
        {project.tagline}
      </p>

      {/* Ghost title in background */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-0.05em',
          bottom: '-0.2em',
          fontFamily: 'var(--font-condensed)',
          fontSize: 'clamp(5rem, 14vw, 16rem)',
          lineHeight: 1,
          color: `${accent}12`,
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
