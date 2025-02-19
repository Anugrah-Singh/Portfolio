// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react'; // Importing icons for contact methods
import { FaXTwitter } from "react-icons/fa6";

const ContactMe = () => {
    return (
        <section id="contact" className="min-h-screen bg-gray-900 py-20">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, opportunities, or just a friendly hello!
                    </p>
                </div>

                {/* Contact Information Grid (or Flex for simple layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Using grid for potential 2-column layout on larger screens */}
                    {/* Left Side - Text and Call to Action */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
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

                    {/* Right Side - Contact Methods */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                            Contact Information
                        </h3>
                        <div className="bg-gray-800 rounded-lg p-6">
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
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
