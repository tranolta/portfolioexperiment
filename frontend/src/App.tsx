import { Routes, Route } from 'react-router-dom'
import Header       from './components/sections/Header'
import Skills       from './components/sections/Skills'
import Logos        from './components/sections/Logos'
import Work         from './components/sections/Work'
import AboutSection from './components/sections/AboutSection'
import Footer       from './components/sections/Footer'
import WorkPage     from './pages/WorkPage'
import HobbiesPage  from './pages/HobbiesPage'

function Home() {
  return (
    <>
      <main>
        <Header />
        <Skills />
        <Logos />
        <Work />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/work"     element={<WorkPage />} />
      <Route path="/hobbies"  element={<HobbiesPage />} />
    </Routes>
  )
}
