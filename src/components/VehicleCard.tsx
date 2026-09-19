import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Sparkles } from 'lucide-react';
import { Vehicle } from '../data/vehicles';
import { getWhatsAppLink } from '../utils/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle?: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  const whatsappUrl = getWhatsAppLink(
    "car", 
    `Hello AMULA GROUP, I would like to enquire about renting the *${vehicle.name}* (${vehicle.category}). Please share availability and rental details.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden border border-surface-border hover:border-gold-500/50 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Image Container with Zoom */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
          <img
            src={vehicle.image}
            alt={`${vehicle.name} - ${vehicle.category}`}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Badge */}
          {vehicle.badge && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-gold-gradient text-dark-950 shadow-sm">
                <Sparkles className="w-3 h-3" />
                {vehicle.badge}
              </span>
            </div>
          )}

          {/* Category Tag */}
          <div className="absolute bottom-3 right-3">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 text-white backdrop-blur-sm border border-white/20">
              {vehicle.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-display font-extrabold text-dark-950 group-hover:text-gold-700 transition-colors mb-2">
            {vehicle.name}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
            {vehicle.description}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 space-y-2.5">
        <button
          onClick={() => onSelectVehicle ? onSelectVehicle(vehicle.name) : null}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dark-950 hover:bg-black text-gold-300 hover:text-gold-200 border border-gold-500/40 text-xs font-bold uppercase tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5"
        >
          <CalendarCheck className="w-4 h-4 text-gold-400" />
          <span>Enquire Now</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all transform hover:-translate-y-0.5"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Booking</span>
        </a>
      </div>
    </motion.div>
  );
};
