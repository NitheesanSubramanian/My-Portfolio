import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  ShieldAlert, 
  Cloud, 
  Wrench,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  Filter
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { skillGroupsData } from '../data/portfolioData';
import { SkillCategory } from '../types';

// Map icons to categories
const getCategoryIcon = (category: SkillCategory) => {
  switch (category) {
    case 'Programming':
      return <Code2 className="w-5 h-5 text-blue-400" />;
    case 'Frontend':
      return <Layout className="w-5 h-5 text-cyan-400" />;
    case 'Backend':
      return <Server className="w-5 h-5 text-indigo-400" />;
    case 'Databases':
      return <Database className="w-5 h-5 text-emerald-400" />;
    case 'Artificial Intelligence and Machine Learning':
      return <BrainCircuit className="w-5 h-5 text-violet-400" />;
    case 'Cybersecurity and Ethical Hacking':
      return <ShieldAlert className="w-5 h-5 text-red-400" />;
    case 'Cloud and DevOps':
      return <Cloud className="w-5 h-5 text-sky-400" />;
    case 'Developer Tools':
      return <Wrench className="w-5 h-5 text-amber-400" />;
    default:
      return <Layers className="w-5 h-5 text-zinc-400" />;
  }
};

const getProficiencyBadge = (level: string) => {
  switch (level) {
    case 'Proficient':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'Advanced':
      return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
    case 'Practical Exposure':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    default:
      return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGroups = skillGroupsData.filter((group) => {
    if (selectedCategory !== 'All' && group.category !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase().trim();
    const matchesCategory = group.category.toLowerCase().includes(query);
    const matchesSkill = group.skills.some(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        (s.description && s.description.toLowerCase().includes(query))
    );
    return matchesCategory || matchesSkill;
  });

  const totalSkillsCount = skillGroupsData.reduce((acc, g) => acc + g.skills.length, 0);

  return (
    <div className="pb-24">
      {/* Header */}
      <PageHeader
        badge="Skills & Technologies"
        title="Technical Stack &amp; Engineering Disciplines"
        subtitle="A categorized inventory of programming languages, modern frameworks, data stores, AI models, and cybersecurity testing tools."
        currentPage="Skills"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation & Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-lg space-y-4">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. Java, Python, RAG, Linux, Docker)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-black/40 dark:bg-black/40 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total count badge */}
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <Filter className="w-3.5 h-3.5 text-blue-400" />
              <span>
                {totalSkillsCount} Tracked Skills across {skillGroupsData.length} Domains
              </span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 pt-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                selectedCategory === 'All'
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.05]'
              }`}
            >
              All Categories ({skillGroupsData.length})
            </button>
            {skillGroupsData.map((group) => (
              <button
                key={group.category}
                onClick={() => setSelectedCategory(group.category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  selectedCategory === group.category
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.05]'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

        </div>

        {/* Skill Groups */}
        <div className="space-y-12">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 p-6 sm:p-8 space-y-6 shadow-md"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.06] dark:border-white/[0.06] light:border-slate-200 gap-2">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
                      {group.category}
                    </h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600">
                      {group.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-zinc-500 self-start sm:self-auto">
                  {group.skills.length} competencies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/[0.05] dark:border-white/[0.05] light:border-slate-200 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono border whitespace-nowrap ${getProficiencyBadge(
                            skill.proficiencyLevel
                          )}`}
                        >
                          {skill.proficiencyLevel}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    {skill.highlight && (
                      <div className="pt-3 mt-2 border-t border-white/[0.04] flex items-center space-x-1.5 text-[11px] font-mono text-blue-400">
                        <Sparkles className="w-3 h-3" />
                        <span>Core Specialty</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}

          {filteredGroups.length === 0 && (
            <div className="text-center py-16 bg-[#111116] rounded-2xl border border-white/10 p-8 space-y-3">
              <p className="text-sm text-zinc-400">
                No skills found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Note on Transparency & Realism */}
        <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/15 text-xs text-zinc-400 dark:text-zinc-400 light:text-slate-600 flex items-start space-x-3">
          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <p>
            Proficiency labels reflect honest academic and practical hands-on application (coursework, laboratory experimentation, certifications, and project implementations) rather than arbitrary percentage bars.
          </p>
        </div>

      </div>
    </div>
  );
};
