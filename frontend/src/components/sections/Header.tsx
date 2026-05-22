import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "circOut" as const },
  },
}

export default function Header() {
  return (
    <motion.section
      className="doc-identity"
      id="about"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Two-column: name left · facts right */}
      <div className="doc-identity__header">
        <div className="doc-identity__left">
          <motion.span variants={item} className="doc-marker">00 / MMXXVI</motion.span>
          <motion.h1 variants={item} className="doc-identity__name">
            {profile.name}
          </motion.h1>
        </div>

        <motion.dl variants={item} className="doc-identity__dl">
        <dt className="doc-identity__dt">Role</dt>
        <dd className="doc-identity__dd">{profile.title}</dd>
        <dt className="doc-identity__dt">Where</dt>
        <dd className="doc-identity__dd">{profile.location}</dd>
        <dt className="doc-identity__dt">Study</dt>
        <dd className="doc-identity__dd">
          MSc Entrepreneurship &amp; Business Design, Chalmers
        </dd>
        <dt className="doc-identity__dt">Now</dt>
        <dd className="doc-identity__dd">Smart Campus · Autoliv · Talkamatic</dd>
        <dt className="doc-identity__dt">Contact</dt>
        <dd className="doc-identity__dd">
          <a href={`mailto:${profile.email}`} className="doc-entry__link">
            {profile.email}
          </a>
        </dd>
        </motion.dl>
      </div>

      <motion.p variants={item} className="doc-identity__positioning">
        {profile.positioning}
      </motion.p>
    </motion.section>
  )
}
