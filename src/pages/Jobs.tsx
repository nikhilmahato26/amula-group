import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { SAMPLE_JOBS, JobListing } from '../data/jobs';
import { JOB_CATEGORIES } from '../data/jobCategories';
import { Search, MapPin, Briefcase, Clock, Globe2, ArrowRight, MessageCircle, CheckCircle, X, UploadCloud, FileText } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const Jobs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJobForModal, setSelectedJobForModal] = useState<JobListing | null>(null);

  // Modal form states
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [candidateExp, setCandidateExp] = useState('');
  const [candidateResume, setCandidateResume] = useState<File | null>(null);
  const [isSuccessSubmitted, setIsSuccessSubmitted] = useState(false);

  const locations = [
    'All',
    'Dubai',
    'Saudi Arabia',
    'Qatar',
    'Kuwait',
    'Bahrain',
    'Oman',
    'Maldives',
    'Europe (Germany / France / Malta)',
    'Hyderabad',
    'Nizamabad',
    'Basar',
  ];

  const filteredJobs = useMemo(() => {
    return SAMPLE_JOBS.filter((job) => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'All' || 
        job.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesLocation = 
        selectedLocation === 'All' || 
        job.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        (selectedLocation.includes('Europe') && (
          job.location.toLowerCase().includes('germany') ||
          job.location.toLowerCase().includes('france') ||
          job.location.toLowerCase().includes('malta') ||
          job.location.toLowerCase().includes('moldova') ||
          job.location.toLowerCase().includes('russia') ||
          job.location.toLowerCase().includes('ukraine')
        ));

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  const handleApplyModal = (job: JobListing) => {
    setSelectedJobForModal(job);
    setIsSuccessSubmitted(false);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessSubmitted(true);
  };

  const handleModalWhatsApp = () => {
    if (!selectedJobForModal) return;
    const text = `*Job Application Enquiry — AMULA GROUP*
Role: ${selectedJobForModal.title}
Category: ${selectedJobForModal.category}
Location: ${selectedJobForModal.location}
Candidate: ${candidateName}
Phone: ${candidatePhone}
Experience: ${candidateExp}
${candidateResume ? `Resume: ${candidateResume.name}` : ''}`;

    const url = getWhatsAppLink("job", text);
    window.open(url, '_blank');
    setSelectedJobForModal(null);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen py-12">
      <SEO
        title="Find Jobs & Career Opportunities"
        description="Search active job openings across IT, Healthcare, Engineering, Hospitality, and Overseas roles in Dubai and India with AMULA GROUP."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Open Opportunities
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-dark-950 mt-2 mb-4">
            FIND YOUR NEXT ROLE
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Explore verified vacancies and submit your profile for tailored guidance from our consultancy team.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-surface-border shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search job title, skill, or keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSearchParams({ category: e.target.value });
                }}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50"
              >
                <option value="All">All Categories</option>
                {JOB_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none bg-neutral-50/50"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'All' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Jobs Listing Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-surface-border">
            <Briefcase className="w-12 h-12 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-dark-950 mb-1">No vacancies matching criteria</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Try adjusting your search terms or submit your resume directly for upcoming opportunities.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedLocation('All');
              }}
              className="px-6 py-2.5 rounded-xl bg-gold-gradient text-dark-950 font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 border border-surface-border hover:border-gold-500/40 hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gold-500/10 text-gold-800 border border-gold-500/20">
                      {job.category}
                    </span>
                    {job.isInternational && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-dark-950 text-gold-300">
                        <Globe2 className="w-3 h-3" />
                        Dubai
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-display font-bold text-dark-950 group-hover:text-gold-700 transition-colors mb-2">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {job.experience}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 mb-5">
                    {job.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <p className="text-[11px] font-bold text-dark-900 uppercase tracking-wider">Key Requirements:</p>
                    {job.requirements.slice(0, 2).map((req, i) => (
                      <p key={i} className="text-xs text-neutral-600 flex items-start">
                        <span className="text-gold-600 mr-1.5">•</span>
                        <span>{req}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
                  <button
                    onClick={() => handleApplyModal(job)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-dark-950 text-gold-300 hover:bg-black text-xs font-bold uppercase tracking-wider text-center border border-gold-500/30 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Apply / Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppLink("job", `Hello AMULA GROUP, I am interested in applying for the *${job.title}* position in ${job.location}. Please share next steps.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
                    aria-label="Enquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Apply / Enquire Modal */}
      {selectedJobForModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gold-500/40 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedJobForModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-dark-950 hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Candidate Enquiry</span>
              <h3 className="text-xl font-display font-extrabold text-dark-950">
                {selectedJobForModal.title}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                {selectedJobForModal.location} • {selectedJobForModal.experience}
              </p>
            </div>

            {isSuccessSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-dark-950">Application Ready!</h4>
                <p className="text-xs text-neutral-600">
                  Click below to dispatch your profile directly to AMULA GROUP via WhatsApp for faster coordination.
                </p>
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleModalWhatsApp}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Send on WhatsApp
                  </button>
                  <button
                    onClick={() => setSelectedJobForModal(null)}
                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-100 text-neutral-700 font-semibold text-xs transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="e.g. Suresh Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={candidatePhone}
                    onChange={(e) => setCandidatePhone(e.target.value)}
                    placeholder="e.g. 8858887789"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Relevant Experience *
                  </label>
                  <input
                    type="text"
                    required
                    value={candidateExp}
                    onChange={(e) => setCandidateExp(e.target.value)}
                    placeholder="e.g. 3 Years in IT"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-gold-500 text-sm outline-none bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Resume / CV (Optional)
                  </label>
                  {!candidateResume ? (
                    <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-neutral-300 rounded-xl cursor-pointer bg-neutral-50 hover:bg-gold-50/30 text-xs text-neutral-600">
                      <UploadCloud className="w-4 h-4 text-gold-600" />
                      <span>Select Resume (PDF / Word)</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => e.target.files?.[0] && setCandidateResume(e.target.files[0])}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between p-2.5 bg-gold-50 border border-gold-300 rounded-xl text-xs">
                      <div className="flex items-center space-x-2 truncate">
                        <FileText className="w-4 h-4 text-gold-700 flex-shrink-0" />
                        <span className="truncate font-semibold">{candidateResume.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setCandidateResume(null)}
                        className="text-neutral-500 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-gold-gradient text-dark-950 font-extrabold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
