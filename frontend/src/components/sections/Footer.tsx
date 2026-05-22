import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'

const section = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "circOut" as const },
  },
}

const viewport = { once: true, margin: '-60px' }

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Hello from ${form.name}`)
    const body    = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const linkedin = profile.social.find(s => s.label === 'LinkedIn')?.url ?? '#'
  const github   = profile.social.find(s => s.label === 'GitHub')?.url ?? '#'

  return (
    <>
      <motion.section
        className="doc-section"
        id="contact"
        variants={section}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <span className="doc-marker">07 · Ct</span>
        <span className="doc-section__label">Contact</span>

        {/* Side-by-side: note left · form right */}
        <div className="doc-contact__body">
          <div className="doc-contact__left">
            <a href={`mailto:${profile.email}`} className="doc-contact__email">
              {profile.email}
            </a>
            <p className="doc-contact__note">
              Open to collaboration, consulting, and interesting conversations.
              Say hello.
            </p>
          </div>

          <form className="doc-form" onSubmit={handleSubmit}>
          <div className="doc-form__field">
            <label htmlFor="ct-name" className="doc-form__label">Name</label>
            <input
              id="ct-name"
              className="doc-form__input"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="doc-form__field">
            <label htmlFor="ct-email" className="doc-form__label">Email</label>
            <input
              id="ct-email"
              className="doc-form__input"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="doc-form__field">
            <label htmlFor="ct-message" className="doc-form__label">Message</label>
            <textarea
              id="ct-message"
              className="doc-form__textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
            <button type="submit" className="doc-form__submit">Send</button>
          </form>
        </div>
      </motion.section>

      <footer className="doc-footer">
        <div className="doc-footer__inner" style={{ padding: 0 }}>
          <span className="doc-footer__copy">© 2026 John Tran · {profile.location}</span>
          <div className="doc-footer__links">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="doc-footer__link">
              LinkedIn
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="doc-footer__link">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
