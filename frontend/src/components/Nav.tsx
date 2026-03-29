import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navigation">
      <button
        className="navigation__hamburger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className="navigation__hamburger-line" />
        <span className="navigation__hamburger-line" />
        <span className="navigation__hamburger-line" />
      </button>
      <ul className={`navigation__menu${open ? ' navigation__menu--active' : ''}`}>
        <li><a href="#about" className="navigation__link" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#work" className="navigation__link" onClick={() => setOpen(false)}>Work</a></li>
        <li><a href="#contact" className="navigation__link" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}
