import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-[#0e0e10] border-t border-[#201f22]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ff5722]" />
            05 — PROCESS
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e5e1e4] font-bold tracking-tight">
            From reference to final frame.
          </h2>
        </div>

        {/* Horizontal Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 bg-[#1c1b1d] border border-[#2a2a2c] hover:border-[#ff5722]/60 transition-all flex flex-col gap-4 relative group"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline text-2xl font-bold text-[#ff5722]">
                  {step.number}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#e4beb4]/60">
                  {step.stageCode}
                </span>
              </div>

              <h3 className="font-headline text-lg uppercase text-[#e5e1e4] font-bold group-hover:text-[#ffb5a0] transition-colors">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#e4beb4]/80 leading-relaxed">
                {step.description}
              </p>

              <div className="mt-auto pt-4 border-t border-[#2a2a2c] font-mono text-[10px] text-[#ffb5a0] uppercase tracking-wider">
                {step.footerTag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
