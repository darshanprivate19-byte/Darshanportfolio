import React from 'react';
import { CODE_REPOS, CONTACT_INFO } from '../data/portfolioData';

export const BeyondEditingSection: React.FC = () => {
  return (
    <section className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-[#131315] border-t border-[#201f22]">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ff5722]" />
              06 — BEYOND EDITING
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e5e1e4] font-bold tracking-tight">
              Creative mind. Technical curiosity.
            </h2>
          </div>

          <a
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#201f22] hover:bg-[#2a2a2c] text-[#e5e1e4] border border-[#353437] font-headline text-xs uppercase tracking-wider transition-colors w-fit cursor-pointer"
          >
            <span>VIEW GITHUB</span>
            <span className="material-symbols-outlined text-sm text-[#ff5722]">open_in_new</span>
          </a>
        </div>

        <p className="text-base sm:text-lg text-[#e4beb4]/85 max-w-3xl leading-relaxed">
          Alongside editing and motion design, I'm exploring programming and web development — building small projects that help me understand how digital experiences and computational graphics work under the hood.
        </p>

        {/* 2 Technical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CODE_REPOS.map((repo) => (
            <div
              key={repo.name}
              className="p-6 sm:p-8 bg-[#1c1b1d] border border-[#2a2a2c] flex flex-col justify-between gap-6"
              style={{ borderLeftWidth: '3px', borderLeftColor: repo.borderAccent }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-headline text-xs uppercase tracking-widest text-[#ff5722] font-semibold">
                    REPOSITORY {repo.number}
                  </span>
                  <span className="font-mono text-xs text-[#e4beb4]/70">
                    {repo.badge}
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl uppercase text-[#e5e1e4] font-bold">
                  {repo.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#e4beb4]/80 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2c]">
                <span className="font-mono text-[11px] uppercase text-[#e4beb4]/60">
                  {repo.techTag}
                </span>
                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline text-xs uppercase text-[#ff5722] hover:text-[#e5e1e4] transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  <span>Inspect code</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
