import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#About me" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const social = [
    { icon: <FaGithub />, href: "https://github.com/aml-abdelrhman", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/aml-abdelrhman-8b849a372", label: "LinkedIn" },
  ];

  return (
    <div className="relative">
      <div className="border-t border-gray-300 dark:border-gray-700 w-full mb-[-1px]" />

      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative py-10 text-gray-700 bg-slate-100/70 dark:bg-slate-900/80 dark:text-gray-300"
      >
        <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-4 mx-auto md:flex-row">
          <div className="flex gap-6">
            {links.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-medium transition-colors duration-300 hover:text-pink-500"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4 mr-40">
            {social.map((s, idx) => (
              <motion.a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="text-2xl hover:text-pink-500 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.7)] transition-all"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <a
              href="Aml-Abdelrhman-CV.pdf"
              download="Aml-Abdelrhman-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-semibold text-white transition-colors duration-300 bg-pink-500 rounded-md shadow-lg hover:bg-pink-600"
             >
              Download CV
            </a>
          </motion.div>
        </div>

        <div className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Aml Abdelrhman. All rights reserved.
        </div>
      </motion.footer>
    </div>
  );
}
