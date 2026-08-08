'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

const sectorLinks = [
  { label: 'Digital Governance', href: '/sectors/digital-gov' },
  { label: 'Information Tech', href: '/sectors/it-infra' },
  { label: 'Energy', href: '/sectors/smart-energy' },
  { label: 'Water', href: '/sectors/water-systems' },
  { label: 'Environment', href: '/sectors/environment' },
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
  const pathname = usePathname(); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;

      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // Helper to check if a link is active
  const isActive = (href: string) => {
    const cleanHref = href.split('#')[0];
    return pathname === cleanHref;
  };

  // Helper to check if sub-link is active (for dropdown highlights)
  const isSubLinkActive = (href: string) => {
    return pathname === href; // Exact match including hash
  };

  const showHeader = isVisible || mobileMenuOpen;

  // Common styling for active/inactive links
  const activeLinkClasses = "px-5 py-2 bg-[#95c168] hover:bg-[#a6d278]  font-bold text-xs uppercase tracking-wider text-[#0B120E] transition-all shadow-md hover:shadow-lg active:scale-95";
  const inactiveLinkClasses = "hover:text-white transition-colors py-1";

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled 
          ? 'bg-[#0B120E]/90 backdrop-blur-xl border-b border-white/10  shadow-2xl' 
          : 'bg-transparent pt-4 sm:pt-6 pb-2'
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-8 flex items-center justify-between">

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
        <div className="hidden md:flex items-center gap-1 bg-[#0B120E]/40 backdrop-blur-xl border border-white/15 pl-6 pr-2 py-1.5  shadow-2xl">
          <nav className="flex items-center gap-6 font-medium text-sm text-white/90 mr-2">

            {/* HOME LINK */}
            <Link 
              href="/" 
              className={isActive('/') ? activeLinkClasses : inactiveLinkClasses}
            >
              Home
            </Link>

            {/* Sectors Dropdown */}
            <div className="relative group py-2">
              <Link 
                href="/sectors" 
                className={`flex items-center gap-1.5 transition-colors py-1 ${
                  isActive('/sectors') 
                    ? activeLinkClasses 
                    : 'hover:text-white group-hover:text-[#95c168]'
                }`}
              >
                <span>Sectors</span>
                {!isActive('/sectors') && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-white/60 group-hover:text-[#95c168]" />
                )}
              </Link>

              {/* Hover Dropdown Panel */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-[#0B120E]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/15 p-2 min-w-[230px] text-left relative overflow-hidden">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#95c168]/20 blur-xl rounded-full pointer-events-none" />
                  
                  {sectorLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`group/item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        isSubLinkActive(item.href) 
                          ? 'text-[#95c168]' 
                          : 'text-[#C6CCC1] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-all ${
                        isSubLinkActive(item.href) ? 'opacity-100 translate-x-0 text-[#95c168]' : 'opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#95c168]'
                      }`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Capabilities Dropdown */}
            <div className="relative group py-2">
              <Link 
                href="/capabilities" 
                className={`flex items-center gap-1.5 transition-colors py-1 ${
                  isActive('/capabilities') 
                    ? activeLinkClasses 
                    : 'hover:text-white group-hover:text-[#95c168]'
                }`}
              >
                <span>Capabilities</span>
                {!isActive('/capabilities') && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 text-white/60 group-hover:text-[#95c168]" />
                )}
              </Link>

              {/* Hover Dropdown Panel */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div className="bg-[#0B120E]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/15 p-2 min-w-[250px] text-left relative overflow-hidden">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#95c168]/20 blur-xl rounded-full pointer-events-none" />

                  {capabilityLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`group/item flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        isSubLinkActive(item.href) 
                          ? 'text-[#95c168]' 
                          : 'text-[#C6CCC1] hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-all ${
                        isSubLinkActive(item.href) ? 'opacity-100 translate-x-0 text-[#95c168]' : 'opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 text-[#95c168]'
                      }`} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Insights */}
            <Link 
              href="/insights" 
              className={isActive('/insights') ? activeLinkClasses : inactiveLinkClasses}
            >
              Insights
            </Link>

<Link
            href="/contact"
            className={isActive('/contact') ? activeLinkClasses : inactiveLinkClasses}
          >
            Contact
          </Link>

          
            {/* About */}
            <Link 
              href="/about" 
              className={isActive('/about') ? activeLinkClasses : inactiveLinkClasses}
            >
              About
            </Link>
          </nav>

          {/* Contact Link - Now behaves exactly like Home, Insights, and About */}
          
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
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold border-b border-white/10 pb-3 ${
              isActive('/') ? 'text-[#95c168]' : 'text-[#C6CCC1] hover:text-white'
            }`}
          >
            Home
          </Link>

          <Link
            href="/sectors"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold border-b border-white/10 pb-3 ${
              isActive('/sectors') ? 'text-[#95c168]' : 'text-[#C6CCC1] hover:text-white'
            }`}
          >
            Sectors
          </Link>

          <Link
            href="/capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold border-b border-white/10 pb-3 ${
              isActive('/capabilities') ? 'text-[#95c168]' : 'text-[#C6CCC1] hover:text-white'
            }`}
          >
            Capabilities
          </Link>

          <Link
            href="/insights"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold border-b border-white/10 pb-3 ${
              isActive('/insights') ? 'text-[#95c168]' : 'text-[#C6CCC1] hover:text-white'
            }`}
          >
            Insights
          </Link>
 {/* Mobile Contact Link - Same logic */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold border-b border-white/10 pb-3 ${
              isActive('/contact') ? 'text-[#95c168]' : 'text-[#C6CCC1] hover:text-white'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-base font-semibold border-b border-white/10 pb-3 ${
              isActive('/about') ? 'text-[#95c168]' : 'text-[#C6CCC1] hover:text-white'
            }`}
          >
            About
          </Link>

         
        </div>
      )}
    </header>
  );
}