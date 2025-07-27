import { FaJava,FaFigma, FaGithub,FaDocker } from "react-icons/fa";
import { 
  SiPython, 
  SiReact, 
  SiExpress, 
  SiNodedotjs, 
  SiMongodb, 
  SiJavascript, 
  SiTypescript, 
  SiMysql,
  SiNumpy,
  SiPandas,
  SiApachespark,
  SiJupyter,
  SiPostman,
  SiFlask,
  SiFastapi
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

const TechStach = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        <span key="cpp" className="flex items-center gap-2">C++</span>,
        <span key="python" className="flex items-center gap-2">Python <SiPython /></span>,
        <span key="java" className="flex items-center gap-2">Java (Basic) <FaJava /></span>,
        <span key="sql" className="flex items-center gap-2">SQL <DiMsqlServer/></span>
      ],
      gradient: "from-purple-400/20 to-pink-400/20",
      border: "border-purple-400/30",
      iconColor: "text-purple-300"
    },
    {
      title: "Web Development", 
      skills: [
        <div key="web-skills" className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className="flex items-center gap-2">React <SiReact/></span>
          <span className="flex items-center gap-2">Express.js <SiExpress/></span>
          <span className="flex items-center gap-2">Node.js <SiNodedotjs/></span>
          <span className="flex items-center gap-2">MongoDB <SiMongodb/></span>
          <span className="flex items-center gap-2">JavaScript <SiJavascript/></span>
          <span className="flex items-center gap-2">TypeScript <SiTypescript/></span>
          <span className="flex items-center gap-2">MySQL <SiMysql/></span>
          <span className="flex items-center gap-2">FastAPI <SiFastapi /></span>
          <span className="flex items-center gap-2">Flask <SiFlask/></span>
        </div>
      ],
      gradient: "from-teal-400/20 to-cyan-400/20",
      border: "border-teal-400/30",
      iconColor: "text-teal-300"
    },
    {
      title: "Data Science & Tools",
      skills: [
        <div key="web-skills" className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className='flex items-center gap-2'>Numpy<SiNumpy/></span>
          <span className='flex items-center gap-2'>Pandas<SiPandas/></span>
          <span className='flex items-center gap-2'>Matplotlib</span>
          <span className='flex items-center gap-2'>Basic Data Analytics(PowerBi)  </span>
          <span className='flex items-center gap-2'>Apach Spark <SiApachespark/> </span>
          <span className='flex items-center gap-2'>
            Jupyter notebook <SiJupyter/> </span>

        </div>
      ],
      gradient: "from-red-400/20 to-orange-400/20", 
      border: "border-red-400/30",
      iconColor: "text-red-300"
    },
    {
      title: "Tools & Methodologies",
      skills: [
                <div key="web-skills" className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <span className='flex items-center gap-2'>Figma <FaFigma /> </span>
          <span className='flex items-center gap-2'>Docker<FaDocker/></span>
          <span className='flex items-center gap-2'>PostMan<SiPostman/></span>
          <span className='flex items-center gap-2'>Git & GitHUb <FaGithub /></span>


        </div>
      ],
      gradient: "from-blue-400/20 to-indigo-400/20",
      border: "border-blue-400/30", 
      iconColor: "text-blue-300"
    }
  ];

  return (
    <section id="Skills" className="py-20 px-4 relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-pink-400 text-transparent bg-clip-text">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br ${category.gradient} border ${category.border} hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-3 h-8 ${category.gradient.replace('/20', '')} rounded-full mr-4`}></div>
                  <h3 className={`text-2xl font-bold ${category.iconColor} group-hover:text-white transition-colors duration-300`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                      style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className={`w-2 h-2 rounded-full ${category.gradient.replace('/20', '/60')} mr-4 group-hover:scale-150 transition-transform duration-300`}></div>
                      <span className=" text-lg font-medium group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-3 h-3 rounded-full bg-purple-400/60"></div>
          <div className="w-3 h-3 rounded-full bg-teal-400/60"></div>
          <div className="w-3 h-3 rounded-full bg-pink-400/60"></div>
        </div>
      </div>
    </section>
  )
}

export default TechStach;