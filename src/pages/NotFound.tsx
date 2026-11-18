import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24">
      <div className="text-center space-y-6 max-w-md">
        
        <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/20">
            HTTP 404 • ROUTE_NOT_FOUND
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-slate-600 leading-relaxed">
            The requested route does not exist or has been relocated within the portfolio application.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/projects"
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Projects</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
