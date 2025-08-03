function Hero() {
  return (
    <section className='min-h-screen flex flex-col justify-center items-start px-6 sm:px-16 bg-slate-900 text-white'>
      <h1 className='text-5xl sm:text-6xl font-bold mb-4'>
        Hi, I’m <span className='text-indigo-400'>Duvindu</span>
      </h1>

      <h2 className='text-2xl sm:text-3xl text-slate-300 mb-6'>
        Web Developer • System Analyst • Builder
      </h2>

      <p className='max-w-xl text-lg text-slate-400 leading-relaxed'>
        I create clean, responsive web applications and smart digital solutions
        that solve real-world problems. Welcome to my corner of the web!
      </p>
    </section>
  );
}

export default Hero;
