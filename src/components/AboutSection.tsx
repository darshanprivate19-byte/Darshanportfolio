import React from 'react';
import { EDIT_BAY_IMAGE } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-[#0e0e10] border-t border-[#201f22]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ff5722]" />
            01 — ABOUT
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e5e1e4] font-bold tracking-tight">
            Still learning. Still creating.
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#e4beb4]/85">
              <p className="text-sm sm:text-base leading-relaxed">
                I'm a developing video editor with a focus on Adobe After Effects and motion design. I enjoy analyzing references, breaking visual scenes down, and recreating them through editing and animation.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                I'm currently focused on strengthening my portfolio, improving my creative skills, finding freelance opportunities, and turning ideas into engaging visual experiences.
              </p>
            </div>

            {/* Visual Quote Banner */}
            <div className="p-6 bg-[#201f22] border border-[#2a2a2c] relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ff5722] shadow-[0_0_12px_#ff5722]" />
              <blockquote className="font-headline text-lg sm:text-xl italic text-[#e5e1e4] pl-3 font-medium leading-snug">
                “I don't just want to edit videos. I want to understand why they work.”
              </blockquote>
              <span className="block mt-3 pl-3 font-headline text-[11px] uppercase tracking-widest text-[#ffb5a0] font-semibold">
                — Darshan // Methodology
              </span>
            </div>

            {/* Quick Stat Chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3 py-1.5 bg-[#1c1b1d] border border-[#2a2a2c] text-[#e5e1e4] font-headline text-[11px] uppercase tracking-wider">
                Discipline: Frame-By-Frame
              </span>
              <span className="px-3 py-1.5 bg-[#1c1b1d] border border-[#2a2a2c] text-[#e5e1e4] font-headline text-[11px] uppercase tracking-wider">
                Tool of Choice: After Effects
              </span>
              <span className="px-3 py-1.5 bg-[#1c1b1d] border border-[#2a2a2c] text-[#e5e1e4] font-headline text-[11px] uppercase tracking-wider">
                Rhythm &amp; Sonic Flow
              </span>
            </div>
          </div>

          {/* Workstation & Timeline Breakdown Visual Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full overflow-hidden bg-[#201f22] border border-[#2a2a2c] group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={EDIT_BAY_IMAGE}
                  alt="Cinematic film editing timeline and color grading suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent opacity-90" />
                <div className="absolute top-3 right-3 font-mono text-[10px] text-[#ffb5a0] bg-black/70 px-2 py-0.5 border border-[#353437]">
                  WAVEFORM: ACTIVE
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 bg-[#1c1b1d] border-t border-[#2a2a2c]">
                <div className="flex items-center justify-between font-headline text-[11px] uppercase tracking-wider text-[#ffb5a0]">
                  <span>EDIT BAY ENVIRONMENT</span>
                  <span>AUDIO / VIDEO TIMELINE</span>
                </div>
                <h3 className="font-headline text-lg text-[#e5e1e4] font-bold">
                  Post-Production Rhythm Bay
                </h3>
                <p className="text-xs sm:text-sm text-[#e4beb4]/80 leading-relaxed">
                  Every transition, sound cue, and typographic reveal is timed to musical frequencies and deliberate visual tension.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
