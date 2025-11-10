import portfolio1 from '../assets/portfolio-1.png';
import face from '../assets/face.jpg';
import drywall from '../assets/drywall.png';
import drywall1 from '../assets/drywall1.png';
import resume from '../assets/resumeanalyzer.png';

export const projects = [
  {
    title: 'Dimitry Drywall — React',
    blurb:
      'Local service website with hero carousel, pricing-led services, projects gallery, about, and a contact form with drag-and-drop file upload. Lightweight page-enter + scroll animations and route-aware scroll-to-top.',
    stack: [
      'React',
      'React Router',
      'Tailwind CSS',
      'Vite',
      'Formspree',
      'Netlify',
    ],
    repo: 'https://github.com/DuvinduRathnayake/drywall-website',
    demo: 'https://dimitrydrywall.netlify.app/',
    shots: [
      { src: drywall, alt: 'Home hero and trust badges' },
      { src: drywall1, alt: 'Projects grid with modal viewer' },
    ],
    bullets: [
      'Auto hero carousel (no libs)',
      'Services with pricing chips + in-page nav',
      'Projects gallery with modal viewer',
      'About page: values, stats, process',
      'Contact form + drag/drop uploader (Formspree)',
      'Page-enter & scroll-reveal animations',
      'Scroll-to-top on route change (hash-aware)',
    ],
    results: [
      'Deployed on Netlify with SPA redirects',
      'Lazy-loaded media, mobile-first layout',
      'Accessible semantics & focus states',
    ],
  },
  // {
  //   title: 'TaskMate — ASP.NET Core MVC + Dapper',
  //   blurb: 'Focused task manager with role-based auth and hand-tuned SQL.',
  //   stack: ['.NET 6', 'MVC', 'Dapper', 'SQL Server', 'Tailwind'],
  //   repo: 'https://github.com/DuvinduRathnayake/TaskMate',
  //   demo: '',
  //   shots: [
  //     {
  //       src: portfolio1,
  //       alt: 'TaskMate Dashboard',
  //     },
  //     {
  //       src: portfolio1,
  //       alt: 'Task detail',
  //     },
  //   ],
  //   bullets: [
  //     'Role-based Auth',
  //     'Dapper + parameterized queries',
  //     'MVC: Controller → ViewModel → View',
  //   ],
  //   results: ['CRUD P95 < 60ms locally', 'Zero ORM bloat'],
  // },
  {
    title: 'Portfolio 2025 — React + Tailwind',
    blurb: 'This site. Motion, dark mode, sections, and premium UI polish.',
    stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    repo: 'https://github.com/DuvinduRathnayake/Portfolio-2025',
    demo: '',
    shots: [
      {
        src: portfolio1,
        alt: 'Portfolio Home',
      },
      {
        src: 'https://placehold.co/800x450/111827/c7d2fe?text=Projects+Grid',
        alt: 'Projects Grid',
      },
    ],
    bullets: ['Dark mode', 'Reusable components', 'Accessible animations'],
    results: ['Lighthouse 90+ a11y', 'Clean, scalable structure'],
  },
  {
    title: 'AI Résumé Optimizer — Next.js + Puter.js',
    blurb:
      'ATS-style resume vs job post analyzer built on top of a ChatGPT-based open-source repo, adapted to Next.js with local-first storage via Puter.js.',
    stack: ['Next.js', 'React', 'Puter.js', 'OpenAI API'],
    repo: 'https://github.com/DuvinduRathnayake/AI-Resume-Analyzer',
    demo: '',
    shots: [
      {
        src: resume,
        alt: 'AI Résumé Optimizer dashboard',
      },
      {
        src: resume,
        alt: 'Score and suggestions view',
      },
    ],
    bullets: [
      'Built from a ChatGPT repo foundation (customized pipelines)',
      'Next.js app with API routes for analysis',
      'Puter.js for local-first file handling & persistence',
      'ATS-style scoring, keyword gaps, tailored bullet suggestions',
      'Export-ready output for quick edits',
    ],
    results: [
      'Cuts tailoring time significantly; roadmap: auth + history + PDF export',
    ],
  },

  // {
  //   title: 'Resume Optimizer (WIP)',
  //   blurb: 'Analyze resumes vs job posts with ATS-style scoring & tips.',
  //   stack: ['Next JS', 'React', 'Puter JS'],
  //   repo: 'https://github.com/DuvinduRathnayake/AI-Resume-Analyzer',
  //   demo: '',
  //   shots: [
  //     {
  //       src: resume,
  //       alt: 'Resume-analyzer.png',
  //     },
  //     {
  //       src: resume,
  //       alt: 'Resume-analyzer.png',
  //     },
  //   ],
  //   bullets: ['Parsing + scoring', 'Gap suggestions', 'Export-ready output'],
  //   results: ['Faster tailoring for each role'],
  // },

  {
    title: 'Face Recognition Project using Python',
    blurb:
      'Face Recognition Project Overview This project implements a real-time face recognition system using the K-Nearest Neighbors (KNN) algorithm and OpenCV. It captures webcam footage, detects faces, and identifies individuals by comparing detected faces with a pre-built dataset.',
    stack: ['Python', 'OpenCV'],
    repo: 'https://github.com/DuvinduRathnayake/Face-Recognition-Project',
    demo: '',
    shots: [
      {
        src: face,
        alt: 'Optimizer Dashboard',
      },
      {
        src: 'https://placehold.co/800x450/0b1220/c7d2fe?text=Score+View',
        alt: 'Score View',
      },
    ],
    bullets: ['Parsing + scoring', 'Gap suggestions', 'Export-ready output'],
    results: ['Faster tailoring for each role'],
  },
];
