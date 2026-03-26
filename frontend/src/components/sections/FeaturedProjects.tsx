import { featuredProjects } from '../../data/projects'
import { useInView } from '../../hooks/useInView'
import ProjectCard from '../cards/ProjectCard'

export default function FeaturedProjects() {
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
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <span className="section-index" style={{ color: 'var(--c-dark-muted)' }}>
            03
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-dark-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-dark-muted)' }}>
            Selected Work
          </span>
        </div>

        {/* Section statement — horizontal tension */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <p
            className="text-display"
            style={{ color: 'var(--c-dark-text)', maxWidth: '14ch', lineHeight: 0.95 }}
          >
            The work speaks
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              color: 'var(--c-dark-muted)',
              fontSize: '0.95rem',
              maxWidth: '38ch',
              lineHeight: 1.65,
            }}
          >
            Projects built with full ownership — from initial concept through shipped product.
          </p>
        </div>

        {/* Featured project cards */}
        <div
          ref={ref}
          style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1px, 0.5vw, 4px)' }}
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
