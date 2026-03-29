import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from '../components/Nav'
import WorkCard from '../components/WorkCard'
import { row1, row1Wip } from '../data/work'

export default function WorkPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Nav />
      <main>
        <section className="work" id="work">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
            <Link to="/" style={{ fontFamily: 'Epilogue, sans-serif', fontSize: 14, color: 'rgba(45,45,45,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              ← Back
            </Link>
          </div>
          <h2 className="work__title">My professional work</h2>
          <div className="work__cards" style={{ gap: 0 }}>
            <div className="work__row" style={{ marginBottom: 40 }}>
              {row1.map(card => <WorkCard key={card.id} card={card} />)}
            </div>
            <div className="work__row">
              {row1Wip.map(card => <WorkCard key={card.id} card={card} />)}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
