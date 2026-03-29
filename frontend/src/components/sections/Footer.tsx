import { useState } from 'react'

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:johntrann99@gmail.com?subject=Hello from ${form.name}&body=${encodeURIComponent(form.message)}`
  }

  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__columns">
          {/* Left */}
          <div className="footer__left">
            <div className="footer__message">
              <h2 className="footer__heading">Some final words...</h2>
              <p className="footer__body">
                I know there's a lot of stuff in here and I haven't described much in detail what I've done in the different projects, but I'd love to tell you more about it. Feel free to message me wherever and maybe we can meet for a talk!
              </p>
            </div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <a href="https://www.linkedin.com/in/lejohntran/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/footer-photo.png"
                  alt="LinkedIn"
                  style={{ height: 40, width: 'auto', display: 'block' }}
                />
              </a>
              <a href="mailto:johntrann99@gmail.com">
                <img
                  src="/images/about-slot2.png"
                  alt="Email"
                  style={{ height: 40, width: 'auto', display: 'block' }}
                />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form className="footer__form" onSubmit={handleSubmit}>
            <div className="footer__fields">
              <input
                className="footer__input"
                name="name"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="footer__input"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="footer__textarea"
                name="message"
                placeholder="Write something"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="footer__submit">
              Submit
            </button>
          </form>
        </div>

        <p className="footer__copyright">© 2025 John Tran · Gothenburg, Sweden</p>
      </div>
    </footer>
  )
}
