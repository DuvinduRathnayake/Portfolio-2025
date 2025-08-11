// src/sections/Education.jsx
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Modal from '../components/Modal';

// ⬇️ Import your scans from src/assets (rename these to your real filenames)
import conestogaCert from '../assets/conestoga.jpeg';
import nibmHnd from '../assets/hnd.png';
import nibmDiploma from '../assets/dip.png';

export default function Education() {
  const items = [
    {
      degree: 'Post-Graduate Certificate in Web Development',
      school: 'Conestoga College (Canada)',
      year: '2023',
      img: conestogaCert,
      alt: 'Conestoga College Post-Graduate Certificate',
      notes: 'Focus: modern web development, deployment & teamwork.',
    },
    {
      degree: 'Higher National Diploma in Software Engineering',
      school: 'NIBM (Sri Lanka)',
      year: '2020',
      img: nibmHnd,
      alt: 'NIBM Higher National Diploma in Software Engineering',
      notes: 'Core CS, databases, OOP, and web foundations.',
    },
    {
      degree: 'Diploma in Software Engineering',
      school: 'NIBM (Sri Lanka)',
      year: '2019',
      img: nibmDiploma,
      alt: 'NIBM Diploma in Software Engineering',
      notes: 'Core CS, databases, OOP, and web foundations.',
    },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const onOpen = (i) => {
    setActive(i);
    setOpen(true);
  };

  const current = active != null ? items[active] : null;

  return (
    <section
      id='education'
      className='relative w-full scroll-mt-24 py-28 text-slate-900 dark:text-white'
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <SectionHeader
          eyebrow='Education'
          title='My Academic Background'
          subtitle='Formal qualifications with verifiable documents.'
        />

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {items.map((ed, i) => (
            <article
              key={ed.degree}
              className='rounded-2xl border border-white/30 bg-white/60 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'
            >
              <h3 className='text-base font-semibold text-slate-900 dark:text-white'>
                {ed.degree}
              </h3>
              <p className='text-sm text-slate-600 dark:text-slate-300'>
                {ed.school}
              </p>
              <p className='mt-1 text-xs text-slate-500 dark:text-slate-400'>
                {ed.year}
              </p>

              {ed.notes && (
                <p className='mt-3 text-sm text-slate-600 dark:text-slate-300'>
                  {ed.notes}
                </p>
              )}

              {/* Certificate thumbnail */}
              <button
                type='button'
                onClick={() => onOpen(i)}
                className='mt-4 block w-full overflow-hidden rounded-lg border border-white/20 bg-slate-100/60 transition hover:scale-[1.01] hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60'
                aria-label={`Open ${ed.alt}`}
              >
                <img
                  src={ed.img}
                  alt={ed.alt}
                  className='h-48 w-full object-cover'
                  loading='lazy'
                />
              </button>

              <p className='mt-2 text-xs text-slate-500 dark:text-slate-400'>
                Click to view full certificate
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox using your existing Modal */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={current?.degree || 'Certificate'}
      >
        {current && (
          <div className='grid gap-4'>
            <div className='overflow-hidden rounded-xl border border-white/20 dark:border-slate-800'>
              <img
                src={current.img}
                alt={current.alt}
                className='mx-auto max-h-[70vh] w-auto'
              />
            </div>
            <div className='text-sm text-slate-600 dark:text-slate-300'>
              <div className='font-semibold text-slate-900 dark:text-white'>
                {current.school} — {current.year}
              </div>
              {current.notes && <div className='mt-1'>{current.notes}</div>}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
