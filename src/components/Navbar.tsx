import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, FileDown, Terminal } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { personalInfo } from '../data/portfolioData';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080808]/85 dark:bg-[#080808]/85 light:bg-[#ffffff]/85 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-black/10 py-3 shadow-lg shadow-black/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link 
            to="/" 
            className="group flex items-center space-x-2.5 text-white dark:text-white light:text-slate-900 font-bold tracking-tight text-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0c0d12] dark:bg-[#0c0d12] light:bg-white rounded-[10px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                Nitheesan <span className="text-blue-500">S</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-400 dark:text-zinc-400 light:text-slate-500">
                Software Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 p-1 rounded-full bg-white/[0.03] dark:bg-white/[0.03] light:bg-slate-200/50 border border-white/[0.08] dark:border-white/[0.08] light:border-slate-300/60 backdrop-blur-md">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                      : 'text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-950 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-200/60 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resumePdf}
              download="Nitheesan_S_Resume.pdf"
              className="flex items-center space-x-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white light:text-slate-700 hover:bg-white/5 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open Navigation Menu"
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 dark:text-zinc-300 dark:hover:text-white light:text-slate-800 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0c0d12]/95 dark:bg-[#0c0d12]/95 light:bg-white/95 backdrop-blur-xl border-b border-white/10 dark:border-white/10 light:border-slate-200 px-6 py-6 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                      : 'text-zinc-300 dark:text-zinc-300 light:text-slate-700 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-slate-100 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 dark:border-white/10 light:border-slate-200">
              <a
                href={personalInfo.resumePdf}
                download="Nitheesan_S_Resume.pdf"
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
