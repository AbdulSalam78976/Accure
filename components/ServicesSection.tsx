'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// framer-motion removed for text animations
import { ArrowRight } from 'lucide-react';
import HorizontalScrollPin from './HorizontalScrollPin';
import { VerticalCutReveal, type VerticalCutRevealRef } from '@/components/ui/vertical-cut-reveal';

const services = [
  {
    title: 'System Integration',
    description: 'Connect legacy mainframes, modern SaaS tools, and public-sector platforms through a single, governed API layer.',
    image: '/images/system.jpg',
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Hybrid and multi-cloud operations for mission-critical workloads, with zero-downtime migrations and 24/7 monitoring.',
    image: '/images/cloud.jpg',
  },
  {
    title: 'Data and Analytics',
    description: 'Turn raw telemetry and operational data into real-time dashboards, forecasts, and regulatory reporting.',
    image: '/images/data.jpg',
  },
  {
    title: 'IoT & Telemetry',
    description: 'Sensor networks, SCADA bridges, and edge devices integrated into a single, secure operational picture.',
    image: '/images/iot.jpg',
  },
  {
    title: 'Compliance & Security',
    description: 'Zero-trust access control, encryption, and audit trails built to meet ISO 27001, SOC 2, and public-sector standards.',
    image: '/images/security.jpg',
  },
  
];

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = true;
  const revealRef = useRef<VerticalCutRevealRef>(null);

  useEffect(() => {
    if (isHeaderInView) {
      revealRef.current?.startAnimation();
    }
  }, [isHeaderInView]);

  return (
    <section id="services" className="relative  text-[#141c0d]">

      {/* Pinned Horizontal Scroll Row — header stays pinned alongside the cards */}
      <HorizontalScrollPin
        trackClassName="gap-6 px-4 sm:pl-[max(2rem,calc((100vw-1200px)/2+2rem))]"
        header={
          <div className="max-w-full mx-auto px-4 sm:px-8" ref={headerRef}>
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <h2 className="font-poppins font-medium text-[32px] sm:text-[50px] leading-tight">
                <VerticalCutReveal
                  ref={revealRef}
                  autoStart={false}
                  splitBy="words"
                  staggerDuration={0.12}
                  staggerFrom="first"
                  transition={{ type: 'spring', stiffness: 250, damping: 30, delay: 0.1 }}
                >
                  {'Our Services'}
                </VerticalCutReveal>
              </h2>
              <div>
                <Link
                  href="/capabilities"
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#141c0d] hover:text-[#7B9E73] transition-colors shrink-0 pb-1"
                >
                  Discover our full capabilities
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-[#395A3A]/40 via-[#7B9E73]/40 to-transparent my-10 origin-left" />
          </div>
        }
      >
        {services.map((service) => (
          <div
            key={service.title}
            className="group shrink-0 relative w-[260px] sm:w-[300px] h-[450px] overflow-hidden text-white cursor-pointer"
            style={{ borderRadius: '0px' }}
          >
            {/* Background Image, subtle zoom on hover */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="260px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Base gradient, just enough to keep the heading readable
                over any image by default */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t from-black/60 via-black/10 to-transparent
              "
            />

            {/* Hover gradient, a second darker layer that fades in on top
                of the image so the revealed description and link stay
                fully readable */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t from-black/95 via-black/50 to-black/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500 ease-out
              "
            />

            {/* Content, pinned to the bottom. Only the heading shows by
                default; the description + link block is height-collapsed
                (grid-rows-[0fr]) and expands open above the heading on
                hover, no layout shift on the rest of the row. */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
              <div
                className="
                  grid grid-rows-[0fr] group-hover:grid-rows-[1fr]
                  transition-[grid-template-rows] duration-500 ease-out
                "
              >
                <div className="overflow-hidden">
                  <p
                    className="
                      font-manrope text-sm leading-relaxed text-white/85
                      pb-4
                      opacity-0 group-hover:opacity-100
                      -translate-y-2 group-hover:translate-y-0
                      transition-all duration-500 ease-out delay-100
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </div>

              <h3 className="font-poppins font-medium text-xl sm:text-[28px] leading-tight">
                {service.title}
              </h3>

              <div
                className="
                  grid grid-rows-[0fr] group-hover:grid-rows-[1fr]
                  transition-[grid-template-rows] duration-500 ease-out
                "
              >
                <div className="overflow-hidden">
                  <Link
                    href="/capabilities"
                    className="
                      group/link inline-flex items-center gap-2 pt-5
                      text-xs font-bold uppercase tracking-wider text-white w-fit
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-500 ease-out delay-150
                    "
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </HorizontalScrollPin>
    </section>
  );
}