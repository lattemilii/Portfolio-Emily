import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.tsx'
import Contact from './Contact.tsx'
import AboutMe from './AboutMe.tsx'
import Projects from './Projects.tsx'
import Skills from './Skills.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='relative min-h-screen'>
      <div className="absolute inset-0 bg-[url('/paper.jpg')] bg-cover opacity-30 mix-blend-multiply pointer-events-none"/>  
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>  
    </div>
  </StrictMode>,
)
