import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#side-projects' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: `1.1rem var(--pad-x)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.5s, border-color 0.5s, backdrop-filter 0.5s',
        background: scrolled ? 'rgba(240, 233, 223, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--c-border)' : 'transparent'}`,
        animation: 'fade-in 0.8s var(--ease-out) 0.5s both',
      }}
    >
      {/* Wordmark */}
      <a
        href="#"
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: '0.8rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--c-ink)',
        }}
      >
        {profile.nameFirst} {profile.nameLast}
      </a>

      {/* Nav links */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {links.map(({ label, href }) => (
          <NavLink key={label} href={href}>
            {label}
          </NavLink>
        ))}
        <a
          href={`mailto:${profile.email}`}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--c-bg)',
            background: 'var(--c-ink)',
            padding: '0.55rem 1.1rem',
            borderRadius: '2px',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--c-vivid)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--c-ink)'
          }}
        >
          Hire me
        </a>
      </div>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: '0.72rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--c-ink)',
        opacity: 0.5,
        transition: 'opacity 0.2s ease',
        position: 'relative',
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
    >
      {children}
    </a>
  )
}
