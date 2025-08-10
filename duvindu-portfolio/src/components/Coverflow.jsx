// src/components/Coverflow.jsx
import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mod = (n, m) => ((n % m) + m) % m;

export default function Coverflow({
  items = [],
  index,
  onIndexChange,
  onOpenCaseStudy,
  className = '',
  height = 460, // ← NEW: stage height in px
}) {
  const touchX = useRef(null);
  const len = items.length;
  const go = (d) => onIndexChange?.(mod(index + d, len));
  const goTo = (i) => onIndexChange?.(mod(i, len));

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, len]);

  const onTouchStart = (e) => (touchX.current = e.changedTouches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  const visible = Math.min(5, len);
  const spread = 160;
  const rotate = 12;
  const scaleStep = 0.06;

  return (
    <div className={`relative ${className}`}>
      {/* Arrows outside */}
      <button
        aria-label='Previous'
        onClick={() => go(-1)}
        className='absolute -left-12 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/70 p-4 shadow-xl backdrop-blur hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800'
      >
        ‹
      </button>
      <button
        aria-label='Next'
        onClick={() => go(1)}
        className='absolute -right-12 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-white/70 p-4 shadow-xl backdrop-blur hover:bg-white/90 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800'
      >
        ›
      </button>

      <div
        className='relative overflow-visible px-10'
        style={{ perspective: 1400 }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Stage that reserves space for absolute slides */}
        <div
          className='relative mx-auto flex max-w-6xl items-center justify-center'
          style={{ height }} // ← reserve height
        >
          {/* soft edge fades */}
          <div
            aria-hidden
            className='pointer-events-none absolute -left-10 top-0 h-full w-20 bg-gradient-to-r from-slate-900/40 to-transparent dark:from-black/40'
          />
          <div
            aria-hidden
            className='pointer-events-none absolute -right-10 top-0 h-full w-20 bg-gradient-to-l from-slate-900/40 to-transparent dark:from-black/40'
          />

          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const left = mod(i - index, len);
              const right = mod(index - i, len);
              const offset = right < left ? -right : left;
              const abs = Math.abs(offset);
              if (abs > Math.floor(visible / 2) && i !== index) return null;

              const x = offset * spread;
              const rotateY = -offset * rotate;
              const scale = 1 - abs * scaleStep;
              const z = 100 - abs * 10;

              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ opacity: 0, x, rotateY, scale }}
                  animate={{ opacity: 1, x, rotateY, scale, zIndex: z }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                  className='absolute w-full max-w-4xl cursor-pointer'
                  onClick={() =>
                    abs === 0 ? onOpenCaseStudy?.(index) : goTo(i)
                  }
                  style={{
                    transformStyle: 'preserve-3d',
                    filter: abs ? 'grayscale(10%) brightness(95%)' : 'none',
                  }}
                >
                  <div className='relative overflow-hidden rounded-2xl border border-white/30 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70'>
                    <div className='grid gap-8 p-8 md:grid-cols-2'>
                      <div>
                        <h3 className='text-xl font-semibold text-slate-900 dark:text-white'>
                          {item.title}
                        </h3>
                        <p className='mt-2 text-slate-600 dark:text-slate-300'>
                          {item.blurb}
                        </p>
                        <div className='mt-3 flex flex-wrap gap-2 text-xs'>
                          {item.stack?.map((s) => (
                            <span
                              key={s}
                              className='rounded-full border border-white/40 px-2.5 py-1 dark:border-slate-700/60'
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                        <div className='mt-4 flex gap-3'>
                          {item.repo && (
                            <a
                              className='text-sm underline-offset-4 hover:underline'
                              href={item.repo}
                              target='_blank'
                              rel='noreferrer'
                              onClick={(e) => e.stopPropagation()}
                            >
                              GitHub
                            </a>
                          )}
                          {item.demo && (
                            <a
                              className='text-sm underline-offset-4 hover:underline'
                              href={item.demo}
                              target='_blank'
                              rel='noreferrer'
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live Demo
                            </a>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenCaseStudy?.(index);
                            }}
                            className='rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white transition hover:bg-indigo-700'
                          >
                            Case Study
                          </button>
                        </div>
                      </div>

                      <div className='relative'>
                        <div className='aspect-video w-full overflow-hidden rounded-xl border border-white/20 shadow-lg dark:border-slate-700'>
                          <img
                            src={item.shots?.[0]?.src}
                            alt={item.shots?.[0]?.alt || item.title}
                            className='h-full w-full object-cover opacity-90'
                            loading='lazy'
                          />
                        </div>
                        <div className='pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/30 to-pink-500/30 blur-2xl' />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* dots */}
      <div className='mt-4 flex items-center justify-center gap-2'>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 w-6 rounded-full transition ${
              i === index ? 'bg-indigo-500' : 'bg-white/40 dark:bg-slate-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
