// src/sections/Skills.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';

// Brand icons (Simple Icons via react-icons)
// Install if needed: npm i react-icons
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiFramer,
  SiDotnet,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiGithubactions,
  SiGit,
  SiPostman,
  SiFigma,
} from 'react-icons/si';

// Map exact labels -> icons (only those that exist)
// Using ".NET" icon to represent C# / SQL Server / Azure / VS Code for now
const iconMap = {
  React: SiReact,
  Vite: SiVite,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,

  '.NET 6': SiDotnet,
  '.NET': SiDotnet,
  'ASP.NET MVC': SiDotnet,
  CSharp: SiDotnet, // fallback

  Node: SiNodedotjs,

  'SQL Server': SiDotnet, // fallback
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,

  Azure: SiDotnet, // fallback
  'Azure Fundamentals': SiDotnet, // fallback
  Vercel: SiVercel,
  'GitHub Actions': SiGithubactions,

  Git: SiGit,
  Postman: SiPostman,
  Figma: SiFigma,
  'VS Code': SiDotnet, // fallback
};

// Your skills, grouped for readability
const groups = [
  {
    name: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Backend',
    items: ['.NET 6', 'ASP.NET MVC', 'Node', 'CSharp'], // CSharp uses .NET icon
  },
  {
    name: 'Database',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['Azure Fundamentals', 'Vercel', 'GitHub Actions'],
  },
  {
    name: 'Tools',
    items: ['Git', 'Postman', 'Figma', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section
      id='skills'
      className='relative w-full scroll-mt-24 py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950'
    >
      <div className='relative mx-auto max-w-5xl px-4 sm:px-6'>
        <SectionHeader
          eyebrow='Skills'
          title='What I Use'
          subtitle='Signal over noise. These are the tools I reach for most.'
        />

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {groups.map((g) => (
            <Reveal key={g.name}>
              <div className='rounded-2xl border border-white/30 bg-white/60 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
                <h3 className='mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700 dark:text-slate-300'>
                  {g.name}
                </h3>

                <div className='flex flex-wrap gap-2'>
                  {g.items.map((label) => {
                    const Icon = iconMap[label] || null;
                    return (
                      <span
                        key={label}
                        className='inline-flex items-center gap-1.5 rounded-full border border-white/40 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-200 dark:border-slate-700/60'
                        title={label}
                        aria-label={label}
                      >
                        {Icon && <Icon size={14} aria-hidden />}
                        {label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
