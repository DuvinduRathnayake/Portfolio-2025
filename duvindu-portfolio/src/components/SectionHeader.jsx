// src/components/SectionHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className='mb-10 text-center'>
      {/* Eyebrow text (small label above the title) */}
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='inline-block rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md'
        >
          {eyebrow}
        </motion.span>
      )}

      {/* Title with animated underline */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className='mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white'
      >
        {title}
        <span className='block h-1 w-20 mx-auto mt-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full'></span>
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <p className='mt-4 max-w-xl mx-auto text-slate-600 dark:text-slate-300'>
          {subtitle}
        </p>
      )}
    </div>
  );
}
