import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-out',
      once: true,     // animate only once on scroll
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Solid black background
    <nav 
      className="fixed top-0 left-0 w-full z-50 bg-black shadow-xl" 
      data-aos="fade-down"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Left side - 'Open to work' */}
          <div className="flex items-center space-x-3" data-aos="fade-right">
            {/* <div className="flex items-baseline">
              <span className="text-base md:text-lg text-white font-bold">
                Portfolio<span className="text-xs align-super font-medium">2024</span>
              </span>
              <span className="hidden md:inline-block text-xs text-gray-400 italic ml-2">
                Crafting Digital Experiences
              </span>
            </div> */}
            <div className="flex items-center space-x-1.5 ml-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm text-white font-medium">
                Open to work
              </span>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop menu items */}
          <div className="hidden md:flex space-x-8" data-aos="fade-left">
            {['Home', 'Projects', 'Skills', 'Path'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-105 relative group px-4 py-2 rounded-lg hover:bg-white/10"
              >
                {item}
                {/* Underline hover effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute top-16 left-0 right-0 bg-black" 
            data-aos="fade-down" 
            data-aos-delay="300"
          >
            {['Home', 'Projects', 'Skills', 'Path'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-4 text-lg text-white hover:text-gray-300 hover:bg-white/10 transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
