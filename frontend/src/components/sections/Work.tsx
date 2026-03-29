const row1: Card[] = [
  {
    id: 'chalmers',
    image: '/images/work-chalmers.png',
    title: 'System Developer @Chalmers',
    description: 'Developed a bunch of cool stuff here as part of team campus...',
    link: { text: 'Check out our team webpage →', href: 'https://www.chalmers.se/aktuellt/explorativa-ai-projekt-2025/team-smart-campus/' },
  },
  {
    id: 'autoliv',
    image: '/images/work-autoliv.png',
    title: 'Business Developer @Autoliv',
    description: "Master's thesis where we explored innovative processes and how you can take inspiration from some of the world's largest startup accelerators to improve innovativeness in large organizations",
  },
  {
    id: 'talkamatic',
    image: '/images/work-talkamatic.png',
    title: 'Intern @Talkamatic',
    description: 'Volunteer at Talkamatic, a GU Ventures startup. Doing everything from handling communication material and building graphics to being a representative at events',
  },
]

const row2: Card[] = [
  {
    id: 'hackathons',
    image: '/images/work-hackathons.png',
    title: 'Hackathons...',
    description: "This is something I'm recently getting into! My friend and I attended our very first hackathon as part of our school. We decided to build a tool that can find you great food & wine recommendations... and we were crowned the winners!",
  },
  {
    id: 'design',
    image: '/images/work-design.png',
    title: 'Design...?',
    description: "The first iteration of this was testing an entrepreneurial endeavor going into magazines, highlighting young entrepreneurs... This has now evolved into something else — heading towards designing a tool to help interior designers... stay tuned!",
  },
  {
    id: 'this-site',
    image: '/images/work-thissite.png',
    title: 'My first web designing experience',
    description: "...it's this portfolio! I'm building it with Figma, Claude Code, React, and TypeScript. Sorry in advance for any bugs or visual errors!",
  },
]

type Card = {
  id: string
  image: string
  title: string
  description: string
  link?: { text: string; href: string }
}

function WorkCard({ card }: { card: Card }) {
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

export default function Work() {
  return (
    <section className="work" id="work">
      <h2 className="work__title">My professional work</h2>
      <div className="work__cards" style={{ gap: 0 }}>
        <div className="work__row" style={{ marginBottom: 80 }}>
          {row1.map(card => <WorkCard key={card.id} card={card} />)}
        </div>
        <h2 className="work__title" style={{ marginBottom: 6, marginTop: 80 }}>My fun fun fun hobbies</h2>
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
