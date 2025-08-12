import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Certificates from './sections/Certificates';
import Footer from './sections/Footer';
import Education from './sections/Education';

export default function App() {
  return (
    // ⬇️ add w-full + overflow-x-hidden so nothing can push the page wider
    <div className='min-h-screen w-full overflow-x-hidden bg-slate-50 dark:bg-slate-950 antialiased'>
      <Navbar />
      {/* ⬇️ keep main clamped too; add pt-16 if your navbar is fixed at top */}
      <main className='w-full overflow-x-hidden'>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
