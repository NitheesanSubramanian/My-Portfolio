import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  BrainCircuit, 
  ShieldCheck, 
  Target, 
  Lightbulb, 
  FileDown, 
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { personalInfo, educationData, experienceData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <PageHeader
        badge="About Me"
        title="Engineering Intelligent Systems with Purpose &amp; Precision"
        subtitle="Exploring the convergence of scalable software engineering, artificial intelligence, and proactive cybersecurity."
        currentPage="About"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Intro & Portrait Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-300" />
              <div className="relative rounded-2xl bg-[#0f1118] dark:bg-[#0f1118] light:bg-white border border-white/10 dark:border-white/10 light:border-slate-200 overflow-hidden p-3 shadow-xl">
                <div className="rounded-xl overflow-hidden aspect-[4/5] bg-zinc-900">
                  <img
                    src={personalInfo.portraitImage}
                    alt="Nitheesan S Portrait"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-extrabold text-base text-white dark:text-white light:text-slate-900">
                    Nitheesan S
                  </h3>
                  <p className="text-xs font-mono text-blue-400">
                    Coimbatore, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Prose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Personal Introduction</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Driven by curiosity, grounded in software engineering principles.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 light:text-slate-700 leading-relaxed">
              I am a Computer Science and Business Systems undergraduate at Sri Krishna College of Engineering and Technology, holding a prior Diploma in Information Technology from PSG Polytechnic College.
            </p>

            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
              My technical path is centered around blending resilient software architectures with intelligent systems. While foundational programming teaches structured logic and predictable execution, machine learning and generative AI empower applications to synthesize unstructured data and adapt to dynamic contexts.
            </p>

            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
              Complementing this, my training in ethical hacking and cybersecurity ensures that every system I architect is fortified against common attack surfaces, API vulnerabilities, and data leakages.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={personalInfo.resumePdf}
                download="Nitheesan_S_Resume.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white dark:text-white light:text-slate-900 border border-white/10 transition-all"
              >
                <span>View Project Showcase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </section>

        {/* Development Philosophy & Mindset */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-blue-400">
              <Lightbulb className="w-3.5 h-3.5 text-blue-400" />
              <span>Core Principles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Development Philosophy &amp; Learning Mindset
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600">
              The foundational values that guide how I write code, solve problems, and design software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInfo.developmentPhilosophy.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 space-y-3 hover:border-blue-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono text-sm font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Software Engineering + AI? (Interest breakdown) */}
        <section className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-8 sm:p-12 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-2">
              <BrainCircuit className="w-3.5 h-3.5 text-violet-400" />
              <span>Engineering Intersection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              The Convergence of Full-Stack Engineering, AI &amp; Security
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 mt-1 max-w-2xl">
              Why I focus my career on the intersection rather than treating them as isolated silos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] space-y-3">
              <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
                <Layers className="w-4 h-4" />
                <span>Robust Backends First</span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                An AI model is only as impactful as the backend infrastructure delivering its predictions. Solid REST APIs, connection pooling, and relational data schemas ensure real-world reliability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] space-y-3">
              <div className="flex items-center space-x-2 text-violet-400 font-bold text-sm">
                <Cpu className="w-4 h-4" />
                <span>Drift-Aware Intelligence</span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                Generative AI and RAG systems require continuous validation against knowledge drift. By leveraging hybrid retrieval and knowledge graphs, hallucination is minimized in enterprise settings.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Security Hardening</span>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                Modern full-stack and AI applications expose novel vectors, from prompt injection to API authorization flaws. Understanding ethical hacking ensures proactive vulnerability remediation.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Timeline */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2.5">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Educational Timeline
            </h2>
          </div>

          <div className="space-y-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30 group"
              >
                {/* Timeline node */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080808] dark:bg-[#080808] light:bg-white border-2 border-blue-500 group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-7 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-blue-400">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      {edu.score && (
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {edu.scoreLabel}: {edu.score}
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  <div className="space-y-2 pt-1">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] font-mono text-zinc-500 pt-1">
                    Location: {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-2.5">
            <Briefcase className="w-6 h-6 text-violet-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
              Work &amp; Internship Experience
            </h2>
          </div>

          <div className="space-y-6">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-6 sm:pl-8 border-l-2 border-violet-500/30 group"
              >
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#080808] dark:bg-[#080808] light:bg-white border-2 border-violet-500 group-hover:scale-125 transition-transform" />

                <div className="p-6 sm:p-7 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-violet-400">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        Industry Internship
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 dark:text-zinc-300 light:text-slate-600 leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Key Exposure &amp; Technical Learnings:
                    </h4>
                    {exp.responsibilities.map((r, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Interests & Continuous Learning */}
        <section className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
              Personal Interests &amp; Continuous Learning
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600">
              Beyond standard university coursework, I actively invest time in self-directed technical growth:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">Software Development</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Building practical web apps, testing REST endpoints with Postman, and refining clean code structures.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <BrainCircuit className="w-5 h-5 text-violet-400" />
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">AI Experimentation</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Testing prompt chaining, vector embeddings, small language models, and RAG retrieval pipelines.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">Emerging Technologies</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Keeping pace with new open-source models, agentic workflows, cloud infrastructure, and modern databases.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900">Continuous Learning</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Earning competitive certifications (CEH, NPTEL) and solving algorithm problems independently.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
