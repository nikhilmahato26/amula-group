import React from 'react';
import { SEO } from '../components/SEO';
import { COMPANY_INFO } from '../data/navigation';
import { BRANCHES } from '../data/branches';
import { Briefcase, Car, Compass, Globe2, ShieldCheck, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <SEO
        title="About AMULA GROUP | Multi-Service Group"
        description="Learn about AMULA GROUP, a multi-service organization operating in Job Consultancy, Tours & Travel, and Car Rental across Dubai, Hyderabad, Nizamabad, and Basar."
      />

      {/* Hero Header */}
      <section className="bg-dark-950 text-white py-16 sm:py-24 relative overflow-hidden border-b border-gold-500/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
            <span>Corporate Profile</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            ABOUT <span className="text-gold-gradient">AMULA GROUP</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            A diversified multi-service group delivering professional Job Consultancy, customized Tours & Travel, and reliable Car Rental services across India and the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* Core Narrative & Values */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Our Identity
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950">
              One Organization, Multiple Dedicated Verticals
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              {COMPANY_INFO.legalName} is structured to provide high-quality services to candidates aiming for career advancement and travelers seeking comfortable transportation.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              With primary focus on career guidance, candidate profile matching, and overseas consultancy through our Dubai office, we maintain strict professional standards and transparent communication. Simultaneously, our travel vertical manages a modern fleet of vehicles catering to local and outstation transit requirements.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-neutral-700">
                  <strong>Career-Centric Focus:</strong> Supporting job seekers with profile evaluations and transparent matching.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-neutral-700">
                  <strong>Reliable Fleet:</strong> Maintained vehicles ensuring punctual and safe journeys for families and professionals.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-neutral-700">
                  <strong>Cross-Border Network:</strong> Physical presence connecting Telangana to Dubai, UAE.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-8 border border-surface-border shadow-premium space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-black border border-gold-500/40 p-2 flex items-center justify-center">
                <img src="/logo.jpg" alt="Amula Group Emblem" className="w-full h-full object-contain" />
              </div>

              <h3 className="text-2xl font-display font-extrabold text-dark-950">
                Ethical & Transparent Service
              </h3>
              
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                We believe in genuine advisory without unrealistic promises. Whether you are consulting for career guidance or booking a vehicle for an outstation trip, our teams provide clear information and dedicated support.
              </p>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-2 text-xs font-bold text-dark-900 mb-1">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Compliance Commitment</span>
                </div>
                <p className="text-xs text-neutral-500">
                  AMULA GROUP does not charge for or offer guaranteed job placements, visas, or salaries. Selection decisions remain strictly with respective hiring organizations.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Verticals Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-dark-950">
              Our Core Verticals
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Distinctly managed divisions under the AMULA GROUP umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Job Consultancy */}
            <div className="bg-white rounded-2xl p-6 border border-surface-border hover:border-gold-500/40 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-700 mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-bold text-dark-950 mb-2">
                  Job Consultancy
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Our primary vertical dedicated to career guidance, candidate support, resume evaluation, and opportunity exploration across domestic and international markets.
                </p>
              </div>
              <Link to="/job-consultancy" className="text-xs font-bold uppercase tracking-wider text-gold-700 hover:text-dark-950">
                Explore Consultancy →
              </Link>
            </div>

            {/* 2. Car Rental */}
            <div className="bg-white rounded-2xl p-6 border border-surface-border hover:border-gold-500/40 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-700 mb-4">
                  <Car className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-bold text-dark-950 mb-2">
                  Car Rental
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Fleet of verified vehicles including Baleno, Ertiga, Thofan, Innova, Thar, and Brezza for local errands, airport drops, and outstation travels.
                </p>
              </div>
              <Link to="/car-rental" className="text-xs font-bold uppercase tracking-wider text-gold-700 hover:text-dark-950">
                View Car Fleet →
              </Link>
            </div>

            {/* 3. Tours & Travel */}
            <div className="bg-white rounded-2xl p-6 border border-surface-border hover:border-gold-500/40 shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-700 mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-bold text-dark-950 mb-2">
                  Tours & Travel
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Tailored travel itineraries, pilgrimage journeys, family excursions, and corporate travel arrangements managed with care and punctuality.
                </p>
              </div>
              <Link to="/travel" className="text-xs font-bold uppercase tracking-wider text-gold-700 hover:text-dark-950">
                Discover Travel →
              </Link>
            </div>
          </div>
        </div>

        {/* Physical Footprint */}
        <div className="bg-white rounded-2xl p-8 border border-surface-border shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-surface-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Network Presence</span>
              <h3 className="text-2xl font-display font-extrabold text-dark-950">
                Our Physical Branch Network
              </h3>
            </div>
            <Link
              to="/branches"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-950 text-gold-300 text-xs font-bold uppercase tracking-wider hover:bg-black"
            >
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>View All Branches</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRANCHES.filter(b => !b.isComingSoon).map((b) => (
              <div key={b.id} className="p-4 rounded-xl bg-[#FAF9F5] border border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-gold-600" />
                  <h4 className="font-display font-bold text-dark-950 text-base">{b.city}</h4>
                </div>
                <p className="text-xs text-neutral-500 font-semibold mb-2">{b.region}</p>
                <div className="text-xs text-neutral-600 space-y-0.5">
                  {b.addressLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};
