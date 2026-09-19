import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-dark-950 text-neutral-300 text-xs py-2 px-4 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Business Verticals */}
        <div className="flex items-center space-x-2 text-gold-400 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-gold-accent animate-pulse" />
          <span className="tracking-wide">
            Job Consultancy <span className="text-neutral-500 mx-1">|</span> Tours & Travel <span className="text-neutral-500 mx-1">|</span> Car Rental
          </span>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-neutral-300">
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <a 
              href={`tel:${COMPANY_INFO.primaryPhone}`} 
              className="hover:text-gold-300 transition-colors font-semibold"
            >
              {COMPANY_INFO.primaryPhone}
            </a>
            <span className="text-neutral-500">|</span>
            <a 
              href={`tel:${COMPANY_INFO.secondaryPhone}`} 
              className="hover:text-gold-300 transition-colors font-semibold"
            >
              {COMPANY_INFO.secondaryPhone}
            </a>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hover:text-gold-300 transition-colors"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
