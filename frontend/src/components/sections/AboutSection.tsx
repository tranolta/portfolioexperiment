import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { skillGroups } from '../../data/profile'

const section = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "circOut" as const },
  },
}

export default function AboutSection() {
  return (
    <motion.section
      className="doc-section"
      id="skills"
      variants={section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <span className="doc-marker">06 · Sk</span>
      <span className="doc-section__label">Skills</span>
      <dl className="doc-skills__grid">
        {skillGroups.map(group => (
          <Fragment key={group.category}>
            <dt className="doc-skills__dt">{group.category}</dt>
            <dd className="doc-skills__dd">{group.skills.join(' · ')}</dd>
          </Fragment>
        ))}
      </dl>
    </motion.section>
  )
}
