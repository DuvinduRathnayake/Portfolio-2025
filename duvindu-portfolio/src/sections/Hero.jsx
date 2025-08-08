import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Step 1: Create a state variable to store dark mode status
  const [darkMode, setDarkMode] = useState(false);

  // Step 2: Set the initial theme based on localStorage (if present)
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    }
  }, []);

  // Step 3: Update the theme when darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode); // Toggle dark mode
  }, [darkMode]);

  return (
    <section
      className={`relative overflow-hidden min-h-screen flex items-center justify-center px-6 ${
        darkMode ? 'bg-slate-900' : 'bg-white'
      } text-white`}
    >
      {/* Dark/Light Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className='absolute top-4 right-6 p-2 bg-indigo-500 rounded-full text-white focus:outline-none'
      >
        {darkMode ? (
          <span className='text-yellow-300'>🌙</span> // Dark mode icon
        ) : (
          <span className='text-yellow-300'>🌞</span> // Light mode icon
        )}
      </button>

      {/* 🌀 Glowing background blob */}
      <div className='absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500 opacity-20 rounded-full blur-3xl z-0'></div>

      {/* 🧠 Main content block with Framer Motion animation */}
      <motion.div
        className='relative z-10 max-w-3xl text-center'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* ✨ Main heading */}
        <motion.h1
          className='text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Duvindu
        </motion.h1>

        {/* 🧑‍💻 Subheading */}
        <motion.h2
          className='text-2xl sm:text-3xl text-indigo-400 font-medium mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Web Developer | Cloud Enthusiast
        </motion.h2>

        {/* 📝 Short intro paragraph */}
        <motion.p
          className='text-slate-300 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I build modern, scalable, and beautiful web experiences. Currently
          focusing on .NET and cloud-based solutions.
        </motion.p>

        {/* 🔘 CTA Buttons */}
        <motion.div
          className='flex gap-4 justify-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href='#projects'
            className='bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg transition'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-slate-900 transition'
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
