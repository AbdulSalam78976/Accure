'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

const sectorLinks = [
  { label: 'Digital Governance', href: '/sectors#digital-gov' },
  { label: 'Information Tech', href: '/sectors#it-infra' },
  { label: 'Energy', href: '/sectors#smart-energy' },
  { label: 'Water', href: '/sectors#water-systems' },
  { label: 'Environment', href: '/sectors#environment' },
];

const capabilityLinks = [
  { label: 'System Integration', href: '/capabilities#integration' },
  { label: 'Cloud & Infrastructure', href: '/capabilities#cloud' },
  { label: 'Data and Analytics', href: '/capabilities#analytics' },
  { label: 'IoT & Telemetry', href: '/capabilities#iot' },
  { label: 'Compliance & Security', href: '/capabilities#security' },
  { label: '24/7 Managed Support', href: '/capabilities#support' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 transition-all duration-300 pt-4 sm:pt-6">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex items-center justify-between">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center group focus:outline-none">
          <div className="relative h-8 sm:h-9 w-36 sm:w-44 flex items-center">
            <Image
              src="/assets/logo-light.png"
              alt="accure logo"
              width={400}
              height={400}
              priority
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain object-left transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Navigation Floating Pill Bar */}
        <div className="hidden md:flex items-center gap-1 bg-[#0B120E]/40 backdrop-blur-xl border border-white/15 pl-6 pr-2 py-1.5 rounded-full shadow-2xl">
          <nav className="flex items-center gap-6 font-medium text-sm text-white/90 mr-2">

            {/* Sectors Dropdown */}
            <div className="relative group py-2">
              <Link 
                href="/sectors" 
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1 group-hover:text-[#95c168]"
              >
                <span>Sectors</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-white/60 group-hover:text-[#95c168]" />
              </Link>

              {/* Hover Dropdown Panel */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-[#0B120E]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/15 p-2 min-w-[230px] text-left relative overflow-hidden">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#95c168]/20 blur-xl rounded-full pointer-events-none" />
                  
                  {sectorLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group/item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#C6CCC1] hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-[#95c168]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Capabilities Dropdown */}
            <div className="relative group py-2">
              <Link 
                href="/capabilities" 
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1 group-hover:text-[#95c168]"
              >
                <span>Capabilities</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-white/60 group-hover:text-[#95c168]" />
              </Link>

              {/* Hover Dropdown Panel */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-[#0B120E]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/15 p-2 min-w-[250px] text-left relative overflow-hidden">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#95c168]/20 blur-xl rounded-full pointer-events-none" />

                  {capabilityLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group/item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#C6CCC1] hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all text-[#95c168]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="#why-accure" className="hover:text-white transition-colors py-1">
              Insights
            </Link>
            <Link href="/about" className="hover:text-white transition-colors py-1">
              About
            </Link>
          </nav>

          {/* Contact Button */}
          <Link
            href="#contact"
            className="px-5 py-2 bg-[#95c168] hover:bg-[#a6d278] rounded-full font-bold text-xs uppercase tracking-wider text-[#0B120E] transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            className="p-2.5 rounded-full bg-[#0B120E]/60 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-3 p-6 rounded-3xl bg-[#0B120E]/95 backdrop-blur-xl border border-white/20 text-white space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
          <Link
            href="/sectors"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold border-b border-white/10 pb-3 text-[#C6CCC1] hover:text-white"
          >
            Sectors
          </Link>
          <Link
            href="/capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold border-b border-white/10 pb-3 text-[#C6CCC1] hover:text-white"
          >
            Capabilities
          </Link>
          <Link
            href="#why-accure"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold border-b border-white/10 pb-3 text-[#C6CCC1] hover:text-white"
          >
            Insights
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold border-b border-white/10 pb-3 text-[#C6CCC1] hover:text-white"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-[#95c168] hover:bg-[#a6d278] rounded-full font-bold text-xs uppercase tracking-wider text-[#0B120E] transition-colors mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}