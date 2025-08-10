import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section
      id='about'
      className='relative w-full scroll-mt-24 py-24 text-slate-900 dark:text-white'
    >
      {/* faint background grid */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]'
      >
        <div className='absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%)] bg-[length:32px_32px] opacity-50 dark:opacity-20'></div>
      </div>

      <div className='relative mx-auto max-w-4xl px-4 sm:px-6'>
        <SectionHeader
          eyebrow='About'
          title='Who I Am'
          subtitle='Builder of clean, scalable web apps with a love for DX and small details.'
        />
        <Reveal>
          <div className='prose prose-slate mx-auto dark:prose-invert'>
            <p>
              I’m Duvindu—web developer focusing on <strong>.NET</strong>,{' '}
              <strong>SQL</strong>, and cloud basics (Azure). I enjoy turning
              complex problems into simple, fast UIs and reliable backends.
              Currently improving TaskMate (ASP.NET Core MVC + raw SQL) and a
              resume optimizer.
            </p>
            <p>
              I’ve worked in high-throughput environments (Toyota), so I care
              about <em>process, quality, and iteration</em>. Outside code:
              workouts, tech videos, and building a portfolio that makes
              recruiters say “whoa.”
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className='mt-8 flex flex-wrap justify-center gap-3'>
            <a
              href='/Duvindu_Rathnayake_CV.pdf'
              className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700'
            >
              Download CV
            </a>
            <a
              href='#projects'
              className='rounded-lg border border-current px-4 py-2 transition hover:bg-current hover:text-white dark:hover:text-slate-900'
            >
              See Projects
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
