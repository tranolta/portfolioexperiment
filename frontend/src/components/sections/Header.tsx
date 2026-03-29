export default function Header() {
  return (
    <header className="header" id="about">
      <div className="header__content">
        <div className="header__text" style={{ position: 'relative', overflow: 'visible' }}>

          {/* Decorative spinning symbols — each has its own animation string so speeds are truly independent */}
          <span style={{
            position: 'absolute', top: -28, left: -44,
            fontSize: 32, opacity: 0.45, pointerEvents: 'none', userSelect: 'none',
            display: 'inline-block',
            animation: 'spin-slow 10s linear infinite',
          }}>✦</span>
          <span style={{
            position: 'absolute', top: 12, left: -20,
            fontSize: 14, opacity: 0.35, pointerEvents: 'none', userSelect: 'none',
            display: 'inline-block',
            animation: 'spin-slow 16s linear infinite reverse',
          }}>★</span>
          <span style={{
            position: 'absolute', bottom: 48, right: -32,
            fontSize: 22, opacity: 0.4, pointerEvents: 'none', userSelect: 'none',
            display: 'inline-block',
            animation: 'spin-slow 7s linear infinite',
          }}>✦</span>
          <span style={{
            position: 'absolute', top: '45%', right: -48,
            fontSize: 11, opacity: 0.3, pointerEvents: 'none', userSelect: 'none',
            display: 'inline-block',
            animation: 'spin-slow 20s linear infinite reverse',
          }}>✳</span>

          <div>
            <p className="header__greeting">Hello, my name is...</p>
          </div>
          <div>
            <h1 className="header__name">John Tran</h1>
          </div>
          <p className="header__description">
            MSc Entrepreneurship and Business Design*<br />
            BSc Civil and Environmental Engineering
          </p>
          <p style={{
            fontFamily: 'Epilogue, sans-serif',
            fontSize: 12,
            fontWeight: 400,
            color: 'rgba(45,45,45,0.5)',
            marginTop: 6,
          }}>
            *Expected graduation June 2026
          </p>
        </div>
        <div className="header__image">
          <img
            src="/images/profile.png"
            alt="John Tran portrait"
          />
        </div>
      </div>
    </header>
  )
}
