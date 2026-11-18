import React from 'react';
import { X, ExternalLink, Download, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CertificationItem } from '../types';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden my-4 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-[#16161d] dark:bg-[#16161d] light:bg-slate-50 shrink-0">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
                {cert.issuer} {cert.credentialId && `• ID: ${cert.credentialId}`}
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            aria-label="Close Certificate Viewer"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Working PDF Viewer for actual PDF */}
          {cert.pdfPath ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Original Document Render (ceh-Certificate.pdf)</span>
                </span>
                <div className="flex items-center space-x-2">
                  <a
                    href={cert.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Open Fullscreen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={cert.pdfPath}
                    download="ceh-Certificate.pdf"
                    className="flex items-center space-x-1 px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <span>Download</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Working Embedded PDF Object */}
              <div className="w-full h-[55vh] min-h-[380px] rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-inner">
                <object
                  data={`${cert.pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="p-8 text-center flex flex-col items-center justify-center h-full space-y-4">
                    <p className="text-sm text-zinc-300">
                      Your browser does not support inline PDF preview.
                    </p>
                    <a
                      href={cert.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                    >
                      Open {cert.title} PDF
                    </a>
                  </div>
                </object>
              </div>
            </div>
          ) : (
            /* Score card view for NPTEL / credentials without standalone PDF */
            <div className="p-8 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-200 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {cert.badgeText}
                </span>
                <h4 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mt-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 mt-1">
                  Issued by {cert.issuer}
                </p>
              </div>
              <div className="inline-block px-5 py-3 rounded-xl bg-black/40 dark:bg-black/40 light:bg-white border border-white/10">
                <span className="text-2xl font-extrabold font-mono text-blue-400">
                  {cert.durationOrScore}
                </span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 max-w-md mx-auto">
                {cert.summary}
              </p>
            </div>
          )}

          {/* Topics & Curricula Breakdown */}
          {cert.topics && cert.topics.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-3">
                Curriculum &amp; Practical Competencies Covered
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {cert.topics.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 p-2.5 rounded-lg bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-100 border border-white/[0.05] text-xs text-zinc-300 dark:text-zinc-300 light:text-slate-700 font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Credential Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono pt-2 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200">
            <div>
              <span className="text-zinc-500 block">Organization</span>
              <span className="text-zinc-300 dark:text-zinc-300 light:text-slate-800 font-semibold">{cert.issuer}</span>
            </div>
            {cert.date && (
              <div>
                <span className="text-zinc-500 block">Issuance Date</span>
                <span className="text-zinc-300 dark:text-zinc-300 light:text-slate-800 font-semibold">{cert.date}</span>
              </div>
            )}
            <div>
              <span className="text-zinc-500 block">Assessment / Score</span>
              <span className="text-blue-400 font-semibold">{cert.durationOrScore}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#16161d] dark:bg-[#16161d] light:bg-slate-100 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] font-mono text-zinc-500">
            Document verified with authentic academic &amp; industrial credentials.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/15 text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
