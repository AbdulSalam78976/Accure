'use client';

import React, { useEffect, useRef, useState } from 'react';

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface CounterProps {
  to: number;
  suffix?: string;
  trigger: boolean;
  duration?: number;
}

interface StatData {
  number: number;
  suffix: string;
  title: string;
}

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────
function Counter({ to, suffix = '', trigger, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger || count === to) return;

    const animate = (ts: number) => {
      if (!startTimeRef.current) startTimeRef.current = ts;
      const progress = Math.min((ts - startTimeRef.current) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * to));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
      else setCount(to);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [trigger, to, duration, count]);

  return <>{count}{suffix}</>;
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleStats, setVisibleStats] = useState([false, false, false, false]);

  // Animate horizontal bars on scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !barsAnimated) {
          if (bar1Ref.current) bar1Ref.current.style.width = '100%';
          setTimeout(() => { if (bar2Ref.current) bar2Ref.current.style.width = '100%'; }, 200);
          setTimeout(() => { if (bar3Ref.current) bar3Ref.current.style.width = '100%'; }, 400);
          setBarsAnimated(true);
        } else if (!entry.isIntersecting) {
          [bar1Ref, bar2Ref, bar3Ref].forEach(r => { if (r.current) r.current.style.width = '0%'; });
          setBarsAnimated(false);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => { if (sectionRef.current) obs.unobserve(sectionRef.current); };
  }, [barsAnimated]);

  // Animate each stat counter when it enters viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    statRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting)
            setVisibleStats(prev => { const n = [...prev]; n[i] = true; return n; });
        },
        { threshold: 0.4 }
      );
      obs.observe(ref);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const stats: StatData[] = [
    { number: 20, suffix: '+', title: 'Years of continual excellence' },
    { number: 5,  suffix: '+', title: 'Industries served with AI-led transformation' },
    { number: 100, suffix: '+', title: 'Team members across the globe' },
    { number: 4,  suffix: '+', title: 'Countries with our presence' },
  ];

  return (
    <section
      id="why-accure"
      ref={sectionRef}
      className="w-full bg-white overflow-hidden"
    >
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="max-w-2xl">
          <h2 className="text-[#1A201B] font-poppins font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.12] tracking-tight mb-4">
            From digital change to{' '}
            <span className="block">AI-powered advantage</span>
          </h2>
          <p className="text-[#5A6A5C] text-sm sm:text-base leading-relaxed max-w-xl">
            We help enterprises reimagine how they work, serve, and grow — turning complexity into clarity and ambition into measurable progress.
          </p>
        </div>
      </div>

      {/* ── Animated brand bars (full-bleed) ─────────────────────────────── */}
      <div className="w-full mb-10 sm:mb-12 flex flex-col gap-2 sm:gap-3">
        {[
          { bg: 'linear-gradient(90deg,#E0EAD2 0%,#C0D2AC 100%)', ref: bar1Ref },
          { bg: 'linear-gradient(90deg,#9DB89A 0%,#7B9E73 100%)', ref: bar2Ref },
          { bg: 'linear-gradient(90deg,#4C6E4F 0%,#2E4B30 100%)', ref: bar3Ref },
        ].map(({ bg, ref }, i) => (
          <div key={i} className="w-full h-8 sm:h-10 overflow-hidden">
            <div
              ref={ref}
              className="h-full"
              style={{
                width: '0%',
                background: bg,
                transition: 'width 1.2s cubic-bezier(0.25,0.1,0.25,1)',
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Stats grid ───────────────────────────────────────────────────── */}
      <div className="px-5 sm:px-8 md:px-12 lg:px-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => { statRefs.current[i] = el; }}
              className={`flex flex-col transition-all duration-700 ease-out ${
                visibleStats[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Accent bar */}
              <div className="w-16 sm:w-20 h-[4px] bg-gray-200 mb-3 sm:mb-4 overflow-hidden">
                <div
                  className={`h-full bg-[#4C6E4F] transition-all duration-1000 ease-out ${
                    visibleStats[i] ? 'w-full' : 'w-0'
                  }`}
                />
              </div>

              {/* Number */}
              <div className="font-poppins font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none text-[#4C6E4F] mb-2 sm:mb-3">
                <Counter to={stat.number} suffix={stat.suffix} trigger={visibleStats[i]} duration={1.8} />
              </div>

              {/* Label */}
              <p className="text-[#1A201B] text-xs sm:text-sm leading-snug max-w-[160px]">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
