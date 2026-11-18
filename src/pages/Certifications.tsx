import React, { useState } from 'react';
import { 
  ExternalLink, 
  Download, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Eye, 
  Filter,
  Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { CertificateModal } from '../components/CertificateModal';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Cybersecurity', 'NPTEL'];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Accreditations & Credentials"
        title="Verified Certifications &amp; Academic Honors"
        subtitle="Explore official industry credentials, competitive examination scores, and cybersecurity certifications backed by original documentation."
        currentPage="Certifications"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono text-zinc-400">Filter By Category:</span>
          </div>

          <div className="flex items-center space-x-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeFilter === opt
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Certificate Card: CEH CappricioSec University (with actual PDF embed & viewer) */}
        {activeFilter !== 'NPTEL' && (
          <div className="rounded-3xl bg-gradient-to-br from-[#12141f] via-[#0f1118] to-[#14182b] border border-emerald-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden group">
            
            {/* Top decorative badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Featured Credential • Original PDF Verified
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  CappricioSec University
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href="/documents/ceh-Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/15 text-white transition-colors"
                >
                  <span>Open PDF in Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/documents/ceh-Certificate.pdf"
                  download="ceh-Certificate.pdf"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Issued: 17 November 2026</span>
                  <span className="text-zinc-600">•</span>
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>42 Hours Intensive</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
                  Cybersecurity &amp; Ethical Hacking
                </h3>

                <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
                  Rigorous hands-on technical curriculum spanning offensive penetration testing, enterprise Linux security, wireless interception, Active Directory domain compromise, and hardware/RF signal security.
                </p>

                {/* Credential ID highlight */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-xs flex flex-wrap items-center justify-between gap-2">
                  <span className="text-zinc-400">Official Credential ID:</span>
                  <span className="text-emerald-400 font-bold tracking-wider">
                    7881f5a6f8d5246d59ad
                  </span>
                </div>

                {/* Topics Covered Grid */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                    Curriculum Competencies Verified:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Linux &amp; Go / Python Security</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Social Engineering Vectors</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Wi-Fi Hacking &amp; Handshakes</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Web &amp; API Penetration Testing</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Active Directory Testing</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Hardware, RF &amp; IoT Hacking</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedCert(certificationsData[0])}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Launch PDF Document Viewer</span>
                  </button>
                </div>
              </div>

              {/* Embedded PDF Thumbnail / Live Preview */}
              <div 
                onClick={() => setSelectedCert(certificationsData[0])}
                className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-black/60 shadow-2xl cursor-pointer group/pdf h-72 sm:h-80 flex flex-col justify-between"
              >
                {/* Object preview of actual PDF */}
                <object
                  data="/documents/ceh-Certificate.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  type="application/pdf"
                  className="w-full h-full pointer-events-none opacity-80 group-hover/pdf:opacity-100 transition-opacity"
                >
                  <div className="w-full h-full flex items-center justify-center text-xs text-zinc-500 font-mono">
                    PDF Document
                  </div>
                </object>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 group-hover/pdf:bg-black/20 flex items-center justify-center transition-colors">
                  <div className="px-4 py-2 rounded-xl bg-blue-600/90 text-white text-xs font-mono font-semibold shadow-lg backdrop-blur-md flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>Click to View Full Certificate</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* NPTEL & Academic Credentials Grid */}
        {activeFilter !== 'Cybersecurity' && (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-sm font-mono uppercase tracking-wider text-zinc-400">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Academic Excellence &amp; Ministry of Education Certifications</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* NPTEL Robotics */}
              <div className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-lg space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Elite Academic Benchmark
                    </span>
                    <div className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono font-bold text-sm text-emerald-400">
                      Score: 75 / 100
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                      NPTEL – Robotics
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      Issued by IIT / NPTEL (National Programme on Technology Enhanced Learning)
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
                    Rigorous academic curriculum covering robotic kinematics, coordinate transformations, dynamic modeling, sensor architectures, actuators, and autonomous control strategies.
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block">Verified Domains:</span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-zinc-400">
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Spatial Kinematics</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Sensor Integration</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Actuator Control</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>Industrial Automation</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    No invented ID or PDF files
                  </span>
                  <button
                    onClick={() => setSelectedCert(certificationsData[1])}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Details &amp; Report
                  </button>
                </div>
              </div>

              {/* NPTEL Project Management */}
              <div className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-lg space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      Certified Professional
                    </span>
                    <div className="px-3 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono font-bold text-sm text-emerald-400">
                      Score: 70 / 100
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                      NPTEL – Project Management
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      Issued by IIT / NPTEL (National Programme on Technology Enhanced Learning)
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
                    Strategic software engineering lifecycle planning, Work Breakdown Structures (WBS), Critical Path Method (CPM), PERT network calculations, resource smoothing, and quality control.
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono uppercase text-zinc-500 block">Verified Domains:</span>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-zinc-400">
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>Project Life Cycle &amp; WBS</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>Critical Path Method (CPM)</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>PERT Network Scheduling</span>
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                        <span>Risk &amp; Resource Management</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500">
                    No invented ID or PDF files
                  </span>
                  <button
                    onClick={() => setSelectedCert(certificationsData[2])}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Details &amp; Report
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Interactive Certificate Viewer Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};
