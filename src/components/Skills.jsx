// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaReact, FaJs } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

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
	<section id="skills" className="min-h-screen bg-gray-900 py-20">
	  <div className="max-w-6xl mx-auto px-6">
		{/* Section Header */}
		<div className="text-center mb-16">
		  <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
			My Skills
		  </h2>
		  <p className="text-gray-400 max-w-2xl mx-auto">
			A quick overview of my technical skills and areas of expertise.
		  </p>
		</div>

		{/* Skills Grid */}
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		  {skills.map((skill) => (
			<div
			  key={skill.id}
			  className="bg-gray-800 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2"
			>
			  <div className="flex items-center gap-3 mb-4">
				{skill.icon && <skill.icon className="text-blue-500" size={24} />}
				<h3 className="text-xl font-semibold text-gray-100">
				  {skill.skill}
				</h3>
			  </div>
			  <p className="text-gray-400">
				{skill.description}
			  </p>
			</div>
		  ))}
		</div>

		{/* View More Button (Optional for Skills - remove if not needed) */}
		<div className="text-center mt-12">
		  <button className="px-6 py-3 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-500 rounded-lg transition-colors duration-200">
			View More Skills (Coming Soon)
		  </button>
		</div>
	  </div>
	</section>
  );
};

export default Skills;