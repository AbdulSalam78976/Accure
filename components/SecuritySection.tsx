'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SecuritySection() {
  return (
    <section className=" mx-5">
      <div className="max-w-full mx-auto grid lg:grid-cols-2 min-h-[560px]">
        
        {/* Image Side */}
        <div className="relative min-h-[450px] lg:min-h-full">
          <Image
            src="/images/security.jfif"
            alt="Security and Governance"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="flex items-center">
          <div className="max-w-[700px] px-8 md:px-16 lg:px-24 py-10">
            
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-[#141c0d] leading-tight">
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
              className="
                inline-flex
                items-center
                justify-center
                mt-10
                px-8
                py-4
                border
                border-[#141c0d]
                text-[#141c0d]
                font-semibold
                hover:bg-[#7B9E73]
                hover:text-white
                transition-all
                duration-300
              "
            >
              Learn more about security
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}