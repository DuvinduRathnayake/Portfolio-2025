import React, { useEffect, useRef } from 'react';

export default function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.activeElement;
    // focus the close button on open
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className='fixed inset-0 z-[100]'
      role='dialog'
      aria-modal='true'
      aria-labelledby='case-study-title'
    >
      {/* overlay */}
      <button
        className='absolute inset-0 bg-black/60 backdrop-blur-sm'
        aria-label='Close modal'
        onClick={onClose}
      />

      {/* panel */}
      <div className='pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6'>
        <div
          ref={dialogRef}
          className='pointer-events-auto relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-white/90 p-0 shadow-2xl backdrop-blur-lg transition dark:border-slate-800 dark:bg-slate-900/90'
        >
          {/* header */}
          <div className='flex items-center justify-between border-b border-white/20 p-4 dark:border-slate-800'>
            <h3
              id='case-study-title'
              className='text-lg font-semibold text-slate-900 dark:text-white'
            >
              {title}
            </h3>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className='rounded-full border border-white/30 px-3 py-1 text-sm text-slate-700 hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-200 dark:hover:bg-slate-800'
            >
              Close
            </button>
          </div>

          {/* body */}
          <div className='grid gap-4 p-4 sm:p-6'>{children}</div>
        </div>
      </div>
    </div>
  );
}
