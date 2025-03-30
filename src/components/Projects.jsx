import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, ExternalLink, Folder } from 'lucide-react';
import CardContainer from './common/CardContainer';
import Button from './common/Button';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Rio Blog",
      description: "A simple blog application built with React, Vite, and Appwrite for backend services.",
      tags: ["React", "Vite", "Appwrite", "Tailwind"],
      githubLink: "https://github.com/Anugrah-Singh/Blog",
      liveLink: "https://rioblog.vercel.app/",
      image: "/image.png"  // Changed from "../../public/image.png"
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-out',
      once: true,     // animate only once while scrolling down
    });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black relative overflow-hidden py-20"
    >
      {/* Optional: Remove background pulses by commenting out the code below */}
      {/*
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        </div>
      </div>
      */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <CardContainer>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-4 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 rounded-full text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-black/50 rounded-full text-gray-300 hover:text-white transition-transform duration-300 hover:scale-110"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Folder className="text-gray-300" size={20} />
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-black/30 backdrop-blur-md border border-gray-700/50 text-gray-300 text-sm rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContainer>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <Button
            variant="secondary"
            className="border border-gray-400 text-gray-300 hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-md"
          >
            View More Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
