import { useState, useEffect } from 'react'
import type { Card } from '../data/work'
import CampusVisionTechStack from './CampusVisionTechStack'
import ChalmersGoTechStack from './ChalmersGoTechStack'
import CampusFlowTechStack from './CampusFlowTechStack'

export default function ProjectCard({ card }: { card: Card }) {
  const [open, setOpen] = useState(false)
  const [techOpen, setTechOpen] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        style={{
          width: '100%',
          fontFamily: 'Epilogue, sans-serif',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            width: '100%',
            height: 300,
            background: card.image
              ? 'none'
              : 'repeating-linear-gradient(45deg, rgba(45,45,45,0.05), rgba(45,45,45,0.05) 10px, rgba(45,45,45,0.02) 10px, rgba(45,45,45,0.02) 20px)',
            border: card.image ? 'none' : '1.5px dashed rgba(45,45,45,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
        >
          {card.image ? (
            <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', border: '1px solid #2D2D2D' }} />
          ) : (
            <>
              <span style={{ fontSize: 40, opacity: 0.15 }}>📷</span>
              <span style={{
                position: 'absolute',
                bottom: 12,
                right: 14,
                fontSize: 11,
                opacity: 0.3,
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                img coming soon
              </span>
            </>
          )}
        </div>
        <div style={{ marginTop: 14 }}>
          <h4 style={{ fontWeight: 600, fontSize: 17, color: '#2D2D2D', marginBottom: 4 }}>
            {card.title}
          </h4>
          <p style={{ fontSize: 13, color: 'rgba(45,45,45,0.5)', fontWeight: 400 }}>
            {card.tagline} →
          </p>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 12px',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff',
              maxWidth: 1300,
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '48px 52px',
              position: 'relative',
              fontFamily: 'Epilogue, sans-serif',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: 'absolute',
                top: 20,
                right: 24,
                background: 'none',
                border: 'none',
                fontSize: 22,
                cursor: 'pointer',
                color: 'rgba(45,45,45,0.4)',
                lineHeight: 1,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2D2D2D')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(45,45,45,0.4)')}
            >
              ✕
            </button>

            <p style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(45,45,45,0.35)',
              marginBottom: 10,
            }}>
              Project
            </p>
            <h2 style={{
              fontWeight: 600,
              fontSize: 26,
              color: '#2D2D2D',
              marginBottom: 8,
            }}>
              {card.title}
            </h2>
            <p style={{
              fontSize: 13,
              color: 'rgba(45,45,45,0.45)',
              marginBottom: 32,
              fontStyle: 'italic',
            }}>
              {card.tagline}
            </p>
            <div style={{
              borderTop: '1px solid rgba(45,45,45,0.08)',
              paddingTop: 28,
              display: 'flex',
              gap: 28,
              alignItems: 'flex-start',
            }}>
              {(card.video || card.image) && (
                <div style={{ flexShrink: 0 }}>
                  {card.video ? (
                    <video
                      src={card.video}
                      controls
                      style={{ width: 340, display: 'block', border: '1px solid #2D2D2D' }}
                    />
                  ) : (
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: 240, display: 'block', border: '1px solid #2D2D2D' }}
                    />
                  )}
                  <p style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontSize: 11,
                    color: 'rgba(45,45,45,0.45)',
                    fontStyle: 'italic',
                    marginTop: 6,
                    width: card.video ? 340 : 240,
                  }}>
                    {card.video ? 'Demo' : 'Early Iteration of app'}
                  </p>
                </div>
              )}
              <div>
                {card.description.split('\n\n').map((para, i) => (
                  <p key={i} style={{
                    fontSize: 15,
                    color: 'rgba(45,45,45,0.75)',
                    lineHeight: '26px',
                    marginBottom: 18,
                  }}>
                    {para}
                  </p>
                ))}
                {card.hasTechStack && (
                  <button
                    onClick={e => { e.stopPropagation(); setTechOpen(true) }}
                    style={{
                      marginTop: 8,
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 600,
                      fontSize: 13,
                      color: '#2D2D2D',
                      background: 'none',
                      border: '1.5px solid #2D2D2D',
                      padding: '8px 20px',
                      cursor: 'pointer',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.5')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Tech Stack
                  </button>
                )}
              </div>

              {/* Tech Stack nested modal */}
              {techOpen && (
                <div
                  onClick={e => { e.stopPropagation(); setTechOpen(false) }}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)',
                    zIndex: 1100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 24px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <div
                    onClick={e => e.stopPropagation()}
                    style={{
                      maxWidth: 900,
                      width: '100%',
                      maxHeight: '90vh',
                      overflowY: 'auto',
                      position: 'relative',
                    }}
                  >
                    <button
                      onClick={() => setTechOpen(false)}
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 16,
                        background: 'none',
                        border: 'none',
                        fontSize: 22,
                        cursor: 'pointer',
                        color: 'rgba(45,45,45,0.5)',
                        zIndex: 10,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#2D2D2D')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(45,45,45,0.5)')}
                    >
                      ✕
                    </button>
                    {card.id === 'chalmers-go' ? <ChalmersGoTechStack /> : card.id === 'campus-flow' ? <CampusFlowTechStack /> : <CampusVisionTechStack />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
