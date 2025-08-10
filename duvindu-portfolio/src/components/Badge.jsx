import React from 'react';
export default function Badge({ children }) {
  return (
    <span className='inline-flex items-center rounded-full border border-white/40 dark:border-slate-700/60 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-200'>
      {children}
    </span>
  );
}
