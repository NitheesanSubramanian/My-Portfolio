import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, ArrowUp, Code2, Shield, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 bg-[#060709] dark:bg-[#060709] light:bg-slate-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1: Brand & Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                N
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white dark:text-white light:text-slate-900">
                Nitheesan <span className="text-blue-500">S</span>
              </span>
            </div>
            
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 max-w-md leading-relaxed">
              Software Developer engineering intelligent, scalable, and secure digital applications at the intersection of AI, Full-Stack Development, and Cybersecurity.
            </p>

            <div className="flex items-center space-x-2 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Code2 className="w-3 h-3" />
                <span>Full-Stack</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Sparkles className="w-3 h-3" />
                <span>AI &amp; RAG</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Shield className="w-3 h-3" />
                <span>Cybersecurity</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-zinc-300 dark:text-zinc-300 light:text-slate-900">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-blue-400 transition-colors">Technical Skills</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-blue-400 transition-colors">Experience &amp; Education</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-blue-400 transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider font-semibold text-zinc-300 dark:text-zinc-300 light:text-slate-900">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2.5 text-sm text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-200 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-sm text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-200 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-xs">LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-sm text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 dark:bg-white/5 light:bg-slate-200 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <span className="text-xs">GitHub Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-500 font-mono">
            © {new Date().getFullYear()} Nitheesan S. Designed &amp; Engineered with React, TypeScript &amp; Tailwind.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 bg-white/5 dark:bg-white/5 light:bg-slate-200 hover:bg-white/10 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
