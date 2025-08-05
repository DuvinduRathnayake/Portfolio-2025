import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // Full-screen hero section with dark background
    <section className='relative overflow-hidden min-h-screen flex items-center justify-center px-6 bg-slate-900 text-white'>
      {/* 🔵 Glowing background blob using Tailwind */}
      <div
        className='
          absolute 
          top-[-100px] left-1/2 -translate-x-1/2 
          w-[600px] h-[600px] 
          bg-indigo-500 opacity-20 
          rounded-full blur-3xl 
          animate-pulse 
          z-0'
      ></div>

      {/* 🧠 Main content block with Framer Motion animation */}
      <motion.div
        className='relative z-10 max-w-3xl text-center'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* ✨ Main heading */}
        <motion.h1
          className='text-4xl sm:text-5xl font-bold mb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Duvindu
        </motion.h1>

        {/* 🧑‍💻 Subheading */}
        <motion.h2
          className='text-xl sm:text-2xl text-indigo-400 font-medium mb-6'
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
