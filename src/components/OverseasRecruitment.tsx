import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, Briefcase, ShieldCheck, CheckCircle2, MessageCircle, 
  Phone, Instagram, ArrowRight, Sparkles, MapPin, Check
} from 'lucide-react';
import { 
  OVERSEAS_COUNTRIES, 
  OVERSEAS_POSITIONS, 
  OVERSEAS_PROMISE,
  OverseasCountry,
  OverseasPosition
} from '../data/overseasData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const OverseasRecruitment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'countries' | 'positions'>('countries');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'Middle East / Gulf', 'Central Europe', 'Eastern Europe', 'Southern Europe / Mediterranean', 'Western Europe', 'South Asia / Indian Ocean'];

  const filteredCountries = OVERSEAS_COUNTRIES.filter((country) => {
    if (selectedRegion === 'All') return true;
    return country.region === selectedRegion;
  });

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border relative overflow-hidden" id="overseas">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Zero Advance Payment Hero Banner (From Flyer) */}
        <div className="bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 text-white rounded-3xl p-6 sm:p-10 border border-gold-500/40 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Zero Advance Payment Guarantee</span>
            </div>

            {/* Telugu Quote from Flyer */}
            <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-white/10 mb-5">
              <p className="text-gold-300 font-semibold text-base sm:text-lg leading-relaxed font-sans">
                &ldquo;{OVERSEAS_PROMISE.teluguHeadline}&rdquo;
              </p>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-4">
              Safe Overseas Placement <span className="text-gold-gradient">Without Any Advance Payment</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 max-w-3xl">
              {OVERSEAS_PROMISE.subtext} Our physical offices in Dubai and India provide transparent candidate guidance, direct verification, and end-to-end recruitment coordination.
            </p>

            {/* Contact numbers and social badges from flyer */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink("job", "Hello AMULA GROUP, I want to inquire about Overseas Jobs with Zero Advance Payment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              <a
                href={`tel:${OVERSEAS_PROMISE.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{OVERSEAS_PROMISE.phones[0]}</span>
              </a>

              <a
                href={`tel:${OVERSEAS_PROMISE.phones[1].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{OVERSEAS_PROMISE.phones[1]}</span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 text-neutral-300 text-xs border border-white/10">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span className="font-mono text-[11px]">{OVERSEAS_PROMISE.instagramHandle}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header & Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>Global Opportunities Network</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight">
              OVERSEAS DESTINATIONS & JOB ROLES
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl">
              Explore all destinations and in-demand positions managed by AMULA GROUP overseas recruitment division.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('countries')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'countries'
                  ? 'bg-dark-950 text-gold-300 shadow-md'
                  : 'text-neutral-600 hover:text-dark-950'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>Countries ({OVERSEAS_COUNTRIES.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('positions')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'positions'
                  ? 'bg-dark-950 text-gold-300 shadow-md'
                  : 'text-neutral-600 hover:text-dark-950'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Job Roles ({OVERSEAS_POSITIONS.length})</span>
            </button>
          </div>
        </div>

        {/* COUNTRIES TAB CONTENT */}
        {activeTab === 'countries' && (
          <div>
            {/* Region Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedRegion === region
                      ? 'bg-dark-950 text-gold-300 border border-gold-500/40 shadow-sm'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600 border border-neutral-200'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Countries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCountries.map((country, index) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="bg-white rounded-2xl overflow-hidden border border-surface-border hover:border-gold-500/50 hover:shadow-premium-hover transition-all duration-300 flex flex-col group"
                >
                  {/* Country Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
                      <span>{country.flag}</span>
                      <span className="text-[11px]">{country.region}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-xl font-display font-extrabold text-white tracking-tight drop-shadow-md">
                        {country.name}
                      </h4>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {country.description}
                      </p>

                      <div className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                          In-Demand Openings:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {country.popularRoles.map((role, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-gold-50 border border-gold-200 text-gold-800 text-[10px] font-medium"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3 border-t border-neutral-100">
                      <a
                        href={getWhatsAppLink("job", `Hello AMULA GROUP, I am interested in overseas job opportunities in *${country.name}*. Please provide available positions and requirements.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 rounded-xl bg-neutral-900 hover:bg-gold-500 hover:text-dark-950 text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Enquire for {country.name.split(' ')[0]}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* POSITIONS TAB CONTENT */}
        {activeTab === 'positions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OVERSEAS_POSITIONS.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-surface-border hover:border-gold-500/50 hover:shadow-premium-hover transition-all duration-300 flex flex-col group"
              >
                {/* Position Image */}
                <div className="relative h-44 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={position.image}
                    alt={position.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gold-500/90 text-dark-950 text-[10px] font-bold uppercase tracking-wider">
                    {position.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-lg font-display font-extrabold text-white tracking-tight drop-shadow-md">
                      {position.title}
                    </h4>
                    {position.originalFlyerTitle !== position.title && (
                      <p className="text-[10px] text-gold-300">
                        Flyer Reference: &ldquo;{position.originalFlyerTitle}&rdquo;
                      </p>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                      {position.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                          Key Skills & Requirements:
                        </p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {position.keySkills.map((skill, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-neutral-700">
                              <Check className="w-3 h-3 text-gold-600 flex-shrink-0" />
                              <span className="truncate">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                          Active Overseas Locations:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {position.destinations.map((dest, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[10px] font-medium"
                            >
                              {dest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-3 border-t border-neutral-100">
                    <a
                      href={getWhatsAppLink("job", `Hello AMULA GROUP, I would like to apply/enquire for the *${position.title}* overseas position. Please guide me on next steps.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-gold-gradient text-dark-950 text-xs font-extrabold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Apply for {position.title}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
