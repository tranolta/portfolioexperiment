/**
 * FunProjects — poster-grid of side projects, active and retired.
 *
 * Each tile is image-first (or a generated visual if no image is set).
 * Clicking any tile opens a modal with the full project details.
 *
 * To add a project: edit src/data/sideProjects.ts.
 * To add an image: set the `image` field to a URL.
 * To add detail copy: set the `description` field.
 */
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { SideProject } from '../../data/sideProjects'
import { activeSideProjects, retiredSideProjects } from '../../data/sideProjects'
import { useInView } from '../../hooks/useInView'

export default function FunProjects() {
  const { ref, inView } = useInView(0.05)
  const [selected, setSelected] = useState<SideProject | null>(null)

  return (
    <section id="side-projects" style={{ paddingTop: 'var(--pad-y)', paddingBottom: 'var(--pad-y)' }}>
      <div className="container" ref={ref}>
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          <span className="section-index">05</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-muted)' }}>
            Side Projects
          </span>
        </div>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <p className="text-display" style={{ maxWidth: '16ch', lineHeight: 0.95 }}>
            Fun &amp; retired
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--c-muted)',
              fontSize: '0.95rem',
              maxWidth: '40ch',
              lineHeight: 1.65,
            }}
          >
            Things I build for fun, experiments I run, and projects I've put to rest.
            Click any tile for more.
          </p>
        </div>

        {/* ── Active projects grid ── */}
        <p className="text-label" style={{ color: 'var(--c-signal)', marginBottom: '1rem' }}>
          Currently building
        </p>
        <PosterGrid
          projects={activeSideProjects}
          inView={inView}
          onSelect={setSelected}
          retired={false}
        />

        {/* ── Retired projects grid ── */}
        <div
          style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid var(--c-border)',
          }}
        >
          <p className="text-label" style={{ color: 'var(--c-muted)', marginBottom: '1rem' }}>
            Retired &amp; archived
          </p>
          <PosterGrid
            projects={retiredSideProjects}
            inView={inView}
            onSelect={setSelected}
            retired
          />
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}

// ── Poster grid ──────────────────────────────────────────────

function PosterGrid({
  projects,
  inView,
  onSelect,
  retired,
}: {
  projects: SideProject[]
  inView: boolean
  onSelect: (p: SideProject) => void
  retired: boolean
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(140px, 18vw, 200px), 1fr))',
        gap: 'clamp(0.75rem, 1.5vw, 1.25rem)',
      }}
    >
      {projects.map((project, i) => (
        <PosterTile
          key={project.id}
          project={project}
          inView={inView}
          delay={Math.min(i * 60, 400)}
          retired={retired}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

// ── Individual poster tile ────────────────────────────────────

function PosterTile({
  project,
  inView,
  delay,
  retired,
  onSelect,
}: {
  project: SideProject
  inView: boolean
  delay: number
  retired: boolean
  onSelect: (p: SideProject) => void
}) {
  const accent = project.accentColor || '#444'

  return (
    <button
      onClick={() => onSelect(project)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        textAlign: 'left',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.7s var(--ease-out) ${delay}ms, transform 0.7s var(--ease-out) ${delay}ms`,
      }}
    >
      {/* Visual poster area */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '3 / 4',
          overflow: 'hidden',
          background: retired ? '#1A1715' : accent,
          filter: retired ? 'saturate(0) brightness(0.7)' : 'none',
          transition: 'transform 0.4s var(--ease-out), filter 0.3s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'scale(0.97)'
          if (!retired) el.style.filter = `brightness(1.08)`
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.transform = 'scale(1)'
          el.style.filter = retired ? 'saturate(0) brightness(0.7)' : 'none'
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <GeneratedPoster project={project} retired={retired} />
        )}

        {/* Retired overlay badge */}
        {retired && (
          <div
            style={{
              position: 'absolute',
              top: '0.6rem',
              right: '0.6rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              background: 'rgba(0,0,0,0.4)',
              padding: '0.2rem 0.45rem',
            }}
          >
            Archived
          </div>
        )}

        {/* Active pulse dot */}
        {!retired && (
          <div
            style={{
              position: 'absolute',
              top: '0.65rem',
              left: '0.65rem',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#fff',
              opacity: 0.9,
              animation: 'pulse-dot 2s ease-in-out infinite',
            }}
          />
        )}

        {/* Hover: view prompt */}
        <div
          className="tile-cta"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            View more
          </span>
        </div>
      </div>

      {/* Title below the tile */}
      <div style={{ paddingRight: '0.25rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: retired ? 'var(--c-muted)' : 'var(--c-ink)',
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </p>
        <p
          className="text-mono"
          style={{ color: 'var(--c-muted)', fontSize: '0.62rem', marginTop: '0.15rem' }}
        >
          {project.year}
        </p>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.4); }
        }
      `}</style>
    </button>
  )
}

// ── Generated poster visual ───────────────────────────────────

function GeneratedPoster({ project, retired }: { project: SideProject; retired: boolean }) {
  const accent = project.accentColor || '#333'

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        background: retired ? '#1A1715' : accent,
      }}
    >
      {/* Giant letter fills the poster */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-0.15em',
          right: '-0.08em',
          fontFamily: 'var(--font-condensed)',
          fontSize: '7.5rem',
          lineHeight: 1,
          color: 'rgba(255,255,255,0.12)',
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        {project.title.slice(0, Math.min(project.title.length, 3))}
      </div>

      {/* Bottom text */}
      <div style={{ position: 'relative', padding: '0.75rem', zIndex: 1 }}>
        <p
          style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.2,
            textTransform: 'uppercase',
          }}
        >
          {project.tagline}
        </p>
      </div>
    </div>
  )
}

// ── Modal ─────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: SideProject; onClose: () => void }) {
  const accent = project.accentColor || 'var(--c-ink)'
  const retired = project.status === 'retired'
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  // Click outside to close
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(13, 12, 10, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--pad-x)',
        animation: 'fade-in 0.25s var(--ease-out)',
      }}
    >
      <div
        style={{
          background: 'var(--c-bg)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '85dvh',
          overflowY: 'auto',
          position: 'relative',
          animation: 'modal-in 0.4s var(--ease-out)',
        }}
      >
        {/* Visual header */}
        <div
          style={{
            aspectRatio: '16 / 7',
            background: retired ? '#1A1715' : accent,
            filter: retired ? 'saturate(0) brightness(0.7)' : 'none',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <GeneratedPoster project={project} retired={retired} />
          )}
        </div>

        {/* Content */}
        <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: retired ? 'var(--c-muted)' : accent,
                  background: retired ? 'var(--c-cream)' : `${accent}18`,
                  padding: '0.25rem 0.6rem',
                }}
              >
                {retired ? 'Archived' : 'Active'}
              </span>
              <span className="text-mono" style={{ color: 'var(--c-muted)' }}>
                {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: '1px solid var(--c-border)',
                padding: '0.35rem 0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                color: 'var(--c-muted)',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--c-ink)'
                e.currentTarget.style.color = 'var(--c-ink)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--c-border)'
                e.currentTarget.style.color = 'var(--c-muted)'
              }}
            >
              ESC / Close
            </button>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 0.95,
              color: 'var(--c-ink)',
              marginBottom: '0.75rem',
            }}
          >
            {project.title}
          </h2>

          {/* Tagline */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--c-muted)',
              lineHeight: 1.6,
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            }}
          >
            {project.tagline}
          </p>

          {/* Description — edit src/data/sideProjects.ts to fill this in */}
          {project.description ? (
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--c-ink)',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--c-border)',
              }}
            >
              {project.description}
            </p>
          ) : (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--c-border)',
                letterSpacing: '0.06em',
                marginBottom: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--c-border)',
              }}
            >
              — add a description field in src/data/sideProjects.ts —
            </p>
          )}

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.tags.map(tag => (
              <span key={tag} className="tag" style={{ color: 'var(--c-ink)' }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--c-bg)',
                background: retired ? 'var(--c-ink)' : accent,
                padding: '0.7rem 1.4rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              View project ↗
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>,
    document.body,
  )
}
