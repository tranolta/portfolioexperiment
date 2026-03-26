import { additionalProjects } from '../../data/projects'
import { useInView } from '../../hooks/useInView'
import ProjectCard from '../cards/ProjectCard'

export default function Projects() {
  const { ref, inView } = useInView(0.05)

  // Separate type-statement cards from minimal-row cards for layout control
  const typeCards = additionalProjects.filter(p => p.layout === 'type-statement')
  const rowCards  = additionalProjects.filter(p => p.layout !== 'type-statement')

  return (
    <section className="section" style={{ paddingTop: 'var(--pad-y)', paddingBottom: 'var(--pad-y)' }}>
      <div className="container" ref={ref}>
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <span className="section-index">03B</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-muted)' }}>More Work</span>
        </div>

        {/* Type-statement cards in a grid if there are multiple */}
        {typeCards.length > 0 && (
          <div
            className={`reveal ${inView ? 'in-view' : ''}`}
            style={{
              display: 'grid',
              gridTemplateColumns: typeCards.length > 1 ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
              gap: '1px',
              background: 'var(--c-border)',
              marginBottom: 'clamp(2rem, 4vw, 4rem)',
            }}
          >
            {typeCards.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Minimal-row cards */}
        {rowCards.length > 0 && (
          <div>
            {/* Header for this sub-section */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--c-border)',
              }}
            >
              <span className="text-label" style={{ color: 'var(--c-muted)' }}>
                Additional projects
              </span>
              <span className="text-mono" style={{ color: 'var(--c-muted)' }}>
                Hover to expand
              </span>
            </div>

            <div className={`reveal d1 ${inView ? 'in-view' : ''}`}>
              {rowCards.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={typeCards.length + i}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
