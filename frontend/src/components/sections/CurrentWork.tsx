import { featuredProjects } from '../../data/projects'
import { useInView } from '../../hooks/useInView'
import ProjectCard from '../cards/ProjectCard'

export default function CurrentWork() {
  const { ref, inView } = useInView(0.05)

  return (
    <section
      id="work"
      className="section-dark"
      style={{ position: 'relative' }}
    >
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
          <span className="section-index" style={{ color: 'var(--c-dark-muted)' }}>
            03
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-dark-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-dark-muted)' }}>
            What I'm Currently Building
          </span>
        </div>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <p
            className="text-display"
            style={{ color: 'var(--c-dark-text)', maxWidth: '16ch', lineHeight: 0.95 }}
          >
            Active work
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--c-dark-muted)',
              fontSize: '0.95rem',
              maxWidth: '40ch',
              lineHeight: 1.65,
            }}
          >
            Projects I'm deep in right now — built with full ownership from concept through shipped product.
          </p>
        </div>

        {/* Project cards */}
        <div
          ref={ref}
          style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
        >
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal ${i === 0 ? 'd1' : 'd2'} ${inView ? 'in-view' : ''}`}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
