import React from 'react';
import { motion } from 'framer-motion';

const ModernLanding = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#F97316",
      color: "#FFFFFF",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F9FAFB, #F5F5F5)"
      }}
    >
      {/* Abstract color splash */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-5 right-1/4 w-80 h-80 bg-blue-800/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-16 relative z-10">
        {/* Logo and Tagline */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Portfolio<span className="text-sm align-super font-medium">2024</span>
          </h3>
          <p className="text-sm md:text-base text-gray-600 italic mt-1">Crafting Digital Experiences</p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* First line - "TRUE VALUE" */}
          <motion.div className="text-center" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
              TRUE VALUE
            </h1>
          </motion.div>

          {/* Second line with button - "IS IN" */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 my-4 md:my-6"
            variants={itemVariants}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
              IS IN
            </h1>
            
            {/* Circular button */}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-white border border-gray-300 flex items-center justify-center text-sm md:text-base font-medium text-gray-800 shadow-md"
            >
              Portfolio<br/>Design
            </motion.button>
          </motion.div>

          {/* Third line - "UNIQUENESS" */}
          <motion.div className="text-center" variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight">
              UNIQUENESS
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernLanding;
