import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { profile } from '../data/profile'

const TILES = [
  {
    code: '01', abbr: 'Sm', title: 'Smart Campus', category: 'System Development', img: '/images/work-chalmers.png',
    desc: 'Developed AI tools for Chalmers campus — a computer vision room-search platform, a movement prediction system using weather and sensor data, and an AR indoor navigation app built on ARKit.',
  },
  {
    code: '02', abbr: 'Av', title: 'Autoliv', category: 'Master Thesis', img: '/images/work-autoliv.png',
    desc: '10-month Master\'s thesis exploring how a tier-one vehicle safety supplier can shift from component logic to value-based offerings — and how startup accelerator principles can strengthen corporate innovation.',
  },
  {
    code: '03', abbr: 'Tk', title: 'Talkamatic', category: 'Business Development', img: '/images/work-talkamatic.png',
    desc: 'Volunteer at a GU Ventures dialogue-tech startup. Communication material, graphics, and event representation — covering everything that isn\'t engineering.',
  },
  {
    code: '04', abbr: 'Ha', title: 'Hackathons', category: 'Side Project', img: '/images/work-hackathons.png',
    desc: 'First hackathon out: built a food & wine recommendation tool using image recognition. Won. Getting more into this.',
  },
  {
    code: '05', abbr: 'Ds', title: 'Design', category: 'Side Project', img: '/images/work-design.png',
    desc: 'Started as a magazine spotlighting young entrepreneurs. Evolved into exploring tools for interior designers. Ongoing.',
  },
]

type Tile = typeof TILES[number]

const BIO =
  'I build where business meets technology — sometimes code, sometimes strategy, ' +
  'usually both. MSc Entrepreneurship & Business Design at Chalmers. ' +
  'Currently three projects deep: a campus AI system, a vehicle safety thesis, ' +
  'and business development at a dialogue tech startup.'

const WORK = [
  'Smart Campus — Chalmers',
  'Autoliv (Master Thesis)',
  'Talkamatic',
]

const NOW = [
  'Autoliv thesis 2025–2026',
  'Smart Campus AI build',
  'Talkamatic business development',
]

const CONTACT = [
  { text: profile.email, href: `mailto:${profile.email}`, external: false },
  { text: 'LinkedIn', href: profile.social.find(s => s.label === 'LinkedIn')?.url ?? '#', external: true },
  { text: 'GitHub', href: profile.social.find(s => s.label === 'GitHub')?.url ?? '#', external: true },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.35 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'circOut' as const } },
}

export default function HomePage() {
  const [active, setActive] = useState<Tile | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="jk-page">

      {/* ── Nav ─────────────────────────────────────────── */}
      <nav className="jk-nav">
        <span className="jk-nav__mark">JT</span>
        <div className="jk-nav__links">
          <a href="https://www.linkedin.com/in/lejohntran/" target="_blank" rel="noopener noreferrer" className="jk-nav__link">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="jk-nav__link">Contact</a>
        </div>
      </nav>

      {/* ── Hero: full-width name ── */}
      <motion.div
        className="jk-hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'circOut' as const }}
      >
        <h1 className="jk-hero__name">John Tran</h1>
      </motion.div>

      {/* ── Info: About · Work · Currently · Skills · Contact ── */}
      <motion.div
        className="jk-info"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >

        <div className="jk-col jk-col--about">
          <motion.span variants={fadeUp} className="jk-col__label">About</motion.span>
          <motion.p variants={fadeUp} className="jk-col__bio">{BIO}</motion.p>
        </div>

        <div className="jk-col">
          <motion.span variants={fadeUp} className="jk-col__label">Work</motion.span>
          <ol className="jk-col__list">
            {WORK.map((item, i) => (
              <motion.li key={i} variants={fadeUp}>{item}</motion.li>
            ))}
          </ol>
        </div>

        <div className="jk-col">
          <motion.span variants={fadeUp} className="jk-col__label">Currently</motion.span>
          <ol className="jk-col__list">
            {NOW.map((item, i) => (
              <motion.li key={i} variants={fadeUp}>{item}</motion.li>
            ))}
          </ol>
        </div>

        <div className="jk-col jk-col--last">
          <motion.span variants={fadeUp} className="jk-col__label">Contact</motion.span>
          <ol className="jk-col__list">
            {CONTACT.map((item, i) => (
              <motion.li key={i} variants={fadeUp}>
                <a
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="jk-link"
                >
                  {item.text}
                </a>
              </motion.li>
            ))}
          </ol>
        </div>

      </motion.div>

      {/* ── Work tiles ───────────────────────────────────── */}
      <div className="jk-tiles">
        {TILES.map((tile, i) => (
          <motion.div
            key={tile.code}
            className="jk-tile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: 'circOut' as const }}
            onClick={() => setActive(tile)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setActive(tile)}
          >
            <span className="jk-tile__bg" style={{ backgroundImage: `url(${tile.img})` }} />
            <span className="jk-tile__code">{tile.code}</span>
            <span className="jk-tile__abbr">{tile.abbr}</span>
            <div className="jk-tile__footer">
              <span className="jk-tile__title">{tile.title}</span>
              <span className="jk-tile__cat">{tile.category}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Tile modal ───────────────────────────────────── */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="jk-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="jk-modal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: 'circOut' as const }}
              onClick={e => e.stopPropagation()}
            >
              <div className="jk-modal__header">
                <span className="jk-modal__code">{active.code}</span>
                <button className="jk-modal__close" onClick={() => setActive(null)} aria-label="Close">✕</button>
              </div>
              <h2 className="jk-modal__title">{active.title}</h2>
              <span className="jk-modal__cat">{active.category}</span>
              <p className="jk-modal__desc">{active.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
