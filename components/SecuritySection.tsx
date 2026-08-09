'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SecuritySection() {
  return (
    <section className="mx-0 md:mx-5">
      <div className="max-w-full mx-auto grid lg:grid-cols-2 min-h-[560px]">
        
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image
            src="/images/security.jfif"
            alt="Security and Governance"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="flex items-center">
          <div className="max-w-[700px] px-6 md:px-12 lg:px-24 py-10">
            
            <h2 className="font-poppins text-[24px] sm:text-3xl md:text-4xl lg:text-[50px] font-medium text-[#141c0d] leading-tight">
              We build systems with security in mind.
            </h2>

            <p className="mt-10 text-lg leading-relaxed text-[#4d4d4d] font-manrope">
              At accure, security is integrated into every layer of our
              solutions. We understand the importance of protecting public
              infrastructure, sensitive information, and mission-critical
              operations through proven governance, security controls, and
              resilient architectures.
            </p>

            <Link
              href="/capabilities#security"
              className="group inline-flex items-center justify-center gap-3 mt-10 px-8 py-4 bg-[#2E4B30] hover:bg-[#a6d278] hover:text-[#141c0d] text-white font-semibold font-poppins uppercase tracking-wider text-sm transition-all duration-300"
            >
              Learn more about security
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}