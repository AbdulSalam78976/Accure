'use client';


import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HorizontalScrollPin from './HorizontalScrollPin';
import { VerticalCutReveal, type VerticalCutRevealRef } from '@/components/ui/vertical-cut-reveal';

const domainData = [
  {
    id: 'digital-gov',
    title: 'Digital Governance & Government',
    description: 'Bridge municipal agencies, registries, and emergency networks with unified data governance.',
    image: '/images/gov.png',
    href: '/sectors#digital-gov',
  },
  {
    id: 'it-infra',
    title: 'Enterprise IT Infrastructure & Cloud',
    description: 'Connect mainframes, private servers, and multi-cloud environments via zero-downtime event streams.',
    image: '/images/it.png',
    href: '/sectors#it-infra',
  },
  {
    id: 'smart-energy',
    title: 'Smart Energy & Smart Grid',
    description: 'Orchestrate microgrids, battery storage, and EV networks with sub-second load balancing.',
    image: '/images/energy.png',
    href: '/sectors#smart-energy',
  },
  {
    id: 'water-systems',
    title: 'Hydromet for Water & Weather',
    description: 'Monitor water distribution, reservoir levels, and pressure gradients in real time.',
    image: '/images/water.png',
    href: '/sectors#water-systems',
  },
  {
    id: 'environment',
    title: 'Environmental Management',
    description: 'Automate Scope 1-3 carbon emission calculations and ESG regulatory reporting.',
    image: '/images/environment.png',
    href: '/sectors#environment',
  },
];

export default function DomainRow() {
  const router = useRouter();
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
  const blobOneY = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const blobTwoX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const handleCardClick = (href: string) => {
    router.push(href);
  };

  return (
    <section ref={sectionRef} id="sectors" className="py-4 bg-[#F6EFDD]/92 text-[#1A201B] relative overflow-hidden">
      {/* Background Lighting Accents — drift with scroll (parallax) */}
      <motion.div
        style={{ y: blobOneY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-[#687D6B]/10 blur-[130px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: blobTwoY, x: blobTwoX }}
        className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-[#95c168]/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Compact Header Block */}
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-3 mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#27382B]/10 border border-[#27382B]/15 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#95c168] animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#27382B]">
              Cross-Sector Domain Matrix
            </span>
          </div>

          {/* Heading strictly constrained to 2 lines max on desktop */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#27382B] leading-[1.15] max-w-3xl mx-auto">
            <VerticalCutReveal
              ref={revealRef}
              autoStart={false}
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              transition={{ type: 'spring', stiffness: 250, damping: 30, delay: 0.1 }}
              containerClassName="justify-center items-center"
            >
              {'Tailored integrated solutions for critical infrastructure'}
            </VerticalCutReveal>
          </h2>

          {/* Subtitle strictly constrained to 1 line on large screens */}
          <p className="text-sm sm:text-base text-[#5A6A5C] whitespace-normal lg:whitespace-nowrap overflow-hidden text-ellipsis leading-relaxed">
            Explore our specialized business sectors bridging physical telemetry, IT systems, and regulatory cloud platforms.
          </p>
        </motion.div>

      </div>

      {/* Pinned Horizontal Scroll Row */}
      <HorizontalScrollPin trackClassName="gap-6 px-4 sm:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]">
        {domainData.map((domain) => (
          <motion.div
            key={domain.id}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleCardClick(domain.href)}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="shrink-0 w-[240px] sm:w-[260px] h-[350px] rounded-3xl p-5 text-white border border-black/10 hover:border-white/30 shadow-xl hover:shadow-2xl flex flex-col justify-between cursor-pointer group relative overflow-hidden select-none bg-[#0B120E]"
          >
            {/* Background Image with Zoom Effect */}
            <Image
              src={domain.image}
              alt={domain.title}
              fill
              className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out opacity-85"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B120E]/70 via-[#0B120E]/25 to-transparent group-hover:via-[#0B120E]/40 transition-colors duration-300 pointer-events-none" />

            {/* Top Row: Floating Arrow Button */}
            <div className="flex justify-end w-full relative z-10">
              <div className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/80 group-hover:text-white group-hover:bg-[#95c168] group-hover:text-black group-hover:border-[#95c168] transition-all duration-300 transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Content: Title & Revealing Description */}
            <div className="flex flex-col justify-end relative z-10">
              <h3 className="text-lg font-bold text-white leading-snug tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
                {domain.title}
              </h3>

              {/* Description Revealer — grid-rows trick animates the true content height smoothly */}
              <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-in-out">
                <div className="overflow-hidden">
                  <p className="text-xs text-[#C6CCC1] leading-relaxed pt-2 border-t border-white/10 mt-2">
                    {domain.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </HorizontalScrollPin>
    </section>
  );
}