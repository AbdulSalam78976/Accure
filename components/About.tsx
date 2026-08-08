'use client';

import React, { useEffect, useRef, useState } from 'react';

// =========================================
// TYPESCRIPT INTERFACES
// =========================================
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

// =========================================
// ANIMATED COUNTER COMPONENT
// =========================================
function Counter({ to, suffix = '', trigger, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger || count === to) return;

    const startAnimation = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Smooth ease-out deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.round(easeOutCubic * to);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(startAnimation);
      } else {
        setCount(to); // Ensure it lands perfectly
      }
    };

    animationFrameRef.current = requestAnimationFrame(startAnimation);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [trigger, to, duration, count]);

  return <span>{count}{suffix}</span>;
}

// =========================================
// MAIN COMPONENT
// =========================================
export default function AIAdvantageSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  // Individual refs for each horizontal bar
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for the brand bars, animate horizontal bars from left to right
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !barsAnimated) {
            if (bar1Ref.current) bar1Ref.current.style.width = '100%';
            setTimeout(() => {
              if (bar2Ref.current) bar2Ref.current.style.width = '100%';
            }, 200);
            setTimeout(() => {
              if (bar3Ref.current) bar3Ref.current.style.width = '100%';
            }, 400);
            setBarsAnimated(true);
          } else if (!entry.isIntersecting) {
            if (bar1Ref.current) bar1Ref.current.style.width = '0%';
            if (bar2Ref.current) bar2Ref.current.style.width = '0%';
            if (bar3Ref.current) bar3Ref.current.style.width = '0%';
            setBarsAnimated(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [barsAnimated]);

  // Individual triggers for each stat to create scroll reveal effect
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleStats, setVisibleStats] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    statRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleStats((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Data for the 4 stats
  const stats: StatData[] = [
    { number: 20, suffix: '+', title: 'Years of continual excellence' },
    { number: 5, suffix: '+', title: 'Industries we have served with AI-led transformation' },
    { number: 100, suffix: '+', title: 'Team members across the globe' },
    { number: 4, suffix: '+', title: 'Countries with our presence and clientele' },
  ];

  return (
    <section id="why-accure" ref={sectionRef} className="w-full bg-white py-12 overflow-hidden relative">
      <div className="max-w-full mx-auto relative px-6 md:px-12 lg:px-20">
        {/* ===== HEADER SECTION ===== */}
        <div className="mb-7 md:mb-8 max-w-2xl">
          <h2 className="text-[#1A201B] text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-tight mb-5">
            From digital change to <br />
            AI-powered advantage
          </h2>
          <p className="text-[#5A6A5C] text-base md:text-lg leading-relaxed max-w-xl">
            We help enterprises reimagine how they work, serve, and grow with AI-led transformation that turns complexity into clarity and ambition into measurable progress.
          </p>
        </div>
      </div>

      {/* ===== ACCURE BRAND BARS =====
          Full-bleed strip, breaks out of the container padding and stretches
          edge to edge of the viewport. Sits in its own row so it never
          overlaps or dims the stats content below. */}
      <div className="hidden lg:block relative left-1/2 right-1/2 -mx-[50vw] w-screen mb-10">
        <div className="flex flex-col gap-3">
          <div className="w-full h-10 overflow-hidden">
            <div
              ref={bar1Ref}
              className="h-full"
              style={{
                width: '0%',
                background: 'linear-gradient(90deg,#E0EAD2 0%,#C0D2AC 100%)',
                transitionProperty: 'width',
                transitionDuration: '1.2s',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
            />
          </div>
          <div className="w-full h-10 overflow-hidden">
            <div
              ref={bar2Ref}
              className="h-full"
              style={{
                width: '0%',
                background: 'linear-gradient(90deg,#9DB89A 0%,#7B9E73 100%)',
                transitionProperty: 'width',
                transitionDuration: '1.2s',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
            />
          </div>
          <div className="w-full h-10 overflow-hidden">
            <div
              ref={bar3Ref}
              className="h-full"
              style={{
                width: '0%',
                background: 'linear-gradient(90deg,#4C6E4F 0%,#2E4B30 100%)',
                transitionProperty: 'width',
                transitionDuration: '1.2s',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
            />
          </div>
        </div>
      </div>
<div className="max-w-full mx-auto relative px-6 md:px-12 lg:px-20">
  {/* ===== STATS: ONE ROW ON DESKTOP, HORIZONTAL SCROLL ON MOBILE ===== */}
  <div
    className="
      flex justify-start md:justify-center overflow-x-auto gap-8 pb-4
      snap-x snap-mandatory
      md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-10 md:overflow-visible md:place-items-center
      [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
      relative
    "
  >
    {/* White fade mask on the right edge, mobile only */}
    <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10 md:hidden" />

    {stats.map((stat: StatData, index: number) => (
      <div
        key={index}
        ref={(el) => {
          statRefs.current[index] = el;
        }}
        className={`
          flex flex-col min-w-[240px] sm:min-w-[260px] snap-start md:min-w-0 md:snap-none
          transition-all duration-700 ease-out
          ${visibleStats[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Line Divider with animation */}
        <div className="w-35 h-[5px] bg-gray-200 mb-5 overflow-hidden relative mx-auto md:mx-0">
          <div
            className={`h-full bg-[#4C6E4F] transition-all duration-1000 ease-out ${
              visibleStats[index] ? 'w-full' : 'w-0'
            }`}
          />
        </div>

        {/* Animated Number */}
        <div className="font-light  text-[500px] md:text-[80px] leading-none text-[#4C6E4F] mb-4 text-center md:text-center text-center md:text-left">
          <Counter to={stat.number} suffix={stat.suffix} trigger={visibleStats[index]} duration={1.8} />
        </div>

        {/* Description Text */}
        <p className="text-[#1A201B] text-base md:text-lg leading-snug max-w-[220px] text-center md:text-left mx-auto md:mx-0">
          {stat.title}
        </p>
      </div>
    ))}
  </div>

  {/* Mobile scroll indicator */}
  <div className="md:hidden flex justify-center mt-6 gap-2">
    {stats.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          visibleStats[index] ? 'bg-[#4C6E4F] w-4' : 'bg-gray-300'
        }`}
      />
    ))}
  </div>
</div>
        </section>
  );
}