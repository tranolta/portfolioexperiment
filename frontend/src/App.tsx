import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Lenis from 'lenis'
import CustomCursor from './components/CustomCursor'
import HomePage     from './pages/HomePage'
import WorkPage     from './pages/WorkPage'
import HobbiesPage  from './pages/HobbiesPage'

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
}

export default function App() {
  useLenis()

  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/work"    element={<WorkPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
      </Routes>
    </MotionConfig>
  )
}
