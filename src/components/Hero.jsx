import React from 'react';
import { motion } from "framer-motion";
import Typewriter from './Typewriter';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-12">

        
        <motion.div
          initial={{ x: -90, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            AML ABDELRHMAN — Front-End Developer
          </h1>
          <div className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-4 max-w-xl">
            Crafting modern, responsive, and high-performance web experiences that delight users.
            <div className="mt-2 text-purple-500">
             <Typewriter words={['React.js','JavaScript','HTML5','CSS3','Tailwind CSS','Bootstrap','Framer Motion','Redux','Vite','Git & GitHub',]} />
            </div>
          </div>

          <div className="flex gap-3">
            <a href="#projects" className="btn bg-accent text-white text-sm px-4 py-2 rounded-md shadow-sm hover:shadow-md transition">
              View Projects
            </a>
           <a href="Aml-Abdelrhman-CV.pdf" download className="btn bg-accent text-white">📄 
             Download CV
           </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 flex items-center justify-center"
        >
          <motion.div
            className="w-64 h-64 relative rounded-xl shadow-2xl overflow-visible"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0 rounded-xl bg-cover bg-center z-10"
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg)' }}
            ></div>

            <div className="absolute inset-0 rounded-xl bg-animated-gradient opacity-50 z-20 pointer-events-none"></div>

            <motion.div
              className="absolute -inset-6 rounded-xl bg-white/20 blur-3xl z-0 pointer-events-none"
              animate={{ rotate: [0, 40, -40, 0] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            ></motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
