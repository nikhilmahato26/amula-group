import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Car, Send, MessageCircle, CheckCircle, Calendar, MapPin, Users } from 'lucide-react';
import { VEHICLES } from '../data/vehicles';
import { formatCarBookingWhatsApp, CarBookingPayload } from '../utils/whatsapp';

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal('')),
  vehicle: z.string().min(1, "Please select a vehicle"),
  pickupLocation: z.string().min(2, "Please enter pickup location"),
  dropLocation: z.string().min(2, "Please enter drop location"),
  travelDate: z.string().min(1, "Please select travel date"),
  passengers: z.string().optional(),
  tripType: z.string().min(1, "Please select trip type"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  selectedVehicleName?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedVehicleName }) => {
  const [submittedPayload, setSubmittedPayload] = useState<CarBookingPayload | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      vehicle: selectedVehicleName || "Innova",
      tripType: "Local",
      passengers: "4",
      travelDate: new Date().toISOString().split('T')[0],
    }
  });

  useEffect(() => {
    if (selectedVehicleName) {
      setValue("vehicle", selectedVehicleName);
    }
  }, [selectedVehicleName, setValue]);

  const onSubmit = (data: BookingFormData) => {
    const payload: CarBookingPayload = {
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      vehicle: data.vehicle,
      pickupLocation: data.pickupLocation,
      dropLocation: data.dropLocation,
      travelDate: data.travelDate,
      passengers: data.passengers,
      tripType: data.tripType,
      message: data.message || undefined,
    };

    setSubmittedPayload(payload);
    setIsSuccessModalOpen(true);
  };

  const handleWhatsAppDispatch = () => {
    if (submittedPayload) {
      const url = formatCarBookingWhatsApp(submittedPayload);
      window.open(url, '_blank');
      setIsSuccessModalOpen(false);
      reset();
    }
  };

  return (
    <section id="booking-form" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl shadow-premium border border-gold-500/30 p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Car className="w-3.5 h-3.5 text-gold-600" />
              <span>Easy Reservation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-dark-950">
              BOOK YOUR VEHICLE
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Fill in your travel details below and confirm booking instantly via WhatsApp or phone.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 8858887789"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. customer@example.com"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Select Vehicle <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("vehicle")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} ({v.category})
                    </option>
                  ))}
                </select>
                {errors.vehicle && (
                  <p className="text-red-500 text-xs mt-1">{errors.vehicle.message}</p>
                )}
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Pickup Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad Airport / Ameerpet"
                    {...register("pickupLocation")}
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                  />
                  <MapPin className="w-4 h-4 text-neutral-400 absolute right-3 top-3.5" />
                </div>
                {errors.pickupLocation && (
                  <p className="text-red-500 text-xs mt-1">{errors.pickupLocation.message}</p>
                )}
              </div>

              {/* Drop Location */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Drop Location <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Nizamabad / Basar / Local City"
                    {...register("dropLocation")}
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                  />
                  <MapPin className="w-4 h-4 text-neutral-400 absolute right-3 top-3.5" />
                </div>
                {errors.dropLocation && (
                  <p className="text-red-500 text-xs mt-1">{errors.dropLocation.message}</p>
                )}
              </div>

              {/* Travel Date */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Travel Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    {...register("travelDate")}
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                  />
                  <Calendar className="w-4 h-4 text-neutral-400 absolute right-3 top-3.5 pointer-events-none" />
                </div>
                {errors.travelDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.travelDate.message}</p>
                )}
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Trip Type <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("tripType")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                >
                  <option value="Local">Local City Travel</option>
                  <option value="Outstation">Outstation Journey</option>
                  <option value="Airport">Airport Transfer</option>
                  <option value="Corporate">Corporate Travel</option>
                  <option value="Family">Family Trip</option>
                  <option value="Event">Event / Wedding Transportation</option>
                  <option value="Tour">Sightseeing / Tour</option>
                </select>
                {errors.tripType && (
                  <p className="text-red-500 text-xs mt-1">{errors.tripType.message}</p>
                )}
              </div>

              {/* Number of Passengers */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Number of Passengers
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="20"
                    placeholder="e.g. 4"
                    {...register("passengers")}
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white transition-all"
                  />
                  <Users className="w-4 h-4 text-neutral-400 absolute right-3 top-3.5" />
                </div>
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Special Notes / Trip Itinerary
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention pickup time, multiple stops, or specific requirements..."
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50 focus:bg-white resize-none transition-all"
                />
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-500">
                ⚡ Direct instant confirmation with AMULA GROUP team.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-gold-gradient text-dark-950 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>REQUEST CAR</span>
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Confirmation Modal */}
      {isSuccessModalOpen && submittedPayload && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gold-500/40 relative animate-scaleUp">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>

            <h3 className="text-xl font-display font-extrabold text-dark-950 text-center mb-2">
              Booking Request Prepared!
            </h3>
            <p className="text-sm text-neutral-600 text-center mb-6">
              Thank you, <span className="font-bold text-dark-900">{submittedPayload.name}</span>. Click below to send your request directly to AMULA GROUP on WhatsApp for instant confirmation.
            </p>

            <div className="bg-neutral-50 rounded-xl p-4 text-xs space-y-2 border border-neutral-200 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-500">Vehicle:</span>
                <span className="font-bold text-dark-900">{submittedPayload.vehicle}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Trip:</span>
                <span className="font-semibold text-dark-900">{submittedPayload.pickupLocation} → {submittedPayload.dropLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Date:</span>
                <span className="font-semibold text-dark-900">{submittedPayload.travelDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Trip Type:</span>
                <span className="font-semibold text-dark-900">{submittedPayload.tripType}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppDispatch}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Confirm Booking via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  reset();
                }}
                className="w-full py-3 px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
