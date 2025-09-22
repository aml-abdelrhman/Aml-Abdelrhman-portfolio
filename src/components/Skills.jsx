import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiRedux, SiVite } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'React JS', icon: <FaReact className="text-blue-500 text-4xl mx-auto" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-4xl mx-auto" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl mx-auto" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-4xl mx-auto" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400 text-4xl mx-auto" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600 text-4xl mx-auto" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-pink-500 text-4xl mx-auto" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-700 text-4xl mx-auto" /> },
    { name: 'Vite', icon: <SiVite className="text-green-500 text-4xl mx-auto" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500 text-4xl mx-auto" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <motion.div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.15 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
              className="w-36 h-36 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-slate-800/30 backdrop-blur-sm text-center cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
              >
                {skill.icon}
              </motion.div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-3">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
