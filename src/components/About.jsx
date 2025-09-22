import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About me"
      className="relative py-20 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white tracking-tight"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          I am a passionate <span className="font-semibold text-pink-500">Frontend Developer</span> 
          and web designer with hands-on experience building 
          <span className="font-semibold text-blue-500"> modern, responsive, and user-friendly websites</span>.  
          I specialize in <span className="text-blue-500 font-medium">React.js</span>, 
          <span className="text-sky-500 font-medium"> Tailwind CSS</span>, 
          <span className="text-purple-500 font-medium"> Bootstrap</span>, 
          <span className="text-yellow-500 font-medium"> JavaScript (ES6+)</span>, 
          <span className="text-orange-500 font-medium"> HTML5</span>, 
          <span className="text-blue-700 font-medium"> CSS3</span>, 
          <span className="text-pink-400 font-medium"> Framer Motion</span>, 
          <span className="text-indigo-500 font-medium"> Redux</span>, 
          <span className="text-green-500 font-medium"> Vite</span>, 
          <span className="text-teal-500 font-medium"> React Router</span>, 
          <span className="text-purple-400 font-medium"> Axios</span>, 
          <span className="text-red-500 font-medium"> REST APIs & JSON</span>, and 
          <span className="text-gray-500 font-medium"> Git & GitHub</span> for version control.  

          I have worked on multiple personal and collaborative projects, 
          including landing pages, e-commerce websites, portfolio websites, dashboards, and interactive UI components.  
          Each project allowed me to sharpen my skills in performance optimization, accessibility, responsive layouts, 
          smooth animations, and engaging user experiences.

          I am continuously learning new tools and trends to deliver creative, functional, and visually 
          appealing designs that help businesses and individuals stand out online.
        </motion.p>
      </div>
    </section>
  );
}
