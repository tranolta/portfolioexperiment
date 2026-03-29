import { useState } from 'react'

const paragraphs = [
  "A big part of who I am is that I like building things from ideas that are still messy and undefined. I enjoy working in environments where there is uncertainty, where you need to think for yourself, talk to people, test things, and slowly shape something into place. That's probably why I've been drawn to startups, innovation projects, and creative technical work. I like the process of taking something abstract and making it real.",
  "At the core, I think I've always been interested in systems. When I was younger, I was fascinated by games — not just because they were fun, but because I liked understanding how they worked, why they worked, and how they could be improved. I think that same mindset still follows me today. Whether I'm working with AI, product ideas, strategy, or technical development, I'm motivated by understanding what is going on beneath the surface and finding better ways forward.",
  "I'd say I'm someone who is analytical, curious, and reflective, but also creative. I care a lot about making things that feel thoughtful and useful, not just impressive on paper. For me, the most meaningful work is where I get to combine problem-solving with creativity and build things that have a real purpose.",
]

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* Section title */}
      <div style={{ padding: '60px 100px 0', background: '#fff', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Epilogue, sans-serif',
          fontWeight: 600,
          fontSize: 32,
          lineHeight: '42px',
          color: '#2D2D2D',
        }}>
          About Me
        </h2>
      </div>

      {/* Pink header with photo + quote */}
      <section className="about-header" id="about-me">
        <div className="about-header__content">
          <div className="about-header__persona">
            <div className="about-header__image-wrapper">
              <img
                src="/images/about-profile.png"
                alt="John Tran portrait"
                className="about-header__image"
              />
              <div className="about-header__image-outline" />
            </div>
            <h1 className="about-header__name">John Tran</h1>
          </div>

          <div className="about-header__quote-section">
            <p className="about-header__quote">
              "Stay hungry, stay foolish." —{' '}
              <span className="about-header__quote-author">Steve Jobs</span>
            </p>
            <p className="about-header__quote-text">
              I think that quote fits me well because I'm driven by curiosity and by the feeling that there is always more to learn, improve, and build.
            </p>
          </div>
        </div>
      </section>

      {/* Collapsible body text */}
      <section className="about-body">
        <div className="about-body__content">
          <div
            style={{
              overflow: 'hidden',
              maxHeight: expanded ? '1000px' : '0px',
              transition: 'max-height 0.5s ease',
            }}
          >
            <div className="about-body__text" style={{ paddingBottom: 8 }}>
              {paragraphs.map((p, i) => (
                <p key={i} className="about-body__paragraph">{p}</p>
              ))}
            </div>
          </div>

          <button
            onClick={() => setExpanded(e => !e)}
            style={{
              marginTop: expanded ? 40 : 0,
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 600,
              fontSize: 16,
              color: '#2D2D2D',
              background: 'none',
              border: '1.5px solid #2D2D2D',
              padding: '12px 28px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {expanded ? 'Show less' : 'More about me'}
            <span style={{
              display: 'inline-block',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              fontSize: 12,
            }}>▼</span>
          </button>
        </div>
      </section>
    </>
  )
}
