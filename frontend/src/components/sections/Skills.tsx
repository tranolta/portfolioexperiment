const skills = [
  {
    id: 'creative',
    icon: '/images/skill-creative.png',
    name: 'Creative',
    description: 'My brain is basically never off, and I am always thinking of new ideas, new angles, or new ways to make something more interesting.',
    symbols: [
      { char: '✿', top: -14, left: -10,  size: 28, opacity: 0.7, duration: '9s',  reverse: false, color: '#FF6B9D' },
      { char: '❀', top: -10, right: -12, size: 30, opacity: 0.6, duration: '13s', reverse: true,  color: '#FFB347' },
      { char: '✳', bottom: -8, left: 8,  size: 20, opacity: 0.6, duration: '8s',  reverse: false, color: '#A8E6CF' },
      { char: '❋', bottom: -12, right: 6, size: 25, opacity: 0.65, duration: '16s', reverse: true, color: '#C9B1FF' },
      { char: '✺', top: 18,  left: -16,  size: 18, opacity: 0.55, duration: '11s', reverse: false, color: '#FF9AA2' },
      { char: '✿', top: 22,  right: -14, size: 19, opacity: 0.6,  duration: '7s',  reverse: true,  color: '#FFDAC1' },
    ],
  },
  {
    id: 'entrepreneurial',
    icon: '/images/skill-entrepreneurial.png',
    name: 'Entrepreneurial',
    description: 'I love spotting opportunities, starting things from scratch, and seeing how far an idea can go.',
    symbols: [
      { char: '❋', top: -12, left: 6,   size: 30, opacity: 0.65, duration: '10s', reverse: true,  color: '#FFD93D' },
      { char: '✺', top: -8,  right: -8, size: 20, opacity: 0.6,  duration: '15s', reverse: false, color: '#6BCB77' },
      { char: '✿', bottom: -10, right: -10, size: 17, opacity: 0.65, duration: '9s', reverse: false, color: '#FF6B6B' },
      { char: '✳', bottom: -8, left: -8, size: 19, opacity: 0.55, duration: '12s', reverse: true,  color: '#4D96FF' },
      { char: '❀', top: 20,  left: -14, size: 21, opacity: 0.6,  duration: '6s',  reverse: false, color: '#FF9F1C' },
      { char: '✺', top: 16,  right: -16, size: 17, opacity: 0.55, duration: '18s', reverse: true,  color: '#C9B1FF' },
    ],
  },
  {
    id: 'curious',
    icon: '/images/skill-curious.png',
    name: 'Curious',
    description: 'I ask a lot of questions, go down way too many rabbit holes, and genuinely love learning how things work.',
    symbols: [
      { char: '✺', top: -10, left: -8,  size: 30, opacity: 0.65, duration: '8s',  reverse: false, color: '#00C9A7' },
      { char: '❋', top: -14, right: -6, size: 28, opacity: 0.65, duration: '11s', reverse: true,  color: '#FF6B9D' },
      { char: '❀', bottom: -8, left: -10, size: 21, opacity: 0.6, duration: '14s', reverse: false, color: '#FFB347' },
      { char: '✿', bottom: -12, right: 4, size: 25, opacity: 0.65, duration: '9s', reverse: true,  color: '#4D96FF' },
      { char: '✳', top: 20,  right: -14, size: 18, opacity: 0.55, duration: '17s', reverse: false, color: '#FFD93D' },
      { char: '❀', top: 18,  left: -16,  size: 20, opacity: 0.58, duration: '7s',  reverse: true,  color: '#A8E6CF' },
    ],
  },
]

type Symbol = {
  char: string
  top?: number
  bottom?: number
  left?: number
  right?: number
  size: number
  opacity: number
  duration: string
  reverse: boolean
  color: string
}

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__title">Three things that describe me are...</h2>
      <div className="skills__grid">
        {skills.map(skill => (
          <div key={skill.id} className="skills__item">
            <div className="skills__icon" style={{ position: 'relative' }}>
              {skill.symbols.map((sym: Symbol, i) => (
                <span
                  key={i}
                  style={{
                    position: 'absolute',
                    top: sym.top !== undefined ? sym.top : undefined,
                    bottom: sym.bottom !== undefined ? sym.bottom : undefined,
                    left: sym.left !== undefined ? sym.left : undefined,
                    right: sym.right !== undefined ? sym.right : undefined,
                    fontSize: sym.size,
                    opacity: sym.opacity,
                    pointerEvents: 'none',
                    userSelect: 'none',
                    display: 'inline-block',
                    zIndex: 2,
                    color: sym.color,
                    animation: `spin-slow ${sym.duration} linear infinite${sym.reverse ? ' reverse' : ''}`,
                  }}
                >
                  {sym.char}
                </span>
              ))}
              <img src={skill.icon} alt={`${skill.name} icon`} style={{ position: 'relative', zIndex: 1 }} />
            </div>
            <div className="skills__text">
              <h3 className="skills__name">{skill.name}</h3>
              <p className="skills__description">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
