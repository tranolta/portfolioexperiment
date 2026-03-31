import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  caption: string
  description: string
  image?: string
  group?: { images: string[]; labels: string[] }
}

const slides: Slide[] = [
  {
    caption: 'Natural Science',
    image: '/images/about-1-natural-science.png',
    description: `I graduated from Natural Science without a clear plan. But I knew one thing: I wanted to build things. I liked the idea of taking something from thought to reality. That instinct became the thread that kept pulling me forward.`,
  },
  {
    caption: 'Civil Engineering at Chalmers',
    image: '/images/about-2-civil-engineer.png',
    description: `Engineering felt like the right fit. I chose Civil Engineering because it was not just about ideas, it was about making them work in the real world. There is something satisfying about turning abstract thinking into systems and solutions that actually exist. It taught me how to think logically and build things that feel tangible.`,
  },
  {
    caption: 'Chalmers · Bakverket · Vattentrycket',
    description: `I did a lot more than study during these years. I worked as a project manager at Chalmers Studentkår Promotion AB and as a teaching assistant in a few courses. I also got involved in student life, joining committees like the newspaper committee and the fika committee. I have always liked being part of things that create energy around them.`,
    group: {
      images: ['/images/about-3-chalmers-promotion.jpg', '/images/about-4-bakverket.png', '/images/about-5-vattentrycket.jpg'],
      labels: ['Chalmers Promotion', 'Bakverket', 'Vattentrycket'],
    },
  },
  {
    caption: 'Entrepreneurship & Business Design',
    image: '/images/about-6-entrepreneurship.png',
    description: `By the time I was choosing a master's program, I had started teaching myself to code on the side just because it was fun. Suddenly ideas did not have to stay ideas. But I also realized I cared about more than just building. I wanted to understand why something should exist and who it was for. That is what led me to Entrepreneurship and Business Design.`,
  },
  {
    caption: 'System Developer at Chalmers',
    image: '/images/about-8-system-developer.png',
    description: `One of my side projects was a sentiment analysis tool for course evaluations, built to help evaluators understand student feedback without reading through everything manually. That project led to me working at Chalmers as a system developer, which has continued as part-time work. I think that progression reflects how I tend to operate. I start with curiosity, build something that seems useful, and if it works, it grows.`,
  },
  {
    caption: 'Idea League',
    image: '/images/about-7-idea-league.png',
    description: `I also got the chance to be part of the IDEA League Challenge, working on a brief from Sahlgrenska University Hospital around balancing security, integrity, and innovation in healthcare. The challenge brought together students from five top European technical universities: Chalmers University of Technology, TU Delft, ETH Zurich, RWTH Aachen University, and Politecnico di Milano.`,
  },
  {
    caption: 'Autoliv',
    image: '/images/about-9-autoliv.png',
    description: `Right now, I am at Autoliv, where I get to explore questions I find genuinely interesting: how a traditional component company can move toward more value-based solutions, and what large organizations can learn from other innovation environments, like startup accelerators, when it comes to developing ideas and turning them into something real.`,
  },
]

const groupRotations = [-4, 1, -2]

export default function TimelineSlider() {
  const font = 'Epilogue, sans-serif'
  const [currentIndex, setCurrentIndex] = useState(0)
  const [groupOpen, setGroupOpen] = useState(false)

  const next = () => setCurrentIndex(i => Math.min(i + 1, slides.length - 1))
  const prev = () => setCurrentIndex(i => Math.max(i - 1, 0))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const getCardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset)
    if (abs === 0) return {
      transform: 'translateX(0) scale(1)',
      zIndex: 30,
      opacity: 1,
      filter: 'brightness(1)',
    }
    if (abs === 1) return {
      transform: `translateX(${offset * 46}%) scale(0.84)`,
      zIndex: 20,
      opacity: 0.55,
      filter: 'brightness(0.85)',
    }
    if (abs === 2) return {
      transform: `translateX(${offset * 66}%) scale(0.68)`,
      zIndex: 10,
      opacity: 0.25,
      filter: 'brightness(0.7)',
    }
    return {
      transform: `translateX(${offset * 80}%) scale(0.6)`,
      zIndex: 0,
      opacity: 0,
      filter: 'brightness(0.6)',
    }
  }

  return (
    <div style={{ marginTop: 40, userSelect: 'none', fontFamily: font }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontFamily: font, fontWeight: 600, fontSize: 32, lineHeight: '42px', color: '#2D2D2D', marginBottom: 12 }}>
          How I realized that...
        </h2>
        <p style={{ fontFamily: font, fontSize: 15, color: 'rgba(45,45,45,0.6)', lineHeight: '24px', maxWidth: 520, margin: '0 auto' }}>
          I enjoy building things, solving problems, and turning ideas into something real. I want to work with technology, innovation, and business development in roles where I can create useful solutions and have a real impact.
        </p>
      </div>

      {/* Viewport */}
      <div style={{ position: 'relative', width: '100%', height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {slides.map((slide, index) => {
            const normalized = index - currentIndex

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  position: 'absolute',
                  width: 520,
                  maxWidth: '55vw',
                  height: 310,
                  borderRadius: 20,
                  overflow: 'hidden',
                  cursor: normalized !== 0 ? 'pointer' : 'default',
                  pointerEvents: Math.abs(normalized) > 2 ? 'none' : 'auto',
                  transition: 'all 0.55s cubic-bezier(0.34, 1.2, 0.64, 1)',
                  boxShadow: normalized === 0
                    ? '0 20px 56px rgba(0,0,0,0.16)'
                    : '0 8px 24px rgba(0,0,0,0.09)',
                  background: '#f0eeeb',
                  ...getCardStyle(normalized),
                }}
              >
                {slide.group ? (
                  /* Group slide — 3 scattered polaroids */
                  <div
                    onClick={e => { e.stopPropagation(); if (normalized === 0) setGroupOpen(true) }}
                    style={{ width: '100%', height: '100%', background: '#f0eeeb', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: normalized === 0 ? 'zoom-in' : 'pointer' }}
                  >
                    {slide.group.images.map((img, j) => (
                      <div
                        key={j}
                        style={{
                          position: 'absolute',
                          background: '#fff',
                          padding: '7px 7px 24px',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.13)',
                          transform: `rotate(${groupRotations[j]}deg) translateX(${(j - 1) * 72}px)`,
                          zIndex: j === 1 ? 3 : j === 0 ? 2 : 1,
                          width: '48%',
                        }}
                      >
                        <img
                          src={img}
                          alt={slide.group!.labels[j]}
                          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'contain', display: 'block', background: '#f5f5f5' }}
                        />
                        <div style={{ fontFamily: font, fontSize: 9, color: 'rgba(45,45,45,0.45)', textAlign: 'center', marginTop: 5, letterSpacing: '0.04em' }}>
                          {slide.group!.labels[j]}
                        </div>
                      </div>
                    ))}
                    {normalized === 0 && (
                      <div style={{ position: 'absolute', bottom: 10, right: 12, fontFamily: font, fontSize: 10, color: 'rgba(45,45,45,0.4)', letterSpacing: '0.06em' }}>
                        tap to expand ↗
                      </div>
                    )}
                  </div>
                ) : (
                  <img
                    src={slide.image}
                    alt={slide.caption}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#f0eeeb', display: 'block', pointerEvents: 'none' }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Description */}
      <div style={{ marginBottom: 20 }}>
        <p style={{ fontFamily: font, fontSize: 15, color: '#2D2D2D', lineHeight: '26px', margin: 0, transition: 'opacity 0.3s' }}>
          {slides[currentIndex].description}
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          style={{
            width: 44, height: 44, borderRadius: '50%', border: 'none',
            background: '#fff', color: '#1a1a1a',
            cursor: currentIndex === 0 ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 3px 10px rgba(0,0,0,0.09)',
            transition: 'all 0.25s ease',
            opacity: currentIndex === 0 ? 0.3 : 1,
          }}
          onMouseEnter={e => { if (currentIndex !== 0) { e.currentTarget.style.background = '#2D2D2D'; e.currentTarget.style.color = '#fff' } }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1a1a1a' }}
        >
          <ChevronLeft size={20} />
        </button>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? 28 : 8,
                height: 8,
                borderRadius: 4,
                border: 'none',
                background: i === currentIndex ? '#2D2D2D' : 'rgba(45,45,45,0.2)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentIndex === slides.length - 1}
          style={{
            width: 44, height: 44, borderRadius: '50%', border: 'none',
            background: '#fff', color: '#1a1a1a',
            cursor: currentIndex === slides.length - 1 ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 3px 10px rgba(0,0,0,0.09)',
            transition: 'all 0.25s ease',
            opacity: currentIndex === slides.length - 1 ? 0.3 : 1,
          }}
          onMouseEnter={e => { if (currentIndex !== slides.length - 1) { e.currentTarget.style.background = '#2D2D2D'; e.currentTarget.style.color = '#fff' } }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#1a1a1a' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scattered photo overlay */}
      {groupOpen && (() => {
        const group = slides.find(s => s.group)!.group!
        const positions = [
          { top: '8%',  left: '4%',  rotate: -5 },
          { top: '12%', left: '34%', rotate:  2 },
          { top: '6%',  left: '62%', rotate: -3 },
        ]
        return (
          <div
            onClick={() => setGroupOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.55)',
              zIndex: 2000,
              backdropFilter: 'blur(6px)',
              cursor: 'zoom-out',
            }}
          >
            {group.images.map((img, j) => (
              <div
                key={j}
                onClick={e => e.stopPropagation()}
                style={{
                  position: 'absolute',
                  top: positions[j].top,
                  left: positions[j].left,
                  background: '#fff',
                  padding: '12px 12px 40px',
                  boxShadow: '0 16px 48px rgba(0,0,0,0.25)',
                  transform: `rotate(${positions[j].rotate}deg)`,
                  width: 'clamp(220px, 28vw, 340px)',
                  cursor: 'default',
                  animation: 'scatterIn 0.4s cubic-bezier(0.34,1.4,0.64,1) both',
                  animationDelay: `${j * 0.07}s`,
                }}
              >
                <img
                  src={img}
                  alt={group.labels[j]}
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'contain', display: 'block', background: '#f5f5f5' }}
                />
                <div style={{ fontFamily: font, fontSize: 11, color: 'rgba(45,45,45,0.5)', textAlign: 'center', marginTop: 8, letterSpacing: '0.04em' }}>
                  {group.labels[j]}
                </div>
              </div>
            ))}
            <div style={{ position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)', fontFamily: font, fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em' }}>
              click anywhere to close
            </div>
            <style>{`
              @keyframes scatterIn {
                from { opacity: 0; transform: scale(0.7) rotate(var(--r, 0deg)); }
                to   { opacity: 1; }
              }
            `}</style>
          </div>
        )
      })()}
    </div>
  )
}
