import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Layers, 
  SlidersHorizontal
} from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

const categories: ProjectCategory[] = [
  'All Projects',
  'Artificial Intelligence',
  'Machine Learning',
  'Generative AI',
  'Full-Stack Development',
  'Data Science',
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Projects' ||
        project.category === activeCategory ||
        (project.secondaryCategories && project.secondaryCategories.includes(activeCategory));

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        project.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pb-24">
      {/* Page Header */}
      <PageHeader
        badge="Projects & Architecture"
        title="Engineering Intelligent &amp; Full-Stack Applications"
        subtitle="Explore 8 comprehensive software engineering, machine learning, and generative AI systems built with precision."
        currentPage="Projects"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#111116] dark:bg-[#111116] light:bg-white border border-white/[0.08] dark:border-white/[0.08] light:border-slate-200 shadow-lg space-y-4">
          
          {/* Top row: Search input + Results counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, technologies (e.g. RAG, Spring Boot, KNN)..."
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

            {/* Results Counter */}
            <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" />
              <span>
                Showing <strong className="text-white dark:text-white light:text-slate-900">{filteredProjects.length}</strong> of {projectsData.length} Projects
              </span>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 pt-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl bg-[#111116] border border-white/[0.08] p-8 space-y-4">
            <Layers className="w-12 h-12 text-zinc-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No projects found</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              No projects matched the search term "{searchQuery}" in category "{activeCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All Projects');
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
