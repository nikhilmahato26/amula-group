import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, PhoneCall, MessageCircle, Globe2, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F5] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-surface-border">
      {/* Background Decorative Gold Radial Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-radial-gold pointer-events-none opacity-70" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Message & CTAs */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-ping" />
              <span>Premier Career Guidance & Job Consultancy</span>
              <span className="text-neutral-400">|</span>
              <span className="text-dark-900 font-bold">Dubai & India</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-950 tracking-tight leading-[1.15] mb-6">
              BUILD YOUR CAREER WITH <br className="hidden sm:inline" />
              <span className="relative inline-block mt-1">
                <span className="text-gold-gradient">AMULA GROUP</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold-gradient rounded-full" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0 mb-8 font-normal leading-relaxed">
              Explore career opportunities, get professional job consultancy support and take the next step toward your career goals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                to="/jobs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-gold-gradient text-dark-950 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4" />
                <span>FIND JOB OPPORTUNITIES</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-dark-900 text-white border border-gold-500/40 hover:bg-black hover:border-gold-400 transition-all transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-gold-400" />
                <span>TALK TO A CONSULTANT</span>
              </a>

              <a
                href={getWhatsAppLink("job")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-6 border-t border-surface-border grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-900 uppercase tracking-wide">Candidate First</h4>
                  <p className="text-xs text-neutral-500">Dedicated career advisory</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Globe2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-900 uppercase tracking-wide">Global Reach</h4>
                  <p className="text-xs text-neutral-500">Dubai & Pan-India network</p>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-start space-x-2.5">
                <Building2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-dark-900 uppercase tracking-wide">4 Branches</h4>
                  <p className="text-xs text-neutral-500">Dubai, Hyd, Nzb, Basar</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Professional Visual & Trust Card */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image Container with Luxury Borders */}
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gold-400/40 via-gold-500/10 to-transparent shadow-xl">
              <div className="relative rounded-xl overflow-hidden bg-dark-950 aspect-[4/3] sm:aspect-[16/11]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80" 
                  alt="Professional Career Consultancy Interview"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                
                {/* Floating On-Image Info Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-gold-500/30 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-gold-700">International & Domestic</p>
                      <h4 className="text-sm font-extrabold text-dark-950">Multi-Industry Job Opportunities</h4>
                    </div>
                    <span className="px-2.5 py-1 bg-dark-950 text-gold-300 text-xs font-bold rounded-md">
                      Active
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Connecting talent with verified hiring organizations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-dark-900 text-white px-5 py-3.5 rounded-xl border border-gold-500/40 shadow-xl">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center text-dark-950 font-black">
                AG
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-gold-400 font-bold">Trusted Organization</p>
                <p className="text-xs font-bold text-white">AMULA GROUP</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
