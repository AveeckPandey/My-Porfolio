import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechStach from './components/TechStach'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact'




const App = () => {
  return (
    
    <div className=' container mx-auto'>
      <Navbar/> 
      <Hero/>
      <AboutMe/>
      <TechStach/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App
