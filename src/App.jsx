import { useEffect } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import TechStach from './components/TechStach'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact'

const App = () => {
  // Performance optimization: Preload critical resources
  useEffect(() => {
    // Preload critical fonts and resources
    const preloadLinks = [
      { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' },
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      Object.assign(linkElement, link);
      document.head.appendChild(linkElement);
    });

    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle scroll optimizations here if needed
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container mx-auto'>
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
