import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import CardContainer from './common/CardContainer';

const ContactMe = () => {
    return (
        <section id="contact" className="min-h-screen bg-[#000000] relative overflow-hidden py-20">
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
                            Contact Me
                        </span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, opportunities, or just a friendly hello!
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
                    <div className="w-full h-full">
                        <CardContainer>
                            <div className="p-6 animate-slideUp">
                                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                                    Let&apos;s Connect!
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    I&apos;m open to discussing new projects, collaborations, and hearing about exciting opportunities.
                                    Whether you have a question or just want to say hi, don&apos;t hesitate to get in touch.
                                </p>
                                <p className="text-gray-400">
                                    I&apos;ll do my best to get back to you as soon as possible.
                                </p>
                            </div>
                        </CardContainer>
                        <CardContainer>
                            <div className="p-6 animate-slideUp [animation-delay:200ms]">
                                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Mail className="text-blue-500" size={20} />
                                        <p className="text-gray-300">Email:</p>
                                        <a href="mailto:your.email@example.com" className="text-gray-100 hover:text-blue-500 transition-colors">anugrahsinngh@gmail.com</a> {/* Replace with your actual email */}
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Linkedin className="text-blue-500" size={20} />
                                        <p className="text-gray-300">LinkedIn:</p>
                                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-500 transition-colors">
                                            
                                        </a> {/* Replace with your LinkedIn profile URL */}
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Github className="text-blue-500" size={20} />
                                        <p className="text-gray-300">Github:</p>
                                        <a href="https://github.com/Anugrah-Singh" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-500 transition-colors">
                                            Anugrah-Singh
                                        </a> {/* Replace with your GitHub profile URL */}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaXTwitter className="text-blue-500" size={20} />
                                        <p className="text-gray-300">Twitter:</p>
                                        <a href="https://x.com/anugahsingh" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-500 transition-colors">
                                            anugrahsinngh
                                        </a> {/* Replace with your Twitter profile URL */}
                                    </div>
                                </div>
                            </div>
                        </CardContainer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
