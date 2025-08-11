import portfolio1 from '../assets/portfolio-1.png';
import face from '../assets/face.jpg';

export const projects = [
  {
    title: 'TaskMate — ASP.NET Core MVC + Dapper',
    blurb: 'Focused task manager with role-based auth and hand-tuned SQL.',
    stack: ['.NET 6', 'MVC', 'Dapper', 'SQL Server', 'Tailwind'],
    repo: 'https://github.com/DuvinduRathnayake/TaskMate',
    demo: '',
    shots: [
      {
        src: portfolio1,
        alt: 'TaskMate Dashboard',
      },
      {
        src: portfolio1,
        alt: 'Task detail',
      },
    ],
    bullets: [
      'Role-based Auth',
      'Dapper + parameterized queries',
      'MVC: Controller → ViewModel → View',
    ],
    results: ['CRUD P95 < 60ms locally', 'Zero ORM bloat'],
  },
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
    title: 'Resume Optimizer (WIP)',
    blurb: 'Analyze resumes vs job posts with ATS-style scoring & tips.',
    stack: ['Node', 'React', 'MongoDB'],
    repo: '',
    demo: '',
    shots: [
      {
        src: 'https://placehold.co/800x450/111827/94a3b8?text=Optimizer+Dashboard',
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
