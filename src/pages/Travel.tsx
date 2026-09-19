import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { TRAVEL_SERVICES } from '../data/services';
import { Compass, Map, Navigation, Route, Heart, Users, Briefcase, Sliders, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { getWhatsAppLink } from '../utils/whatsapp';

const travelIcons: Record<string, React.ReactNode> = {
  Map: <Map className="w-6 h-6 text-gold-600" />,
  Navigation: <Navigation className="w-6 h-6 text-gold-600" />,
  Route: <Route className="w-6 h-6 text-gold-600" />,
  Heart: <Heart className="w-6 h-6 text-gold-600" />,
  Users: <Users className="w-6 h-6 text-gold-600" />,
  Briefcase: <Briefcase className="w-6 h-6 text-gold-600" />,
  Sliders: <Sliders className="w-6 h-6 text-gold-600" />,
};

export const Travel: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [travelData, setTravelData] = useState({
    name: '',
    phone: '',
    serviceType: 'Tour Packages',
    destination: '',
    travelDate: '',
    passengers: '2',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Travel & Tour Enquiry — AMULA GROUP*
👤 *Name:* ${travelData.name}
📞 *Phone:* ${travelData.phone}
🎒 *Service:* ${travelData.serviceType}
📍 *Destination / Itinerary:* ${travelData.destination || 'Flexible'}
📅 *Date:* ${travelData.travelDate || 'Flexible'}
👥 *Travelers:* ${travelData.passengers}
${travelData.notes ? `📝 *Notes:* ${travelData.notes}` : ''}`;

    const url = getWhatsAppLink("travel", text);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen">
      <SEO
        title="Tours & Travel | Customized Itineraries & Holiday Trips"
        description="Explore with AMULA GROUP. Tour packages, local transit, outstation travel, family excursions, and corporate travel arrangements."
      />

      {/* Hero Header */}
      <section className="relative bg-dark-950 text-white py-20 lg:py-28 overflow-hidden border-b border-gold-500/30">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic Travel Highway"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/70" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-gold-400" />
            <span>Curated Journeys</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            EXPLORE WITH <br />
            <span className="text-gold-gradient">AMULA GROUP</span>
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed mb-8">
            Experience reliable travel planning, pilgrimage tours, family outings, and custom journeys with verified vehicles and experienced drivers.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#travel-form"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold-gradient text-dark-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
            >
              <span>Enquire Travel Package</span>
            </a>

            <a
              href={getWhatsAppLink("travel")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Travel Helpdesk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Travel Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mt-1 mb-4">
            OUR TRAVEL OFFERINGS
          </h2>
          <p className="text-base sm:text-lg text-neutral-600">
            Choose from comprehensive travel arrangements suited for leisure, pilgrimage, family visits, or official corporate trips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TRAVEL_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-7 border border-surface-border hover:border-gold-500/40 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                  {travelIcons[service.iconName] || <Compass className="w-6 h-6 text-gold-600" />}
                </div>

                <h3 className="text-xl font-display font-bold text-dark-950 mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href="#travel-form"
                  onClick={() => setTravelData({ ...travelData, serviceType: service.title })}
                  className="text-xs font-bold uppercase tracking-wider text-gold-700 hover:text-dark-950"
                >
                  Book this trip →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Enquiry Form */}
        <div id="travel-form" className="bg-white rounded-2xl shadow-premium border border-gold-500/30 p-6 sm:p-10 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Plan Your Journey</span>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-dark-950 mt-1">
              Custom Travel Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Tell us your destination and date preferences for a personalized travel itinerary.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-dark-950">Travel Request Logged!</h4>
              <p className="text-xs sm:text-sm text-neutral-600">
                Send your details to our travel coordinator via WhatsApp for instant quotation and vehicle availability.
              </p>
              <button
                onClick={handleWhatsAppSend}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={travelData.name}
                    onChange={(e) => setTravelData({ ...travelData, name: e.target.value })}
                    placeholder="e.g. Rajesh Reddy"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={travelData.phone}
                    onChange={(e) => setTravelData({ ...travelData, phone: e.target.value })}
                    placeholder="e.g. 8858887789"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Service Type *
                  </label>
                  <select
                    value={travelData.serviceType}
                    onChange={(e) => setTravelData({ ...travelData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  >
                    {TRAVEL_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Destination / Route *
                  </label>
                  <input
                    type="text"
                    required
                    value={travelData.destination}
                    onChange={(e) => setTravelData({ ...travelData, destination: e.target.value })}
                    placeholder="e.g. Tirupati, Goa, Shirdi, Local Sightseeing"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelData.travelDate}
                    onChange={(e) => setTravelData({ ...travelData, travelDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Number of Travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={travelData.passengers}
                    onChange={(e) => setTravelData({ ...travelData, passengers: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Special Itinerary Notes / Requirements
                </label>
                <textarea
                  rows={3}
                  value={travelData.notes}
                  onChange={(e) => setTravelData({ ...travelData, notes: e.target.value })}
                  placeholder="Mention preferred pickup point, number of days, or special requests..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gold-gradient text-dark-950 font-extrabold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                >
                  Submit Travel Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
