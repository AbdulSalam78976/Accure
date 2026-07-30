'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#F6EFDD]/92 text-[#141c0d] border-t border-[#141c0d]/10">

      {/* ================= LINK GRID ================= */}
      <div className="w-full px-4 sm:px-8 pt-16 pb-10">
        <motion.div
          className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >

          {/* Col 1: Brand Logo & Tagline */}
          <div className="col-span-2 space-y-4">
            <div className="relative h-7 w-40 sm:w-48 flex items-center">
              <Image
                src="/assets/logo-dark.png"
                alt="accure III logo"
                width={200}
                height={200}
                sizes="(max-width: 640px) 160px, 192px"
                className="object-contain object-left"
              />
            </div>

            <div className="font-manrope font-medium text-xs sm:text-sm text-[#5a6a4c] leading-relaxed">
              System integration for<br />the public sector.
            </div>
          </div>

          {/* Col 2: Sectors */}
          <div>
            <div className="font-poppins font-semibold text-sm text-[#141c0d] mb-4">Sectors</div>
            <div className="flex flex-col gap-2.5 font-manrope font-medium text-xs sm:text-sm text-[#5a6a4c]">
              <Link href="/sectors" className="hover:text-[#3e7220] transition-colors w-fit">Digital Governance</Link>
              <Link href="/sectors" className="hover:text-[#3e7220] transition-colors w-fit">Information Tech</Link>
              <Link href="/sectors" className="hover:text-[#3e7220] transition-colors w-fit">Energy</Link>
              <Link href="/sectors" className="hover:text-[#3e7220] transition-colors w-fit">Water</Link>
              <Link href="/sectors" className="hover:text-[#3e7220] transition-colors w-fit">Environment</Link>
            </div>
          </div>

          {/* Col 3: Company */}
          <div>
            <div className="font-poppins font-semibold text-sm text-[#141c0d] mb-4">Company</div>
            <div className="flex flex-col gap-2.5 font-manrope font-medium text-xs sm:text-sm text-[#5a6a4c]">
              <Link href="/about" className="hover:text-[#3e7220] transition-colors w-fit">About</Link>
              <Link href="/capabilities" className="hover:text-[#3e7220] transition-colors w-fit">Capabilities</Link>
              <Link href="#why-accure" className="hover:text-[#3e7220] transition-colors w-fit">Insights</Link>
              <Link href="#services" className="hover:text-[#3e7220] transition-colors w-fit">Services</Link>
              <Link href="#news" className="hover:text-[#3e7220] transition-colors w-fit">News</Link>
            </div>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <div className="font-poppins font-semibold text-sm text-[#141c0d] mb-4">Contact us</div>
            <Link
              href="#contact"
              className="inline-block mb-4 px-6 py-2.5 bg-[#3e7220] hover:bg-[#27382B] text-white rounded-full font-poppins font-semibold text-xs transition-all shadow-md"
            >
              Contact
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                aria-label="Email accure"
                className="p-2 rounded-full bg-white border border-[#95c168]/30 text-[#3a4a2e] hover:text-[#3e7220] hover:border-[#95c168] shadow-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                aria-label="Call accure"
                className="p-2 rounded-full bg-white border border-[#95c168]/30 text-[#3a4a2e] hover:text-[#3e7220] hover:border-[#95c168] shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </motion.div>

        {/* Animated Divider Line */}
        <motion.div
          className="max-w-[1200px] mx-auto w-full h-[1px] bg-gradient-to-r from-transparent via-[#141c0d]/15 to-transparent origin-center mt-12 mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />

        {/* Sub-footer line */}
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-manrope text-[#8a977b] gap-4">
          <span>© {new Date().getFullYear()} accure</span>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#3e7220] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#3e7220] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#3e7220] transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
