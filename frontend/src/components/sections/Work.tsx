import { Link } from 'react-router-dom'
import WorkCard from '../WorkCard'
import { workGroups, row2 } from '../../data/work'

export default function Work() {
  return (
    <section className="work" id="work">
      <Link
        to="/work"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, transition: 'opacity 0.2s' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        <h2 className="work__title" style={{ margin: 0 }}>My professional work</h2>
        <span style={{ fontFamily: 'Epilogue, sans-serif', fontSize: 22, color: '#2D2D2D', lineHeight: 1 }}>→</span>
      </Link>
      <div className="work__cards" style={{ gap: 0 }}>
        <div className="work__row" style={{ marginBottom: 80, marginTop: 100 }}>
          {workGroups.map(group => (
            <WorkCard key={group.employer.id} card={group.employer} linkTo={`/work?open=${group.id}`} />
          ))}
        </div>
        <Link
          to="/hobbies"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 6, marginTop: 80, transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <h2 className="work__title" style={{ margin: 0 }}>My fun fun fun hobbies</h2>
          <span style={{ fontFamily: 'Epilogue, sans-serif', fontSize: 22, color: '#2D2D2D', lineHeight: 1 }}>→</span>
        </Link>
        <p style={{
          fontFamily: 'Epilogue, sans-serif',
          fontWeight: 400,
          fontSize: 15,
          color: 'rgba(45,45,45,0.55)',
          marginBottom: 30,
          textAlign: 'center',
        }}>
          Things I'm currently working on or exploring for fun!
        </p>
        <div className="work__row">
          {row2.map(card => <WorkCard key={card.id} card={card} />)}
        </div>
      </div>
    </section>
  )
}
