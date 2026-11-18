import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
import { ParticleBackground } from '../components/ParticleBackground';

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#080808] dark:bg-[#080808] light:bg-[#f8fafc] text-white dark:text-white light:text-slate-900 transition-colors duration-300">
      {/* Dynamic Animated Particles & Glowing Mesh */}
      <ParticleBackground />

      {/* Persistent Responsive Navbar */}
      <Navbar />

      {/* Main Page Route View */}
      <main className="relative z-10 flex-1">
        <Outlet />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Persistent Responsive Footer */}
      <Footer />
    </div>
  );
};
