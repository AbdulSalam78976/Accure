'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { VerticalCutReveal, type VerticalCutRevealRef } from '@/components/ui/vertical-cut-reveal';

const lineLefts = ['6%', '18%', '30%', '42%', '58%', '70%', '82%', '94%'];

const points = [
  {
    image: '/images/city-photo.png',
    alt: 'City and Citizen infrastructure',
    text: 'Demand is growing at the fastest pace in decades. Citizen and customer expectations for reliability, transparency and control have never been higher.',
  },
  {
    image: '/images/datacenter-photo.png',
    alt: 'AI Data Centre compute infrastructure',
    text: 'In parallel we are in the midst of a technological renaissance — driven by AI, scalable compute and near-ubiquitous connectivity.',
  },
];

export default function WhyAccureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const revealRef = useRef<VerticalCutRevealRef>(null);

  useEffect(() => {
    if (isSectionInView) {
      revealRef.current?.startAnimation();
    }
  }, [isSectionInView]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Staggered reveal progress for each vertical line — line i grows in a bit
  // after line i-1, over the course of the section scrolling into view.
  const l0 = useTransform(scrollYProgress, [0.0, 0.4], [0, 1]);
  const l1 = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  const l2 = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const l3 = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);
  const l4 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const l5 = useTransform(scrollYProgress, [0.25, 0.65], [0, 1]);
  const l6 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);
  const l7 = useTransform(scrollYProgress, [0.35, 0.75], [0, 1]);
  const lineProgress = [l0, l1, l2, l3, l4, l5, l6, l7];

  return (
    <section ref={sectionRef} id="why-accure" className="relative py-24 bg-[#F6EFDD]/92 text-[#141c0d] overflow-hidden">

      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-[#687D6B]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Group of vertical lines — grow in as you scroll through the section */}
      <div className="absolute inset-0 pointer-events-none">
        {lineLefts.map((left, i) => (
          <motion.div
            key={left}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#95c168]/50 to-transparent"
            style={{ left, scaleY: lineProgress[i], transformOrigin: 'top' }}
          />
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#27382B]/10 border border-[#27382B]/15 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#95c168] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#27382B]">
              Why accure
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#27382B] leading-[1.15] max-w-2xl mx-auto">
            <VerticalCutReveal
              ref={revealRef}
              autoStart={false}
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              transition={{ type: 'spring', stiffness: 250, damping: 30, delay: 0.1 }}
              containerClassName="justify-center items-center"
            >
              {'Utilities and governments face a once-in-a-generation shift.'}
            </VerticalCutReveal>
          </h2>
        </motion.div>

        {/* Photo Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={point.image}
              className="relative h-[320px] sm:h-[360px] rounded-3xl overflow-hidden shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <Image
                src={point.image}
                alt={point.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B120E]/85 via-[#0B120E]/30 to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 font-manrope font-normal text-sm sm:text-base leading-relaxed text-white/90">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
