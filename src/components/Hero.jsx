// eslint-disable-next-line no-unused-vars
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
      className="min-h-screen pt-16 bg-gray-900 flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-gray-100">Hi, I&apos;m </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Anugrah
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
                Software Engineer
              </h2>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              I build exceptional digital experiences with a focus on responsive design 
              and clean, efficient code. Passionate about creating innovative solutions 
              that make a difference.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-500 rounded-lg transition-colors duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/Anugrah-Singh" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Github size={24} />
              </a>
              {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Linkedin size={24} />
              </a> */}
              <a href="mailto:anugrahsinngh@gmail.com"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <Mail size={24} />
              </a>
              <a href="https://x.com/anugahsingh" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-200">
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Right side - Profile/illustration container */}
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border-2 border-gray-800 overflow-hidden">
                <img
                  src="https://github.com/Anugrah-Singh.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
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