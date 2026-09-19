import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Compass, Search, Headphones, Globe2, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONSULTANCY_SERVICES } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6 text-gold-600" />,
  Compass: <Compass className="w-6 h-6 text-gold-600" />,
  Search: <Search className="w-6 h-6 text-gold-600" />,
  Headphones: <Headphones className="w-6 h-6 text-gold-600" />,
  Globe2: <Globe2 className="w-6 h-6 text-gold-600" />,
};

export const JobConsultancy: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mb-4">
            JOB CONSULTANCY SERVICES
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Professional recruitment and candidate assistance tailored to empower job seekers across domestic and international employment landscapes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CONSULTANCY_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAF9F5] rounded-2xl p-7 border border-surface-border hover:border-gold-500/40 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-white border border-gold-500/30 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-gold-50 transition-all duration-300">
                  {iconMap[service.iconName] || <Briefcase className="w-6 h-6 text-gold-600" />}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-display font-bold text-dark-950 mb-3 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-xs text-neutral-700">
                      <Check className="w-4 h-4 text-gold-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-neutral-200">
                <Link
                  to="/job-consultancy"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-dark-900 group-hover:text-gold-700 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* International Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-dark-950 rounded-2xl p-7 border border-gold-500/40 shadow-xl flex flex-col justify-between text-white relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-[11px] font-bold uppercase tracking-wider mb-6 border border-gold-500/30">
                <Globe2 className="w-3.5 h-3.5 text-gold-400" />
                <span>Dubai & Gulf Focus</span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-3">
                International Opportunities
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Our Dubai branch at Prime Medical Building, Salauddin Metro Station connects talent with verified employers across the United Arab Emirates.
              </p>

              <div className="p-4 rounded-xl bg-dark-900 border border-gold-500/20 mb-6">
                <p className="text-xs text-gold-300 font-semibold mb-1">Dubai Office Support:</p>
                <p className="text-xs text-neutral-400">
                  Direct candidate coordination, interview guidance, and job search advisory in Dubai.
                </p>
              </div>
            </div>

            <Link
              to="/branches"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-gradient text-dark-950 text-xs font-bold uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
            >
              <span>View Dubai Branch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Professional Transparency & Compliance Notice */}
        <div className="rounded-xl p-4 sm:p-5 bg-neutral-50 border border-neutral-200 flex items-start sm:items-center gap-3.5 max-w-4xl mx-auto">
          <ShieldCheck className="w-6 h-6 text-gold-600 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-neutral-600 leading-relaxed">
            <strong className="text-dark-900 font-bold">Important Notice:</strong> AMULA GROUP provides recruitment support, career guidance, and opportunity matching. We do not claim guaranteed jobs, guaranteed visas, guaranteed salaries, or guaranteed placements. All employment selections are solely made by hiring organizations based on candidate merit.
          </p>
        </div>

      </div>
    </section>
  );
};
