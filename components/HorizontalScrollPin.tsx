'use client';

import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollPinProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Pins the section in the viewport and translates its content horizontally
 * as the user scrolls vertically, then releases back to normal scroll once
 * the track has fully passed. No native horizontal scrollbar is shown.
 *
 * The pinned viewport is sized to the content's natural height (not a full
 * 100vh), and the scroll distance is matched 1:1 to the horizontal distance
 * that needs to be covered, so there's no empty scroll space. A ResizeObserver
 * keeps the measurement accurate if the track or viewport size changes after
 * the initial paint (fonts/images loading, viewport resize, etc.).
 */
export default function HorizontalScrollPin({
  children,
  className = '',
  trackClassName = '',
}: HorizontalScrollPinProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  useIsomorphicLayoutEffect(() => {
    const trackEl = trackRef.current;
    const stickyEl = stickyRef.current;
    if (!trackEl || !stickyEl) return;

    function measure() {
      if (!trackEl || !stickyEl) return;
      const trackWidth = trackEl.scrollWidth;
      const viewportWidth = stickyEl.offsetWidth;
      const horizontalDistance = Math.max(trackWidth - viewportWidth, 0);
      setDistance(horizontalDistance);
      setContainerHeight(stickyEl.offsetHeight + horizontalDistance);
    }

    measure();
    // Re-measure once more after paint, and again once web fonts / the
    // window finish loading — the initial pass can under/over-measure if
    // it runs before the async Google Fonts swap settles, which previously
    // produced a mismatched (too-large) scroll distance and a dead gap
    // after the pinned row.
    const raf = requestAnimationFrame(measure);
    document.fonts?.ready?.then(measure).catch(() => {});
    window.addEventListener('load', measure);

    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(trackEl);
    resizeObserver.observe(stickyEl);

    window.addEventListener('resize', measure);
    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: containerHeight ?? undefined }}
    >
      <div ref={stickyRef} className="sticky top-0 overflow-hidden py-10">
        <motion.div ref={trackRef} style={{ x, willChange: 'transform' }} className={`flex w-max ${trackClassName}`}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
