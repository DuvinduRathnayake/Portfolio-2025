// Single source of truth — add as many as you like.
export const projects = [
  {
    title: 'TaskMate — ASP.NET Core MVC + Dapper',
    blurb: 'Focused task manager with role-based auth and hand-tuned SQL.',
    stack: ['.NET 6', 'MVC', 'Dapper', 'SQL Server', 'Tailwind'],
    repo: 'https://github.com/DuvinduRathnayake/TaskMate',
    demo: '',
    shots: [
      {
        src: 'https://placehold.co/800x450/111827/94a3b8?text=TaskMate+Dashboard',
        alt: 'TaskMate Dashboard',
      },
      {
        src: 'https://placehold.co/800x450/0b1220/c7d2fe?text=Task+Detail+View',
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
        src: 'https://placehold.co/800x450/0f172a/e2e8f0?text=Portfolio+Home',
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
  // add more objects here later…
];
