import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, MessageCircle, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: "Multiple Branches",
    description: "Established physical offices across Dubai (UAE), Hyderabad, Nizamabad, and Basar.",
    icon: <MapPin className="w-6 h-6 text-gold-600" />
  },
  {
    title: "Professional Support",
    description: "Dedicated, personalized assistance for career guidance and travel requirements from one trusted group.",
    icon: <ShieldCheck className="w-6 h-6 text-gold-600" />
  },
  {
    title: "Convenient Enquiry",
    description: "Direct and instant communication through dedicated phone lines, email, and responsive WhatsApp support.",
    icon: <MessageCircle className="w-6 h-6 text-gold-600" />
  },
  {
    title: "Growing Network",
    description: "Strategic expansion underway with new branch locations planned to serve candidates and travelers better.",
    icon: <TrendingUp className="w-6 h-6 text-gold-600" />
  },
  {
    title: "Multiple Services",
    description: "Comprehensive solutions encompassing Job Consultancy, Tours & Travel, and Car Rental under a single unified brand.",
    icon: <Layers className="w-6 h-6 text-gold-600" />
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Mission */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Why Partner With Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mb-6">
              WHY CHOOSE <br />
              <span className="text-gold-gradient">AMULA GROUP</span>
            </h2>
            <p className="text-base text-neutral-600 mb-8 leading-relaxed">
              We bring integrity, regional expertise, and international reach to career consultancy and travel services, ensuring reliable guidance at every step.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-white border border-surface-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-dark-900">
                  Ethical & transparent candidate advisory
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-white border border-surface-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-dark-900">
                  Verified travel vehicles with professional drivers
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-white border border-surface-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-dark-900">
                  Direct branch support across UAE and India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Reason Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-6 border border-surface-border hover:border-gold-500/40 hover:shadow-premium-hover transition-all duration-300 ${
                    index === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-base font-display font-bold text-dark-950 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
