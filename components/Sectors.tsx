'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Landmark,
  Server,
  Zap,
  Droplets,
  Leaf,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';

// 1. Define the TypeScript Interface
interface IndustryData {
  id: string;
  title: string;
  image: string;
  href: string;
  icon: LucideIcon;
}

// 2. Apply the Interface to the data array
const domainData: IndustryData[] = [
  {
    id: 'digital-gov',
    title: 'Digital Governance & Government',
    image: '/images/DigitalGovernment.jpg',
    href: '/sectors/digital-gov',
    icon: Landmark,
  },
  {
    id: 'it-infra',
    title: 'Enterprise IT Infrastructure & Cloud',
    image: '/images/data-center.jpg',
    href: '/sectors/it-infra',
    icon: Server,
  },
  {
    id: 'smart-energy',
    title: 'Smart Energy & Smart Grid',
    image: '/images/smartgrid.jpg',
    href: '/sectors/smart-energy',
    icon: Zap,
  },
  {
    id: 'water-systems',
    title: 'Hydromet for Water & Weather',
    image: '/images/water.jpg',
    href: '/sectors/water-systems',
    icon: Droplets,
  },
  {
    id: 'environment',
    title: 'Environmental Management',
    image: '/images/envoir.webp',
    href: '/sectors/environment',
    icon: Leaf,
  },
];

// =========================================
// ICON MOTION
// Each sector's icon gets a distinct animation tied to what it represents,
// rather than one generic bounce reused five times. Idle (inactive) icons
// stay still except for a small hover nudge — only the active icon animates
// continuously, so motion signals "this is selected" instead of just noise.
// =========================================
const iconMotion: Record<string, Variants> = {
  'digital-gov': {
    idle: { rotate: 0, scale: 1 },
    active: {
      rotate: [0, -6, 6, -3, 0],
      scale: [1, 1.08, 1],
      transition: { duration: 1.6, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' },
    },
  }, // a slow, deliberate "stamp of authority" rock
  'it-infra': {
    idle: { opacity: 1 },
    active: {
      opacity: [1, 1, 0.35, 1, 1],
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', times: [0, 0.4, 0.55, 0.7, 1] },
    },
  }, // a status light blink
  'smart-energy': {
    idle: { rotate: 0, scale: 1 },
    active: {
      scale: [1, 1.25, 0.95, 1.1, 1],
      rotate: [0, -4, 4, 0],
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1.1, ease: 'easeInOut' },
    },
  }, // a quick electric flicker
  'water-systems': {
    idle: { y: 0 },
    active: {
      y: [0, 5, 0],
      transition: { duration: 1.4, repeat: Infinity, ease: 'easeInOut' },
    },
  }, // a gentle drip bounce
  environment: {
    idle: { rotate: 0 },
    active: {
      rotate: [-8, 8, -8],
      transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
    },
  }, // a leaf swaying in the wind
};

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeIndustry: IndustryData = domainData[activeIndex];
  const total = domainData.length;

  // Reorder all 5 sectors so the active one always lands in the middle slot,
  // with the rest wrapping around it above and below (cyclic).
  const centerOffset = Math.floor(total / 2); // 2, for 5 items
  const orderedIndustries = Array.from({ length: total }, (_, slot) => {
    const offset = slot - centerOffset; // -2, -1, 0, 1, 2
    const dataIndex = (activeIndex + offset + total) % total;
    return domainData[dataIndex];
  });

  // Auto-switch every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % domainData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 sm:py-14 md:py-16 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-10 lg:gap-16 xl:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Heading */}
            <h2 className="font-poppins text-[32px] sm:text-[40px] lg:text-[60px] font-medium tracking-tight text-[#141c0d] leading-[1.1]">
              Sectors we serve
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-[#4f564b]">
              We partner with global enterprises across industries to solve
              complex challenges through practical, scalable technology services
              aligned with their business goals, helping them adapt, grow, and
              lead in a fast-changing world.
            </p>

            {/* All 5 industries, reordered each time so the active one sits centered */}
            <div className="mt-10 space-y-2">
              {orderedIndustries.map((industry) => {
                const dataIndex = domainData.findIndex((d) => d.id === industry.id);
                const isActive = dataIndex === activeIndex;
                return (
                  <motion.button
                    key={industry.id}
                    layout
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    onClick={() => setActiveIndex(dataIndex)}
                    className="block w-full text-left cursor-pointer group"
                  >
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.25,
                        x: isActive ? 0 : 6,
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={`
                        flex items-center gap-4
                        font-poppins text-sm md:text-[18px] xl:text-[24px] font-semibold leading-[1.4]
                        ${isActive ? 'text-[#141c0d]' : 'text-[#AEB3BE]'}
                      `}
                    >
                      {/* Icon on the left of the text — animated per-sector when active */}
                      <motion.span
                        className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                        variants={iconMotion[industry.id]}
                        animate={isActive ? 'active' : 'idle'}
                        whileHover={{ scale: 1.15 }}
                      >
                        <industry.icon
                          size={25}
                          strokeWidth={1.5}
                          className={`
                            transition-colors duration-300
                            ${isActive ? 'text-[#4f564b]' : 'text-[#AEB3BE]'}
                          `}
                        />
                      </motion.span>
                      <span>{industry.title}</span>
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href={activeIndustry.href}
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#2E4B30] hover:bg-[#a6d278] hover:text-[#141c0d] text-sm md:text-base font-semibold text-white uppercase tracking-wider transition-all duration-300 font-poppins"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[550px] overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeIndustry.image}
                    alt={activeIndustry.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}