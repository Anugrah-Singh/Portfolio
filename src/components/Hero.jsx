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
      className="min-h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative pt-16 md:pt-20 pb-10"
    >
      {/* Animated background - adjusted sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-16">
          {/* Left side - Enhanced text content */}
          <div className="flex-1 space-y-4 sm:space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="inline-block">
                <span className="text-sm font-medium text-purple-400 mb-2 block motion-safe:animate-slideUp">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold motion-safe:animate-fadeIn">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text motion-safe:animate-gradient">
                  Anugrah
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 motion-safe:animate-slideUp">
                Software Engineer
              </h2>
            </div>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl motion-safe:animate-slideUp [animation-delay:200ms] leading-relaxed">
              I build exceptional digital experiences with a focus on responsive design 
              and clean, efficient code. Passionate about creating innovative solutions 
              that make a difference.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 motion-safe:animate-slideUp [animation-delay:300ms]">
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 group"
              >
                <span className="flex items-center gap-2 justify-center">
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3 border-2 border-purple-500/30 hover:border-purple-400 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-900/20 bg-black/50 backdrop-blur-sm group"
              >
                <span className="flex items-center gap-2 justify-center">
                  Contact Me
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center md:justify-start gap-6 pt-6 motion-safe:animate-slideUp [animation-delay:400ms]">
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
          <div className="flex-1 flex justify-center motion-safe:animate-slideUp [animation-delay:500ms]">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 relative group">
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
                  loading="lazy"
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
