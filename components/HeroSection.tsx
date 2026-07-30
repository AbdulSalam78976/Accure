'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [typedTitle, setTypedTitle] = useState('');

  // Set video playback speed safely via ref to avoid React prop hydration warnings
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  // Text content definitions
  const titleText = "Digital Solutions for empowering decisions of tomorrow";
  const subtitleText = "Solutions for smart energy, digital government, IT infrastructure, hydromet and environment.";

  // Words split into arrays for stagger animations
  const subtitleWords = subtitleText.split(" ");

  // Typewriter effect — reveals the heading one character at a time
  useEffect(() => {
    let i = 0;
    const typingTimer = setInterval(() => {
      i += 1;
      setTypedTitle(titleText.slice(0, i));
      if (i >= titleText.length) {
        clearInterval(typingTimer);
      }
    }, 45);
    return () => clearInterval(typingTimer);
  }, [titleText]);

  // Subtitle container variant (starts right after heading finish)
  const subtitleContainerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.7,
      },
    },
  };

  // Individual Word motion variant (typewriter reveal effect)
  const wordVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 12,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <section className="relative -mt-24 min-h-[760px] pt-40 pb-20 overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#27382B] to-[#0B120E] text-white flex items-center">

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

      {/* Dark Gradient Overlay for High Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B120E]/95 via-[#0B120E]/70 to-transparent pointer-events-none" />

      {/* Hero Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-20 w-full">
        <div className="max-w-[760px] space-y-6">

          {/* Typewriter H1 Title */}
          <h1 className="font-bold text-4xl sm:text-6xl lg:text-[54px] leading-[1.08] text-white tracking-tight drop-shadow-lg">
            {typedTitle}
            <span className="inline-block w-[3px] sm:w-[5px] h-[0.85em] bg-[#95c168] ml-1 align-middle animate-[cursor-blink_1s_steps(1)_infinite]" />
          </h1>

          {/* Typewriter Subtitle */}
          <motion.p 
            className="font-normal text-base sm:text-lg text-[#C6CCC1] max-w-[560px] leading-relaxed pt-1 drop-shadow flex flex-wrap gap-x-1.5 gap-y-1"
            variants={subtitleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {subtitleWords.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Action Buttons with Fade Up reveal */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link
              href="#sectors"
              className="px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-md backdrop-blur-md"
            >
              Sectors
            </Link>
            <Link
              href="#capabilities"
              className="px-8 py-3.5 rounded-full font-semibold text-sm sm:text-base text-[#0B120E] bg-[#95c168] hover:bg-[#a6d278] transition-all shadow-lg hover:shadow-[#95c168]/30 font-bold"
            >
              Capabilities
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
}