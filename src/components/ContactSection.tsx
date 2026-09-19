import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/navigation';
import { BRANCHES } from '../data/branches';
import { getWhatsAppLink } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Job Consultancy',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*Contact Message from Website — AMULA GROUP*
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email || 'N/A'}
📌 *Subject:* ${formData.subject}
📝 *Message:* ${formData.message}`;

    const url = getWhatsAppLink("general", text);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Direct Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 tracking-tight mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Reach out to our teams in Dubai, Hyderabad, Nizamabad, or Basar for career advisory, candidate registration, or travel bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Action Buttons */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-surface-border">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Phone Lines</h3>
                  <p className="text-base font-extrabold text-dark-950">
                    {COMPANY_INFO.primaryPhone} <span className="text-neutral-400 font-normal">/</span> {COMPANY_INFO.secondaryPhone}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhone}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-dark-950 text-gold-300 text-xs font-bold uppercase tracking-wider text-center hover:bg-black transition-colors"
                >
                  Call Primary
                </a>
                <a
                  href={`tel:${COMPANY_INFO.secondaryPhone}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-white border border-neutral-300 text-dark-900 text-xs font-bold uppercase tracking-wider text-center hover:border-gold-500 transition-colors"
                >
                  Call Secondary
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-surface-border">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email Address</h3>
                  <p className="text-sm font-bold text-dark-950 break-all">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-full mt-2 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-white border border-neutral-300 text-dark-900 text-xs font-bold uppercase tracking-wider hover:border-gold-500 transition-colors"
              >
                Send Email
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={`tel:${COMPANY_INFO.primaryPhone}`}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-dark-950 text-white hover:bg-black border border-gold-500/30 transition-all text-center"
              >
                <Phone className="w-5 h-5 text-gold-400 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Call Now</span>
              </a>

              <a
                href={getWhatsAppLink("general")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider">WhatsApp</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#FAF9F5] hover:bg-gold-50 text-dark-950 border border-surface-border hover:border-gold-500 transition-all text-center"
              >
                <Mail className="w-5 h-5 text-gold-600 mb-1" />
                <span className="text-[11px] font-bold uppercase tracking-wider">Email Us</span>
              </a>
            </div>

            {/* Locations Summary */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-surface-border">
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-600" />
                <span>Our Branch Footprint</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {BRANCHES.filter(b => !b.isComingSoon).map(branch => (
                  <div key={branch.id} className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="font-bold text-dark-950">{branch.city}</p>
                    <p className="text-neutral-500 text-[11px]">{branch.region}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-10 border border-surface-border shadow-sm">
              <h3 className="text-2xl font-display font-extrabold text-dark-950 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-neutral-600 mb-8">
                Have questions about jobs, travel packages, or car rentals? Drop us a line.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-dark-950">Thank you for your message!</h4>
                  <p className="text-sm text-neutral-600">
                    We have noted your details and our representative will get in touch shortly.
                  </p>
                  <button
                    onClick={handleWhatsAppSend}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-emerald-700 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send directly via WhatsApp</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Varma"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 8858887789"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                        Subject / Vertical <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-white"
                      >
                        <option value="Job Consultancy">Job Consultancy & Opportunities</option>
                        <option value="Car Rental">Car Rental & Booking</option>
                        <option value="Tours & Travel">Tours & Travel Services</option>
                        <option value="Branch Enquiry">Branch / Office Enquiry</option>
                        <option value="General Query">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-dark-950 text-gold-300 hover:bg-black font-extrabold text-xs uppercase tracking-wider border border-gold-500/40 shadow-sm transition-all"
                    >
                      <Send className="w-4 h-4 text-gold-400" />
                      <span>SEND MESSAGE</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
