import React from 'react';
import { Github, Download, Instagram } from 'lucide-react';
import CardContainer from './common/CardContainer';

const About = () => {
    return (
        <section 
            id="about" 
            className="min-h-screen w-screen overflow-hidden flex items-center justify-center bg-gradient-to-bl from-gray-900 via-black to-gray-900 py-20"
        >
            {/* Adjust background sizes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-4 w-64 sm:w-[32rem] h-64 sm:h-[32rem] bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-[32rem] h-[32rem] bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
                <div className="absolute -bottom-8 left-20 w-[32rem] h-[32rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
                            About Me
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Here you can find a little bit about me. I am a passionate designer and developer!
                    </p>
                </div>

                {/* About Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Update each card with new styling */}
                    <div className="grid grid-cols-1 gap-8">
                        <CardContainer>
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
                        </CardContainer>

                        <CardContainer>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-100">My Curriculum Vitae</h3>
                                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                                    <Download size={20} />
                                </a>
                            </div>
                            <div className="bg-gray-700 rounded-md p-3 text-center hover:bg-blue-700 transition-colors cursor-pointer">
                                <p className="text-gray-300">Hover to download</p>
                            </div>
                        </CardContainer>
                    </div>
                    <div className="grid grid-cols-1 gap-8 bg-black/20 backdrop-blur-xl border-2 border-gray-600 rounded-2xl p-6">
                        <div className="p-6 rounded-xl bg-black/20 shadow-md hover:shadow-2xl transition-transform transform hover:scale-[1.02] [animation-delay:300ms]">
                            <div className="flex items-start justify-between mb-4"> {/* items-start for top alignment */}
                                <h3 className="text-xl font-semibold text-gray-100">I am also a videographer</h3>
                            </div>
                            <p className="text-gray-400">Check out my content on Instagram</p>
                            <a href="https://www.instagram.com/anugrahsinngh?igsh=MWhqdmZpNjRqcDd0dQ==" className="text-gray-300 hover:text-blue-500 transition-colors">
                                <Instagram size={250} className=' object-center py-5'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;