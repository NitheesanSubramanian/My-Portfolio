import React from 'react';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group relative rounded-2xl bg-[#131317] dark:bg-[#131317] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
      
      {/* Top Media / Visual */}
      <div 
        onClick={() => onSelect(project)}
        className="relative w-full h-48 sm:h-52 bg-[#090b10] overflow-hidden cursor-pointer border-b border-white/[0.06] flex items-center justify-center"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="text-zinc-600 font-mono text-xs">Visual Artifact</div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent opacity-60" />

        {/* Badge */}
        {project.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-600/90 text-white shadow-md">
            {project.badge}
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-black/60 text-zinc-300 border border-white/10 backdrop-blur-md">
          {project.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 
            onClick={() => onSelect(project)}
            className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2 leading-snug mb-2"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Core Highlights List */}
          <div className="space-y-1.5 mb-5">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center space-x-1.5 text-xs text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                <Sparkles className="w-3 h-3 text-blue-400 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-100 text-zinc-300 dark:text-zinc-300 light:text-slate-700 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-zinc-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Actions Bar */}
          <div className="pt-4 border-t border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Project repository placeholder. Source code available upon request or upon repository release.");
                }}
                title="GitHub Repository (Placeholder)"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5 transition-colors"
              >
                <Github className="w-4 h-4" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  alert("Live demonstration placeholder. Currently hosted in academic or local laboratory environment.");
                }}
                title="Live Demo (Placeholder)"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center space-x-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
