import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`doc-nav${scrolled ? ' doc-nav--scrolled' : ''}`}>
      <div className="doc-nav__inner">
        <a href="#about" className="doc-nav__mark">JT</a>
        <div className="doc-nav__links">
          <a href="#work" className="doc-nav__link">Work</a>
          <a href="#contact" className="doc-nav__link">Contact</a>
        </div>
      </div>
    </nav>
  )
}
