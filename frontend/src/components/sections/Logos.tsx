const logos = [
  { name: 'Autoliv',     src: '/images/logo-autoliv.png',    width: 132, height: 45 },
  { name: 'IDEA League', src: '/images/logo-idea.png',       width: 252, height: 45 },
  { name: 'Chalmers',    src: '/images/logo-chalmers.png',   width: 246, height: 69 },
  { name: 'Talkamatic',  src: '/images/logo-talkamatic.png', width: 256, height: 56 },
]

// Duplicate so the marquee loops seamlessly
const doubled = [...logos, ...logos]

export default function Logos() {
  return (
    <section className="logos" style={{ overflow: 'hidden', padding: '61px 0' }}>
      <div className="logos__track">
        {doubled.map((logo, i) => (
          <div key={i} className="logos__item" style={{ flexShrink: 0 }}>
            <img
              src={logo.src}
              alt={`${logo.name} logo`}
              style={{ width: logo.width, height: logo.height, objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
