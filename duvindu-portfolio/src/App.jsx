import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white'>
      <ThemeToggle />
      <h1 className='text-4xl font-bold text-primary'>
        Tailwind is working! 🎉 Haha
      </h1>
    </div>
  );
}

export default App;
