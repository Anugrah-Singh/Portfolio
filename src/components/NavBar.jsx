// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10 opacity-30"></div>
      {/* Background with gradient animation */}
      <div className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 left-0 w-72 h-72 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute -top-20 right-0 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Left side */}
          <div className="flex items-center space-x-3 group">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-800 to-purple-800 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <span className="text-gray-400 font-medium group-hover:text-purple-400 transition-colors duration-300">Open to work</span>
          </div>

          {/* Right side navigation */}
          <div className="flex space-x-8">
            {['Home', 'Projects', 'Skills', 'Path'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-105 relative group px-4 py-2 rounded-lg hover:bg-purple-500/10"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-purple-800 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;