import React, { useState, useMemo, useCallback } from 'react';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Memoize projects data with actual GitHub URLs
  const projects = useMemo(() => [
    {
      id: 1,
      title: "My Portfolio",
      description: "Personal portfolio website showcasing my skills and projects",
      tech: ["React.js", "Tailwind"],
      github: "https://github.com/AveeckPandey/My-Porfolio",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-400/30",
      icon: "💼",
      size: "large"
    },
    {
      id: 2,
      title: "Multi-Prediction System",
      description: "ML system for multiple prediction scenarios",
      tech: ["Python", "ML", "FastAPI", "React"],
      github: "https://github.com/AveeckPandey/Multi-Prediction-System", // Add your actual repo URL
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/30",
      icon: "🔮",
      size: "medium"
    },
    {
      id: 3,
      title: "Movie App",
      description: "Movie discovery app with ratings and reviews",
      tech: ["React-Native", "Tailwind", "Neon"],
      github: "https://github.com/AveeckPandey/Movie-App", // Add your actual repo URL
      gradient: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-400/30",
      icon: "🎬",
      size: "small"
    },
    {
      id: 4,
      title: "Tumours Prediction System",
      description: "Medical AI system for tumor detection and prediction",
      tech: ["Python", "TensorFlow", "Medical AI"],
      github: "https://github.com/AveeckPandey/Tumours-Prediction-System", // Add your actual repo URL
      gradient: "from-red-500/20 to-orange-500/20",
      border: "border-red-400/30",
      icon: "🏥",
      size: "large"
    },
    {
      id: 5,
      title: "E-commerce Website",
      description: "Full-stack e-commerce platform with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/AveeckPandey/E-commerce-Website", // Add your actual repo URL
      gradient: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-400/30",
      icon: "🛒",
      size: "medium"
    },
    { 
      id: 6,
      title: "Voice Briefing App",
      description: "AI-powered voice briefing application",
      tech: ["React", "Speech API", "Node.js"],
      github: "https://github.com/AveeckPandey/Voice-Briefing-App", // Add your actual repo URL
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-400/30",
      icon: "🎤",
      size: "medium"
    },
    {
      id: 7,
      title: "Blogging Website",
      description: "Full-featured blogging platform with CMS",
      tech: ["React", "Express", "MySQL"],
      github: "https://github.com/AveeckPandey/Blogging-Website", // Add your actual repo URL
      gradient: "from-teal-500/20 to-cyan-500/20",
      border: "border-teal-400/30",
      icon: "📝",
      size: "small"
    },
    {
      id: 8,
      title: "Budget Tracker App",
      description: "Personal finance management and budget tracking",
      tech: ["React", "Charts", "LocalStorage"],
      github: "https://github.com/AveeckPandey/Budget-Tracker-App", // Add your actual repo URL
      gradient: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-400/30",
      icon: "💰",
      size: "medium"
    }
  ], []);

  // Memoize the grid classes function
  const getGridClasses = useCallback((size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-1';
      case 'medium':
        return 'md:col-span-1 md:row-span-1';
      case 'small':
        return 'md:col-span-1 md:row-span-1';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  }, []);

  // Handle GitHub link clicks
  const handleGitHubClick = useCallback((url, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Open in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  // Toggle show all projects
  const toggleShowAllProjects = useCallback(() => {
    setShowAllProjects(prev => !prev);
  }, []);

  // Memoize visible projects
  const visibleProjects = useMemo(() => 
    projects.slice(0, showAllProjects ? projects.length : 5), 
    [projects, showAllProjects]
  );

  return (
    <section id="Projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Optimized Background - Reduced blur intensity */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900">
        <div className="absolute top-32 left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br ${project.gradient} border ${project.border} hover:border-white/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 ${getGridClasses(project.size)}`}
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Header with Icon and GitHub */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Fixed GitHub Icon */}
                  <button
                    onClick={(e) => handleGitHubClick(project.github, e)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                    aria-label={`View ${project.title} on GitHub`}
                    type="button"
                  >
                    <svg 
                      className="w-5 h-5 text-white/80 hover:text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white/90 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Simplified Hover Effects */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              </div>
            </div>
          ))}
          
          {/* View More Projects Card */}
          {!showAllProjects && (
            <div
              onClick={toggleShowAllProjects}
              className="group relative p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-gray-400/30 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-gray-500/10 cursor-pointer md:col-span-1 md:row-span-1"
            >
              <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <div className="mb-4 p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <svg 
                    className="w-8 h-8 text-white/80 group-hover:text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gray-300 transition-colors duration-300 mb-2">
                  View More Projects
                </h3>
                <p className="text-gray-300 text-sm">
                  {projects.length - 5} more projects
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Show Less Button */}
        {showAllProjects && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAllProjects}
              className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25 flex items-center gap-2 mx-auto focus:outline-none focus:ring-2 focus:ring-gray-500/50"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Show Less Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;