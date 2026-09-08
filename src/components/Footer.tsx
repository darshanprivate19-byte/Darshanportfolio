import React from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0e0e10] pt-16 pb-12 border-t border-[#201f22]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between gap-4">
            <div>
              <span className="font-headline text-2xl sm:text-3xl uppercase font-bold tracking-tight text-[#e5e1e4]">
                DARSHAN
              </span>
              <p className="text-xs sm:text-sm text-[#e4beb4]/70 mt-2 max-w-md leading-relaxed">
                Creative Direction &amp; Motion Design calibrated for cinematic brand films, title sequences, and cutting-edge visual systems.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_8px_rgba(255,87,34,0.6)]" />
              <span className="font-headline text-[11px] uppercase tracking-widest text-[#e4beb4]/70">
                BASE: GLOBAL REMOTE / LOCAL STUDIOS
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-headline text-xs uppercase text-[#e5e1e4] font-semibold tracking-widest">
              Navigation
            </span>
            <button
              onClick={() => onNavigate('work')}
              className="text-left text-xs sm:text-sm text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors cursor-pointer"
            >
              Selected Works
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-left text-xs sm:text-sm text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors cursor-pointer"
            >
              Studio Profile
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="text-left text-xs sm:text-sm text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors cursor-pointer"
            >
              Capabilities &amp; Tech
            </button>
            <button
              onClick={() => onNavigate('process')}
              className="text-left text-xs sm:text-sm text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors cursor-pointer"
            >
              Editorial Method
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-left text-xs sm:text-sm text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors cursor-pointer"
            >
              Direct Commission
            </button>
          </div>

          {/* Inquiries Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-headline text-xs uppercase text-[#e5e1e4] font-semibold tracking-widest">
              Inquiries
            </span>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-xs sm:text-sm text-[#ffb5a0] hover:text-[#e5e1e4] transition-colors font-mono"
            >
              {CONTACT_INFO.email}
            </a>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="material-symbols-outlined text-xs">open_in_new</span>
            </a>

            <button
              onClick={scrollToTop}
              className="font-headline text-xs uppercase tracking-widest text-[#e4beb4]/70 hover:text-[#ff5722] mt-3 transition-colors inline-flex items-center gap-1 cursor-pointer text-left"
            >
              ↑ Back to top
            </button>
          </div>
        </div>

        {/* Bottom Legal / Signature Strip */}
        <div className="pt-8 border-t border-[#201f22] flex flex-col sm:flex-row items-center justify-between gap-4 font-headline text-[11px] uppercase text-[#e4beb4]/60">
          <span>© 2025 DARSHAN. ALL RIGHTS RESERVED.</span>
          <span className="tracking-widest">POST-PRODUCTION // MOTION ARCHITECTURE</span>
        </div>
      </div>
    </footer>
  );
};
