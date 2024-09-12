import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Landing from './components/Landing.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Landing />
    <About />
    <Experience />
    <Projects />
    <Contact />
    {/* <App /> */}
  </StrictMode>,
)
