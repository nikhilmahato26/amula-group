import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { BRANCHES } from '../data/branches';

export const Branches: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-gold-600" />
            <span>Physical Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mb-4">
            OUR BRANCHES
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Visit our physical offices across the UAE and India for in-person consultations, candidate documentation, and travel booking.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES.map((branch, index) => {
            const isComingSoon = branch.isComingSoon;
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`;

            if (isComingSoon) {
              return (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-neutral-900 to-black text-white rounded-2xl p-7 border border-gold-500/40 shadow-xl flex flex-col justify-between relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4 border border-gold-500/30 animate-pulse">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>{branch.badge}</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      COMING SOON
                    </h3>
                    <p className="text-gold-400 text-sm font-semibold mb-4">
                      More branches opening soon
                    </p>

                    <div className="space-y-1 text-xs text-neutral-300">
                      {branch.addressLines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <span className="text-xs text-neutral-400">Expanding Reach</span>
                    <span className="text-xs font-bold text-gold-400">2026 Expansion</span>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#FAF9F5] rounded-2xl p-7 border border-surface-border hover:border-gold-500/40 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-gold-700">
                      {branch.badge || (branch.isInternational ? "International Branch" : "Domestic Branch")}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white border border-gold-500/30 flex items-center justify-center shadow-sm text-gold-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-dark-950 mb-1">
                    {branch.city.toUpperCase()}
                  </h3>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-5">
                    {branch.region}
                  </p>

                  <div className="space-y-1.5 text-sm text-neutral-700 bg-white p-4 rounded-xl border border-surface-border mb-6">
                    {branch.addressLines.map((line, i) => (
                      <p key={i} className="leading-snug">{line}</p>
                    ))}
                  </div>

                  {branch.phone && (
                    <div className="flex items-center space-x-2 text-xs text-neutral-600 mb-6">
                      <Phone className="w-3.5 h-3.5 text-gold-600" />
                      <span>Contact: </span>
                      <a href={`tel:${branch.phone}`} className="font-bold text-dark-900 hover:text-gold-700">
                        {branch.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-gold-50 text-dark-950 border border-neutral-300 hover:border-gold-500 text-xs font-bold uppercase tracking-wider transition-all shadow-sm group-hover:border-gold-500"
                  >
                    <span>{branch.id === 'dubai' ? 'GET DIRECTIONS' : 'VIEW LOCATION'}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-600" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
