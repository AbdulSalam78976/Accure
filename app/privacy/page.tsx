'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// =========================================
// CONTENT
// TODO: replace bracketed placeholders with your legal entity name,
// jurisdiction, and real contact details, and have counsel review
// before publishing.
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
          [Your Company Name] (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides digital
          governance, IT infrastructure, smart energy, hydromet, and environmental management
          solutions to public and private sector clients. This Privacy Policy explains how we
          collect, use, disclose, and safeguard information when you visit our website, use our
          products, or otherwise interact with us.
        </p>
        <p>
          By using our website or services, you agree to the practices described in this policy.
          If you do not agree, please do not use our website or services.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    body: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Contact information</strong> you provide directly, such as your name, email
            address, phone number, company, country, and message when you submit a contact or
            inquiry form.
          </li>
          <li>
            <strong>Usage data</strong> collected automatically, such as pages visited, time spent
            on the site, referring URLs, browser type, device information, and IP address.
          </li>
          <li>
            <strong>Cookie and tracking data</strong> collected through cookies and similar
            technologies, described in more detail in the Cookies section below.
          </li>
          <li>
            <strong>Client and project data</strong> we process on behalf of clients as part of
            delivering contracted services, handled under the terms of the applicable client
            agreement rather than this policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    title: '3. How We Use Your Information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and provide the information or services you request</li>
          <li>Operate, maintain, and improve our website and services</li>
          <li>Communicate with you about updates, offerings, or matters relevant to your inquiry</li>
          <li>Understand how our website is used, to guide product and content decisions</li>
          <li>Detect, prevent, and address technical issues, fraud, or misuse</li>
          <li>Comply with legal obligations and enforce our agreements</li>
        </ul>
      </>
    ),
  },
  {
    id: 'legal-basis',
    title: '4. Legal Basis for Processing',
    body: (
      <>
        <p>
          Where applicable data protection law requires a legal basis for processing (for example,
          under the EU/UK General Data Protection Regulation), we rely on one or more of the
          following: your consent, the necessity of processing to respond to your request or
          perform a contract with you, our legitimate interests in operating and improving our
          business, and compliance with a legal obligation.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: '5. Cookies & Tracking Technologies',
    body: (
      <>
        <p>
          We use cookies and similar technologies to keep the site functioning, remember your
          preferences, and understand aggregate usage patterns. You can control or disable cookies
          through your browser settings; disabling some cookies may affect site functionality.
        </p>
        <p>
          [List specific cookie categories/providers here, e.g. essential, analytics, and any
          third-party tools you use such as analytics or chat widgets.]
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: '6. How We Share Your Information',
    body: (
      <>
        <p>We do not sell your personal information. We may share information with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> who perform functions on our behalf, such as
            hosting, analytics, or email delivery, under confidentiality and data protection
            obligations
          </li>
          <li>
            <strong>Professional advisors</strong> such as legal, accounting, or auditing partners,
            where necessary
          </li>
          <li>
            <strong>Authorities</strong> where required to comply with applicable law, regulation,
            or valid legal process
          </li>
          <li>
            <strong>A successor entity</strong> in connection with a merger, acquisition, or sale
            of assets, subject to this policy or a materially similar one
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'international-transfers',
    title: '7. International Data Transfers',
    body: (
      <>
        <p>
          As a company operating across multiple regions, information we collect may be
          transferred to, stored, and processed in countries other than your own. Where required,
          we use appropriate safeguards, such as standard contractual clauses, for such transfers.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: '8. Data Retention',
    body: (
      <>
        <p>
          We retain personal information for as long as necessary to fulfill the purposes
          described in this policy, unless a longer retention period is required or permitted by
          law, such as for tax, legal, accounting, or reporting requirements. [Specify concrete
          retention periods per data category if available.]
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: '9. Data Security',
    body: (
      <>
        <p>
          We apply administrative, technical, and physical safeguards designed to protect
          information against unauthorized access, alteration, disclosure, or destruction. No
          method of transmission or storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: '10. Your Rights',
    body: (
      <>
        <p>
          Depending on your location, you may have the right to access, correct, delete, or export
          your personal information, to object to or restrict certain processing, and to withdraw
          consent where processing is based on consent. To exercise any of these rights, contact us
          using the details in the Contact Us section below.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "11. Children's Privacy",
    body: (
      <>
        <p>
          Our website and services are intended for business and professional use and are not
          directed to children. We do not knowingly collect personal information from children.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-links',
    title: '12. Third-Party Links',
    body: (
      <>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          privacy practices or content of those websites, and we encourage you to review their
          privacy policies before providing any information.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: '13. Changes to This Policy',
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date
          at the top of this page reflects the most recent revision. Material changes will be
          communicated through the website or other appropriate means.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: '14. Contact Us',
    body: (
      <>
        <p>
          If you have questions about this Privacy Policy or how we handle your information,
          contact us at:
        </p>
        <p className="not-italic">
          [Your Company Name]
          <br />
          [Registered address]
          <br />
          Email: privacy@yourcompany.com
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
          <div className="hidden lg:block absolute right-35 top-0 h-full">
            <div className="flex gap-4 h-full">
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
            <h2 className="text-white font-poppins text-5xl md:text-6xl font-medium tracking-tight mb-6 max-w-3xl leading-[1.1]">
              Privacy Policy
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              How we collect, use, and protect information across our website and services.
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

              {/* Policy body */}
              <div className="bg-white border border-[#141c0d]/10 shadow-[0_1px_3px_rgba(20,28,13,0.06)] p-8 md:p-12">
                <div className="mb-10 pb-8 border-b-2 border-[#141c0d]/10">
                  <p className="text-sm md:text-base text-[#4f564b] leading-relaxed">
                    This policy describes how [Your Company Name] handles personal information. It
                    is a general template and should be reviewed by qualified legal counsel before
                    publication to ensure it reflects your actual data practices and applicable
                    law in every jurisdiction where you operate.
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