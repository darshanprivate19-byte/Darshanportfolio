import React from 'react';

export const JourneySection: React.FC = () => {
  const statusItems = [
    'Building my editing portfolio.',
    'Improving my motion design skills.',
    'Looking for my first freelance clients.',
    'Creating consistently.',
  ];

  return (
    <section className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-[#0e0e10] border-t border-[#201f22]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ff5722]" />
            07 — CURRENTLY
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e5e1e4] font-bold tracking-tight">
            Currently building.
          </h2>
        </div>

        {/* 4 Bold Status Checkpoint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statusItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1c1b1d] border border-[#2a2a2c] flex items-center gap-4 hover:border-[#ff5722]/50 transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 shrink-0 bg-[#ff5722] text-[#541200] font-bold text-sm shadow-[0_0_12px_rgba(255,87,34,0.6)]">
                ✓
              </span>
              <span className="font-headline text-base sm:text-lg uppercase text-[#e5e1e4] font-semibold">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Highlight Manifesto Banner */}
        <div className="p-8 bg-[#201f22] border border-[#2a2a2c] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff5722]/5 to-transparent pointer-events-none" />
          <p className="font-headline text-base sm:text-xl uppercase tracking-wider text-[#ffb5a0] font-bold">
            “At the beginning of the curve, but relentless about the craft.”
          </p>
        </div>
      </div>
    </section>
  );
};
