import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MessageCircle, Phone, Briefcase, Car } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { getWhatsAppLink, EnquiryType } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const location = useLocation();

  const isCarRental = location.pathname === '/car-rental';
  const isTravel = location.pathname === '/travel';
  const isJobs = location.pathname === '/jobs' || location.pathname === '/job-consultancy';

  let enquiryType: EnquiryType = "general";
  if (isCarRental) enquiryType = "car";
  else if (isTravel) enquiryType = "travel";
  else if (isJobs) enquiryType = "job";

  const whatsappUrl = getWhatsAppLink(enquiryType);

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col space-y-3 items-end">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="group flex items-center gap-2.5 px-4 py-3 bg-dark-950 text-white hover:bg-black rounded-full shadow-lg border border-gold-500/40 transition-all duration-300 hover:scale-105"
          aria-label="Call AMULA GROUP"
        >
          <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider pr-1">
            Call: {COMPANY_INFO.primaryPhone}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="WhatsApp AMULA GROUP"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark-950 text-white border-t border-gold-500/30 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
        {/* Dynamic Left CTA: Find Jobs vs Book Car */}
        {isCarRental ? (
          <a
            href="#booking-form"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gold-gradient text-dark-950 font-extrabold text-[11px] uppercase tracking-wider rounded-lg shadow-sm"
          >
            <Car className="w-3.5 h-3.5" />
            <span>BOOK CAR</span>
          </a>
        ) : (
          <Link
            to="/jobs"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gold-gradient text-dark-950 font-extrabold text-[11px] uppercase tracking-wider rounded-lg shadow-sm"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>FIND JOBS</span>
          </Link>
        )}

        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.primaryPhone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-dark-850 hover:bg-dark-800 text-white border border-neutral-700 font-bold text-[11px] uppercase tracking-wider rounded-lg"
        >
          <Phone className="w-3.5 h-3.5 text-gold-400" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] uppercase tracking-wider rounded-lg"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </>
  );
};
