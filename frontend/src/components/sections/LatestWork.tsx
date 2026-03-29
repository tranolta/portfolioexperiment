const workCards = [
  {
    id: 'smart-campus',
    image: null,
    imageBg: '#D4E4FF',
    title: 'Smart Campus',
    description: 'AI-powered campus infrastructure at Chalmers. Exploring and implementing AI solutions across campus services, navigation, energy efficiency, space utilization, and security.',
    role: 'System Developer · 2025',
  },
  {
    id: 'talkamatic',
    image: null,
    imageBg: '#FFE0DA',
    title: 'Talkamatic',
    description: 'Business development at a startup building pre-generative conversational AI — a fundamentally different approach to eliminating hallucinations in AI systems.',
    role: 'Business Developer · 2025',
  },
  {
    id: 'autoliv',
    image: null,
    imageBg: '#E8E8E8',
    title: 'Autoliv',
    description: 'Master thesis in innovation strategy at one of the world\'s leading automotive safety companies. Spanning IP strategy, sales processes, financial modeling, and organizational design.',
    role: 'Master Thesis Student · 2025–2026',
  },
  {
    id: 'idea-league',
    image: null,
    imageBg: '#D6F0E8',
    title: 'IDEA League',
    description: 'Selected for the IDEA League Challenge Programme. Consulted on secure AI use of electronic health records at Sahlgrenska University Hospital alongside students from ETH Zurich, TU Delft, RWTH Aachen, and Polimi.',
    role: 'Challenge Participant · 2024–2025',
  },
  {
    id: 'this-site',
    image: null,
    imageBg: '#EDE0FF',
    title: 'This Site',
    description: 'A personal portfolio and brand experiment — built with React, TypeScript, and Vite. Designed and coded from scratch as a living document of ongoing work.',
    role: 'Personal Project · 2025',
  },
  {
    id: 'skanska',
    image: null,
    imageBg: '#FFF3D0',
    title: 'Skanska',
    description: 'Bachelor thesis research into efficiency and safety in foundation production across different climate conditions, in collaboration with Skanska.',
    role: 'Bachelor Thesis Student · 2023',
  },
]

export default function LatestWork() {
  const row1 = workCards.slice(0, 3)
  const row2 = workCards.slice(3, 6)

  return (
    <section
      id="work"
      style={{
        width: '100%',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 100px',
        gap: 30,
        boxSizing: 'border-box',
      }}
    >
      {/* Section heading */}
      <h2 style={{
        fontFamily: 'Epilogue, sans-serif',
        fontWeight: 600,
        fontSize: 32,
        lineHeight: '42px',
        textAlign: 'center',
        color: '#2D2D2D',
        margin: 0,
        width: 344,
        flexShrink: 0,
      }}>
        My professional work
      </h2>

      {/* Work cards container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 120,
        width: '100%',
        maxWidth: 1080,
      }}>
        {[row1, row2].map((row, rowIdx) => (
          <div
            key={rowIdx}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: 67.5,
              width: '100%',
              maxWidth: 1080,
            }}
          >
            {row.map((card) => (
              <div
                key={card.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 25,
                  width: 315,
                  flexShrink: 0,
                }}
              >
                {/* Image 315×315 */}
                <div style={{
                  width: 315,
                  height: 315,
                  background: card.imageBg,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {card.image ? (
                    <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(45,45,45,0.3)',
                    }}>
                      {card.title}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 10,
                  width: 315,
                }}>
                  <p style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 600,
                    fontSize: 20,
                    lineHeight: '30px',
                    color: '#2D2D2D',
                    margin: 0,
                    width: 315,
                  }}>
                    {card.title}
                  </p>
                  <p style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 400,
                    fontSize: 17,
                    lineHeight: '27px',
                    color: '#2D2D2D',
                    margin: 0,
                    width: 315,
                  }}>
                    {card.description}
                  </p>
                  <p style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: '20px',
                    color: 'rgba(45,45,45,0.5)',
                    margin: 0,
                  }}>
                    {card.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
