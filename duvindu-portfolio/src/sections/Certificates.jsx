// src/sections/Certificates.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Reveal from '../components/Reveal';
import { SiCloudflare, SiUdemy, SiCoursera } from 'react-icons/si';

// Edit this array with your real certificates
const certs = [
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    icon: SiCloudflare,
    issued: '—', // e.g., "Aug 2025"
    status: 'In Progress',
    credentialUrl: '', // paste the Microsoft Learn profile or Credly url when available
    skills: ['Cloud Basics', 'Compute', 'Storage', 'Networking', 'Pricing'],
  },
  {
    title: 'System Design Basics', // example placeholder
    issuer: 'Udemy',
    icon: SiUdemy,
    issued: '—',
    status: 'In Progress',
    credentialUrl: '',
    skills: ['Scalability', 'Caching', 'Queues'],
  },
  {
    title: 'Algorithms & Data Structures', // example placeholder
    issuer: 'Coursera',
    icon: SiCoursera,
    issued: '—',
    status: 'Planned',
    credentialUrl: '',
    skills: ['Arrays', 'Graphs', 'DP'],
  },
];

function StatusBadge({ status }) {
  const map = {
    Verified: {
      ring: 'ring-emerald-400/40',
      dot: 'bg-emerald-500',
      text: 'text-emerald-600 dark:text-emerald-300',
    },
    'In Progress': {
      ring: 'ring-amber-400/40',
      dot: 'bg-amber-500',
      text: 'text-amber-600 dark:text-amber-300',
    },
    Planned: {
      ring: 'ring-slate-400/40',
      dot: 'bg-slate-400',
      text: 'text-slate-600 dark:text-slate-300',
    },
  };
  const s = map[status] || map['Planned'];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 px-2.5 py-1 text-xs ${s.text} ring-1 ${s.ring}`}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot} animate-pulse`} />
      {status}
    </span>
  );
}

function CertCard({ c }) {
  const Icon = c.icon;
  return (
    <Reveal className='group relative'>
      <div className='absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/20 to-pink-500/20 opacity-0 transition group-hover:opacity-100' />
      <article className='relative h-full rounded-2xl border border-white/30 bg-white/60 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60'>
        <div className='flex items-start gap-4'>
          <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-slate-900 ring-1 ring-white/60 dark:bg-slate-800 dark:text-white dark:ring-slate-700'>
            {Icon && <Icon size={20} />}
          </div>
          <div className='min-w-0'>
            <h3 className='text-base font-semibold text-slate-900 dark:text-white'>
              {c.title}
            </h3>
            <p className='text-sm text-slate-600 dark:text-slate-300'>
              {c.issuer}
            </p>
            <div className='mt-2 flex flex-wrap items-center gap-2'>
              <StatusBadge status={c.status} />
              {c.issued && c.issued !== '—' && (
                <span className='text-xs text-slate-500 dark:text-slate-400'>
                  Issued: {c.issued}
                </span>
              )}
            </div>
          </div>
        </div>

        {c.skills?.length > 0 && (
          <div className='mt-4 flex flex-wrap gap-2'>
            {c.skills.map((s) => (
              <span
                key={s}
                className='inline-flex items-center rounded-full border border-white/40 px-2.5 py-1 text-xs text-slate-700 dark:text-slate-200 dark:border-slate-700/60'
              >
                {s}
              </span>
            ))}
          </div>
        )}

        <div className='mt-4 flex gap-3'>
          {c.credentialUrl ? (
            <a
              href={c.credentialUrl}
              target='_blank'
              rel='noreferrer'
              className='rounded-lg bg-indigo-600 px-3 py-1.5 text-xs text-white transition hover:bg-indigo-700'
            >
              View Credential
            </a>
          ) : (
            <span className='rounded-lg border border-white/30 px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300'>
              Credential link coming soon
            </span>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Certificates() {
  return (
    <section
      id='certificates'
      className='relative w-full scroll-mt-24 py-24 text-slate-900 dark:text-white'
    >
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6'>
        <SectionHeader
          eyebrow='Certificates'
          title='Proof I Study'
          subtitle='Verified badges and progress — no fluff.'
        />

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {certs.map((c) => (
            <CertCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
