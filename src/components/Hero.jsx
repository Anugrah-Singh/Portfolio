import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden pt-20"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/30 via-blue-600/20 to-indigo-600/30 mix-blend-multiply animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Left side - Enhanced text content */}
          <div className="flex-1 space-y-6 sm:space-y-10 text-center md:text-left">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-purple-400 mb-2 block animate-slideUp">Welcome to my portfolio</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate-fadeIn">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
                  Anugrah
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300 animate-slideUp">
                Software Engineer
              </h2>
            </div>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl animate-slideUp [animation-delay:200ms] leading-relaxed">
              I build exceptional digital experiences with a focus on responsive design 
              and clean, efficient code. Passionate about creating innovative solutions 
              that make a difference.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-6 animate-slideUp [animation-delay:300ms]">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-purple-500/30 hover:border-purple-400 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-900/20 bg-black/50 backdrop-blur-sm group"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-8 pt-6 animate-slideUp [animation-delay:400ms]">
              <a 
                href="https://github.com/Anugrah-Singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Github size={28} />
              </a>
              <a 
                href="mailto:anugrahsinngh@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={28} />
              </a>
              <a 
                href="https://x.com/anugahsingh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaXTwitter size={28} />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex-1 flex justify-center animate-slideUp [animation-delay:500ms]">
            <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] relative group animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-500"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full border-2 border-purple-500/20 overflow-hidden transform transition-transform duration-500 group-hover:scale-105 group-hover:border-purple-400/50">
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Profile image */}
                <img
                  src="https://github.com/Anugrah-Singh.png"
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;