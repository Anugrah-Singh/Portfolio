import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Linkedin, Github } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import CardContainer from './common/CardContainer';

const ContactMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            easing: 'ease-out',
            once: true,     // Animate only once as you scroll down
        });
    }, []);

    return (
        <section 
            id="contact" 
            className="min-h-screen bg-black relative overflow-hidden py-20" 
            data-aos="fade-up"
        >
            {/*
              Uncomment the block below if you want to restore the animated background elements:
              
              <div className="absolute inset-0 bg-black">
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
                        Contact Me
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, opportunities, or just a friendly hello!
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CardContainer data-aos="fade-right">
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Let's Connect!
                            </h3>
                            <p className="text-gray-400 mb-6">
                                I'm open to discussing new projects, collaborations, and hearing about exciting opportunities.
                                Whether you have a question or just want to say hi, don't hesitate to get in touch.
                            </p>
                            <p className="text-gray-400">
                                I'll do my best to get back to you as soon as possible.
                            </p>
                        </div>
                    </CardContainer>
                    <CardContainer data-aos="fade-left" className='flex items-center justify-center'>
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="text-blue-500" size={20} />
                                    <p className="text-gray-300">Email:</p>
                                    <a
                                        href="mailto:anugrahsinngh@gmail.com"
                                        className="text-gray-100 hover:text-blue-500 transition-colors"
                                    >
                                        anugrahsinngh@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Linkedin className="text-blue-500" size={20} />
                                    <p className="text-gray-300">LinkedIn:</p>
                                    <a
                                        href="https://linkedin.com/in/anugrah-singh-a04b18356"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-100 hover:text-blue-500 transition-colors"
                                    >
                                        Anugrah Singh
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Github className="text-blue-500" size={20} />
                                    <p className="text-gray-300">Github:</p>
                                    <a
                                        href="https://github.com/Anugrah-Singh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-100 hover:text-blue-500 transition-colors"
                                    >
                                        Anugrah-Singh
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaXTwitter className="text-blue-500" size={20} />
                                    <p className="text-gray-300">Twitter:</p>
                                    <a
                                        href="https://x.com/anugahsingh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-100 hover:text-blue-500 transition-colors"
                                    >
                                        anugrahsinngh
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardContainer>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
