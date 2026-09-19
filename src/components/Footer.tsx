import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../data/navigation';
import { BRANCHES } from '../data/branches';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 text-neutral-300 pt-16 pb-24 sm:pb-16 border-t border-gold-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-gold-500/40 bg-black flex-shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="AMULA GROUP Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  AMULA <span className="text-gold-400">GROUP</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">
                  Tours • Travel • Jobs
                </p>
              </div>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Professional multi-service group specializing in candidate recruitment assistance, career guidance, and comfortable vehicle rentals across India and Dubai.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-gold-400 font-medium">
              <Sparkles className="w-4 h-4 text-gold-accent" />
              <span>Job Consultancy & Travel Under One Group</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-gold-300 transition-colors block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link to="/job-consultancy" className="hover:text-gold-300 transition-colors">
                  Job Consultancy
                </Link>
              </li>
              <li>
                <Link to="/job-consultancy" className="hover:text-gold-300 transition-colors">
                  Career Assistance
                </Link>
              </li>
              <li>
                <Link to="/travel" className="hover:text-gold-300 transition-colors">
                  Tours & Travel
                </Link>
              </li>
              <li>
                <Link to="/car-rental" className="hover:text-gold-300 transition-colors">
                  Car Rental
                </Link>
              </li>
              <li>
                <Link to="/car-rental" className="hover:text-gold-300 transition-colors">
                  Vehicle Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Branches (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Direct Contact & Branches
            </h4>

            <div className="space-y-2 text-xs text-neutral-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <span>
                  <a href={`tel:${COMPANY_INFO.primaryPhone}`} className="hover:text-white font-bold">{COMPANY_INFO.primaryPhone}</a>
                  {" / "}
                  <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="hover:text-white font-bold">{COMPANY_INFO.secondaryPhone}</a>
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-bold text-gold-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Branch Locations:</span>
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
                {BRANCHES.filter(b => !b.isComingSoon).map((b) => (
                  <div key={b.id} className="bg-dark-900 p-2 rounded border border-neutral-800">
                    <p className="font-semibold text-white">{b.city}</p>
                    <p className="text-[10px] text-neutral-500">{b.region}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Bar */}
        <div className="py-4 border-b border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-500 flex-shrink-0" />
            <span>
              Disclaimer: AMULA GROUP provides career guidance and recruitment assistance. We do not claim guaranteed jobs, guaranteed visas, or guaranteed placements.
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {COMPANY_INFO.year} {COMPANY_INFO.name}. All Rights Reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-gold-400 transition-colors text-[11px] uppercase tracking-wider font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
