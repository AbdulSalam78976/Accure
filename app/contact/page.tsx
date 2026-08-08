'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ChevronDown,
  ArrowRight,
  Send,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

// =========================================
// LOCATIONS DATA
// TODO: double check region/country pairings below — as given, "USA" lists
// Saudi Arabia/UAE/Egypt, "UK" and "UAE" both list only Qatar, and "PAK" lists
// South Africa/Kenya. That looks like the addresses may have been pasted under
// the wrong region headers — worth a quick pass before this goes live.
// =========================================
interface LocationCountry {
  name: string;
  address: string;
  phone: string; // placeholder — replace with the real number for this office
  email: string; // placeholder — replace with the real inbox for this office
}

interface LocationRegion {
  region: string;
  image: string;
  countries: LocationCountry[];
}

const locations: LocationRegion[] = [
  {
    region: 'USA',
    image: '/images/USA.png',
    countries: [
      { name: 'Saudi Arabia', address: '404, Dubai Hills Business Park', phone: '+966 11 000 0000', email: 'riyadh@accure.com' },
      { name: 'United Arab Emirates', address: '3, Emaar Hills Estate, P.O. box: 500497', phone: '+971 4 000 0000', email: 'dubai@accure.com' },
      { name: 'Egypt', address: 'Building B 2116, the Smart Village, 28 Kms, Cairo-Alexandria Desert Road, Giza', phone: '+20 2 000 0000', email: 'cairo@accure.com' },
    ],
  },
  {
    region: 'UK',
    image: '/images/UK.png',
    countries: [
      { name: 'Qatar', address: 'Palm Towers, Floor 41, Westbay, Doha', phone: '+974 4 000 0000', email: 'doha@accure.com' },
    ],
  },
  {
    region: 'UAE',
    image: '/images/UAE.png',
    countries: [
      { name: 'Qatar', address: 'Palm Towers, Floor 41, Westbay, Doha', phone: '+974 4 000 0000', email: 'doha@accure.com' },
    ],
  },
  {
    region: 'PAK',
    image: '/images/PAK.png',
    countries: [
      { name: 'South Africa', address: 'Central Office Park No.4, 257 Jean Avenue, Centurion, 0157, PO Box 7750, 0046, Centurion', phone: '+27 12 000 0000', email: 'centurion@accure.com' },
      { name: 'Kenya', address: 'Vision Towers, Muthithi Road, Westlands Nairobi County, Nairobi', phone: '+254 20 000 0000', email: 'nairobi@accure.com' },
    ],
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

  // Animated brand bars refs
  const sectionRef = useRef<HTMLElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [barsAnimated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      <div className="min-h-screen bg-white font-manrope text-[#141c0d]">
        <Navbar />

        {/* ===== HERO SECTION WITH ANIMATED BARS ===== */}
        <section
          ref={sectionRef}
          className="w-full text-left relative overflow-hidden bg-gradient-to-br from-[#0B120E] via-[#2E4B30] to-[#0B120E] -mt-24 pt-36 pb-20 px-6 md:px-12"
        >

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
              Let's Build <br />Something Great
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              Tell us about your next challenge. Share a few details and we’ll help you shape the right digital solution with the right team behind it.
            </p>
          </div>
        </section>

        {/* ===== CONTACT FORM + OFFICES, SIDE BY SIDE ===== */}
        <div className="bg-[#F8F9FA] py-16 md:py-24">
          <div className="max-w-full mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* ===== CONTACT FORM ===== */}
            <div className="bg-white p-8 md:p-12 border border-[#141c0d]/10 shadow-[0_1px_3px_rgba(20,28,13,0.06)]">

              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-[#7B9E73] mb-3">
                Get in touch
              </span>
              <div className="flex items-center gap-3 mb-8 border-b-2 border-[#141c0d]/10 pb-4">
                <div className="w-10 h-10 bg-[#395A3A]/10 flex items-center justify-center text-[#395A3A]">
                  <Send size={18} />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-[#141c0d]">Send a Message</h3>
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
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 focus:outline-none focus:border-[#395A3A] transition-all placeholder:text-gray-400"
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
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 focus:outline-none focus:border-[#395A3A] transition-all placeholder:text-gray-400"
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
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 focus:outline-none focus:border-[#395A3A] transition-all placeholder:text-gray-400"
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
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 focus:outline-none focus:border-[#395A3A] transition-all placeholder:text-gray-400"
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
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 focus:outline-none focus:border-[#395A3A] transition-all placeholder:text-gray-400"
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
                        className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 appearance-none focus:outline-none focus:border-[#395A3A] transition-all text-[#333]"
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
                      className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 appearance-none focus:outline-none focus:border-[#395A3A] transition-all text-[#333]"
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
                    className="w-full px-4 py-3 bg-[#F8F9FA] border border-[#141c0d]/20 focus:outline-none focus:border-[#395A3A] transition-all resize-none placeholder:text-gray-400"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-[#395A3A] hover:bg-[#2E4B30] text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-3"
                  >
                    <span>Send Inquiry</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>

            {/* ===== OUR OFFICES ===== */}
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-[#7B9E73] mb-3">
                Global presence
              </span>
              <div className="flex items-center gap-3 mb-8 border-b-2 border-[#141c0d]/10 pb-4">
                <div className="w-10 h-10 bg-[#395A3A]/10 flex items-center justify-center text-[#395A3A]">
                  <MapPin size={18} />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-[#141c0d]">Our Offices</h3>
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
                          border sm:border-0 rounded-full sm:rounded-none
                          ${isActive
                            ? 'border-[#395A3A] bg-[#395A3A]/5 sm:bg-transparent'
                            : 'border-[#141c0d]/10 sm:border-0 hover:border-[#141c0d]/20'}
                        `}
                      >
                        {/* Active indicator bar, desktop only */}
                        <span
                          className={`
                            hidden sm:block absolute left-0 top-0 bottom-0 w-[3px] rounded-full
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
                          <span className={isActive ? 'text-[#7B9E73]' : 'text-[#141c0d]/25'}> ({loc.countries.length})</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected region's image + office cards */}
                <div>
                  {/* Square image as a proper anchor — centered, capped width,
                      with the region name as a caption instead of competing
                      for space with the cards in a cramped side-by-side row */}
                  <div className="flex items-center gap-5 mb-8">
                    <div className="relative w-[104px] h-[104px] sm:w-[128px] sm:h-[128px] flex-shrink-0 border border-[#141c0d]/10 overflow-hidden bg-white">
                      <Image
                        src={activeLocation.image}
                        alt={activeLocation.region}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-poppins font-bold text-lg text-[#141c0d]">
                        {activeLocation.region}
                      </p>
                      <p className="text-sm text-[#141c0d]/50 mt-1">
                        {activeLocation.countries.length} {activeLocation.countries.length === 1 ? 'office' : 'offices'} in this region
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 max-h-[480px] overflow-y-auto pr-1 -mr-1">
                    {activeLocation.countries.map((country) => (
                      <div
                        key={country.name}
                        className="
                          bg-white border border-[#141c0d]/10
                          shadow-[0_1px_3px_rgba(20,28,13,0.06)]
                          hover:shadow-[0_6px_20px_rgba(20,28,13,0.08)]
                          hover:border-[#395A3A]/25
                          transition-all duration-300
                        "
                      >
                        {/* Header bar */}
                        <div className="bg-[#141c0d] px-6 py-4 flex items-center gap-2.5">
                          <MapPin size={15} className="text-[#7B9E73] flex-shrink-0" />
                          <h4 className="text-white font-poppins font-bold text-base">
                            {country.name}
                          </h4>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                          <div className="space-y-2 text-sm text-[#333] leading-relaxed">
                            <p>{country.address}</p>
                            <div className="flex items-center gap-2 pt-2">
                              <Phone size={14} className="text-[#395A3A]" />
                              <span>{country.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail size={14} className="text-[#395A3A]" />
                              <span>{country.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {activeLocation.countries.length === 0 && (
                      <p className="text-sm text-[#141c0d]/50 sm:col-span-2">No offices in this region yet.</p>
                    )}
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