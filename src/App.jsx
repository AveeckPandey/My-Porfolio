import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/skills.jsx'
import Contact from './components/Contact'
import Projects from './components/Projects.jsx'
import ComingSoon from './components/ComingSoon.jsx'


const App = () => {
  return (
    
    <div className=' container mx-auto'>
      <Navbar/> 
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App
