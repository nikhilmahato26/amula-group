import React, { useState } from 'react';
import { VEHICLES } from '../data/vehicles';
import { VehicleCard } from './VehicleCard';
import { Car } from 'lucide-react';

interface FleetProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = ["All", "Hatchback", "Spacious Multi-Utility", "Travel & Cruiser", "Premium MPV", "Premium 4x4 SUV", "Compact SUV"];

  const filteredVehicles = selectedFilter === "All" 
    ? VEHICLES 
    : VEHICLES.filter(v => v.category === selectedFilter);

  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5 text-gold-600" />
            <span>Our Verified Vehicles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mb-4">
            AMULA GROUP FLEET
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Carefully maintained vehicles ready for local, outstation, family, and group journeys. Select your preferred ride to enquire.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === cat
                  ? 'bg-dark-950 text-gold-300 border border-gold-500 shadow-sm'
                  : 'bg-[#FAF9F5] text-neutral-700 hover:bg-neutral-100 border border-surface-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={onSelectVehicle}
            />
          ))}
        </div>

        {/* Fleet Note */}
        <div className="mt-12 text-center text-xs text-neutral-500 max-w-2xl mx-auto">
          * Vehicles are subject to schedule availability. Cleanliness, sanitization, and verified drivers are guaranteed on every trip.
        </div>

      </div>
    </section>
  );
};
