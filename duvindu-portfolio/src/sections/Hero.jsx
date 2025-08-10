import React from 'react';
import { motion } from 'framer-motion';
import Spotlight from '../components/Spotlight';
import TiltCard from '../components/TiltCard';

export default function Hero() {
  return (
    <section
      id='home'
      className='relative w-full pt-24 pb-12 min-h-[70vh] md:min-h-[72vh] overflow-hidden text-slate-900 dark:text-white
  bg-[radial-gradient(1200px_600px_at_50%_-10%,theme(colors.indigo.300/16),transparent_60%),
      radial-gradient(900px_500px_at_70%_0%,theme(colors.fuchsia.400/10),transparent_55%),
      linear-gradient(to_bottom,theme(colors.slate.50),theme(colors.slate.100))] 
  dark:bg-[radial-gradient(1200px_600px_at_50%_-10%,theme(colors.indigo.400/22),transparent_60%),
           radial-gradient(900px_500px_at_70%_0%,theme(colors.fuchsia.500/12),transparent_55%),
           linear-gradient(to_bottom,theme(colors.slate.950),theme(colors.slate.900))]'
    >
      {/* spotlight cursor */}
      <Spotlight size={520} strength={0.22} />
      {/* vignette */}
      <div className='pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.45)]' />

      <div className='relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2'>
        {/* LEFT: copy + CTAs + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className='bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-pink-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl'>
            Hi, I'm Duvindu
          </h1>
          <h2 className='mt-3 text-xl font-medium text-indigo-300 sm:text-2xl'>
            .NET + SQL + React — I ship clean features fast
          </h2>
          <p className='mt-4 max-w-xl text-slate-300'>
            I build modern, scalable web experiences. Currently improving
            TaskMate (ASP.NET + Dapper) and a resume optimizer.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href='#projects'
              className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700'
            >
              View Projects
            </a>
            <a
              href='/Duvindu_Rathnayake_CV.pdf'
              className='rounded-lg border border-white/40 px-4 py-2 transition hover:bg-white/90 hover:text-slate-900'
            >
              Download CV
            </a>
          </div>

          {/* Stat strip */}
          <div className='mt-6 grid grid-cols-3 gap-3 max-w-md text-center'>
            {[
              { k: 'Years', v: '2+' },
              { k: 'Projects', v: '6' },
              { k: 'Focus', v: '.NET' },
            ].map((s) => (
              <div
                key={s.k}
                className='rounded-xl border border-white/15 bg-white/5 py-3 backdrop-blur-sm'
              >
                <div className='text-2xl font-bold text-white'>{s.v}</div>
                <div className='text-xs uppercase tracking-wide text-slate-300'>
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: tilted preview card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className='md:justify-self-end'
        >
          <TiltCard>
            <div className='relative h-[280px] w-full min-w-[300px] max-w-[520px] bg-gradient-to-br from-slate-800 to-slate-900'>
              {/* faux code lines */}
              <div className='absolute inset-0 p-6 font-mono text-sm text-slate-200/90'>
                <p>
                  <span className='text-emerald-400'>public</span> class{' '}
                  <span className='text-sky-400'>Task</span> {'{'}
                </p>
                <p className='ml-4'>
                  int Id; <span className='text-amber-300'>string</span> Title;
                </p>
                <p className='ml-4'>
                  DateTime Due; <span className='text-amber-300'>bool</span>{' '}
                  Done;
                </p>
                <p>{'}'}</p>
                <p className='mt-4 text-slate-300/80'>
                  // Dapper query (SQL Server)
                </p>
                <p>SELECT * FROM Tasks WHERE Done = 0 ORDER BY Due;</p>
                <p className='mt-4 text-slate-300/80'>
                  // MVC Controller → ViewModel → View
                </p>
              </div>
              {/* corner badge */}
              <div className='absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-xs text-white'>
                TaskMate
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
