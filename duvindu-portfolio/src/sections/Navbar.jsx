import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from '../components/ThemeToggle';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all
        backdrop-blur supports-[backdrop-filter]:bg-white/65 dark:supports-[backdrop-filter]:bg-slate-900/65
        border-white/20 dark:border-slate-800/60
        ${scrolled ? 'shadow-sm' : 'shadow-none'}`}
    >
      <div className='mx-auto flex h-14 max-w-6xl items-center justify-between px-4'>
        <a href='#home' className='flex items-center gap-2'>
          <img src={logo} alt='DR Logo' className='h-12 w-12 object-contain' />
          <span className='font-semibold tracking-tight text-slate-900 dark:text-white'></span>
        </a>

        <ul className='hidden gap-6 text-sm text-slate-800 dark:text-slate-300 md:flex'>
          <li>
            <a
              className='hover:text-indigo-600 dark:hover:text-indigo-400'
              href='#about'
            >
              About
            </a>
          </li>
          <li>
            <a
              className='hover:text-indigo-600 dark:hover:text-indigo-400'
              href='#projects'
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className='hover:text-indigo-600 dark:hover:text-indigo-400'
              href='#skills'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className='hover:text-indigo-600 dark:hover:text-indigo-400'
              href='#contact'
            >
              Contact
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </motion.header>
  );
}
