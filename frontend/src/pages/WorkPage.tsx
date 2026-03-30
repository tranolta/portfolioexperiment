import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'
import { workGroups } from '../data/work'

export default function WorkPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({})

  const toggle = (id: string) =>
    setOpenGroups(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <>
      <Nav />
      <main>
        <section className="work" id="work" style={{ paddingBottom: 120 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 60 }}>
            <Link to="/" style={{ fontFamily: 'Epilogue, sans-serif', fontSize: 14, color: 'rgba(45,45,45,0.45)', textDecoration: 'none' }}>
              ← Back
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 12 }}>
            <h2 className="work__title" style={{ margin: 0 }}>My professional work</h2>
            <img src="/images/thanku.png" alt="thank u" style={{ width: 72, height: 72, objectFit: 'contain' }} />
          </div>
          <p style={{
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 400,
            fontSize: 15,
            color: 'rgba(45,45,45,0.45)',
            textAlign: 'center',
            marginBottom: 48,
            fontStyle: 'italic',
          }}>
            This page is a work in progress, thank you for being patient
          </p>

          {workGroups.map((group, i) => {
            const isOpen = !!openGroups[group.id]
            return (
              <div
                key={group.id}
                style={{
                  width: '100vw',
                  position: 'relative',
                  left: '50%',
                  right: '50%',
                  marginLeft: '-50vw',
                  marginRight: '-50vw',
                  borderTop: i === 0 ? '1.5px solid rgba(45,45,45,0.1)' : 'none',
                  borderBottom: '1.5px solid rgba(45,45,45,0.1)',
                  background: isOpen ? group.color : 'transparent',
                  transition: 'background 0.3s ease',
                  marginBottom: 0,
                }}
              >
                <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
                  {/* Collapsible header */}
                  <button
                    onClick={() => toggle(group.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'Epilogue, sans-serif',
                      textAlign: 'left',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <img
                        src={group.logo}
                        alt={group.groupTitle}
                        style={{ height: 28, width: 'auto', objectFit: 'contain', opacity: 0.85 }}
                      />
                      <span style={{ fontWeight: 600, fontSize: 20, color: '#2D2D2D' }}>
                        {group.groupTitle}
                      </span>
                    </div>
                    <span style={{
                      fontSize: 13,
                      color: 'rgba(45,45,45,0.4)',
                      display: 'inline-block',
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}>▼</span>
                  </button>

                  {/* Collapsible content */}
                  <div style={{
                    overflow: 'hidden',
                    maxHeight: isOpen ? '2000px' : '0px',
                    transition: 'max-height 0.5s ease',
                  }}>
                    <div style={{ padding: '40px 24px 40px' }}>
                      {group.projects.length > 0 && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
                          {group.projects.map(project => (
                            <ProjectCard key={project.id} card={project} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </section>
      </main>
    </>
  )
}
