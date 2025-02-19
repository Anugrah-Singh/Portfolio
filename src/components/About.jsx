import React from 'react';
import { Github, Download, Instagram } from 'lucide-react'; // Icons - Download and Youtube are added

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
                        About Me
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Here you can find a little bit about me. I am a passionate designer and developer!
                    </p>
                </div>

                {/* About Content Grid - 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Column 1 */}
                    <div className="grid grid-cols-1 gap-8">
                        {/* Card 1: Profile and Name */}
                        <div className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4">
                            <div className="w-20 h-20 rounded-full overflow-hidden">
                                <img
                                    src="https://github.com/Anugrah-Singh.png" // Placeholder profile image
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-100">Anugrah Singh</h3> {/* Replace with your name */}
                                <p className="text-gray-400">Anugrah-Singh</p> {/* Replace with your username/handle */}
                            </div>
                        </div>

                        {/* Card 2: Curriculum Vitae */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-100">My Curriculum Vitae</h3>
                                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    <Download size={20} />
                                </a>
                            </div>
                            <div className="bg-gray-700 rounded-md p-3 text-center hover:bg-blue-700 transition-colors cursor-pointer">
                                <p className="text-gray-300">Hover to download</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="grid grid-cols-1 gap-8">
                        {/* Card 3: Public Projects Count */}
                        {/* <div className="bg-gray-800 rounded-lg p-6"> */}
                            {/* <div className="flex items-center justify-between"> */}
                                {/* <h3 className="text-xl font-semibold text-gray-100">5 publics projects</h3> Replace with dynamic project count */}
                                {/* <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors"> */}
                                    {/* <Github size={20} /> */}
                                {/* </a> */}
                            {/* </div> */}
                        {/* </div> */}

                        {/* Card 4: Videographer Info */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <div className="flex items-start justify-between mb-4"> {/* items-start for top alignment */}
                                <h3 className="text-xl font-semibold text-gray-100">I am also a videographer</h3>
                                <a href="https://www.instagram.com/anugrahsinngh?igsh=MWhqdmZpNjRqcDd0dQ==" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    <Instagram size={20} />
                                </a>
                            </div>
                            <p className="text-gray-400">Check out my content on Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;