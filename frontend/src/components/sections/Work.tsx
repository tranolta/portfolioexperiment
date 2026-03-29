import { Link } from 'react-router-dom'
import WorkCard from '../WorkCard'
import { row1, row2 } from '../../data/work'

export default function Work() {
  return (
    <section className="work" id="work">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <h2 className="work__title" style={{ margin: 0 }}>My professional work</h2>
        <Link
          to="/work"
          style={{
            fontFamily: 'Epilogue, sans-serif',
            fontSize: 22,
            color: '#2D2D2D',
            textDecoration: 'none',
            lineHeight: 1,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.4')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          title="See all"
        >
          →
        </Link>
      </div>
      <div className="work__cards" style={{ gap: 0 }}>
        <div className="work__row" style={{ marginBottom: 80 }}>
          {row1.map(card => <WorkCard key={card.id} card={card} />)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 6, marginTop: 80 }}>
          <h2 className="work__title" style={{ margin: 0 }}>My fun fun fun hobbies</h2>
          <Link
            to="/hobbies"
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontSize: 22,
              color: '#2D2D2D',
              textDecoration: 'none',
              lineHeight: 1,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.4')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            title="See all"
          >
            →
          </Link>
        </div>
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
