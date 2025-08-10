import React, { useEffect, useRef, useState } from 'react';

// Soft spotlight that follows the cursor. Drop at the top of a section and set pointer-events:none
export default function Spotlight({ size = 420, strength = 0.28 }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const el = ref.current?.parentElement; // track within parent section
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const onLeave = () => setPos({ x: -9999, y: -9999 });

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className='pointer-events-none absolute inset-0 z-0'
      style={{
        background: `radial-gradient(${size}px ${size}px at ${pos.x}px ${pos.y}px, rgba(255,255,255,${strength}), transparent 60%)`,
        mixBlendMode: 'soft-light',
      }}
    />
  );
}
