import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Modal from '../components/Modal';
import Coverflow from '../components/Coverflow';
import Badge from '../components/Badge';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

export default function Projects() {
  const [slide, setSlide] = useState(0);
  const [open, setOpen] = useState(false);
  const [gridMode, setGridMode] = useState(false);
  const current = projects[slide] || projects[0];

  return (
    <section
      id='projects'
      className='relative w-full scroll-mt-24 py-28 text-slate-900 dark:text-white'
    >
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <SectionHeader
          eyebrow='Projects'
          title="Things I've Built"
          subtitle='Explore featured work — or view everything at once.'
        />

        {!gridMode ? (
          <>
            <Coverflow
              items={projects}
              index={slide}
              onIndexChange={setSlide}
              onOpenCaseStudy={() => setOpen(true)}
              className='my-8'
              height={480} // ← ensure enough space for the cards
            />

            {/* Button centered UNDER the carousel */}
            <div className='mt-6 flex justify-center'>
              <button
                onClick={() => setGridMode(true)}
                className='group relative rounded-full px-6 py-2 text-sm font-semibold text-white
                           transition focus:outline-none focus:ring-2 focus:ring-pink-400
                           bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500
                           shadow-[0_8px_30px_rgb(99,102,241,0.35)]
                           hover:shadow-[0_10px_40px_rgb(236,72,153,0.45)]'
              >
                View all projects
                <span className='absolute inset-0 -z-10 rounded-full blur-lg opacity-40 group-hover:opacity-60 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500' />
              </button>
            </div>
          </>
        ) : (
          // ...grid view (unchanged)...
          <>
            <div className='my-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.map((p, i) => (
                <Reveal key={p.title}>
                  <article className='rounded-2xl border border-white/30 bg-white/60 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
                    <h3 className='text-lg font-semibold text-slate-900 dark:text-white'>
                      {p.title}
                    </h3>
                    <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                      {p.blurb}
                    </p>
                    <div className='mt-3 flex flex-wrap gap-2'>
                      {p.stack?.map((s) => (
                        <Badge key={s}>{s}</Badge>
                      ))}
                    </div>
                    <div className='mt-4 flex gap-3'>
                      {p.repo && (
                        <a
                          className='text-sm underline-offset-4 hover:underline'
                          href={p.repo}
                          target='_blank'
                          rel='noreferrer'
                        >
                          GitHub
                        </a>
                      )}
                      {p.demo && (
                        <a
                          className='text-sm underline-offset-4 hover:underline'
                          href={p.demo}
                          target='_blank'
                          rel='noreferrer'
                        >
                          Live Demo
                        </a>
                      )}
                      <button
                        className='rounded-lg bg-indigo-600 px-3 py-1.5 text-xs text-white transition hover:bg-indigo-700'
                        onClick={() => {
                          setSlide(i);
                          setOpen(true);
                        }}
                      >
                        Case Study
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className='mt-2 mb-2 flex justify-center'>
              <button
                onClick={() => setGridMode(false)}
                className='group relative rounded-full px-6 py-2 text-sm font-semibold text-white
                           transition focus:outline-none focus:ring-2 focus:ring-indigo-400
                           bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-600
                           shadow-[0_8px_30px_rgb(236,72,153,0.35)]
                           hover:shadow-[0_10px_40px_rgb(99,102,241,0.45)]'
              >
                Back to carousel
                <span className='absolute inset-0 -z-10 rounded-full blur-lg opacity-40 group-hover:opacity-60 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-600' />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal shows the currently selected project */}
      <Modal open={open} onClose={() => setOpen(false)} title={current.title}>
        <div className='grid gap-3 sm:grid-cols-2'>
          {current.shots?.map((s) => (
            <div
              key={s.alt}
              className='aspect-video overflow-hidden rounded-lg border border-white/20 bg-slate-800/60'
            >
              <img
                src={s.src}
                alt={s.alt}
                className='h-full w-full object-cover'
              />
            </div>
          ))}
        </div>

        <div>
          <h4 className='text-base font-semibold'>Stack</h4>
          <div className='mt-2 flex flex-wrap gap-2'>
            {current.stack?.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-2'>
          <div>
            <h4 className='text-base font-semibold'>Challenges</h4>
            <ul className='mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300'>
              {current.bullets?.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='text-base font-semibold'>Results</h4>
            <ul className='mt-2 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300'>
              {current.results?.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex gap-3'>
          {current.repo && (
            <a
              className='rounded-lg bg-indigo-600 px-3 py-1.5 text-xs text-white transition hover:bg-indigo-700'
              href={current.repo}
              target='_blank'
              rel='noreferrer'
            >
              GitHub Repo
            </a>
          )}
          {current.demo && (
            <a
              className='rounded-lg border border-white/30 px-3 py-1.5 text-xs'
              href={current.demo}
              target='_blank'
              rel='noreferrer'
            >
              Live Demo
            </a>
          )}
        </div>
      </Modal>
    </section>
  );
}
