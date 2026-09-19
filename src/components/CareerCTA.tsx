import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export const CareerCTA: React.FC = () => {
  return (
    <section className="py-20 bg-dark-950 text-white relative overflow-hidden border-y border-gold-500/30">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Empowering Your Career Journey</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            YOUR NEXT CAREER MOVE <br className="hidden sm:inline" />
            <span className="text-gold-gradient">STARTS HERE</span>
          </h2>

          <p className="text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            Connect with AMULA GROUP and explore available career opportunities with personalized consultancy and guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#enquiry-box"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-gold-gradient text-dark-950 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>SUBMIT YOUR PROFILE</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-transparent text-white border border-gold-500/50 hover:bg-white/10 hover:border-gold-400 transition-all transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>CONTACT US</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
