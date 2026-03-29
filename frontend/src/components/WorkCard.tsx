import type { Card } from '../data/work'

export default function WorkCard({ card }: { card: Card }) {
  if (card.wip) {
    return (
      <article className="work__card work__card--wip">
        <div className="work__card-image work__card-image--wip" />
        <div className="work__card-text">
          <h3 className="work__card-title" style={{ opacity: 0.35 }}>Work in progress</h3>
          <p className="work__card-description" style={{ opacity: 0.3 }}>Coming soon...</p>
        </div>
      </article>
    )
  }

  return (
    <article className="work__card">
      <div className="work__card-image">
        <img src={card.image} alt={card.title} />
      </div>
      <div className="work__card-text">
        <h3 className="work__card-title">{card.title}</h3>
        <p className="work__card-description" style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>{card.description}</p>
        {card.link && (
          <a
            href={card.link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 600,
              fontSize: 15,
              color: '#2D2D2D',
              textDecoration: 'underline',
              marginTop: 8,
              display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {card.link.text}
          </a>
        )}
      </div>
    </article>
  )
}
