import React, { useState } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import CardContainer from './common/CardContainer';
import Button from './common/Button';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Rio Blog",
      description: "A simple blog application built with React, Vite, and Appwrite for backend services.",
      tags: ["React", "Vite", "Appwrite", "Tailwind"],
      githubLink: "https://github.com/Anugrah-Singh/Blog",
      liveLink: "https://rioblog.vercel.app/",
      image: "/api/placeholder/600/400"
    },
    // {
    //   id: 2,
    //   title: "Another Project",
    //   description: "Description of another impressive project showcasing different skills and technologies.",
    //   tags: ["TypeScript", "Next.js", "Tailwind"],
    //   githubLink: "https://github.com/yourusername/project2",
    //   liveLink: "https://project2-demo.com",
    //   image: "/api/placeholder/600/400"
    // },
    // Add more projects as needed
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen bg-[#000000] relative overflow-hidden py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[#000000]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <CardContainer key={project.id} style={{ animationDelay: `${index * 100}ms` }}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-4 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-gray-500 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="text-purple-400" size={20} />
                  <h3 className="text-xl font-semibold text-gray-200">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-500 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black/30 backdrop-blur-md border border-gray-700/50 text-gray-400 text-sm rounded-full hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContainer>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="secondary">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;