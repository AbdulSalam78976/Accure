import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroStats from '@/components/About';
import Sectors from '@/components/Sectors';
import ServicesSection from '@/components/ServicesSection';
import HotSection from '@/components/HotSection';
import Footer from '@/components/Footer';
import SecuritySection from '@/components/SecuritySection';


export const metadata = {
  title: 'accure ',
  description: 'System integration for digital government, IT, energy, water and environment.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#141c0d] font-manrope selection:bg-[#7B9E73] selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section with Video Background & Brand Arcs */}
      <HeroSection />

     
      {/* Intro Text & Key Statistics */}
      <IntroStats />

      {/* Interactive Sector Solutions */}
      <Sectors />

      {/* Services Overview Section */}
      <ServicesSection />

   <SecuritySection />

      {/* News & Insights */}
      <HotSection />

      

      {/* Footer */}
     <Footer showConsultationSection={true} />
    </main>
  );
}
