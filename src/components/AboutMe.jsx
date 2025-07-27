import { Download, User, Code, Briefcase, Database, Palette } from 'lucide-react'

const AboutMe = () => {
  return (
    <section id="About" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            ABOUT{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text animate-pulse">
              ME
            </span>
            <span className="text-pink-400">!</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="
        
        grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text & Buttons */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <div className="space-y-6 leading-relaxed">
                <p className="text-lg">
                  <span className="text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                    I'm a Final-year B.Tech student
                  </span>{' '}
                  at SRM University with a passion for building impactful solutions and continuously expanding my technical skillset.
                </p>
                
                <p className="text-lg">
                  My core strengths lie{' '}
                  <span className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
                    in C++ and Python
                  </span>
                  , and I also have a foundational understanding of Java.
                </p>

                <p className="text-lg">
                  As a{' '}
                  <span className="font-semibold text-emerald-400 bg-emerald-400/20 px-2 py-1 rounded">
                    React developer
                  </span>
                  , I've gained hands-on experience crafting responsive and user-friendly interfaces for both mobile and web platforms.
                </p>

                <p className="text-lg">
                  This expertise in front-end development is now complemented by my current deep dive into the world of{' '}
                  <span className="font-semibold text-blue-400 bg-blue-400/20 px-2 py-1 rounded">
                    data science
                  </span>
                  .
                </p>

                <p className="text-lg">
                  Beyond the code, I'm an introvert individual who values learning and personal growth. I enjoy immersing myself in books, constantly seeking new knowledge and perspectives that fuel my desire to tackle challenging problems and contribute to innovative projects.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/25 flex items-center justify-center gap-3"
              >
                Get in touch
                <User className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a
                href="path/to/your/resume.pdf"
                className="group px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gradient hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 flex items-center justify-center gap-3 "
                download="YourName_Resume.pdf"
              >
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:scale-105 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Code className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    Web Development
                  </h4>
                  <p className=" text-lg leading-relaxed">
                    Creating responsive websites and web applications with modern frameworks like React, focusing on performance and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group hover:scale-105 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Palette className="h-8 w-8 " />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    UI/UX Design
                  </h4>
                  <p className="text-lg leading-relaxed">
                    Designing intuitive user interfaces and seamless user experiences that combine aesthetics with functionality.
                  </p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group hover:scale-105 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <Database className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                    Data Science
                  </h4>
                  <p className=" text-lg leading-relaxed">
                    Exploring machine learning algorithms and data analysis techniques to extract insights and build predictive models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe