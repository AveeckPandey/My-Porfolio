import {motion} from 'framer-motion';
import { Suspense, lazy } from 'react';

// Lazy load the Spline component to improve initial load performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  return (
    <section id="Hero" className="h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-gray  flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      
      {/* Text Content - Left Side */}
      <div className='z-40 xl:mb-0 mb-[20%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl xl:w-1/2'>
        <motion.h1
        initial ={{opacity:0 , y:40}}
        animate ={{opacity:1 , y:0}}
        transition={{
          type:"spring",
          stiffness:30,
          damping:20,
          duration:1,
        }}
         className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">Hello
        <span className="bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text"> I'm Aveeck!</span>
        </motion.h1>
        <motion.p
        initial ={{opacity:0 , y:40}}
        animate ={{opacity:1 , y:0}}
        transition={{
          type:"spring",
          stiffness:30,
          damping:20,
          duration:1,
          delay: 0.2,
        }}
        className='text-xl md:text-1xl lg:text-2xl z-10'>
       I love software development, machine learning and deep learning. Want to discuss regarding any project or just want to say a Hi? I am always available to listen you :)
        </motion.p>
      </div>

      {/* Spline 3D Model - Right Side */}
      <div className="xl:w-3/4 w-full h-full relative">
        <Suspense fallback={
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center">
            <div className="text-white text-xl">Loading 3D Model...</div>
          </div>
        }>
          <Spline 
            className='absolute inset-0 w-full h-full' 
            scene="https://prod.spline.design/HX-ZH4s676nZmChA/scene.splinecode" 
          />
        </Suspense>
      </div>

    </section>
  )
}

export default Hero