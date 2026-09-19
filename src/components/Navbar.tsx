import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Briefcase, Car } from 'lucide-react';
import { NAV_LINKS, COMPANY_INFO } from '../data/navigation';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isCarRental = location.pathname === '/car-rental';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gold-500/20' 
        : 'bg-white border-b border-surface-border'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-gold-500/40 shadow-sm bg-black flex-shrink-0 group-hover:border-gold-500 transition-colors">
              <img 
                src="/logo.jpg" 
                alt="AMULA GROUP Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-wider text-dark-950 group-hover:text-gold-600 transition-colors">
                AMULA <span className="text-gold-500">GROUP</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold">
                Tours • Travel • Jobs
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-dark-950 font-bold bg-gold-500/10 text-gold-700'
                      : 'text-neutral-700 hover:text-dark-950 hover:bg-neutral-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gold-gradient text-dark-950 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Find Jobs
            </Link>

            <Link
              to="/car-rental"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-dark-900 text-gold-300 border border-gold-500/30 hover:border-gold-400 hover:bg-black transition-all transform hover:-translate-y-0.5"
            >
              <Car className="w-3.5 h-3.5 text-gold-400" />
              Book a Car
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
        <div className="lg:hidden border-t border-surface-border bg-white shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2 mb-4">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
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
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider text-center shadow-sm"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Find Jobs
            </Link>
            <Link
              to="/car-rental"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-dark-900 text-gold-300 font-bold text-xs uppercase tracking-wider text-center border border-gold-500/30"
            >
              <Car className="w-3.5 h-3.5 text-gold-400" />
              Book a Car
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
