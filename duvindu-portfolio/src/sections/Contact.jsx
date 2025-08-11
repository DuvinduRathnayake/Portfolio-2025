// src/sections/Contact.jsx
import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [reason, setReason] = useState('General');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const form = e.target;
    const data = new FormData(form);
    data.set('reason', reason);

    try {
      const res = await fetch('https://formspree.io/f/xgvzrpgg', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus("Message sent! I'll reply within 24–48h.");
        form.reset();
        setReason('General');
      } else {
        setStatus('Oops! Something went wrong. Try email or LinkedIn.');
      }
    } catch (err) {
      setStatus('Network error. Please try again later.');
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('duvindu.rathnayake@gmail.com');
      setStatus('Email copied to clipboard ✅');
    } catch {}
  };

  return (
    <section
      id='contact'
      className='relative w-full scroll-mt-24 py-24 text-slate-900 dark:text-white'
    >
      <div className='relative mx-auto max-w-5xl px-4 sm:px-6'>
        <SectionHeader
          eyebrow='Contact'
          title="Let's work together"
          subtitle='Prefer email? Use the form. Prefer networking? Hit LinkedIn.'
        />

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Left: Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className='flex w-full flex-col gap-4 rounded-2xl border border-white/30 bg-white/60 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'
            >
              {/* Anti-spam honeypot */}
              <input
                type='text'
                name='_gotcha'
                className='hidden'
                tabIndex='-1'
                autoComplete='off'
              />

              {/* Reason chips (unique touch) */}
              <div>
                <label className='mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300'>
                  Reason
                </label>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'General',
                    'Project Inquiry',
                    'Interview',
                    'Collaboration',
                  ].map((r) => (
                    <button
                      type='button'
                      key={r}
                      onClick={() => setReason(r)}
                      className={`rounded-full border px-3 py-1 text-xs transition ${
                        reason === r
                          ? 'border-indigo-500 bg-indigo-600 text-white'
                          : 'border-white/40 text-slate-700 hover:bg-white/70 dark:text-slate-200 dark:border-slate-700/60 dark:hover:bg-slate-800'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <input
                type='text'
                name='name'
                placeholder='Your Name'
                required
                className='rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white'
              />

              <input
                type='email'
                name='email'
                placeholder='Your Email'
                required
                className='rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white'
              />

              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white'
              />

              <textarea
                name='message'
                rows='5'
                placeholder='Your Message'
                required
                className='rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white'
              />

              <button
                type='submit'
                className='rounded-lg bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700'
              >
                Send Message
              </button>

              {status && (
                <p className='text-sm text-slate-600 dark:text-slate-300'>
                  {status}
                </p>
              )}
            </form>
          </Reveal>

          {/* Right: Quick-contact card with LinkedIn retained + unique touches */}
          <Reveal delay={0.05}>
            <div className='flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/30 bg-white/60 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
              <div>
                <h3 className='text-lg font-semibold'>Prefer a quick ping?</h3>
                <p className='mt-2 text-sm text-slate-600 dark:text-slate-300'>
                  You can email me directly or connect on LinkedIn. I usually
                  reply within <strong>24–48 hours</strong>.
                </p>

                <div className='mt-4 grid gap-2'>
                  <button
                    onClick={copyEmail}
                    className='inline-flex items-center justify-center rounded-lg border border-white/40 px-4 py-2 text-sm transition hover:bg-white/80 dark:border-slate-700/60 dark:hover:bg-slate-800'
                  >
                    Copy Email: duvindu.rathnayake@gmail.com
                  </button>

                  <a
                    href='mailto:duvindu.rathnayake@gmail.com?subject=Hello%20Duvindu&body=Hi%20Duvindu%2C%0D%0A%0D%0A'
                    className='inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white transition hover:bg-indigo-700'
                  >
                    Open Mail App
                  </a>

                  <a
                    href='https://www.linkedin.com'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center justify-center rounded-lg border border-current px-4 py-2 text-sm transition hover:bg-current hover:text-white dark:hover:text-slate-900'
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              {/* Availability badge (unique touch) */}
              <div className='mt-6 rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-600 dark:text-emerald-300'>
                <div className='flex items-center gap-2'>
                  <span className='inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500' />
                  <strong>Currently open to: </strong> Contract or full-time
                  roles
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
