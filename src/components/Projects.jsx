import React from 'react';
import { motion } from 'framer-motion';

import CareStore from '../assets/images/CareStore.PNG';
import seraCafe from '../assets/images/sera.PNG';
import MORK from '../assets/images/MORK..PNG';
import ECY from '../assets/images/ECY.PNG';
import saudiRestaurant from '../assets/images/saudi restaurant.PNG';
import Delivery from '../assets/images/delivery.PNG';
import CRUDS from '../assets/images/CRUDS.PNG';
 import NewProject8 from '../assets/images/etech.png';
 import NewProject9 from '../assets/images/nest-js.png';
 import NewProject10 from '../assets/images/real-state.png';
 import NewProject11 from '../assets/images/shop.png';
 import NewProject12 from '../assets/images/real-state-2.png';
 import NewProject13 from '../assets/images/warm.png';
// import NewProject14 from '../assets/images/project14.png';


export default function Projects() {
  const projects = [
    { 
      title: 'ETech Educational Website', 
      img: NewProject8, 
      tech: 'Next.js • Tailwind CSS • React Query •Axios • TypeScript • Framer Motion • Next-inlet • zustand •dark/light mode ',
      description: 'A professional educational website featuring interactive learning modules and a modern UI.',
      demo: 'https://etetch-tm3e.vercel.app/',
      code: 'https://github.com/aml-abdelrhman/etetch.git'
    },
    { 
      title: 'Augest Website ', 
      img: NewProject11, 
      tech: 'Next.js • Tailwind CSS • TypeScript • Axios • Next-inlet • React Query • Next-inlet • ',
      description: 'A professional electronics e-commerce platform featuring a modern UI , product categories, and seamless navigation.',
      demo: 'https://augest-district.vercel.app/',
      code: 'https://github.com/aml-abdelrhman/augest-district.git'
    },
    { 
      title: 'Hemma Real Estate', 
      img: NewProject12, 
      tech: 'Next.js • TypeScript • Framer Motion • CSS • Next-inlet • React Query',
      description: 'A comprehensive real estate system featuring available property listings, detailed property views, and an integrated booking system for visits.',
      demo: 'https://hemma-real-state.vercel.app/',
      code: 'https://github.com/aml-abdelrhman/Hemma-real-state.git'
    },
    { 
      title: 'E-commerce Shop', 
      img: NewProject9, 
      tech: 'React • JavaScript • scss • Redux • MongoDB',
      description: 'A dynamic e-commerce application focused on performance, providing a smooth user experience from browsing to checkout.',
      demo: 'https://nextjs-ecommerce-blv4.vercel.app/#',
      code: 'https://github.com/aml-abdelrhman/nextjs-ecommerce.git'
    },
    { 
      title: 'Real Estate website', 
      img: NewProject10, 
      tech: 'React • CSS • Framer Motion ',
      description: 'A premium real estate listing portal with interactive components and optimized search functionality for high-end properties.',
      demo: 'https://real-state-theta-hazel.vercel.app/',
      code: 'https://github.com/aml-abdelrhman/real-state.git'
    },
    { 
      title: 'WarmDecor Interior Store', 
      img: NewProject13, 
      tech: 'Next.js • Tailwind CSS • TypeScript • React Query • Axios',
      description: 'A full-featured interior design e-commerce project integrated with a robust API, cart management system, and secure checkout process.',
      demo: 'https://warmdecor-dk19.vercel.app/',
      code: 'https://github.com/aml-abdelrhman/WARMDECOR.git'
    },
    { 
      title: 'Care Store website', 
      img: CareStore, 
      tech: 'React • Tailwind CSS.',
      description: 'A modern e-commerce web app built with React, Vite, and Tailwind CSS, offering a smooth shopping experience with product browsing, wishlist, and cart features.',
      demo: 'https://aml-abdelrhman.github.io/Care-Store/',
      code: 'https://github.com/aml-abdelrhman/Care-Store.git'
    },
    { 
      title: 'Sera café website', 
      img: seraCafe, 
      tech: 'React • Bootstrap.',
      description: 'A modern responsive website for Sera Café showcasing menu, services, and contact info.',
      demo: 'https://aml-abdelrhman.github.io/sera-cafe/',
      code: 'https://github.com/aml-abdelrhman/sera-cafe.git/'
    },
    { 
      title: 'MORK BRAND website', 
      img: MORK, 
      tech: 'React • Vite',
      description: 'Brand website for MORK including portfolio, about, and product showcase.',
      demo: 'https://aml-abdelrhman.github.io/MORK/',
      code: 'https://github.com/aml-abdelrhman/MORK.git'
    },  
    { 
      title: 'ECY-Educational-Web', 
      img: ECY, 
      tech: 'React • Vite',
      description: 'Educational platform for students with courses, resources, and online learning features.',
      demo: 'https://aml-abdelrhman.github.io/ECY-Educational-Web/',
      code: 'https://github.com/aml-abdelrhman/ECY-Educational-Web.git'
    },
    { 
      title: 'Saudi Taste Restaurant', 
      img: saudiRestaurant, 
      tech: 'React • Vite',
      description: 'A cultural restaurant website showcasing authentic menus, online reservations, and location services.',
      demo: 'https://aml-abdelrhman.github.io/restaurant-website/',
      code: 'https://github.com/aml-abdelrhman/restaurant-website.git'
    },
    { 
      title: 'Delivery X website', 
      img: Delivery, 
      tech: 'Javascript • Bootstrap.',
      description: 'A modern responsive website for Delivery-x showcasing about information, services, and contact info.',
      demo: ' https://aml-abdelrhman.github.io/Deliver-X/',
      code: 'https://github.com/aml-abdelrhman/Deliver-X.git'
    },
     { 
      title: 'CRUDS – Product Management System', 
      img: CRUDS, 
      tech: 'JavaScript, HTML, and CSS',
      description: 'Implemented full CRUD functionality (Create, Read, Update, Delete) for seamless product handling.',
      demo: 'https://aml-abdelrhman.github.io/CRUDS-SYSTEM/',
      code: 'https://github.com/aml-abdelrhman/CRUDS-SYSTEM.git'
    },
  ];

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-24 justify-items-center">
  {projects.map((p, idx) => (
    <motion.div
      key={p.title}
      className="relative w-full sm:w-72 md:w-80 lg:w-80 xl:w-96 rounded-xl overflow-hidden shadow-lg bg-white dark:bg-slate-800 flex flex-col text-gray-800 dark:text-gray-200 group"
      initial={idx % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: idx * 0.3, type: 'spring', stiffness: 120, duration: 1.2 }}
      variants={cardVariants}
    >
      <motion.img
        src={p.img}
        alt={p.title}
        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
        <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
        <p className="text-sm text-slate-700 mb-4">{p.tech}</p>
        <div className="flex gap-4">
          {p.demo && (
            <motion.a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-700 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, borderColor: '#FF69B4' }}
            >
              Demo
            </motion.a>
          )}
          {p.code && (
            <motion.a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border-2 border-gray-400 rounded-md text-gray-700 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, borderColor: '#FF69B4' }}
            >
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
