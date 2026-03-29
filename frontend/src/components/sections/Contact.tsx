import { profile } from '../../data/profile'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section
      id="contact"
      style={{
        padding: '96px 0',
        background: '#fff',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--c-text-muted)',
              marginBottom: 16,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 4vw, 56px)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--c-text)',
              marginBottom: 24,
            }}
          >
            Let's work together.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.65,
              color: 'var(--c-text-muted)',
              marginBottom: 40,
            }}
          >
            Open to consulting, strategy, and product work. If you have something interesting to build or figure out, let's talk.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href={`mailto:${profile.email}`}
              style={{
                fontFamily: 'var(--font-main)',
                fontWeight: 500,
                fontSize: 15,
                color: 'var(--c-text)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {profile.email}
            </a>
            {profile.social.map(s => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-main)',
                  fontWeight: 500,
                  fontSize: 15,
                  color: 'var(--c-text)',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {s.label} →
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={e => {
            e.preventDefault()
            window.location.href = `mailto:${profile.email}?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}`
          }}
          style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          {[
            { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
            { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
          ].map(field => (
            <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label
                htmlFor={field.name}
                style={{
                  fontFamily: 'var(--font-main)',
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--c-text-muted)',
                }}
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name as 'name' | 'email']}
                onChange={handleChange}
                required
                style={{
                  fontFamily: 'var(--font-main)',
                  fontWeight: 400,
                  fontSize: 15,
                  padding: '14px 16px',
                  background: 'var(--c-surface)',
                  border: '1px solid var(--c-border)',
                  borderRadius: 2,
                  color: 'var(--c-text)',
                  outline: 'none',
                  width: '100%',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--c-text)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--c-border)')}
              />
            </div>
          ))}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label
              htmlFor="message"
              style={{
                fontFamily: 'var(--font-main)',
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--c-text-muted)',
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                fontFamily: 'var(--font-main)',
                fontWeight: 400,
                fontSize: 15,
                padding: '14px 16px',
                background: 'var(--c-surface)',
                border: '1px solid var(--c-border)',
                borderRadius: 2,
                color: 'var(--c-text)',
                outline: 'none',
                resize: 'vertical',
                width: '100%',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--c-text)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--c-border)')}
            />
          </div>

          <button
            type="submit"
            style={{
              fontFamily: 'var(--font-main)',
              fontWeight: 600,
              fontSize: 15,
              letterSpacing: '0.04em',
              padding: '16px 32px',
              background: 'var(--c-text)',
              color: '#fff',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
