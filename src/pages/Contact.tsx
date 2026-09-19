import React from 'react';
import { SEO } from '../components/SEO';
import { ContactSection } from '../components/ContactSection';
import { Branches } from '../components/Branches';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <SEO
        title="Contact AMULA GROUP | Dubai, Hyderabad, Nizamabad, Basar"
        description="Get in touch with AMULA GROUP for Job Consultancy, Car Rental, and Tours & Travel. Call 8858887789 or 9908225057 or message on WhatsApp."
      />

      {/* Hero */}
      <section className="bg-dark-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-gold-500/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>24/7 Dedicated Assistance</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            CONTACT <span className="text-gold-gradient">AMULA GROUP</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Reach our recruitment and travel consultants directly by phone, WhatsApp, email, or visit any of our regional branches.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Branches Locations */}
      <Branches />
    </div>
  );
};
