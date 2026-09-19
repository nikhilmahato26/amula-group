import React from 'react';
import { SEO } from '../components/SEO';
import { Branches as BranchesSection } from '../components/Branches';
import { COMPANY_INFO } from '../data/navigation';
import { MapPin, Phone, MessageCircle, Navigation, Globe2 } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Branches: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <SEO
        title="Our Branches | Dubai, Hyderabad, Nizamabad, Basar"
        description="Find AMULA GROUP branches across Dubai (UAE), Hyderabad, Nizamabad, and Basar. Get directions, contact details, and branch office hours."
      />

      {/* Hero */}
      <section className="bg-dark-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-gold-500/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Navigation className="w-3.5 h-3.5 text-gold-400" />
            <span>Regional & International Offices</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            OUR <span className="text-gold-gradient">BRANCH LOCATIONS</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Visit any of our physical branches for face-to-face career consultations, candidate profile submissions, or travel and vehicle bookings.
          </p>
        </div>
      </section>

      {/* Branches Cards Component */}
      <BranchesSection />

      {/* Direct Contact Assistance Strip */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-surface-border shadow-premium flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Need Immediate Assistance?</span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-dark-950 mt-1">
              Connect With Our Central Helpdesk
            </h3>
            <p className="text-sm text-neutral-600 mt-2 max-w-xl">
              Our central team coordinates between all branches to ensure prompt responses for all job inquiries and travel requests.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-950 text-gold-300 hover:bg-black font-bold text-xs uppercase tracking-wider border border-gold-500/40 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{COMPANY_INFO.primaryPhone}</span>
            </a>

            <a
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
