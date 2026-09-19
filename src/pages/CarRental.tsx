import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Fleet } from '../components/Fleet';
import { BookingForm } from '../components/BookingForm';
import { CAR_RENTAL_SERVICES } from '../data/services';
import { Car, Shield, Sparkles, MapPin, Compass, Users, Plane, Building, Calendar, Mountain, Settings, PhoneCall, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { getWhatsAppLink } from '../utils/whatsapp';

const serviceIcons: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="w-6 h-6 text-gold-600" />,
  Compass: <Compass className="w-6 h-6 text-gold-600" />,
  Users: <Users className="w-6 h-6 text-gold-600" />,
  Plane: <Plane className="w-6 h-6 text-gold-600" />,
  Building: <Building className="w-6 h-6 text-gold-600" />,
  Calendar: <Calendar className="w-6 h-6 text-gold-600" />,
  Mountain: <Mountain className="w-6 h-6 text-gold-600" />,
  Settings: <Settings className="w-6 h-6 text-gold-600" />,
};

export const CarRental: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("Innova");

  const handleSelectVehicle = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    const formElement = document.getElementById("booking-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <SEO
        title="Car Rental Services | Baleno, Ertiga, Thofan, Innova, Thar, Brezza"
        description="Rent comfortable and reliable vehicles for local travel, outstation journeys, and family trips with AMULA GROUP Car Rental."
      />

      {/* Hero Section */}
      <section className="relative bg-dark-950 text-white py-20 lg:py-28 overflow-hidden border-b border-gold-500/30">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Car Rental"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Car className="w-3.5 h-3.5 text-gold-400" />
              <span>Premium Fleet & Chauffeur Services</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              AMULA GROUP <br />
              <span className="text-gold-gradient">CAR RENTAL</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Comfortable vehicles for local travel, outstation journeys, family trips and other transportation requirements.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#booking-form"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-dark-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
              >
                <Car className="w-4 h-4" />
                <span>BOOK A CAR</span>
              </a>

              <a
                href={getWhatsAppLink("car")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-dark-900 border border-gold-500/40 text-gold-300 hover:bg-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
              >
                <PhoneCall className="w-4 h-4 text-gold-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Grid */}
      <Fleet onSelectVehicle={handleSelectVehicle} />

      {/* Car Rental Services */}
      <section className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Tailored Transit</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mt-1 mb-4">
              CAR RENTAL SERVICES
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              Reliable mobility solutions customized for your exact destination, schedule, and passenger requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAR_RENTAL_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-surface-border hover:border-gold-500/40 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                    {serviceIcons[service.iconName] || <Car className="w-6 h-6 text-gold-600" />}
                  </div>

                  <h3 className="text-base font-display font-bold text-dark-950 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100">
                  <a
                    href="#booking-form"
                    className="text-xs font-bold text-gold-700 hover:text-dark-950 uppercase tracking-wider"
                  >
                    Request this service →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Car Booking Form */}
      <BookingForm selectedVehicleName={selectedVehicle} />

    </div>
  );
};
