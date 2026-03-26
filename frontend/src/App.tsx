import Nav         from './components/Nav'
import Hero        from './components/sections/Hero'
import CurrentWork from './components/sections/CurrentWork'
import Experience  from './components/sections/Experience'
import FunProjects from './components/sections/FunProjects'

export default function App() {
  return (
    <>
      {/* Grain overlay */}
      <div id="grain" aria-hidden />

      <Nav />

      <main>
        {/* 01 — Hero */}
        <Hero />

        <div style={{ height: '1px', background: 'var(--c-border)' }} />

        {/* 03 — What I'm Currently Building */}
        <CurrentWork />

        <div style={{ height: '1px', background: 'var(--c-dark-border)' }} />

        {/* 04 — Professional Experience */}
        <Experience />

        <div style={{ height: '1px', background: 'var(--c-border)' }} />

        {/* 05 — Fun & Retired Projects */}
        <FunProjects />
      </main>
    </>
  )
}
