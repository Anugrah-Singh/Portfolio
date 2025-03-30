import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-out',
      once: true,     // whether animation should happen only once - while scrolling down
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-black relative pt-16 md:pt-20 pb-10"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-16">
          
          {/* Left side */}
          <div 
            className="flex-1 space-y-4 sm:space-y-8 text-center md:text-left" 
            data-aos="fade-right"
          >
            <div className="space-y-2">
              <div className="inline-block">
                <span className="text-sm font-medium text-gray-400 mb-2 block">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <span className="text-white">Hi, I&apos;m </span>
                <span className="text-white">Anugrah</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-200">
                Software Engineer
              </h2>
            </div>

            <p 
              className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              I build exceptional digital experiences with a focus on responsive design 
              and clean, efficient code. Passionate about creating innovative solutions 
              that make a difference.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center gap-4" 
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <button 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center gap-2 justify-center">
                  View Projects
                  <span className="transition-transform duration-300">→</span>
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3 border-2 border-white hover:border-gray-300 text-white hover:text-gray-300 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-black"
              >
                <span className="flex items-center gap-2 justify-center">
                  Contact Me
                  <span className="transition-transform duration-300">→</span>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div 
              className="flex justify-center md:justify-start gap-6 pt-6" 
              data-aos="fade-up" 
              data-aos-delay="600"
            >
              <a 
                href="https://linkedin.com/in/anugrah-singh-a04b18356" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://github.com/Anugrah-Singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Github size={28} />
              </a>
              <a 
                href="mailto:anugrahsinngh@gmail.com"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={28} />
              </a>
              <a 
                href="https://x.com/anugahsingh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaXTwitter size={28} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center" data-aos="zoom-in">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 relative group">
              <div className="relative w-full h-full rounded-full border-2 border-gray-700 overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
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
