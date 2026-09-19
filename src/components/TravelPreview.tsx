import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Compass, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';

export const TravelPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F5] border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-200/70 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>Secondary Business Vertical</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mb-4">
            AMULA GROUP TRAVEL & CAR RENTAL
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Along with consultancy services, AMULA GROUP provides travel and vehicle rental options for customers looking for comfortable transportation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              to="/travel"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-dark-950 text-gold-300 hover:bg-black font-bold text-xs uppercase tracking-wider border border-gold-500/40 shadow-sm transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-gold-400" />
              <span>EXPLORE TRAVEL SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>

            <Link
              to="/car-rental"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gold-50 text-dark-950 font-bold text-xs uppercase tracking-wider border border-neutral-300 hover:border-gold-500 shadow-sm transition-all"
            >
              <Car className="w-3.5 h-3.5 text-gold-600" />
              <span>VIEW CAR RENTAL</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

        {/* Vehicle Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {VEHICLES.slice(0, 3).map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-surface-border hover:border-gold-500/50 hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/80 text-gold-300 backdrop-blur-sm border border-gold-500/30">
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-extrabold text-dark-950 group-hover:text-gold-700 transition-colors mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                    {vehicle.tagline}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/car-rental"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAF9F5] hover:bg-gold-gradient hover:text-dark-950 text-dark-900 text-xs font-bold uppercase tracking-wider text-center border border-surface-border transition-all block"
                >
                  View Details & Book
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Strip */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-700">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark-950">Clean & Well-Maintained</h4>
              <p className="text-xs text-neutral-500">Regularly inspected vehicles for safety</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark-950">Punctual & Reliable</h4>
              <p className="text-xs text-neutral-500">On-time pickup for local & outstation trips</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0 text-gold-700">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark-950">Experienced Chauffeurs</h4>
              <p className="text-xs text-neutral-500">Courteous drivers with route expertise</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
