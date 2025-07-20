function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center text-center px-4'>
      <div>
        <h1 className='text-5xl font-extrabold text-primary mb-4'>
          Hey, I’m Duvindu Rathnayake 👋
        </h1>
        <p className='text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto'>
          A passionate web developer building clean, modern, and responsive
          applications.
        </p>
        <div className='flex justify-center gap-4'>
          <a
            href='#projects'
            className='bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition'
          >
            View Projects
          </a>
          <a
            href='#contact'
            className='border border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition'
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
