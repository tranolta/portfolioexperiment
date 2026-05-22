import { motion } from 'framer-motion'
import { workGroups, row2 } from '../../data/work'

const section = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'circOut' as const } },
}

const rows = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
}

const row = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'circOut' as const } },
}

const vp = { once: true, margin: '-60px' }

export default function Work() {
  const chalmers   = workGroups[0]
  const autoliv    = workGroups[1]
  const talka      = workGroups[2]
  const talkReal   = talka.projects.filter(p => !p.wip)[0]
  const chalProjects = chalmers.projects.map(p => p.title).join(' · ')
  const avProjects   = autoliv.projects.map(p => p.title).join(' · ')

  return (
    <div id="work">

      {/* ── Professional ─────────────────────────────────────── */}
      <motion.section
        className="doc-section"
        variants={section} initial="hidden" whileInView="visible" viewport={vp}
      >
        <span className="doc-marker">Professional Work</span>
        <motion.div variants={rows} initial="hidden" whileInView="visible" viewport={vp}>

          <motion.div variants={row} className="doc-work-row">
            <span className="doc-work-row__code">01 · Sm</span>
            <div className="doc-work-row__content">
              <div className="doc-work-row__head">
                <span className="doc-work-row__name">Smart Campus — Chalmers</span>
                <span className="doc-work-row__meta">System Developer · 2025</span>
              </div>
              <p className="doc-work-row__projects">{chalProjects}</p>
              <p className="doc-work-row__desc">
                AI-powered campus infrastructure: computer vision for room search, movement
                prediction combining weather + CO₂ sensors, and AR indoor navigation.
              </p>
              {chalmers.employer.link && (
                <a
                  href={chalmers.employer.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-work-row__link"
                >
                  Team Smart Campus ↗
                </a>
              )}
            </div>
          </motion.div>

          <motion.div variants={row} className="doc-work-row">
            <span className="doc-work-row__code">02 · Av</span>
            <div className="doc-work-row__content">
              <div className="doc-work-row__head">
                <span className="doc-work-row__name">Autoliv</span>
                <span className="doc-work-row__meta">Master Thesis, Business Developer · 2025–2026</span>
              </div>
              <p className="doc-work-row__projects">{avProjects}</p>
              <p className="doc-work-row__desc">
                10-month thesis in Entrepreneurship &amp; Business Design studying how a tier-one
                safety supplier can evolve from component provider to value partner.
              </p>
            </div>
          </motion.div>

          <motion.div variants={row} className="doc-work-row">
            <span className="doc-work-row__code">03 · Tk</span>
            <div className="doc-work-row__content">
              <div className="doc-work-row__head">
                <span className="doc-work-row__name">Talkamatic</span>
                <span className="doc-work-row__meta">Business Development · 2025</span>
              </div>
              {talkReal && (
                <p className="doc-work-row__projects">{talkReal.title}</p>
              )}
              <p className="doc-work-row__desc">{talka.employer.description}</p>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

      {/* ── Side projects ────────────────────────────────────── */}
      <motion.section
        className="doc-section"
        variants={section} initial="hidden" whileInView="visible" viewport={vp}
      >
        <span className="doc-marker">Side Projects</span>
        <motion.div variants={rows} initial="hidden" whileInView="visible" viewport={vp}>

          <motion.div variants={row} className="doc-work-row">
            <span className="doc-work-row__code">04 · Ha</span>
            <div className="doc-work-row__content">
              <div className="doc-work-row__head">
                <span className="doc-work-row__name">{row2[0].title}</span>
              </div>
              <p className="doc-work-row__desc">{row2[0].description}</p>
            </div>
          </motion.div>

          <motion.div variants={row} className="doc-work-row">
            <span className="doc-work-row__code">05 · Ds</span>
            <div className="doc-work-row__content">
              <div className="doc-work-row__head">
                <span className="doc-work-row__name">Design &amp; Web</span>
              </div>
              <p className="doc-work-row__projects">
                {row2[1].title} · {row2[2].title}
              </p>
              <p className="doc-work-row__desc">{row2[1].description}</p>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>

    </div>
  )
}
