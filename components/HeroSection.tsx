'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const titleText = "Digital solutions for empowering decisions of tomorrow";
  const subtitleText = "Engineering data-driven and technology-led solutions for smart energy, digital government, IT infrastructure, hydromet and environment.";

  return (
    <section className="relative -mt-24 min-h-[560px] sm:min-h-[640px] md:min-h-[760px] pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#27382B] to-[#0B120E] text-white flex items-center">

      {/* Background Hero Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/hero-image.png"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Sharp Dark Gradient Overlay for High Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B120E]/95 via-[#0B120E]/70 to-transparent pointer-events-none" />

      {/* Hero Main Content */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-[760px] space-y-5 sm:space-y-6">

          {/* Static H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium leading-[1.08] text-white tracking-tight drop-shadow-lg">
            {titleText}
          </h1>

          {/* Subtitle (static) */}
          <p className="font-normal text-sm sm:text-base md:text-lg text-[#C6CCC1] max-w-[560px] leading-relaxed pt-1 drop-shadow">
            {subtitleText}
          </p>

          {/* Action Buttons - Edgy, Sharp, No Rounded Corners */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
            
            {/* Sectors Button (Transparent sharp box) */}
            <Link
              href="/sectors"
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 font-semibold text-sm sm:text-[15px] md:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-md"
            >
              Sectors
            </Link>

            {/* Capabilities Button (Solid Green sharp box) */}
            <Link
              href="/capabilities"
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 font-semibold text-sm sm:text-[15px] md:text-base text-white bg-[#2E4B30] hover:bg-[#a6d278] transition-all shadow-lg hover:shadow-[#95c168]/30 font-bold"
            >
              Capabilities
            </Link>
            
          </div>

        </div>
      </div>

    </section>
  );
}