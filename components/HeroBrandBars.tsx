'use client';

import { useEffect, useRef, type RefObject } from 'react';

const GRADIENTS = [
  'linear-gradient(180deg,#E0EAD2 0%,#C0D2AC 100%)',
  'linear-gradient(180deg,#9DB89A 0%,#7B9E73 100%)',
  'linear-gradient(180deg,#4C6E4F 0%,#2E4B30 100%)',
];

/** Skewed brand-color bars that grow in once `containerRef`'s section scrolls into view. */
export default function HeroBrandBars({ containerRef }: { containerRef: RefObject<HTMLElement | null> }) {
  const barRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const height = entry.isIntersecting ? '100%' : '0%';
        barRefs.forEach((bar) => { if (bar.current) bar.current.style.height = height; });
      },
      { threshold: 0.2 }
    );
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [containerRef]);

  return (
    <div className="block absolute right-0 sm:right-2 lg:right-8 xl:right-12 top-0 h-full pointer-events-none opacity-100">
      <div className="flex gap-2 sm:gap-3 lg:gap-4 h-full">
        {GRADIENTS.map((bg, i) => (
          <div
            key={i}
            ref={barRefs[i]}
            className="w-14 transition-all duration-1000 ease-out"
            style={{ height: '0%', background: bg, transform: 'skewX(-15deg)', transformOrigin: 'top' }}
          />
        ))}
      </div>
    </div>
  );
}
