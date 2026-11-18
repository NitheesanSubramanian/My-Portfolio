import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  Sparkles,
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { personalInfo } from '../data/portfolioData';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid name (at least 2 characters).';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message body is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters in your message.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Frontend-ready simulation with mailto intent:
    // As explicitly specified: "Never pretend a message has been delivered without a backend.
    // Provide a clearly documented frontend-ready implementation."
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleOpenEmailClient = () => {
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry - Nitheesan S'
    )}&body=${encodeURIComponent(
      `Hello Nitheesan,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="pb-24">
      {/* Header */}
      <PageHeader
        badge="Contact & Collaboration"
        title="Let's Build Something Meaningful."
        subtitle="I'm always interested in connecting with developers, recruiters, and people working on innovative technology projects."
        currentPage="Contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Quick Reach */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                Get In Touch
              </h2>
              <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                Whether you have a question about my work in full-stack engineering, adaptive RAG architectures, machine learning workflows, or potential job opportunities, feel free to reach out.
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-3">
              
              {/* Email Card with 1-click Copy */}
              <div className="p-4 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center justify-between group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 block uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono font-semibold text-white dark:text-white light:text-slate-900 hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  title="Copy email address"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block uppercase">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white dark:text-white light:text-slate-900">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 block uppercase">
                    Telephone
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-semibold text-white dark:text-white light:text-slate-900">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center space-x-2.5 hover:border-blue-500/30 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900">LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 flex items-center space-x-2.5 hover:border-blue-500/30 transition-colors"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-semibold text-white dark:text-white light:text-slate-900">GitHub Profile</span>
                </a>
              </div>

            </div>

            {/* Recruiter Quick Note */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-blue-400 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Notice for Hiring Teams</span>
              </div>
              <p className="text-xs text-zinc-300 dark:text-zinc-300 light:text-slate-700 leading-relaxed">
                I am actively seeking software engineering and AI/ML internship or entry-level opportunities. Open to onsite in Tamil Nadu or remote globally.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900">
                    Message Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong>{formData.fullName}</strong>. Since this is a client-side portfolio without a private backend mail server, you can launch your email client with your message prefilled:
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenEmailClient}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open Pre-filled Email</span>
                    </button>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ fullName: '', email: '', subject: '', message: '' });
                      }}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-300"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] dark:border-white/[0.06] light:border-slate-200">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center space-x-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Direct Message Interface</span>
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      * All fields validated
                    </span>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-zinc-300 dark:text-zinc-300 light:text-slate-700 block">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black/40 dark:bg-black/40 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-zinc-500 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500/60 focus:border-red-500'
                            : 'border-white/10 dark:border-white/10 light:border-slate-300 focus:border-blue-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-zinc-300 dark:text-zinc-300 light:text-slate-700 block">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-black/40 dark:bg-black/40 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-zinc-500 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500/60 focus:border-red-500'
                            : 'border-white/10 dark:border-white/10 light:border-slate-300 focus:border-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-zinc-300 dark:text-zinc-300 light:text-slate-700 block">
                      Subject <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Collaboration regarding AI or Full-Stack Engineering"
                      className={`w-full px-4 py-2.5 rounded-xl bg-black/40 dark:bg-black/40 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-zinc-500 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 dark:border-white/10 light:border-slate-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-zinc-300 dark:text-zinc-300 light:text-slate-700 block">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message, project details, or inquiry here..."
                      className={`w-full px-4 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-slate-50 border text-xs sm:text-sm text-white dark:text-white light:text-slate-900 placeholder:text-zinc-500 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/60 focus:border-red-500'
                          : 'border-white/10 dark:border-white/10 light:border-slate-300 focus:border-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Validating Form...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-500 text-center pt-2">
                    Frontend-ready validation implementation. Respects privacy and provides instant direct client hand-off.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
