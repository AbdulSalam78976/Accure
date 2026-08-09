'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// =========================================
// CONTENT
// TODO: replace bracketed placeholders with your legal entity name,
// jurisdiction, governing law, and real contact details, and have
// counsel review before publishing.
// =========================================
interface PolicySection {
  id: string;
  title: string;
  body: React.ReactNode;
}

const sections: PolicySection[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    body: (
      <>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
          website and services provided by [Your Company Name] (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;), a system integrator operating across digital governance, IT
          infrastructure, energy, water, and environmental management.
        </p>
        <p>
          By accessing our website, submitting an inquiry, or engaging our services, you agree to
          be bound by these Terms. If you do not agree, please do not use our website or services.
        </p>
      </>
    ),
  },
  {
    id: 'definitions',
    title: '2. Definitions',
    body: (
      <>
        <ul>
          <li>
            <strong>&ldquo;Services&rdquo;</strong> means any system integration, consulting,
            software, hardware, or support work delivered by us, whether described on this website
            or under a separate agreement.
          </li>
          <li>
            <strong>&ldquo;Client Agreement&rdquo;</strong> means any statement of work, master
            services agreement, or contract entered into separately between you and us for the
            delivery of Services.
          </li>
          <li>
            <strong>&ldquo;Content&rdquo;</strong> means text, graphics, diagrams, software, and
            other material made available on this website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'website-use',
    title: '3. Use of This Website',
    body: (
      <>
        <p>
          This website is provided for general information about our company and Services. You
          agree to use it only for lawful purposes and not to:
        </p>
        <ul>
          <li>Attempt to gain unauthorized access to any system, network, or account</li>
          <li>Interfere with or disrupt the website&rsquo;s operation or security</li>
          <li>Reproduce, scrape, or redistribute Content without prior written consent</li>
          <li>Use the website to transmit malware or unlawful material</li>
        </ul>
      </>
    ),
  },
  {
    id: 'services-scope',
    title: '4. Services and Client Engagements',
    body: (
      <>
        <p>
          Descriptions of Services on this website are provided for general reference and do not
          constitute an offer or guarantee of specific outcomes, timelines, or pricing. Any actual
          delivery of Services, including work involving government, energy, water, or
          environmental systems, is governed exclusively by the applicable signed Client Agreement,
          which takes precedence over these Terms in the event of a conflict.
        </p>
        <p>
          Where Services involve regulated infrastructure or public-sector systems, you are
          responsible for ensuring you hold any authorizations required to engage us for that work.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property',
    body: (
      <>
        <p>
          Unless otherwise stated in a Client Agreement, all Content on this website, including
          our name, logo, and brand marks, is owned by or licensed to [Your Company Name] and
          protected by applicable intellectual property laws. No license is granted to you except
          the limited right to view this website for its intended purpose.
        </p>
        <p>
          Ownership of deliverables, source code, architecture, and documentation produced under a
          specific engagement is governed by the terms of the applicable Client Agreement.
        </p>
      </>
    ),
  },
  {
    id: 'confidentiality',
    title: '6. Confidentiality',
    body: (
      <>
        <p>
          Information exchanged in connection with a potential or active engagement &mdash;
          including system architecture, operational data, and infrastructure details &mdash; may
          be treated as confidential and handled in accordance with the confidentiality provisions
          of the applicable Client Agreement or a separate non-disclosure agreement.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: '7. Third-Party Links and Platforms',
    body: (
      <>
        <p>
          This website may reference or link to third-party technology partners, standards
          bodies, or platforms. We do not control and are not responsible for the content,
          availability, or practices of third-party sites, and inclusion of a reference does not
          imply endorsement in either direction.
        </p>
      </>
    ),
  },
  {
    id: 'warranties',
    title: '8. Disclaimers',
    body: (
      <>
        <p>
          This website and its Content are provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, whether express or implied, including
          warranties of accuracy, availability, or fitness for a particular purpose. Formal
          warranties relating to delivered Services, including uptime, performance, or system
          reliability commitments, are set out exclusively in the applicable Client Agreement.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: '9. Limitation of Liability',
    body: (
      <>
        <p>
          To the maximum extent permitted by law, [Your Company Name] will not be liable for any
          indirect, incidental, special, or consequential damages arising from your use of this
          website. Liability arising from delivered Services, including any impact to
          infrastructure, operations, or third parties, is governed exclusively by the liability
          and indemnity provisions of the applicable Client Agreement.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: '10. Indemnification',
    body: (
      <>
        <p>
          You agree to indemnify and hold harmless [Your Company Name], its officers, employees,
          and agents from any claims, damages, or expenses arising from your misuse of this
          website or breach of these Terms. Indemnification obligations related to a specific
          engagement are governed by the applicable Client Agreement.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: '11. Termination',
    body: (
      <>
        <p>
          We may suspend or restrict access to this website at any time, without notice, for
          conduct that we believe violates these Terms or is harmful to other users, us, or third
          parties. Termination of an active Services engagement is governed by the applicable
          Client Agreement.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: '12. Governing Law',
    body: (
      <>
        <p>
          These Terms are governed by the laws of [Jurisdiction], without regard to conflict of
          law principles. Any dispute arising from these Terms will be subject to the exclusive
          jurisdiction of the courts of [Jurisdiction], unless otherwise specified in a Client
          Agreement.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: '13. Changes to These Terms',
    body: (
      <>
        <p>
          We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date at the
          top of this page reflects the most recent revision. Continued use of this website after
          changes take effect constitutes acceptance of the revised Terms.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '14. Contact Us',
    body: (
      <>
        <p>If you have questions about these Terms, contact us at:</p>
        <p className="not-italic">
          [Your Company Name]
          <br />
          [Registered address]
          <br />
          Email: legal@yourcompany.com
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Animated brand bars refs
  const heroRef = useRef<HTMLElement>(null);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);
  const bar3Ref = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !barsAnimated) {
            if (bar1Ref.current) bar1Ref.current.style.height = '100%';
            if (bar2Ref.current) bar2Ref.current.style.height = '100%';
            if (bar3Ref.current) bar3Ref.current.style.height = '100%';
            setBarsAnimated(true);
          } else if (!entry.isIntersecting) {
            if (bar1Ref.current) bar1Ref.current.style.height = '0%';
            if (bar2Ref.current) bar2Ref.current.style.height = '0%';
            if (bar3Ref.current) bar3Ref.current.style.height = '0%';
            setBarsAnimated(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [barsAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white font-manrope text-[#141c0d]">

        {/* ===== HERO SECTION WITH ANIMATED BARS ===== */}
        <section
          ref={heroRef}
          className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] pb-20 pt-4 px-6 md:px-12"
        >
          <Navbar />

          {/* ACCURE BRAND BARS */}
          <div className="block absolute right-0 sm:right-2 lg:right-8 xl:right-12 top-0 h-full pointer-events-none opacity-100">
            <div className="flex gap-2 sm:gap-3 lg:gap-4 h-full">
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

          <div className="relative z-10 w-full max-w-full mx-auto pt-16 md:pt-24">
            <h2 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.1]">
              Terms &amp; Conditions
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              The terms that govern your use of our website and engagement of our services.
            </p>
          </div>
        </section>

        {/* ===== CONTENT ===== */}
        <div className="bg-[#F8F9FA] py-16 md:py-24">
          <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">

              {/* Sticky table of contents */}
              <nav className="hidden lg:block sticky top-24 self-start">
                <span className="block text-xs font-bold tracking-[0.15em] uppercase text-[#7B9E73] mb-4">
                  On this page
                </span>
                <ul className="space-y-1 border-l border-[#141c0d]/10">
                  {sections.map((section) => {
                    const isActive = section.id === activeSection;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`
                            block w-full text-left pl-4 py-1.5 -ml-px border-l-2
                            text-sm transition-colors duration-200
                            ${isActive
                              ? 'border-[#395A3A] text-[#141c0d] font-semibold'
                              : 'border-transparent text-[#141c0d]/45 hover:text-[#141c0d]/75'}
                          `}
                        >
                          {section.title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Terms body */}
              <div className="bg-white border border-[#141c0d]/10 shadow-[0_1px_3px_rgba(20,28,13,0.06)] p-8 md:p-12">
                <div className="mb-10 pb-8 border-b-2 border-[#141c0d]/10">
                  <p className="text-sm md:text-base text-[#4f564b] leading-relaxed">
                    These Terms are a general template and should be reviewed by qualified legal
                    counsel before publication to ensure they reflect your actual business
                    practices, Client Agreement structure, and applicable law in every
                    jurisdiction where you operate.
                  </p>
                </div>

                <div className="space-y-12">
                  {sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      ref={(el) => {
                        sectionRefs.current[section.id] = el;
                      }}
                      className="scroll-mt-24"
                    >
                      <h2 className="font-poppins font-bold text-xl md:text-2xl text-[#141c0d] mb-4">
                        {section.title}
                      </h2>
                      <div
                        className="
                          text-sm md:text-[15px] leading-relaxed text-[#4f564b]
                          space-y-4
                          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2
                          [&_strong]:text-[#141c0d] [&_strong]:font-semibold
                        "
                      >
                        {section.body}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer showConsultationSection={false} />
    </>
  );
}