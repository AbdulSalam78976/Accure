'use client';

import { useEffect, useRef } from 'react';

interface VantaEffectInstance {
  destroy: () => void;
}

/**
 * Single shared VANTA.NET canvas, fixed behind the whole page (one WebGL
 * context total). Sections layer semi-transparent backgrounds on top of it
 * so the animated network peeks through without hurting text contrast.
 */
export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffectInstance | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      const THREE = await import('three');
      const { default: NET } = await import('vanta/dist/vanta.net.min');

      if (cancelled || !vantaRef.current) return;

      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x687d6b,
        backgroundAlpha: 0.0,
        points: 8.0,
        maxDistance: 22.0,
        spacing: 18.0,
      });
    }

    init();

    return () => {
      cancelled = true;
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
