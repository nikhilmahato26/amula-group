import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MessageCircle, Briefcase, Car, 
  ChevronDown, Globe2, Compass, MapPin, Info, Send
} from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../data/navigation';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [jobsDropdownOpen, setJobsDropdownOpen] = useState(false);
  const [travelDropdownOpen, setTravelDropdownOpen] = useState(false);

  const jobsRef = useRef<HTMLDivElement>(null);
  const travelRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setJobsDropdownOpen(false);
    setTravelDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (jobsRef.current && !jobsRef.current.contains(event.target as Node)) {
        setJobsDropdownOpen(false);
      }
      if (travelRef.current && !travelRef.current.contains(event.target as Node)) {
        setTravelDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isCarRental = location.pathname === '/car-rental';
  const isJobsActive = location.pathname === '/job-consultancy' || location.pathname === '/jobs';
  const isTravelActive = location.pathname === '/travel' || location.pathname === '/car-rental';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gold-500/20' 
        : 'bg-white border-b border-surface-border'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 xl:gap-4">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-gold-500/40 shadow-sm bg-black flex-shrink-0 group-hover:border-gold-500 transition-colors">
              <img 
                src="/logo.jpg" 
                alt="AMULA GROUP Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-dark-950 group-hover:text-gold-600 transition-colors whitespace-nowrap">
                AMULA <span className="text-gold-500">GROUP</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-neutral-500 font-semibold whitespace-nowrap">
                Tours • Travel • Jobs
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Spacious, uncompressed layout */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Home */}
            <Link
              to="/"
              className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                location.pathname === '/'
                  ? 'text-dark-950 font-bold bg-gold-500/10 text-gold-700'
                  : 'text-neutral-700 hover:text-dark-950 hover:bg-neutral-100'
              }`}
            >
              Home
            </Link>

            {/* Jobs & Overseas Dropdown */}
            <div 
              ref={jobsRef}
              className="relative"
              onMouseEnter={() => setJobsDropdownOpen(true)}
              onMouseLeave={() => setJobsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setJobsDropdownOpen(!jobsDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isJobsActive
                    ? 'text-dark-950 font-bold bg-gold-500/10 text-gold-700'
                    : 'text-neutral-700 hover:text-dark-950 hover:bg-neutral-100'
                }`}
              >
                <span>Jobs & Overseas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${jobsDropdownOpen ? 'rotate-180 text-gold-600' : 'text-neutral-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {jobsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gold-500/30 p-2 space-y-1">
                    <Link
                      to="/job-consultancy"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gold-50/50 transition-colors group"
                    >
                      <Briefcase className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-dark-950 group-hover:text-gold-700">Job Consultancy</p>
                        <p className="text-[11px] text-neutral-500">Recruitment & candidate support</p>
                      </div>
                    </Link>

                    <Link
                      to="/job-consultancy#overseas"
                      className="flex items-start gap-3 p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/30 hover:bg-gold-500/20 transition-colors group"
                    >
                      <Globe2 className="w-4 h-4 text-gold-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <p className="text-xs font-bold text-dark-950 group-hover:text-gold-800">Overseas Placements</p>
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-gold-500 text-dark-950 uppercase">0 Advance</span>
                        </div>
                        <p className="text-[11px] text-neutral-600">14+ countries & in-demand roles</p>
                      </div>
                    </Link>

                    <Link
                      to="/jobs"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gold-50/50 transition-colors group"
                    >
                      <Compass className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-dark-950 group-hover:text-gold-700">Browse Vacancies</p>
                        <p className="text-[11px] text-neutral-500">Search all active positions</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Travel & Fleet Dropdown */}
            <div 
              ref={travelRef}
              className="relative"
              onMouseEnter={() => setTravelDropdownOpen(true)}
              onMouseLeave={() => setTravelDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setTravelDropdownOpen(!travelDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isTravelActive
                    ? 'text-dark-950 font-bold bg-gold-500/10 text-gold-700'
                    : 'text-neutral-700 hover:text-dark-950 hover:bg-neutral-100'
                }`}
              >
                <span>Travel & Fleet</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${travelDropdownOpen ? 'rotate-180 text-gold-600' : 'text-neutral-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {travelDropdownOpen && (
                <div className="absolute top-full left-0 w-60 pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gold-500/30 p-2 space-y-1">
                    <Link
                      to="/travel"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gold-50/50 transition-colors group"
                    >
                      <Compass className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-dark-950 group-hover:text-gold-700">Tours & Travel</p>
                        <p className="text-[11px] text-neutral-500">Pilgrimage & tour packages</p>
                      </div>
                    </Link>

                    <Link
                      to="/car-rental"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gold-50/50 transition-colors group"
                    >
                      <Car className="w-4 h-4 text-gold-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-dark-950 group-hover:text-gold-700">Car Rental Fleet</p>
                        <p className="text-[11px] text-neutral-500">Self-drive & chauffeur rentals</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Branches */}
            <Link
              to="/branches"
              className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                location.pathname === '/branches'
                  ? 'text-dark-950 font-bold bg-gold-500/10 text-gold-700'
                  : 'text-neutral-700 hover:text-dark-950 hover:bg-neutral-100'
              }`}
            >
              Branches
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                location.pathname === '/about'
                  ? 'text-dark-950 font-bold bg-gold-500/10 text-gold-700'
                  : 'text-neutral-700 hover:text-dark-950 hover:bg-neutral-100'
              }`}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                location.pathname === '/contact'
                  ? 'text-dark-950 font-bold bg-gold-500/10 text-gold-700'
                  : 'text-neutral-700 hover:text-dark-950 hover:bg-neutral-100'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Action CTAs - Uncompressed & Clean */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-shrink-0">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gold-gradient text-dark-950 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Find Jobs</span>
            </Link>

            <Link
              to="/car-rental"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-dark-950 text-gold-300 border border-gold-500/30 hover:border-gold-400 hover:bg-black transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Car className="w-3.5 h-3.5 text-gold-400" />
              <span>Book Car</span>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.primaryPhone}`}
              className="p-2 rounded-lg text-dark-900 bg-neutral-100 hover:bg-gold-50 hover:text-gold-600 transition-colors"
              aria-label="Call AMULA GROUP"
            >
              <Phone className="w-4 h-4 text-gold-600" />
            </a>
            <a
              href={getWhatsAppLink(isCarRental ? "car" : "job")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              aria-label="WhatsApp AMULA GROUP"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-800 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6 text-dark-950" /> : <Menu className="w-6 h-6 text-dark-950" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-surface-border bg-white shadow-xl px-4 pt-3 pb-6 animate-fadeIn max-h-[80vh] overflow-y-auto">
          {/* Zero Advance Banner in Mobile Menu */}
          <div className="mb-4 p-3 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-gold-700 flex-shrink-0" />
              <span className="text-xs font-bold text-dark-950">Overseas: Zero Advance Payment</span>
            </div>
            <Link
              to="/job-consultancy#overseas"
              className="text-[10px] font-bold uppercase tracking-wider text-gold-800 bg-gold-200 px-2 py-0.5 rounded"
            >
              View
            </Link>
          </div>

          <div className="flex flex-col space-y-1 mb-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-gold-500/10 text-gold-800 border-l-4 border-gold-500' 
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-200">
            <Link
              to="/jobs"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider text-center shadow-sm"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Find Jobs
            </Link>
            <Link
              to="/car-rental"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dark-900 text-gold-300 font-bold text-xs uppercase tracking-wider text-center border border-gold-500/30"
            >
              <Car className="w-3.5 h-3.5 text-gold-400" />
              Book Car
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

