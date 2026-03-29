import Nav          from './components/Nav'
import Header       from './components/sections/Header'
import Skills       from './components/sections/Skills'
import Logos        from './components/sections/Logos'
import Work         from './components/sections/Work'
import AboutSection from './components/sections/AboutSection'
import Footer       from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Nav />
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
