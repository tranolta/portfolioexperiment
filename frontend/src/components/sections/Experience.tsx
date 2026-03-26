import { experience } from '../../data/experience'
import { useInView } from '../../hooks/useInView'

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section" style={{ paddingTop: 'var(--pad-y)', paddingBottom: 'var(--pad-y)' }}>
      <div className="container">
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          <span className="section-index">04</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--c-border)' }} />
          <span className="text-label" style={{ color: 'var(--c-muted)' }}>Professional Experience</span>
        </div>

        {/* Experience list */}
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column' }}>
          {experience.map((job, i) => (
            <ExperienceRow key={job.id} job={job} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceRow({
  job,
  index,
  inView,
}: {
  job: (typeof experience)[0]
  index: number
  inView: boolean
}) {
  const delayClass = index === 0 ? 'd1' : index === 1 ? 'd2' : 'd3'

  return (
    <div
      className={`reveal ${delayClass} ${inView ? 'in-view' : ''}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'clamp(2rem, 4vw, 4rem) 1fr auto',
        gap: '0 clamp(1.5rem, 4vw, 4rem)',
        padding: 'clamp(2rem, 4vw, 3.5rem) 0',
        borderBottom: '1px solid var(--c-border)',
        alignItems: 'start',
        transition: 'background 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--c-cream)'
        e.currentTarget.style.paddingLeft = '1.5rem'
        e.currentTarget.style.paddingRight = '1.5rem'
        e.currentTarget.style.marginLeft = '-1.5rem'
        e.currentTarget.style.marginRight = '-1.5rem'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.paddingLeft = '0'
        e.currentTarget.style.paddingRight = '0'
        e.currentTarget.style.marginLeft = '0'
        e.currentTarget.style.marginRight = '0'
      }}
    >
      {/* Index number */}
      <div
        className="section-index"
        style={{ paddingTop: '0.25rem', fontVariantNumeric: 'tabular-nums' }}
      >
        0{index + 1}
      </div>

      {/* Main content */}
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '1rem',
            marginBottom: '0.6rem',
            flexWrap: 'wrap',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1,
              color: 'var(--c-ink)',
            }}
          >
            {job.company}
          </h3>
          <span
            className="text-label"
            style={{ color: 'var(--c-signal)', letterSpacing: '0.12em' }}
          >
            {job.role}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--c-muted)',
            lineHeight: 1.6,
            maxWidth: '60ch',
            marginBottom: '1.25rem',
          }}
        >
          {job.description}
        </p>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {job.highlights.map(h => (
            <li
              key={h}
              style={{
                display: 'flex',
                gap: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                color: 'var(--c-muted)',
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: 'var(--c-signal)', flexShrink: 0, marginTop: '0.1rem' }}>—</span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Period + location */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '0.35rem',
          paddingTop: '0.25rem',
          minWidth: 'fit-content',
        }}
      >
        <span
          className="text-mono"
          style={{ color: 'var(--c-ink)', whiteSpace: 'nowrap' }}
        >
          {job.period}
        </span>
        <span className="text-mono" style={{ color: 'var(--c-muted)', whiteSpace: 'nowrap' }}>
          {job.location}
        </span>
      </div>
    </div>
  )
}
