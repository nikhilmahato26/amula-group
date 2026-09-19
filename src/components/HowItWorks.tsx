import React from 'react';
import { motion } from 'framer-motion';
import { FileEdit, MessagesSquare, Target, UserCheck } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Submit Your Profile",
    description: "Share your basic professional information, resume, and career requirements with our consultancy team.",
    icon: <FileEdit className="w-6 h-6 text-gold-600" />
  },
  {
    step: "02",
    title: "Consultation",
    description: "Discuss your career preferences, role suitability, and domestic or international opportunities with our consultants.",
    icon: <MessagesSquare className="w-6 h-6 text-gold-600" />
  },
  {
    step: "03",
    title: "Opportunity Matching",
    description: "Explore relevant available opportunities aligned with your background, qualifications, and preferred locations.",
    icon: <Target className="w-6 h-6 text-gold-600" />
  },
  {
    step: "04",
    title: "Application Support",
    description: "Receive guidance and assistance with the next steps, interview preparation, and employer communication where applicable.",
    icon: <UserCheck className="w-6 h-6 text-gold-600" />
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Simple & Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            A clear 4-step pathway designed to support candidates systematically without any ambiguous claims.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-12 right-12 h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300 z-0 opacity-40" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 bg-[#FAF9F5] rounded-2xl p-6 border border-surface-border hover:border-gold-500/40 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-3xl sm:text-4xl text-gold-500/40 group-hover:text-gold-600 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gold-500/30 flex items-center justify-center shadow-sm group-hover:bg-gold-50 transition-colors">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-dark-950 mb-3 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-200">
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                  Phase {item.step}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
