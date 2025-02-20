import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: 'ease-out',
            once: true,     // Animate only once as you scroll
        });
    }, []);

    return (
        <section id="path" className="min-h-screen bg-black relative overflow-hidden py-20">
            {/*
                Animated background elements removed for a minimal design.
                Uncomment below if you want to restore them.
            
            <div className="absolute inset-0 bg-black">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                    <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
                    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
                </div>
            </div>
            */}
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        My Path
                    </h2>
                    <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
                        Discover my professional path and experiences.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative w-full">
                    <div className="absolute left-0 md:left-1/2 top-0 h-full w-0.5 bg-gray-600 transform md:-translate-x-1/2"></div>

                    {pathItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="mb-8 md:mb-12 relative"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="items-center w-auto">
                                <CardContainer variant="path border border-gray-600">
                                    <h3 className="text-lg md:text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <h4 className="text-gray-400 font-medium">
                                        {item.company}
                                    </h4>
                                    <p className="text-gray-400 mt-2">{item.dateRange}</p>
                                    <p className="text-gray-400 mt-3">{item.description}</p>
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
