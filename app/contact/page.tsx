'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroBrandBars from '@/components/HeroBrandBars';
import {
  ChevronDown,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

// =========================================
// OFFICE LOCATIONS DATA
// One office per region. TODO: swap these placeholder addresses/phone/email
// for your real per-office details.
// =========================================
interface OfficeLocation {
  region: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

const locations: OfficeLocation[] = [
  {
    region: 'USA',
    image: '/images/USA.png',
    address: '350 Fifth Avenue, New York, NY 10118, United States',
    phone: '+1 212 000 0000',
    email: 'newyork@accure.com',
  },
  {
    region: 'UK',
    image: '/images/UK.png',
    address: 'Canary Wharf, London, United Kingdom',
    phone: '+44 20 0000 0000',
    email: 'london@accure.com',
  },
  {
    region: 'UAE',
    image: '/images/UAE.png',
    address: 'Business Bay, Dubai, United Arab Emirates',
    phone: '+971 4 000 0000',
    email: 'dubai@accure.com',
  },
  {
    region: 'PAK',
    image: '/images/PAK.png',
    address: 'Blue Area, Islamabad, Pakistan',
    phone: '+92 51 000 0000',
    email: 'islamabad@accure.com',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    country: '',
    message: '',
    privacyAgreed: false,
    contactUpdates: false,
  });

  const [activeRegion, setActiveRegion] = useState(locations[0].region);
  const activeLocation = locations.find((loc) => loc.region === activeRegion) ?? locations[0];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const [botCheck, setBotCheck] = useState('');

  const industries = [
    'Digital Governance',
    'Enterprise IT Infrastructure & Cloud',
    'Smart Energy & Smart Grid',
    'Hydromet Water & Weather Systems',
    'Environmental Management',
    'System Integration & Consulting',
  ];

  const countries = [
    'Saudi Arabia',
    'United Arab Emirates',
    'Egypt',
    'United Kingdom',
    'Qatar',
    'South Africa',
    'Kenya',
    'Pakistan',
    'United States',
    'Australia',
    'Austria',
    'Belgium',
    'Brazil',
    'Canada',
    'China',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'India',
    'Indonesia',
    'Italy',
    'Japan',
    'Mexico',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
  ];

  // Animated brand bars ref
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (botCheck) {
      setSubmitState('error');
      setSubmitMessage('Submission blocked.');
      return;
    }

    if (!formData.privacyAgreed) {
      setSubmitState('error');
      setSubmitMessage('Please confirm that you agree to our privacy notice.');
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('https://formspree.io/f/xkjwoakd', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          industry: formData.industry,
          country: formData.country,
          message: formData.message,
          privacyAgreed: formData.privacyAgreed,
          contactUpdates: formData.contactUpdates,
        }),
      });

      if (response.ok) {
        setSubmitState('success');
        setSubmitMessage('Thanks! Your inquiry has been sent successfully.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          country: '',
          message: '',
          privacyAgreed: false,
          contactUpdates: false,
        });
      } else {
        setSubmitState('error');
        setSubmitMessage('Unable to send your message right now. Please try again later.');
      }
    } catch {
      setSubmitState('error');
      setSubmitMessage('Unable to send your message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-[#F3F6EE] font-manrope text-[#141c0d]">
        <Navbar />

        {/* ===== HERO SECTION WITH ANIMATED BARS ===== */}
        <section
          ref={sectionRef}
          className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-20 px-6 md:px-12"
        >

          <HeroBrandBars containerRef={sectionRef} />

          <div className="relative z-10 w-full max-w-full mx-auto pt-16 md:pt-24">
            <p className="text-[#95c168] text-sm font-bold uppercase tracking-[0.25em] mb-4">
              Contact
            </p>
            <h1 className="text-white font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 max-w-3xl leading-[1.08]">
              Let's Build <br />Something Great
            </h1>
            <p className="text-white/60 text-base md:text-lg max-w-2xl leading-relaxed">
              Tell us about your next challenge. Share a few details and we’ll help you shape the right digital solution with the right team behind it.
            </p>
          </div>
        </section>

        {/* ===== CONTACT FORM + OFFICES, SIDE BY SIDE ===== */}
        <div className="bg-[#F3F6EE] py-16 md:py-24">
          <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* ===== CONTACT FORM ===== */}
            <div className="bg-white p-8 md:p-12 border border-[#141c0d]/10 shadow-[0_1px_3px_rgba(20,28,13,0.06)]">

              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-[#95c168] mb-3">
                Get in touch
              </span>
              <div className="flex items-center gap-3 mb-8 border-b border-[#141c0d]/10 pb-4">
                <div className="w-10 h-10 bg-[#2E4B30]/10 flex items-center justify-center text-[#2E4B30]">
                  <Send size={18} />
                </div>
                <h3 className="text-2xl font-medium font-poppins text-[#141c0d]">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name Row */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      First name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 focus:outline-none focus:border-[#2E4B30] transition-all placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 focus:outline-none focus:border-[#2E4B30] transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 focus:outline-none focus:border-[#2E4B30] transition-all placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 focus:outline-none focus:border-[#2E4B30] transition-all placeholder:text-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Company & Country */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 focus:outline-none focus:border-[#2E4B30] transition-all placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333] mb-1.5">Country</label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 appearance-none focus:outline-none focus:border-[#2E4B30] transition-all text-[#333]"
                      >
                        <option value="">Select country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    Domain of Interest <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 appearance-none focus:outline-none focus:border-[#2E4B30] transition-all text-[#333]"
                      required
                    >
                      <option value="">Select domain</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-1.5">
                    Your message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F3F6EE] border border-[#141c0d]/20 focus:outline-none focus:border-[#2E4B30] transition-all resize-none placeholder:text-gray-400"
                  />
                </div>

                {/* Privacy + anti-spam */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-3 text-sm text-[#333]">
                    <input
                      type="checkbox"
                      name="privacyAgreed"
                      checked={formData.privacyAgreed}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-[#141c0d]/20 text-[#395A3A] focus:ring-[#395A3A]"
                      required
                    />
                    <span>
                      I agree to the processing of my information for this inquiry and understand the privacy notice.
                    </span>
                  </label>

                  <input
                    type="text"
                    name="botCheck"
                    value={botCheck}
                    onChange={(e) => setBotCheck(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full md:w-auto px-10 py-4 bg-[#2E4B30] hover:bg-[#a6d278] hover:text-[#141c0d] text-white font-semibold font-poppins uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  {submitMessage ? (
                    <p className={`text-sm ${submitState === 'success' ? 'text-[#395A3A]' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>

            {/* ===== OUR OFFICES ===== */}
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-[#95c168] mb-3">
                Global presence
              </span>
              <div className="flex items-center gap-3 mb-8 border-b border-[#141c0d]/10 pb-4">
                <div className="w-10 h-10 bg-[#2E4B30]/10 flex items-center justify-center text-[#2E4B30]">
                  <MapPin size={18} />
                </div>
                <h3 className="text-2xl font-medium font-poppins text-[#141c0d]">Our Offices</h3>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-[auto_1fr] gap-6 lg:gap-10">

                {/* Region filter — text chips, same pattern as before: horizontal
                    on mobile/tablet, vertical list on desktop */}
                <div className="flex flex-row flex-wrap sm:flex-col gap-2.5 sm:gap-6">
                  {locations.map((loc) => {
                    const isActive = loc.region === activeRegion;
                    return (
                      <button
                        key={loc.region}
                        onClick={() => setActiveRegion(loc.region)}
                        className={`
                          relative text-left transition-all duration-200
                          sm:pl-4
                          px-3.5 py-1.5 sm:px-0 sm:py-0
                          border sm:border-0
                          ${isActive
                            ? 'border-[#395A3A] bg-[#395A3A]/5 sm:bg-transparent'
                            : 'border-[#141c0d]/10 sm:border-0 hover:border-[#141c0d]/20'}
                        `}
                      >
                        {/* Active indicator bar, desktop only */}
                        <span
                          className={`
                            hidden sm:block absolute left-0 top-0 bottom-0 w-[3px]
                            transition-colors duration-300
                            ${isActive ? 'bg-[#395A3A]' : 'bg-transparent'}
                          `}
                        />
                        <span
                          className={`
                            font-poppins font-bold text-sm sm:text-base whitespace-nowrap
                            transition-colors duration-300
                            ${isActive ? 'text-[#141c0d]' : 'text-[#141c0d]/40 hover:text-[#141c0d]/70'}
                          `}
                        >
                          {loc.region}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected region's single office card — image + details
                    together, since each region has exactly one office */}
                <div className="bg-white border border-[#141c0d]/10 shadow-[0_1px_3px_rgba(20,28,13,0.06)] overflow-hidden">
                  <div className="bg-[#141c0d] px-6 py-4 flex items-center gap-2.5">
                    <MapPin size={15} className="text-[#95c168] flex-shrink-0" />
                    <h4 className="text-white font-poppins font-medium text-base">
                      {activeLocation.region} Office
                    </h4>
                  </div>

                  <div className="p-6 flex flex-col sm:flex-row gap-6">
                    <div className="relative w-full h-[160px] sm:w-[150px] sm:h-[150px] flex-shrink-0 border border-[#141c0d]/10 overflow-hidden bg-[#F3F6EE]">
                      <Image
                        src={activeLocation.image}
                        alt={activeLocation.region}
                        fill
                        sizes="150px"
                        className="object-cover"
                      />
                    </div>

                    <div className="space-y-2 text-sm text-[#333] leading-relaxed">
                      <p>{activeLocation.address}</p>
                      <div className="flex items-center gap-2 pt-2">
                        <Phone size={14} className="text-[#395A3A]" />
                        <span>{activeLocation.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="text-[#395A3A]" />
                        <span>{activeLocation.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
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

