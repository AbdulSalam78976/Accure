'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    date: '1 June 2026',
    category: 'Energy',
    title: 'accure III expands national energy grid integration programme.',
    image: '/images/legacymeter-photo.png',
    accent: '#3e7220',
  },
  {
    date: '11 May 2026',
    category: 'Water, Weather & Environment',
    title: 'Zero-trust identity now available across all sector connectors.',
    image: '/images/city-photo.png',
    accent: '#687D6B',
  },
  {
    date: '23 April 2026',
    category: 'IT Infrastructure',
    title: 'Why legacy meter replacement isn’t the only path to modernization.',
    image: '/images/datacenter-photo.png',
    accent: '#B99B5B',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function NewsSection() {
  return (
    <section id="news" className="py-24 bg-[#F6EFDD]/92 text-[#141c0d] relative overflow-hidden">

      {/* Drifting outline shapes */}
      <motion.div
        className="absolute -top-16 -right-10 w-64 h-64 rounded-full border border-[#3e7220]/15 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-10 -right-6 w-36 h-36 rounded-full border border-[#95c168]/20 pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 -left-14 w-48 h-48 border border-[#B99B5B]/20 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        style={{ borderRadius: '30%' }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          className="flex items-center justify-between gap-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#141c0d]">
            Latest news
          </h2>
          <Link
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#141c0d] hover:text-[#3e7220] transition-colors shrink-0"
          >
            See all news
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* News Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {newsItems.map((item) => (
            <motion.article key={item.title} variants={itemVariants}>
              <Link href="#" className="group block">
                <div className="relative h-[230px] rounded-xl overflow-hidden bg-[#141c0d]">
                  {/* Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[5px] z-10"
                    style={{ backgroundColor: item.accent }}
                  />
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="pt-4">
                  <div className="flex items-center gap-2 text-xs text-[#5a6a4c]">
                    <span>{item.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#5a6a4c]" />
                    <span className="font-bold text-[#141c0d]">{item.category}</span>
                  </div>
                  <h3 className="mt-2 font-poppins font-bold text-lg leading-snug text-[#141c0d] group-hover:text-[#3e7220] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
