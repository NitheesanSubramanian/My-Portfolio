import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CertificateModal } from '../components/CertificateModal';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Experience: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const cehCert = certificationsData.find(c => c.id === 'ceh-cappriciosec')!;

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Career & Academic Journey"
        title="Experience, Education &amp; Credentials"
        subtitle="A verified chronological record of practical machine learning exposure, technical degrees, and accredited cybersecurity certifications."
        currentPage="Experience & Education"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section 1: Professional Experience */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                  Work Experience
                </h2>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
                  Industrial internship and practical technical application
                </p>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span>Verified History</span>
            </div>
          </div>

          <div className="space-y-6">
            {experienceData.map((item) => (
              <div 
                key={item.id}
                className="relative pl-6 sm:pl-10 border-l-2 border-violet-500/40 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-[#080808] dark:bg-[#080808] light:bg-white border-2 border-violet-500 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                          Industry Internship
                        </span>
                        <span className="text-xs text-zinc-500 font-mono">
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-violet-400">
                        {item.company}
                      </p>
                    </div>

                    <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-400 self-start sm:self-auto">
                      {item.period}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-700 leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Core Responsibilities &amp; Learnings:
                    </h4>
                    {item.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {item.isPlaceholderPeriod && (
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] font-mono text-zinc-500">
                      ℹ️ Internship dates and company specifics are preserved with standard non-fabricated placeholders.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Education Timeline */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                  Educational Background
                </h2>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
                  Degrees and formal engineering foundations
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <div 
                key={edu.id}
                className="relative pl-6 sm:pl-10 border-l-2 border-blue-500/40 group"
              >
                {/* Node icon */}
                <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-[#080808] dark:bg-[#080808] light:bg-white border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                <div className="p-6 sm:p-8 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-xl space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {idx === 0 ? 'Undergraduate Degree' : 'Diploma Qualification'}
                        </span>
                        <span className="text-xs text-zinc-500 font-mono">
                          {edu.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-blue-400">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 self-start sm:self-auto">
                      {edu.score && (
                        <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono font-bold text-emerald-400">
                          {edu.scoreLabel}: {edu.score}
                        </div>
                      )}
                      <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-400">
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-700 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Key Highlights &amp; Academic Scope:
                    </h4>
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Verified Certifications Showcase with View Certificate Trigger */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                  Accredited Certifications
                </h2>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
                  Cybersecurity and competitive NPTEL benchmarks
                </p>
              </div>
            </div>

            <Link
              to="/certifications"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Open Dedicated Certification Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CappricioSec CEH */}
            <div className="md:col-span-1 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-emerald-500/30 p-6 flex flex-col justify-between shadow-lg space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Verified PDF Credential
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">42 Hours</span>
                </div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  Cybersecurity &amp; Ethical Hacking
                </h3>
                <p className="text-xs text-blue-400 font-mono">
                  CappricioSec University
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Offensive and defensive cybersecurity: Linux, Go, Python, Social Engineering, Wi-Fi, Web/API, Active Directory, RF &amp; IoT hacking.
                </p>
                <div className="pt-1 text-[11px] font-mono text-zinc-500">
                  ID: <span className="text-zinc-400 font-semibold">{cehCert.credentialId}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCert(cehCert)}
                  className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>View Certificate (PDF)</span>
                </button>
              </div>
            </div>

            {/* NPTEL Robotics */}
            <div className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] p-6 flex flex-col justify-between shadow-md space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Elite Certification
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">Score: 75</span>
                </div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  NPTEL – Robotics
                </h3>
                <p className="text-xs text-blue-400 font-mono">
                  IIT / Ministry of Education
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Rigorous academic curriculum covering robotic kinematics, dynamic modeling, sensors, actuators, and automation control.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-center">
                <button
                  onClick={() => setSelectedCert(certificationsData.find(c => c.id === 'nptel-robotics')!)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  View Details &amp; Curricula
                </button>
              </div>
            </div>

            {/* NPTEL Project Management */}
            <div className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] p-6 flex flex-col justify-between shadow-md space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Academic Benchmark
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">Score: 70</span>
                </div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 leading-snug">
                  NPTEL – Project Management
                </h3>
                <p className="text-xs text-blue-400 font-mono">
                  IIT / Ministry of Education
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Project lifecycle planning, Work Breakdown Structures (WBS), Critical Path Method (CPM), PERT scheduling, and risk mitigation.
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] text-center">
                <button
                  onClick={() => setSelectedCert(certificationsData.find(c => c.id === 'nptel-project-management')!)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300"
                >
                  View Details &amp; Curricula
                </button>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Certificate Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
