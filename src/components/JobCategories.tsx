import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Laptop, Stethoscope, Cpu, Utensils, TrendingUp, 
  CreditCard, Building2, Wrench, Globe2, Briefcase, 
  ArrowUpRight 
} from 'lucide-react';
import { JOB_CATEGORIES } from '../data/jobCategories';

const categoryIcons: Record<string, React.ReactNode> = {
  Laptop: <Laptop className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Utensils: <Utensils className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  CreditCard: <CreditCard className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  Globe2: <Globe2 className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
};

export const JobCategories: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Explore Roles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight">
              JOB CATEGORIES
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-1 max-w-xl">
              Discover opportunities across key industries where AMULA GROUP assists candidates with career guidance and placement support.
            </p>
          </div>

          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark-900 hover:text-gold-700 transition-colors self-start md:self-auto group"
          >
            <span>View all job openings</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {JOB_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <Link
                to={`/jobs?category=${encodeURIComponent(category.title)}`}
                className="h-full bg-white rounded-2xl overflow-hidden border border-surface-border hover:border-gold-500/50 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group block"
              >
                {/* Category Image Banner */}
                <div className="relative h-40 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Floating Icon */}
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-gold-700 flex items-center justify-center shadow-md group-hover:bg-gold-gradient group-hover:text-dark-950 transition-all duration-300">
                    {categoryIcons[category.iconName] || <Briefcase className="w-5 h-5" />}
                  </div>

                  {category.isPopular && (
                    <span className="absolute top-3 right-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold-500 text-dark-950 shadow-md">
                      In Demand
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-gold-300 transition-colors drop-shadow-sm">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                    {category.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-600 group-hover:text-dark-900">
                    <span>Explore Openings</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-600 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
