import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="Contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-transparent bg-clip-text">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - 3D Spline Scene */}
          <div className="relative">
            {/* Spline 3D Container */}
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 shadow-2xl">
              {/* Custom 3D Scene - Floating Geometric Crystals */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Main Crystal */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rotate-45 animate-spin-slow">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400/80 to-cyan-400/80 backdrop-blur-sm border border-white/30 shadow-2xl"></div>
                  </div>
                  
                  {/* Floating Crystals */}
                  <div className="absolute top-16 left-16 w-16 h-16 rotate-12 animate-float bg-gradient-to-br from-pink-400/60 to-purple-400/60 backdrop-blur-sm border border-white/20 shadow-xl"></div>
                  
                  <div className="absolute top-20 right-20 w-12 h-12 rotate-45 animate-float-delayed bg-gradient-to-br from-cyan-400/60 to-blue-400/60 backdrop-blur-sm border border-white/20 shadow-xl"></div>
                  
                  <div className="absolute bottom-16 left-20 w-20 h-20 rotate-12 animate-bounce-slow bg-gradient-to-br from-purple-400/60 to-pink-400/60 backdrop-blur-sm border border-white/20 shadow-xl"></div>
                  
                  <div className="absolute bottom-20 right-16 w-14 h-14 rotate-45 animate-pulse bg-gradient-to-br from-cyan-400/60 to-purple-400/60 backdrop-blur-sm border border-white/20 shadow-xl"></div>
                  
                  {/* Orbiting Particles */}
                  <div className="absolute inset-0 animate-spin-reverse">
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-white/60 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400/60 rounded-full transform -translate-x-1/2"></div>
                    <div className="absolute left-0 top-1/2 w-3 h-3 bg-cyan-400/60 rounded-full transform -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-3 h-3 bg-pink-400/60 rounded-full transform -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📧
                </div>
                <h3 className=" font-semibold mb-1">Email</h3>
                <p className=" text-sm text-center">awickpandey@gmail.com</p>
              </div>

              <div className="flex flex-col items-center p-4 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center  text-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📱
                </div>
                <h3 className=" font-semibold mb-1">Phone</h3>
                <p className=" text-sm text-center">+91 827####805</p>
              </div>

              <div className="flex flex-col items-center p-4 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-pink-400/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  📍
                </div>
                <h3 className=" font-semibold mb-1">Location</h3>
                <p className=" text-sm text-center">Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="group">
                <label className="block text-white font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="group">
                <label className="block text-white font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-400/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full py-4 px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-12">
              <a href="https://www.instagram.com/awickpanday/" className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-purple-500/20 hover:border-purple-400/50 hover:scale-110 transition-all duration-300">
                <span className="text-xl"><FaInstagram /></span>
              </a>
              <a href="https://github.com/AveeckPandey" className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:scale-110 transition-all duration-300">
                <span className="text-xl"><FaGithub /></span>
              </a>
              <a href="https://www.linkedin.com/in/aveeck-pandey/" className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-pink-500/20 hover:border-pink-400/50 hover:scale-110 transition-all duration-300">
                <span className="text-xl"><FaLinkedin /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact