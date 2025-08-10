import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Certificates from './sections/Certificates';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-950 antialiased'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
