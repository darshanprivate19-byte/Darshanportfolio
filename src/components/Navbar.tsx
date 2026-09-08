import React, { useState, useEffect } from 'react';
import { HERO_AVATAR } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenReel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenReel }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#131315]/90 backdrop-blur-xl border-b border-[#201f22] shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
          : 'bg-[#131315]/75 backdrop-blur-md'
      }`}
    >
      <div className="h-20 w-full px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand and Availability */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick('top')}
            className="font-headline text-xl sm:text-2xl uppercase tracking-wider text-[#e5e1e4] font-bold hover:text-[#ff5722] transition-colors text-left cursor-pointer"
          >
            DARSHAN
          </button>
          <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#353437]">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_12px_rgba(255,87,34,0.9)] animate-pulse" />
            <span className="font-headline text-[11px] font-medium tracking-wider uppercase text-[#e4beb4]">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-headline text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#e5e1e4] font-bold'
                    : 'text-[#e4beb4]/70 hover:text-[#e5e1e4]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#ff5722] shadow-[0_0_8px_#ff5722]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Avatar */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenReel}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#201f22] text-[#ffb5a0] hover:text-[#e5e1e4] border border-[#353437] hover:border-[#ff5722] text-xs font-headline tracking-wider uppercase transition-all cursor-pointer"
            title="Open Cinematic Showreel"
          >
            <span className="material-symbols-outlined text-sm text-[#ff5722]">play_circle</span>
            <span>Reel</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center justify-center px-4 py-2 rounded-none font-headline text-xs uppercase tracking-wider text-[#ffb5a0] border border-[#ff5722]/80 shadow-[0_0_16px_rgba(255,87,34,0.25)] hover:bg-[#ff5722] hover:text-[#541200] hover:shadow-[0_0_24px_rgba(255,87,34,0.55)] transition-all duration-300 font-semibold cursor-pointer"
          >
            Let's Talk →
          </button>

          {/* Profile Avatar */}
          <div className="relative group cursor-pointer" onClick={() => handleNavClick('about')}>
            <img
              src={HERO_AVATAR}
              alt="Darshan Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#353437] group-hover:ring-[#ff5722] transition-all"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#ff5722] border border-[#131315]" />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#e5e1e4] hover:text-[#ff5722] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131315]/95 border-b border-[#201f22] px-6 py-5 flex flex-col gap-4 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center gap-2 pb-3 border-b border-[#201f22]">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
            <span className="font-headline text-[11px] font-medium tracking-wider uppercase text-[#ffb5a0]">
              AVAILABLE FOR FREELANCE
            </span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-headline text-sm tracking-widest uppercase py-2 transition-colors cursor-pointer ${
                activeSection === item.id
                  ? 'text-[#ff5722] font-bold'
                  : 'text-[#e5e1e4] hover:text-[#ff5722]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between border-t border-[#201f22]">
            <button
              onClick={() => {
                onOpenReel();
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center gap-2 text-xs font-headline text-[#ffb5a0] uppercase"
            >
              <span className="material-symbols-outlined text-base text-[#ff5722]">play_circle</span>
              Play Showreel
            </button>
            <span className="text-[11px] font-mono text-[#a1a1aa]">24 FPS REC</span>
          </div>
        </div>
      )}
    </header>
  );
};
