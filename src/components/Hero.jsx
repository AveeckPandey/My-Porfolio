import {motion} from 'framer-motion';
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <section id="Hero" className="h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-gray  flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      
      {/* Text Content - Left Side */}
      <div className='z-40 xl:mb-0 mb-[20%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl xl:w-1/2'>
        <motion.h1
        initial ={{opacity:0 , y:80}}
        animate ={{opacity:1 , y:0}}
        transition={{
          type:"spring",
          stiffness:40,
          damping:25,
          duration:1.5,
        }}
         className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6">Hello
        <span className="bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text"> I'm Aveeck!</span>
        </motion.h1>
        <motion.p
        initial ={{opacity:0 , y:80}}
        animate ={{opacity:1 , y:0}}
        transition={{
          type:"spring",
          stiffness:40,
          damping:25,
          duration:1.5,
        }}
        className='text-xl md:text-1xl lg:text-2xl z-10'>
       I love software development, machine learning and deep learning. Want to discuss regarding any project or just want to say a Hi? I am always available to listen you :)
        </motion.p>
      </div>

      {/* Spline 3D Model - Right Side */}
      <div className="xl:w-3/4 w-full h-full relative">
        <Spline 
          className='absolute inset-0 w-full h-full' 
          scene="https://prod.spline.design/HX-ZH4s676nZmChA/scene.splinecode" 
        />
      </div>

    </section>
  )
}

export default Hero