'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, Variants } from 'framer-motion';
import { ArrowUpRight, Users, Award, Layers } from 'lucide-react';
import { TimelineContent } from '@/components/ui/timeline-animation';
import { VerticalCutReveal, type VerticalCutRevealRef } from '@/components/ui/vertical-cut-reveal';

export default function IntroStats() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const revealRef = useRef<VerticalCutRevealRef>(null);

  useEffect(() => {
    if (isHeroInView) {
      revealRef.current?.startAnimation();
    }
  }, [isHeroInView]);

  const revealVariantsA: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { delay: i * 0.3, duration: 0.7 },
    }),
    hidden: { filter: 'blur(10px)', y: 40, opacity: 0 },
  };

  const revealVariantsB: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { delay: i * 0.3, duration: 0.7 },
    }),
    hidden: { filter: 'blur(10px)', y: -40, opacity: 0 },
  };

  const fadeVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.7 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <section id="about" className="py-24 bg-[#F6EFDD]/92 text-[#1A201B] relative overflow-hidden" ref={heroRef}>

      {/* Decorative Blur Backgrounds */}
      <TimelineContent
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(125% 125% at 50% 10%, #95c16826 0%, transparent 60%)' }}
        animationNum={2}
        customVariants={fadeVariants}
        timelineRef={heroRef}
      />
      <TimelineContent
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#3a4a2e14_1px,transparent_1px),linear-gradient(to_bottom,#3a4a2e14_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_110%)]"
        animationNum={3}
        customVariants={fadeVariants}
        timelineRef={heroRef}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Heading Block */}
        <div className="max-w-2xl mx-auto text-center pb-16">

          {/* Bold Prominent Eyebrow */}
          <span className="block font-bold text-sm sm:text-base uppercase tracking-[0.2em] text-[#3e7220] mb-4">
            About Us
          </span>

          {/* Big Title */}
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-[#27382B] tracking-tight">
            <VerticalCutReveal
              ref={revealRef}
              autoStart={false}
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              transition={{ type: 'spring', stiffness: 250, damping: 30, delay: 0.1 }}
              containerClassName="justify-center items-center"
            >
              {'An international data management & IT organization'}
            </VerticalCutReveal>
          </h2>

          {/* Descriptive Text */}
          <TimelineContent
            as="p"
            animationNum={0}
            customVariants={fadeVariants}
            timelineRef={heroRef}
            className="font-normal text-base sm:text-lg lg:text-xl leading-relaxed text-[#5A6A5C] pt-6"
          >
            accure helps governments and utilities transform how their systems work together — joining hardware, software, and real-time telemetry across enterprise cloud platforms.{' '}
            <Link
              href="#sectors"
              className="inline-flex items-center gap-1 text-[#27382B] font-semibold underline underline-offset-4 hover:text-[#687D6B] transition-colors group"
            >
              Learn more about Accure
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </TimelineContent>
        </div>

        {/* 3 Centered Animated Stats Cards — same reveal treatment as the collage images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">

          {/* Card 1 */}
          <TimelineContent
            as="div"
            animationNum={2}
            customVariants={revealVariantsA}
            timelineRef={heroRef}
            className="group relative rounded-3xl bg-white border border-[#687D6B]/15 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-[#F6F8F5] text-[#27382B] group-hover:bg-[#27382B] group-hover:text-white transition-colors duration-300">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#687D6B] bg-[#687D6B]/10 px-3 py-1 rounded-full">
                Our Team
              </span>
            </div>
            <div>
              <div className="font-mono font-bold text-5xl sm:text-6xl text-[#27382B] tracking-tight">
                100+
              </div>
              <p className="font-medium text-sm sm:text-base text-[#5A6A5C] mt-3 leading-relaxed">
                Experts and professionals in digital transformation, data management, and IT integration.
              </p>
            </div>
          </TimelineContent>

          {/* Card 2 */}
          <TimelineContent
            as="div"
            animationNum={3}
            customVariants={revealVariantsB}
            timelineRef={heroRef}
            className="group relative rounded-3xl bg-white border border-[#687D6B]/15 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-[#F6F8F5] text-[#27382B] group-hover:bg-[#27382B] group-hover:text-white transition-colors duration-300">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#687D6B] bg-[#687D6B]/10 px-3 py-1 rounded-full">
                Our Experience
              </span>
            </div>
            <div>
              <div className="font-mono font-bold text-5xl sm:text-6xl text-[#27382B] tracking-tight">
                20 yrs+
              </div>
              <p className="font-medium text-sm sm:text-base text-[#5A6A5C] mt-3 leading-relaxed">
                Experience in delivering mission-critical infrastructure programmes for public & private sectors.
              </p>
            </div>
          </TimelineContent>

          {/* Card 3 */}
          <TimelineContent
            as="div"
            animationNum={4}
            customVariants={revealVariantsA}
            timelineRef={heroRef}
            className="group relative rounded-3xl bg-white border border-[#687D6B]/15 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-2xl bg-[#F6F8F5] text-[#27382B] group-hover:bg-[#27382B] group-hover:text-white transition-colors duration-300">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#687D6B] bg-[#687D6B]/10 px-3 py-1 rounded-full">
                Our Practices
              </span>
            </div>
            <div>
              <div className="font-mono font-bold text-5xl sm:text-6xl text-[#27382B] tracking-tight">
                5
              </div>
              <p className="font-medium text-sm sm:text-base text-[#5A6A5C] mt-3 leading-relaxed">
                Specialized business units driving innovation across governance, energy, water, environment, and IT.
              </p>
            </div>
          </TimelineContent>

        </div>

        {/* Subtle Gradient Divider */}
        <motion.div
          className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#687D6B]/30 to-transparent origin-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#B99B5B]" />
        </motion.div>

      </div>
    </section>
  );
}
