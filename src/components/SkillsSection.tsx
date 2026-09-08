import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-[#131315] border-t border-[#201f22]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ff5722]" />
            04 — SKILLS
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e5e1e4] font-bold tracking-tight">
            Tools I use to create.
          </h2>
        </div>

        {/* Typographic Roster Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.number}
              className="bg-[#1c1b1d] p-6 sm:p-8 border border-[#2a2a2c] flex flex-col gap-6"
            >
              <div className="flex items-center justify-between border-b border-[#2a2a2c] pb-3">
                <span className="font-headline text-xs uppercase tracking-widest text-[#ffb5a0] font-semibold">
                  {group.number} // {group.title}
                </span>
                <span className="material-symbols-outlined text-[#ff5722] text-xl">
                  {group.icon}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`p-4 bg-[#201f22] border border-[#2a2a2c] flex flex-col gap-2 relative overflow-hidden ${
                      skill.quote
                        ? 'bg-gradient-to-br from-[#201f22] to-[#2a2a2c] border-[#ff5722]/30'
                        : ''
                    }`}
                  >
                    {skill.featured && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff5722]" />
                    )}

                    <div className="flex items-center justify-between">
                      <span className="font-headline text-base font-bold text-[#e5e1e4]">
                        {skill.name}
                      </span>
                      {skill.featured && (
                        <span className="px-2 py-0.5 bg-[#ff5722] text-[#541200] font-headline text-[10px] uppercase font-bold tracking-wider">
                          Featured
                        </span>
                      )}
                      {skill.quote && (
                        <span className="material-symbols-outlined text-[#ff5722] text-base">
                          music_note
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs text-[#e4beb4]/80 leading-relaxed ${
                        skill.quote ? 'italic text-[#e5e1e4]' : ''
                      }`}
                    >
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
