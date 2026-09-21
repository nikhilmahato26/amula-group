import React from 'react';
import { SEO } from '../components/SEO';
import { JobConsultancy as JobConsultancySection } from '../components/JobConsultancy';
import { JobCategories } from '../components/JobCategories';
import { HowItWorks } from '../components/HowItWorks';
import { JobSearch } from '../components/JobSearch';
import { OverseasRecruitment } from '../components/OverseasRecruitment';
import { Globe2, Briefcase, CheckCircle2 } from 'lucide-react';

export const JobConsultancy: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <SEO
        title="Job Consultancy Services | Overseas & Domestic Careers"
        description="Explore AMULA GROUP Job Consultancy services. Zero advance payment overseas placement across Dubai, Saudi Arabia, Qatar, Kuwait, Europe, and India."
      />

      {/* Page Hero */}
      <section className="bg-dark-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-gold-500/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5 text-gold-400" />
              <span>Primary Business Vertical</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Professional <span className="text-gold-gradient">Job Consultancy</span> & Overseas Placements
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              We connect candidates with verified employment opportunities across Dubai, Gulf, Europe, and Pan-India. 100% transparent procedures with zero advance payment.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Zero Advance Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-gold-400" />
                <span>Dubai Office Direct Coordination</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>14+ Global Destinations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Profile Submission */}
      <div className="pt-10">
        <JobSearch />
      </div>

      {/* Overseas Recruitment Section (Countries & Roles from Flyer) */}
      <OverseasRecruitment />

      {/* Services Grid */}
      <JobConsultancySection />

      {/* Categories */}
      <JobCategories />

      {/* How It Works */}
      <HowItWorks />
    </div>
  );
};

