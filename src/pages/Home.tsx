import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileDown, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Sparkles, 
  Shield, 
  Terminal, 
  ChevronRight
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { Project } from '../types';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Top 3 featured projects as requested:
  // 1. AI-Based Career Intelligence System
  // 2. Drift-Aware Adaptive RAG
  // 3. Live Classroom Attendance & Performance Tracker
  const featuredProjects = [
    projectsData.find(p => p.id === 'career-intelligence')!,
    projectsData.find(p => p.id === 'drift-aware-rag')!,
    projectsData.find(p => p.id === 'classroom-tracker')!,
  ].filter(Boolean);

  return (
    <div className="relative pt-24 sm:pt-32 pb-20 overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering &amp; AI Roles</span>
            </div>

            {/* Hero Heading */}
            <h2 className="text-xl sm:text-2xl font-mono text-zinc-400 dark:text-zinc-400 light:text-slate-600">
              Hi, I'm <span className="text-white dark:text-white light:text-slate-900 font-bold">Nitheesan S</span>.
            </h2>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-950 leading-[1.1]">
              Building <span className="gradient-text-blue-violet">Intelligent Digital</span> Experiences.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 dark:text-zinc-300 light:text-slate-600 max-w-2xl leading-relaxed">
              Software Developer passionate about AI, Full-Stack Development, Machine Learning, Generative AI, and Cybersecurity.
            </p>

            {/* Quick Specialization Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-200/60 border border-white/[0.08] text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Full-Stack &amp; APIs</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-200/60 border border-white/[0.08] text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>Generative AI &amp; RAG</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] dark:bg-white/[0.04] light:bg-slate-200/60 border border-white/[0.08] text-zinc-300 dark:text-zinc-300 light:text-slate-700">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cybersecurity Testing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Link
                to="/projects"
                className="flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={personalInfo.resumePdf}
                download="Nitheesan_S_Resume.pdf"
                className="flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white/10 dark:bg-white/10 light:bg-slate-100 hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-slate-200 text-white dark:text-white light:text-slate-900 border border-white/10 dark:border-white/10 light:border-slate-300 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-transparent hover:bg-white/5 text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-950 transition-colors"
              >
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center space-x-4 pt-3 text-zinc-400 dark:text-zinc-400 light:text-slate-500">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white dark:hover:text-white light:hover:text-slate-950 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Me"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white dark:hover:text-white light:hover:text-slate-950 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-slate-500 pl-2">
                Coimbatore, India
              </span>
            </div>

          </div>

          {/* Right Portrait & Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
              
              {/* Inner card containing portrait */}
              <div className="relative rounded-2xl bg-[#0e1017] dark:bg-[#0e1017] light:bg-white border border-white/15 dark:border-white/15 light:border-slate-200 overflow-hidden shadow-2xl p-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-900">
                  <img
                    src={personalInfo.portraitImage}
                    alt="Nitheesan S"
                    className="w-full h-full object-cover object-top filter grayscale-[15%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-60" />
                  
                  {/* Floating badge inside portrait */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <p className="text-xs font-semibold text-white">Nitheesan S</p>
                    <p className="text-[11px] font-mono text-blue-400">B.Tech CSBS • SKCET (CGPA 8.0)</p>
                  </div>
                </div>

                {/* Floating Micro Tag */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs font-mono text-zinc-400">
                  <span className="flex items-center space-x-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>ML Intern • Corporate Worms</span>
                  </span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Brief Introduction / Professional Summary Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-8 sm:p-12 relative overflow-hidden">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Professional Overview</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Bridging Rigorous Software Engineering with Intelligent Systems
            </h2>
            
            <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
              "{personalInfo.summary}"
            </p>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center space-x-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Read more about my background &amp; philosophy</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 mt-1 max-w-xl">
              Architected systems demonstrating AI-powered career intelligence, drift-aware adaptive RAG, and full-stack classroom management.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] hover:bg-white/10 text-white dark:text-white light:text-slate-900 border border-white/10 transition-colors shrink-0"
          >
            <span>View All 8 Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* Technical Expertise Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-8 sm:p-10">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight mb-2">
              Core Technical Competencies
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600">
              Balanced technical profile spanning backend engineering, artificial intelligence, and ethical hacking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Software & Backend */}
            <div className="p-6 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                Software Engineering
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                Java, Python, Spring Boot, FastAPI, Node.js, RESTful microservices, PostgreSQL, and scalable API design.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-300">Java</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-300">Spring Boot</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-300">React.js</span>
              </div>
            </div>

            {/* Pillar 2: AI & ML */}
            <div className="p-6 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                Artificial Intelligence
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                Machine Learning, Natural Language Processing, Generative AI, Drift-Aware Adaptive RAG, and Vector Retrieval.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-violet-500/10 text-violet-300">Adaptive RAG</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-violet-500/10 text-violet-300">NLP</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-violet-500/10 text-violet-300">Scikit-Learn</span>
              </div>
            </div>

            {/* Pillar 3: Cybersecurity */}
            <div className="p-6 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                Cybersecurity Testing
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                42-Hour Certified in Ethical Hacking, Linux systems, Web &amp; API penetration testing concepts, and defensive principles.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300">CEH Certified</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300">Linux Hardening</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-300">API Security</span>
              </div>
            </div>

          </div>

          <div className="text-center pt-8">
            <Link
              to="/skills"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Explore interactive skills matrix with 8 categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-blue-500/30 p-8 sm:p-12 text-center overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white dark:text-white light:text-slate-950 tracking-tight">
              Ready to Collaborate on Innovative Engineering?
            </h2>
            <p className="text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
              Whether you are looking to hire a dedicated software engineer, discuss machine learning systems, or explore technical solutions, I'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
              >
                Let's Build Something Meaningful
              </Link>
              <a
                href={personalInfo.resumePdf}
                download="Nitheesan_S_Resume.pdf"
                className="px-5 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};
