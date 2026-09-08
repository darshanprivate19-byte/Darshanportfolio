import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'motion' | 'editorial' | 'code'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const filterButtons = [
    { id: 'all', label: 'All Works' },
    { id: 'motion', label: 'Motion Design' },
    { id: 'editorial', label: 'Video Editing' },
    { id: 'code', label: 'Creative Tech' },
  ];

  // Helper to check if a project is visible in current filter
  const isVisible = (projId: string) => {
    if (activeFilter === 'all') return true;
    const proj = PROJECTS.find((p) => p.id === projId);
    return proj?.category === activeFilter;
  };

  const project1 = PROJECTS.find((p) => p.id === 'motion-experiments')!;
  const project2 = PROJECTS.find((p) => p.id === 'video-editing')!;
  const project3 = PROJECTS.find((p) => p.id === 'reference-recreation')!;
  const project4 = PROJECTS.find((p) => p.id === 'c-graphics-editor')!;
  const project5 = PROJECTS.find((p) => p.id === 'portfolio-for-c')!;

  return (
    <section
      id="work"
      className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-[#0e0e10] border-t border-[#201f22]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ff5722]" />
              03 — SELECTED WORK
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e5e1e4] font-bold tracking-tight">
              Things I've been building.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterButtons.map((btn) => {
              const active = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-headline uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#ff5722] text-[#541200] font-bold shadow-[0_0_16px_rgba(255,87,34,0.4)]'
                      : 'bg-[#1c1b1d] text-[#e4beb4]/70 hover:text-[#e5e1e4] border border-[#2a2a2c] hover:border-[#353437]'
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="flex flex-col gap-8">
          {/* PROJECT 01: Large Full-Width Hero Feature */}
          {isVisible(project1.id) && (
            <div
              onClick={() => onSelectProject(project1)}
              className="group relative bg-[#1c1b1d] border border-[#2a2a2c] hover:border-[#ff5722] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-8 relative aspect-[16/9] lg:aspect-auto min-h-[300px] sm:min-h-[380px] overflow-hidden bg-[#0e0e10]">
                  <img
                    src={project1.image}
                    alt={project1.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1d] lg:from-transparent via-transparent to-black/40" />
                  <div className="absolute top-4 left-4 font-headline text-[11px] uppercase tracking-widest text-[#e5e1e4] bg-black/70 px-2.5 py-1 border border-[#353437]">
                    CATEGORY: {project1.categoryLabel}
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-xs text-[#ffb5a0] bg-black/70 px-2.5 py-1 border border-[#353437]">
                    TOOL: {project1.tool}
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-[#2a2a2c]">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-headline text-xs uppercase tracking-widest text-[#ff5722] font-semibold">
                        PROJECT {project1.number}
                      </span>
                      <span className="material-symbols-outlined text-sm text-[#e4beb4]/60 group-hover:text-[#ff5722] transition-colors">
                        open_in_new
                      </span>
                    </div>

                    <h3 className="font-headline text-2xl sm:text-3xl uppercase text-[#e5e1e4] font-bold group-hover:text-[#ffb5a0] transition-colors">
                      {project1.title}
                    </h3>

                    <p className="text-sm text-[#e4beb4]/85 leading-relaxed">
                      {project1.shortDesc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project1.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#201f22] border border-[#2a2a2c] text-[#e4beb4]/80 font-headline text-[11px] uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2-COL ROW (PROJECT 02 & PROJECT 03) */}
          {(isVisible(project2.id) || isVisible(project3.id)) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PROJECT 02: Half-Width Card */}
              {isVisible(project2.id) && (
                <div
                  onClick={() => onSelectProject(project2)}
                  className="group relative bg-[#1c1b1d] border border-[#2a2a2c] hover:border-[#ff5722] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0e0e10]">
                    <img
                      src={project2.image}
                      alt={project2.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1d] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 font-headline text-[10px] uppercase tracking-widest text-[#e5e1e4] bg-black/70 px-2 py-0.5 border border-[#353437]">
                      CATEGORY: {project2.categoryLabel}
                    </div>
                    <div className="absolute bottom-3 right-3 font-headline text-[10px] uppercase tracking-widest text-[#ffb5a0] bg-black/70 px-2 py-0.5 border border-[#353437]">
                      {project2.badge}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline text-xs uppercase tracking-widest text-[#ff5722] font-semibold">
                          PROJECT {project2.number}
                        </span>
                        <span className="material-symbols-outlined text-sm text-[#e4beb4]/60 group-hover:text-[#ff5722] transition-colors">
                          open_in_new
                        </span>
                      </div>

                      <h3 className="font-headline text-xl uppercase text-[#e5e1e4] font-bold group-hover:text-[#ffb5a0] transition-colors">
                        {project2.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#e4beb4]/85 leading-relaxed">
                        {project2.shortDesc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project2.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#201f22] border border-[#2a2a2c] text-[#e4beb4]/80 font-headline text-[10px] uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* PROJECT 03: Half-Width Card */}
              {isVisible(project3.id) && (
                <div
                  onClick={() => onSelectProject(project3)}
                  className="group relative bg-[#1c1b1d] border border-[#2a2a2c] hover:border-[#ff5722] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0e0e10]">
                    <img
                      src={project3.image}
                      alt={project3.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1d] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 font-headline text-[10px] uppercase tracking-widest text-[#e5e1e4] bg-black/70 px-2 py-0.5 border border-[#353437]">
                      CATEGORY: {project3.categoryLabel}
                    </div>
                    <div className="absolute bottom-3 right-3 font-headline text-[10px] uppercase tracking-widest text-[#ffb5a0] bg-black/70 px-2 py-0.5 border border-[#353437]">
                      {project3.badge}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-headline text-xs uppercase tracking-widest text-[#ff5722] font-semibold">
                          PROJECT {project3.number}
                        </span>
                        <span className="material-symbols-outlined text-sm text-[#e4beb4]/60 group-hover:text-[#ff5722] transition-colors">
                          open_in_new
                        </span>
                      </div>

                      <h3 className="font-headline text-xl uppercase text-[#e5e1e4] font-bold group-hover:text-[#ffb5a0] transition-colors">
                        {project3.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#e4beb4]/85 leading-relaxed">
                        {project3.shortDesc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project3.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#201f22] border border-[#2a2a2c] text-[#e4beb4]/80 font-headline text-[10px] uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2-COL ROW (PROJECT 04 & PROJECT 05) */}
          {(isVisible(project4.id) || isVisible(project5.id)) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* PROJECT 04: C Graphics Editor (7 Cols) */}
              {isVisible(project4.id) && (
                <div
                  onClick={() => onSelectProject(project4)}
                  className={`group relative bg-[#1c1b1d] border border-[#2a2a2c] hover:border-[#ff5722] transition-all duration-300 cursor-pointer overflow-hidden ${
                    isVisible(project5.id) ? 'md:col-span-7' : 'md:col-span-12'
                  }`}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#0e0e10]">
                    <img
                      src={project4.image}
                      alt={project4.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b1d] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 font-headline text-[10px] uppercase tracking-widest text-[#e5e1e4] bg-black/70 px-2 py-0.5 border border-[#353437]">
                      CATEGORY: {project4.categoryLabel}
                    </div>
                    <div className="absolute bottom-3 left-3 font-headline text-[10px] uppercase tracking-widest text-[#ffb5a0] bg-black/70 px-2 py-0.5 border border-[#353437]">
                      TOOL: {project4.tool}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-headline text-xs uppercase tracking-widest text-[#ff5722] font-semibold">
                        PROJECT {project4.number}
                      </span>
                      <span className="material-symbols-outlined text-sm text-[#e4beb4]/60 group-hover:text-[#ff5722] transition-colors">
                        code
                      </span>
                    </div>

                    <h3 className="font-headline text-xl uppercase text-[#e5e1e4] font-bold group-hover:text-[#ffb5a0] transition-colors">
                      {project4.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#e4beb4]/85 leading-relaxed">
                      {project4.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project4.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#201f22] border border-[#2a2a2c] text-[#e4beb4]/80 font-headline text-[10px] uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* PROJECT 05: Portfolio for C (5 Cols with Code Terminal Mockup) */}
              {isVisible(project5.id) && (
                <div
                  onClick={() => onSelectProject(project5)}
                  className={`group relative bg-[#1c1b1d] border border-[#2a2a2c] hover:border-[#ff5722] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isVisible(project4.id) ? 'md:col-span-5' : 'md:col-span-12'
                  }`}
                >
                  <div className="p-6 sm:p-8 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <span className="font-headline text-xs uppercase tracking-widest text-[#ff5722] font-semibold">
                        PROJECT {project5.number}
                      </span>
                      <span className="material-symbols-outlined text-sm text-[#e4beb4]/60 group-hover:text-[#ff5722] transition-colors">
                        open_in_new
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs text-[#e4beb4]/70 uppercase">
                        WEB DEVELOPMENT • HTML &amp; CSS
                      </span>
                      <h3 className="font-headline text-2xl uppercase text-[#e5e1e4] font-bold group-hover:text-[#ffb5a0] transition-colors">
                        {project5.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#e4beb4]/85 leading-relaxed">
                      {project5.shortDesc}
                    </p>
                  </div>

                  {/* Terminal Mock Visual Block */}
                  <div className="bg-[#0e0e10] p-4 border-t border-[#2a2a2c]">
                    <div className="flex items-center justify-between pb-2 font-mono text-[11px] text-[#e4beb4]/70">
                      <span>INDEX.HTML</span>
                      <span className="text-[#ff5722]">COMPILE_OK</span>
                    </div>
                    <div className="font-mono text-xs text-[#e4beb4]/80 flex flex-col gap-1">
                      <span className="text-[#e5e1e4]">&lt;section class="editorial-grid"&gt;</span>
                      <span className="pl-3 text-[#ff5722] font-semibold">
                        &lt;h2&gt;Darshan // Portfolio&lt;/h2&gt;
                      </span>
                      <span className="text-[#e5e1e4]">&lt;/section&gt;</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
