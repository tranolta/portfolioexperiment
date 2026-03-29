import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/sections/Footer'
import WorkCard from '../components/WorkCard'
import { row2, row2Wip } from '../data/work'

export default function HobbiesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="work" id="hobbies">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
            <Link to="/" style={{ fontFamily: 'Epilogue, sans-serif', fontSize: 14, color: 'rgba(45,45,45,0.45)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
              ← Back
            </Link>
          </div>
          <h2 className="work__title">My fun fun fun hobbies</h2>
          <p style={{
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 400,
            fontSize: 15,
            color: 'rgba(45,45,45,0.55)',
            marginBottom: 40,
            textAlign: 'center',
          }}>
            Things I'm currently working on or exploring for fun!
          </p>
          <div className="work__cards" style={{ gap: 0 }}>
            <div className="work__row" style={{ marginBottom: 40 }}>
              {row2.map(card => <WorkCard key={card.id} card={card} />)}
            </div>
            <div className="work__row">
              {row2Wip.map(card => <WorkCard key={card.id} card={card} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
