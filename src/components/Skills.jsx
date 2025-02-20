import React from 'react';
import { FaReact, FaJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import CardContainer from './common/CardContainer';
import Button from './common/Button';

const Skills = () => {
  // Sample skills data - replace with your actual skills and proficiency
  const skills = [
	{
	  id: 1,
	  skill: "React",
	  description: "Proficient in building user interfaces and interactive web applications using React library.",
	  icon: FaReact // Example icon from lucide-react
	},
	{
	  id: 2,
	  skill: "JavaScript (ES6+)",
	  description: "Strong understanding of modern JavaScript features and asynchronous programming.",
	  icon: FaJs
	},
	{
	  id: 3,
	  skill: "Vite",
	  description: "Experience with Vite build tool for modern web development and fast project setup.",
	  icon: SiVite
	},
	{
	  id: 4,
	  skill: "Tailwind CSS",
	  description: "Experience building responsive and mobile-first designs with Tailwind CSS utility-first framework.",
	  icon: RiTailwindCssFill
	},
	// {
	//   id: 5,
	//   skill: "Tailwind CSS",
	//   description: " люблю использовать Tailwind CSS для быстрого прототипирования и создания стильных интерфейсов.",
	//   icon: BadgeCheck
	// },
	// {
	//   id: 6,
	//   skill: "Next.js",
	//   description: "Experience building server-rendered React applications and static websites with Next.js.",
	//   icon: LayoutDashboard
	// },
	// Add more skills as needed
  ];

  return (
	<section id="skills" className="min-h-screen bg-[#000000] relative overflow-hidden py-12 sm:py-20">
	  {/* Animated background gradient */}
	  <div className="absolute inset-0 bg-[#000000]">
		<div className="absolute inset-0 opacity-10">
		  <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
		  <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
		  <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
		</div>
	  </div>

	  <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
		{/* Section Header */}
		<div className="text-center mb-8 sm:mb-16 animate-fadeIn">
		  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
			<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
			  My Skills
			</span>
		  </h2>
		  <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
			A quick overview of my technical skills and areas of expertise.
		  </p>
		</div>

		{/* Skills Grid */}
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mx-auto justify-items-center">
		  {skills.map((skill, index) => (
			<CardContainer key={skill.id} style={{ animationDelay: `${index * 100}ms` }}>
			  <div className="flex items-center gap-3 mb-4">
				{skill.icon && (
				  <skill.icon 
					className="text-purple-400" 
					size={24} 
				  />
				)}
				<h3 className="text-xl font-semibold text-gray-200">
				  {skill.skill}
				</h3>
			  </div>
			  <p className="text-gray-500">
				{skill.description}
			  </p>
			 </CardContainer>
		  ))}
		</div>

		{/* View More Button */}
		<div className="text-center mt-8 sm:mt-12">
		  <Button variant="secondary">
			View More Skills (Coming Soon)
		  </Button>
		</div>
	  </div>
	</section>
  );
};

export default Skills;