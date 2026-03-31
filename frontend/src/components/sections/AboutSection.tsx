import { useState } from 'react'
import TimelineSlider from '../TimelineSlider'

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* Section title */}
      <div style={{ padding: '60px 100px 60px', background: '#fff', textAlign: 'center' }}>
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
              <TimelineSlider />
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
