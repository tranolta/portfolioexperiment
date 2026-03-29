const skills = [
  {
    id: 'creative',
    icon: '/images/skill-creative.png',
    name: 'Creative',
    description: 'My brain is basically never off, and I am always thinking of new ideas, new angles, or new ways to make something more interesting.',
  },
  {
    id: 'entrepreneurial',
    icon: '/images/skill-entrepreneurial.png',
    name: 'Entrepreneurial',
    description: 'I love spotting opportunities, starting things from scratch, and seeing how far an idea can go.',
  },
  {
    id: 'curious',
    icon: '/images/skill-curious.png',
    name: 'Curious',
    description: 'I ask a lot of questions, go down way too many rabbit holes, and genuinely love learning how things work.',
  },
]

export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__title">Three things that describe me are...</h2>
      <div className="skills__grid">
        {skills.map(skill => (
          <div key={skill.id} className="skills__item">
            <div className="skills__icon">
              <img src={skill.icon} alt={`${skill.name} icon`} />
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
