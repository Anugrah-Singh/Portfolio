// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Rio Blog",
      description: "A full-stack blog application built with React, Node.js, and MongoDB. Features include user authentication, CRUD operations, and more.",
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
    <section id="projects" className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-blue-600/20 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center gap-4 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-full text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900 rounded-full text-gray-300 hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="text-blue-500" size={20} />
                  <h3 className="text-xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-500 rounded-lg transition-colors duration-200">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;