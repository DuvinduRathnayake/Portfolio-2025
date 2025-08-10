// src/sections/Footer.jsx
import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='mt-16 border-t border-white/20 bg-white/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
      {/* top stripe */}
      <div className='h-[2px] w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500' />

      <div className='mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6'>
        {/* Brand + blurb */}
        <div>
          <a
            href='#home'
            className='text-lg font-semibold text-slate-900 dark:text-white'
          >
            Duvindu Rathnayake
          </a>
          <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
            .NET + SQL + React — I build clean, production-ready features.
          </p>
        </div>

        {/* Quick links */}
        <nav className='text-sm'>
          <h4 className='mb-2 font-semibold text-slate-900 dark:text-white'>
            Quick Links
          </h4>
          <ul className='space-y-1 text-slate-700 dark:text-slate-300'>
            <li>
              <a
                className='hover:underline underline-offset-4'
                href='#projects'
              >
                Projects
              </a>
            </li>
            <li>
              <a className='hover:underline underline-offset-4' href='#skills'>
                Skills
              </a>
            </li>
            <li>
              <a
                className='hover:underline underline-offset-4'
                href='#certificates'
              >
                Certificates
              </a>
            </li>
            <li>
              <a className='hover:underline underline-offset-4' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact + socials */}
        <div className='text-sm'>
          <h4 className='mb-2 font-semibold text-slate-900 dark:text-white'>
            Contact
          </h4>
          <ul className='space-y-2'>
            <li>
              <a
                href='mailto:duvindu.rathnayake@gmail.com?subject=Hello%20Duvindu'
                className='inline-flex items-center gap-2 hover:underline underline-offset-4 text-slate-700 dark:text-slate-300'
              >
                <FiMail /> duvindu.rathnayake@gmail.com
              </a>
            </li>
            <li className='flex items-center gap-4 pt-1'>
              <a
                href='https://github.com/DuvinduRathnayake'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              >
                <FiGithub /> GitHub
              </a>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              >
                <FiLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className='border-t border-white/20 py-4 text-center text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6'>
          <p>© {year} Duvindu Rathnayake. All rights reserved.</p>
          <a
            href='#home'
            className='inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-slate-700 transition hover:bg-white/70 dark:text-slate-200 dark:hover:bg-slate-800'
          >
            <FiArrowUp /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
