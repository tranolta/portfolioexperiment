const skills = [
  {
    id: 'creative',
    icon: '/images/skill-creative.png',
    name: 'Creative',
    description: 'My brain never turns off. I\'m constantly sketching new interfaces, imagining interactions, and finding more interesting or more thoughtful ways to approach any challenge.',
  },
  {
    id: 'entrepreneurial',
    icon: '/images/skill-entrepreneurial.png',
    name: 'Entrepreneurial',
    description: 'I love spotting opportunities and starting things from scratch — watching an idea move from a rough sketch to something real, whether that\'s a product, a strategy, or a company.',
  },
  {
    id: 'curious',
    icon: '/images/skill-curious.png',
    name: 'Curious',
    description: 'I dive deep into rabbit holes — whether it\'s a new prototyping technique, how a material behaves, or how people actually use something. Genuine curiosity, always.',
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
