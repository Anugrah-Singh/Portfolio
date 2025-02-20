import React from 'react';
import { School2 } from 'lucide-react';
import CardContainer from './common/CardContainer';

const Path = () => {
    const pathItems = [
        {
            id: 1,
            type: "education",
            title: "Bachelor of Engineering in Computer Science",
            company: "Acharya Institute of Technology",
            dateRange: "2023 - 2027",
            description: "Software Engineering",
            icon: School2
        },
    ];

    return (
        <section id="path" className="min-h-screen bg-[#000000] relative overflow-hidden py-20">
            <div className="absolute inset-0 bg-[#000000]">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
                    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 animate-fadeIn">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
                            My Path
                        </span>
                    </h2>
                    <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto">
                        Discover my professional path and experiences.
                    </p>
                </div>

                <div className="relative w-full">
                    <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gray-800 transform md:-translate-x-1/2"></div>

                    {pathItems.map((item, index) => (
                        <div key={item.id} className="mb-8 md:mb-12 relative animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex items-center">
                                <div className="w-4 h-4 rounded-full bg-purple-400 z-10"></div>
                                <CardContainer>
                                    <div className="w-full md:w-1/2 md:ml-auto pl-8 md:pl-12 ml-4 md:ml-8 p-4 md:p-6 bg-black/30 backdrop-blur-md border-2 border-gray-800/50 rounded-lg hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-200">{item.title}</h3>
                                        <h4 className="text-gray-500 font-medium">{item.company}</h4>
                                        <p className="text-gray-500 mt-2">{item.dateRange}</p>
                                        <p className="text-gray-500 mt-3">{item.description}</p>
                                    </div>
                                </CardContainer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Path;