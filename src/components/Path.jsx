// eslint-disable-next-line no-unused-vars
import React from 'react';
import { School2 } from 'lucide-react'; // Importing icons (already present, keep them as they might be useful later)

const Path = () => {
    // Sample path data - replace with your actual experience/path
    const pathItems = [
        // {
        //     id: 1,
        //     type: "work", // or "education"
        //     title: "Senior Software Engineer",
        //     company: "Tech Innovations Co.", // Changed 'subtitle' to 'company' for clarity
        //     dateRange: "2022 - Present",
        //     description: "Led the development of a new cloud-based platform, resulting in a 40% increase in system efficiency. Mentored junior engineers and promoted best practices in agile development.",
        //     icon: Briefcase
        // },
        // {
        //     id: 2,
        //     type: "work",
        //     title: "Software Engineer",
        //     company: "Global Solutions Inc.", // Changed 'subtitle' to 'company' for clarity
        //     dateRange: "2020 - 2022",
        //     description: "Worked on a diverse range of projects, from web applications to mobile solutions, gaining expertise in full-stack development and cross-functional team collaboration.",
        //     icon: Briefcase
        // },
        {
            id: 1,
            type: "education",
            title: "BE in Computer Science",
            company: "VTU", // Using 'company' for University name for consistency in data structure
            dateRange: "2023 - 2027",
            description: "Software Engineering",
            icon: School2
        },
        // Add more path items as needed
    ];

    return (
        <section id="path" className="min-h-screen bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-6"> {/* Slightly wider max-w for timeline */}
                {/* Section Header */}
                <div className="text-center mb-12"> {/* Reduced mb for header to be closer to timeline */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2"> {/* Reduced mb for title */}
                        My Path
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover my professional path and experiences.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 top-6 md:top-8 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div> {/* Vertical line */}

                    {/* Timeline Items */}
                    {pathItems.map((item, index) => (
                        <div key={item.id} className="mb-8 md:mb-12 relative">
                            <div className="flex items-center">
                                {/* Timeline Circle */}
                                <div className="w-4 h-4 rounded-full bg-blue-500 z-10"></div>

                                {/* Timeline Item Card */}
                                <div className="ml-4 md:ml-8 p-4 md:p-6 bg-gray-800 rounded-lg shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-100">{item.title}</h3>
                                    <h4 className="text-gray-300 font-medium">{item.company}</h4> {/* Company as subtitle */}
                                    <p className="text-gray-400 mt-2">{item.dateRange}</p>
                                    <p className="text-gray-400 mt-3">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No "View More" Button for Timeline - Consider Infinite Scroll or Pagination for long paths */}

            </div>
        </section>
    );
};

export default Path;