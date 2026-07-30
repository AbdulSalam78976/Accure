import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroStats from '@/components/About';
import DomainTabs from '@/components/DomainTabs';
import ServicesSection from '@/components/ServicesSection';
import WhyAccureSection from '@/components/WhyAccureSection';
import NewsSection from '@/components/NewsSection';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'accure ',
  description: 'System integration for digital government, IT, energy, water and environment.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6EFDD] text-[#141c0d] font-manrope selection:bg-[#687D6B] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section with Video Background & Brand Arcs */}
      <HeroSection />

     
      {/* Intro Text & Key Statistics */}
      <IntroStats />

      {/* Interactive Sector Solutions */}
      <DomainTabs />

      {/* Our Services */}
      <ServicesSection />

      {/* Why accure / Shift Section */}
      <WhyAccureSection />

      {/* News & Insights */}
      <NewsSection />

      {/* Contact CTA */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </main>
  );
}
