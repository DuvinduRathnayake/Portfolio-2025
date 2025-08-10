import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const getInitial = () => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return true; // ⬅️ default to DARK when first visit
  };

  const [darkMode, setDarkMode] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((v) => !v)}
      className='inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-slate-100 active:scale-95 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800'
      aria-label='Toggle dark mode'
      title='Toggle theme'
    >
      <span className='text-xs'>{darkMode ? '☀︎' : '☾'}</span>
      <span className='hidden sm:inline'>{darkMode ? 'Light' : 'Dark'}</span>
    </button>
  );
}
