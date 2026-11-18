import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#111115] dark:bg-[#111115] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-[#16161c] dark:bg-[#16161c] light:bg-slate-50">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Visual Header */}
          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-black/40 border border-white/10 relative flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-zinc-600 font-mono text-sm">Project Visual</div>
            )}
            {project.badge && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-600/90 text-white shadow-md">
                {project.badge}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm font-mono text-blue-400">
              {project.tagline}
            </p>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-2">
              Overview &amp; Problem Statement
            </h3>
            <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-3 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Core Highlights</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start space-x-2 text-xs text-zinc-300 dark:text-zinc-300 light:text-slate-700 bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 p-2.5 rounded-lg border border-white/[0.05] dark:border-white/[0.05] light:border-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features (if any) */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-2.5 flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>Engineered Capabilities</span>
              </h3>
              <ul className="space-y-2 text-xs text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* System Architecture Details */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-2.5 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Architecture Flow</span>
              </h3>
              <div className="space-y-2 p-3.5 rounded-xl bg-black/30 dark:bg-black/30 light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                {project.architecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-400 font-bold">[{idx + 1}]</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-3">
              Technologies &amp; Libraries
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Notice on repository & demo */}
          <div className="p-3 rounded-lg bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-100 border border-white/[0.06] text-[11px] text-zinc-400 font-mono">
            ℹ️ Source code and live demo links are available on request or will be updated upon repository release. No fabricated URLs are listed.
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#16161c] dark:bg-[#16161c] light:bg-slate-100 border-t border-white/10 dark:border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <a
              href={project.githubUrl || "#"}
              onClick={(e) => {
                if (project.githubUrl === "#") {
                  e.preventDefault();
                  alert("Project repository placeholder. Source code available upon request or upon repository publication.");
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 dark:bg-white/10 light:bg-white hover:bg-white/20 text-white dark:text-white light:text-slate-900 border border-white/10 shadow-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>

            <a
              href={project.liveDemoUrl || "#"}
              onClick={(e) => {
                if (project.liveDemoUrl === "#") {
                  e.preventDefault();
                  alert("Live demonstration placeholder. Currently hosted in academic or local laboratory environment.");
                }
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
