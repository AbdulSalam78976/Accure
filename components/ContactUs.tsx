'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Phone } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    sector: 'Digital Governance',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.organization) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative bg-[#F6EFDD]/92 text-[#141c0d] py-20 sm:py-24 overflow-hidden">

      {/* Background Lighting Accent */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[400px] bg-[#687D6B]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left: Pitch */}
          <motion.div
            className="lg:sticky lg:top-28 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#27382B]/10 border border-[#27382B]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#95c168] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#27382B]">
                Let&apos;s talk integration
              </span>
            </div>

            <h2 className="font-poppins font-bold text-4xl sm:text-5xl leading-[1.05] text-[#27382B] tracking-tight">
              For utilities that<br />expect more
            </h2>

            <p className="font-manrope font-normal text-[#5A6A5C] max-w-md leading-relaxed">
              Speak with our integration team about your sector&apos;s requirements. An accure specialist typically responds within one business day.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:hello@accure.io"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[#95c168]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#eef4ec] flex items-center justify-center text-[#3e7220] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-[#8a977b] font-semibold">Email us</div>
                  <div className="text-sm font-semibold text-[#141c0d]">hello@accure.io</div>
                </div>
              </a>
              <a
                href="tel:+10000000000"
                className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-[#95c168]/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#eef4ec] flex items-center justify-center text-[#3e7220] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-[#8a977b] font-semibold">Call us</div>
                  <div className="text-sm font-semibold text-[#141c0d]">+1 (000) 000-0000</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="relative rounded-[28px] bg-white shadow-xl border border-[#141c0d]/5 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Accent Bar */}
            <div className="h-[5px] w-full bg-gradient-to-r from-[#3e7220] via-[#95c168] to-[#B99B5B]" />

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#687D6B] flex items-center justify-center mx-auto text-white">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-poppins font-bold text-2xl text-[#141c0d]">Thank You!</h3>
                  <p className="font-manrope text-sm text-[#5a6a4c]">
                    We have received your message. An accure integration specialist will reach out to <span className="text-[#141c0d] font-semibold">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', sector: 'Digital Governance', message: '' });
                    }}
                    className="px-8 py-3 bg-[#687D6B] text-white font-poppins font-semibold rounded-full text-sm mt-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-poppins font-bold text-2xl text-[#141c0d] mb-1">Get in Touch with accure</h3>
                  <p className="font-manrope text-xs text-[#5a6a4c] mb-4">
                    Speak with our domain integration team regarding public sector or utility requirements.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#5a6a4c] uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f8f5] border border-gray-200 text-[#141c0d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#95c168]/50 focus:border-[#687D6B] transition-shadow text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#5a6a4c] uppercase mb-1">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.gov"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#f6f8f5] border border-gray-200 text-[#141c0d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#95c168]/50 focus:border-[#687D6B] transition-shadow text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5a6a4c] uppercase mb-1">Organization / Agency *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. National Water & Energy Board"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f6f8f5] border border-gray-200 text-[#141c0d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#95c168]/50 focus:border-[#687D6B] transition-shadow text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5a6a4c] uppercase mb-1">Sector</label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f6f8f5] border border-gray-200 text-[#141c0d] focus:outline-none focus:ring-2 focus:ring-[#95c168]/50 focus:border-[#687D6B] transition-shadow text-sm"
                    >
                      <option value="Digital Governance">Digital Governance</option>
                      <option value="Information Tech">Information Tech</option>
                      <option value="Energy">Energy</option>
                      <option value="Water">Water</option>
                      <option value="Environment">Environment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5a6a4c] uppercase mb-1">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your integration requirements"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#f6f8f5] border border-gray-200 text-[#141c0d] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#95c168]/50 focus:border-[#687D6B] transition-shadow text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#3e7220] hover:bg-[#27382B] text-white font-poppins font-semibold rounded-xl text-sm transition-all shadow-md mt-2"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
