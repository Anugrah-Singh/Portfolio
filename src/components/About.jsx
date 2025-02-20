import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, Download, Instagram } from 'lucide-react';
import CardContainer from './common/CardContainer';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-out',
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen w-screen overflow-hidden flex items-center justify-center bg-black py-20"
      data-aos="fade-up"
    >
      {/*
      Uncomment the code below if you still want the animated background elements:
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-64 sm:w-[32rem] h-64 sm:h-[32rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-[32rem] h-[32rem] bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-[32rem] h-[32rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
      </div>
      */}
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Here you can find a little bit about me. I am a passionate designer and developer!
          </p>
        </div>

        {/* About Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Profile and CV */}
          <div className="grid grid-cols-1 gap-8" data-aos="fade-right">
            <CardContainer>
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="https://github.com/Anugrah-Singh.png" // Placeholder profile image
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white">Anugrah Singh</h3>
                <p className="text-gray-400">Github : Anugrah-Singh</p>
              </div>
            </CardContainer>

            <CardContainer>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">My Curriculum Vitae</h3>
                <a href="#" className="text-gray-300 hover:text-gray-100 transition-colors">
                  <Download size={20} />
                </a>
              </div>
              <div className="bg-gray-800 rounded-md p-3 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                <p className="text-gray-300">Hover to download</p>
              </div>
            </CardContainer>
          </div>

          {/* Right Column: Videographer/Instagram Card */}
          <div
            className="grid grid-cols-1 gap-8 bg-black/30 border border-gray-600 rounded-2xl p-6"
            data-aos="fade-left"
          >
            <div className="p-6 rounded-xl bg-black/30 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">I am also a videographer</h3>
              </div>
              <p className="text-gray-400">Check out my content on Instagram</p>
              <a
                href="https://www.instagram.com/anugrahsinngh"
                className="text-gray-300 hover:text-gray-100 transition-colors"
              >
                <Instagram size={250} className="py-5 justify-center" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
