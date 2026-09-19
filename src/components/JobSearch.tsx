import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { UploadCloud, CheckCircle, Send, FileText, X, AlertCircle } from 'lucide-react';
import { formatJobEnquiryWhatsApp, JobEnquiryPayload } from '../utils/whatsapp';

const jobEnquirySchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number (at least 10 digits)"),
  email: z.string().email("Please enter a valid email address").optional().or(z.literal('')),
  preferredRole: z.string().min(2, "Please specify your preferred job role"),
  preferredLocation: z.string().min(2, "Please select or specify preferred location"),
  experience: z.string().min(1, "Please specify your experience level"),
  qualification: z.string().min(2, "Please enter your highest qualification"),
  message: z.string().optional(),
});

type JobEnquiryFormData = z.infer<typeof jobEnquirySchema>;

export const JobSearch: React.FC = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<JobEnquiryPayload | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<JobEnquiryFormData>({
    resolver: zodResolver(jobEnquirySchema),
    defaultValues: {
      preferredLocation: "Hyderabad",
      experience: "1-3 Years",
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setFileError("File size must be under 10MB");
        setResumeFile(null);
        return;
      }
      setFileError(null);
      setResumeFile(file);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
    setFileError(null);
  };

  const onSubmit = (data: JobEnquiryFormData) => {
    const payload: JobEnquiryPayload = {
      fullName: data.fullName,
      phone: data.phone,
      email: data.email || undefined,
      preferredRole: data.preferredRole,
      preferredLocation: data.preferredLocation,
      experience: data.experience,
      qualification: data.qualification,
      message: data.message || undefined,
      resumeFileName: resumeFile?.name,
    };

    setSubmittedData(payload);
    setIsSuccessModalOpen(true);
  };

  const handleWhatsAppRedirect = () => {
    if (submittedData) {
      const url = formatJobEnquiryWhatsApp(submittedData);
      window.open(url, '_blank');
      setIsSuccessModalOpen(false);
      reset();
      setResumeFile(null);
    }
  };

  return (
    <section id="enquiry-box" className="relative -mt-10 lg:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white rounded-2xl shadow-premium border border-gold-500/30 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-surface-border">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">Quick Profile Submission</span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-dark-950">
              Find Your Next Opportunity
            </h2>
            <p className="text-sm text-neutral-500 mt-1">
              Submit your career requirements and our team will assist you with suitable job opportunities.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold-50 border border-gold-200 text-xs font-semibold text-gold-900 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Active Enquiries Open
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...register("fullName")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
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
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="e.g. candidate@example.com"
                {...register("email")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Preferred Job Role */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Preferred Job Role <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Software Developer, Nurse, Site Engineer"
                {...register("preferredRole")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white"
              />
              {errors.preferredRole && (
                <p className="text-red-500 text-xs mt-1">{errors.preferredRole.message}</p>
              )}
            </div>

            {/* Preferred Location */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Preferred Location <span className="text-red-500">*</span>
              </label>
              <select
                {...register("preferredLocation")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white"
              >
                <option value="Hyderabad">Hyderabad, Telangana</option>
                <option value="Dubai, UAE">Dubai, UAE (Overseas)</option>
                <option value="Nizamabad">Nizamabad, Telangana</option>
                <option value="Basar">Basar, Nirmal, Telangana</option>
                <option value="Any Location">Any Location / Relocate</option>
              </select>
              {errors.preferredLocation && (
                <p className="text-red-500 text-xs mt-1">{errors.preferredLocation.message}</p>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Experience Level <span className="text-red-500">*</span>
              </label>
              <select
                {...register("experience")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white"
              >
                <option value="Fresher / Entry Level">Fresher / Entry Level</option>
                <option value="1-3 Years">1-3 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5-8 Years">5-8 Years</option>
                <option value="8+ Years">8+ Years (Senior)</option>
              </select>
              {errors.experience && (
                <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>
              )}
            </div>

            {/* Qualification */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Highest Qualification <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. B.Tech, Degree, Diploma, ITI, B.Sc"
                {...register("qualification")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white"
              />
              {errors.qualification && (
                <p className="text-red-500 text-xs mt-1">{errors.qualification.message}</p>
              )}
            </div>

            {/* Resume Upload UI */}
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Upload Resume (PDF, DOC, DOCX up to 10MB)
              </label>
              
              {!resumeFile ? (
                <label className="flex items-center justify-center gap-3 px-4 py-3.5 border-2 border-dashed border-neutral-300 hover:border-gold-500 rounded-xl cursor-pointer bg-neutral-50/60 hover:bg-gold-50/30 transition-all text-neutral-600">
                  <UploadCloud className="w-5 h-5 text-gold-600" />
                  <span className="text-sm font-medium">Click to select resume file</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between px-4 py-3 bg-gold-50 border border-gold-300 rounded-xl">
                  <div className="flex items-center space-x-2 truncate">
                    <FileText className="w-5 h-5 text-gold-700 flex-shrink-0" />
                    <span className="text-sm font-semibold text-dark-900 truncate">
                      {resumeFile.name}
                    </span>
                    <span className="text-xs text-neutral-500">
                      ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-1 text-neutral-500 hover:text-red-600 rounded-md transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {fileError && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {fileError}
                </p>
              )}
            </div>

            {/* Message / Additional Notes */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Additional Message / Specific Requirements
              </label>
              <textarea
                rows={2}
                placeholder="Tell us about your specific expectations, target industry, or timeline..."
                {...register("message")}
                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 text-sm outline-none transition-all bg-neutral-50/50 focus:bg-white resize-none"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200">
            <p className="text-xs text-neutral-500 text-center sm:text-left">
              🔒 Your details are kept confidential and used strictly for career consultation purposes.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-dark-950 text-gold-300 hover:bg-black hover:text-gold-200 border border-gold-500/40 shadow-premium transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-4 h-4 text-gold-400" />
              <span>SUBMIT JOB ENQUIRY</span>
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Modal */}
      {isSuccessModalOpen && submittedData && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gold-500/40 relative animate-scaleUp">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>

            <h3 className="text-xl font-display font-extrabold text-dark-950 text-center mb-2">
              Job Enquiry Received!
            </h3>
            <p className="text-sm text-neutral-600 text-center mb-6">
              Thank you, <span className="font-bold text-dark-900">{submittedData.fullName}</span>. Your enquiry for <span className="font-semibold text-gold-800">{submittedData.preferredRole}</span> has been logged.
            </p>

            <div className="bg-neutral-50 rounded-xl p-4 text-xs space-y-2 border border-neutral-200 mb-6">
              <div className="flex justify-between">
                <span className="text-neutral-500">Contact:</span>
                <span className="font-semibold text-dark-900">{submittedData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Location:</span>
                <span className="font-semibold text-dark-900">{submittedData.preferredLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Experience:</span>
                <span className="font-semibold text-dark-900">{submittedData.experience}</span>
              </div>
              {submittedData.resumeFileName && (
                <div className="flex justify-between">
                  <span className="text-neutral-500">Attached File:</span>
                  <span className="font-semibold text-dark-900">{submittedData.resumeFileName}</span>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-all shadow-md"
              >
                <span>Continue on WhatsApp for Instant Response</span>
              </button>

              <button
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  reset();
                  setResumeFile(null);
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
