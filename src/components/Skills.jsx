import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import CardContainer from './common/CardContainer';
import Button from './common/Button';

const Skills = () => {
  // Sample skills data - replace with your actual skills and proficiency
  const skills = [
    {
      id: 1,
      skill: "React",
      description:
        "Proficient in building user interfaces and interactive web applications using React library.",
      icon: FaReact
    },
    {
      id: 2,
      skill: "JavaScript (ES6+)",
      description:
        "Strong understanding of modern JavaScript features and asynchronous programming.",
      icon: FaJs
    },
    {
      id: 3,
      skill: "Vite",
      description:
        "Experience with Vite build tool for modern web development and fast project setup.",
      icon: SiVite
    },
    {
      id: 4,
      skill: "Tailwind CSS",
      description:
        "Experience building responsive and mobile-first designs with Tailwind CSS utility-first framework.",
      icon: RiTailwindCssFill
    },
    // Add more skills as needed
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-out',
      once: true,     // Whether animation should happen only once
    });
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen w-screen overflow-hidden bg-black relative py-12 sm:py-20"
    >
      {/* Optional: Remove background pulses by commenting out or deleting the code below */}
      {/*
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
      </div>
      */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            My Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-400">
            A quick overview of my technical skills and areas of expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <CardContainer
              key={skill.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="p-4 sm:p-6 w-full">
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon && (
                    <skill.icon className="text-gray-300" size={24} />
                  )}
                  <h3 className="text-xl font-semibold text-white">
                    {skill.skill}
                  </h3>
                </div>
                <p className="text-gray-400">
                  {skill.description}
                </p>
              </div>
            </CardContainer>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="200">
          <Button
            variant="secondary"
            className="border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-md"
          >
            View More Skills (Coming Soon)
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
