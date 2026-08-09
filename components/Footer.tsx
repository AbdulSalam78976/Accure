'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  Globe,
  ChevronDown,
  Send,
  ArrowUp,
  ArrowRight,
} from 'lucide-react';

export default function Footer( { showConsultationSection }: { showConsultationSection: boolean }) { 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Refs for animated bars
  const sectionRef = useRef<HTMLElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !barsAnimated) {
            // Animate all bars from top to bottom simultaneously
            if (bar1Ref.current) {
              bar1Ref.current.style.height = '100%';
            }
            if (bar2Ref.current) {
              bar2Ref.current.style.height = '100%';
            }
            if (bar3Ref.current) {
              bar3Ref.current.style.height = '100%';
            }
            setBarsAnimated(true);
          } else if (!entry.isIntersecting) {
            // Reset bars when section goes out of view
            if (bar1Ref.current) {
              bar1Ref.current.style.height = '0%';
            }
            if (bar2Ref.current) {
              bar2Ref.current.style.height = '0%';
            }
            if (bar3Ref.current) {
              bar3Ref.current.style.height = '0%';
            }
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

  return (
    <footer className="relative w-full text-[#141c0d]">
      
      {/* ========================================= */}
      {/* CONSULTATION SECTION WITH ANIMATED BARS */}
      {/* ========================================= */}
      {showConsultationSection && ( 
        <section 
          ref={sectionRef}
          className="relative overflow-hidden bg-[#2E4B30] py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 text-center border-0"
        >
          {/* ACCURE BRAND BARS - ANIMATED FROM TOP TO BOTTOM */}
          <div className="block absolute right-0 sm:right-2 lg:right-8 xl:right-12 top-0 h-full pointer-events-none opacity-100">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 h-full">
              {/* Bar 1 */}
              <div
                ref={bar1Ref}
                className="w-14 transition-all duration-1000 ease-out"
                style={{
                  height: '0%',
                  background: 'linear-gradient(180deg,#E0EAD2 0%,#C0D2AC 100%)',
                  transform: 'skewX(-15deg)',
                  transformOrigin: 'top',
                  minHeight: '0%',
                }}
              />

              {/* Bar 2 */}
              <div
                ref={bar2Ref}
                className="w-14 transition-all duration-1000 ease-out"
                style={{
                  height: '0%',
                  background: 'linear-gradient(180deg,#9DB89A 0%,#7B9E73 100%)',
                  transform: 'skewX(-15deg)',
                  transformOrigin: 'top',
                  minHeight: '0%',
                }}
              />

              {/* Bar 3 */}
              <div
                ref={bar3Ref}
                className="w-14 transition-all duration-1000 ease-out"
                style={{
                  height: '0%',
                  background: 'linear-gradient(180deg,#4C6E4F 0%,#2E4B30 100%)',
                  transform: 'skewX(-15deg)',
                  transformOrigin: 'top',
                  minHeight: '0%',
                }}
              />
            </div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
              We are here to help
            </h2>

            <p className="text-white/75 text-sm sm:text-base md:text-lg mb-8">
              Learn how we can support your operations
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-8 py-2 sm:py-2.5 md:py-4 bg-white text-xs sm:text-sm md:text-[15px] lg:text-base text-[#395A3A] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7B9E73] hover:text-white hover:shadow-xl hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6D6B4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2E4B30]"
            >
              <span>Arrange a consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* FIXED BACK TO TOP BUTTON */}
          <div className="absolute bottom-0 right-0 z-20 block">
            <button
              onClick={scrollToTop}
              className="
                flex
                items-center
                justify-center
                gap-2 sm:gap-3
                bg-white
                text-[#141c0d]
                px-5 sm:px-8 lg:px-12
                h-[44px] sm:h-[52px] lg:h-[60px]
                min-w-[120px] sm:min-w-[160px] lg:min-w-[220px]
                text-[13px] sm:text-[14px] lg:text-[16px]
                font-medium
                hover:bg-white
                transition-colors
                border-b-0
              "
              style={{
                /* Increased the top pixel value to ensure it overlaps cleanly */
                clipPath: 'polygon(60px 0,100% 0,100% 100%,0 100%,0 70px)',
              }}
            >
              <ArrowUp className="w-5 h-5" />
              <span>Back to top</span>
            </button>
          </div>
        </section>
      )}

      {/* ========================================= */}
      {/* MAIN FOOTER - NO BORDERS, SOLID BLOCKS */}
      {/* ========================================= */}
      <section className="relative border-t-0 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-10 pb-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_0.9fr] gap-x-8 lg:gap-x-24 gap-y-12">
            
            {/* ========================================= */}
            {/* BRAND */}
            {/* ========================================= */}
            <div>
              <div className="relative h-16 w-50">
                <Image
                  src="/assets/logo-dark.png"
                  alt="accure"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                />
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-[#4d4d4d]">
                Accure is a technology solutions provider that helps organizations
                in the public and private sectors modernize their operations and
                achieve their digital transformation goals.
              </p>
            </div>

            {/* ========================================= */}
            {/* SECTORS */}
            {/* ========================================= */}
            <div>
              <h3 className="text-[18px] font-semibold mb-6">
                Sectors
              </h3>

              <div className="flex flex-col gap-3 text-[15px]">
                <Link href="/sectors/digital-gov" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Digital Governance</Link>
                <Link href="/sectors/it-infra" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Information Tech</Link>
                <Link href="/sectors/smart-energy" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Smart Energy</Link>
                <Link href="/sectors/water-systems" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Water & Hydromet</Link>
                <Link href="/sectors/environment" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Environmental Management</Link>
              </div>
            </div>

            {/* ========================================= */}
            {/* CAPABILITIES */}
            {/* ========================================= */}
            <div>
              <h3 className="text-[18px] font-semibold mb-6">
                Capabilities
              </h3>

              <div className="flex flex-col gap-3 text-[15px]">
                <Link href="/capabilities#integration" className="text-[#333333] hover:text-[#7B9E73] transition-colors">System Integration</Link>
                <Link href="/capabilities#cloud" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Cloud & Infrastructure</Link>
                <Link href="/capabilities#analytics" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Data and Analytics</Link>
                <Link href="/capabilities#iot" className="text-[#333333] hover:text-[#7B9E73] transition-colors">IoT & Telemetry</Link>
                <Link href="/capabilities#security" className="text-[#333333] hover:text-[#7B9E73] transition-colors">Compliance & Security</Link>
            </div>
            </div>

            {/* ========================================= */}
            {/* STAY IN TOUCH */}
            {/* ========================================= */}
            <div>
              <h3 className="text-[18px] font-semibold mb-6">
                Stay in touch
              </h3>

              <div className="flex items-center gap-4 mb-8">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2E4B30] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#2E4B30] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* BOTTOM BAR - NO BORDERS, SOLID BLOCK */}
        {/* ========================================= */}
        <div className="bg-[#2E4B30] text-white">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-5 flex flex-col lg:flex-row items-center justify-between gap-4">
            <span className="text-sm">
              Copyright © {new Date().getFullYear()} accure.
              All Rights Reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <Link href="/insights" className="hover:text-[#C6D6B4] transition-colors">Insights</Link>
              <Link href="/privacy" className="hover:text-[#C6D6B4] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#C6D6B4] transition-colors">Terms & Conditions</Link>
              <Link href="/contact" className="hover:text-[#C6D6B4] transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}