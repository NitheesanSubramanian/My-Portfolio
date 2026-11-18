import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  currentPage: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  currentPage,
}) => {
  return (
    <div className="pt-28 pb-12 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-slate-500 mb-4">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-600 light:text-slate-400" />
          <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-medium">{currentPage}</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-950 max-w-3xl leading-[1.15] mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

      </div>
    </div>
  );
};
