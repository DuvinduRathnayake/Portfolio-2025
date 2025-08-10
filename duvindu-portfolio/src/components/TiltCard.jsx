import React, { useRef } from 'react';

// Lightweight 3D tilt on hover with shine
export default function TiltCard({ children, max = 12 }) {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = (y / rect.height - 0.5) * -max;
    const ry = (x / rect.width - 0.5) * max;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty('--shine-x', `${x}px`);
    el.style.setProperty('--shine-y', `${y}px`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className='group relative will-change-transform'
    >
      <div
        ref={ref}
        className='relative rounded-2xl border border-white/20 bg-white/5 p-0.5 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-900/40 transition-transform duration-200'
      >
        {/* shine */}
        <div
          aria-hidden
          className='pointer-events-none absolute inset-0 rounded-2xl'
          style={{
            background:
              'radial-gradient(500px 200px at var(--shine-x) var(--shine-y), rgba(255,255,255,0.25), transparent 40%)',
            mixBlendMode: 'overlay',
          }}
        />
        <div className='relative rounded-[14px] overflow-hidden'>
          {children}
        </div>
      </div>
    </div>
  );
}
