import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#1c1b1d] border border-[#2a2a2c] p-6 sm:p-8 flex flex-col gap-6 shadow-2xl overflow-y-auto max-h-[90vh]"
        style={{ borderLeftWidth: '4px', borderLeftColor: '#ff5722' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#e4beb4]/70 hover:text-[#e5e1e4] p-1 transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-1 pr-8">
          <div className="flex items-center gap-3">
            <span className="font-headline text-xs uppercase tracking-widest text-[#ff5722] font-semibold">
              PROJECT {project.number} // {project.categoryLabel}
            </span>
            <span className="font-mono text-[10px] text-[#ffb5a0] bg-[#201f22] px-2 py-0.5 border border-[#353437]">
              {project.tool}
            </span>
          </div>
          <h3 className="font-headline text-2xl sm:text-3xl uppercase text-[#e5e1e4] font-bold">
            {project.title}
          </h3>
        </div>

        {/* Media Preview Box */}
        <div className="relative w-full aspect-video bg-[#0e0e10] border border-[#2a2a2c] overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 font-mono text-[10px] uppercase text-[#ffb5a0] bg-black/70 px-2 py-0.5 border border-[#353437]">
            INSPECTION_MODE // 100% SCALE
          </div>
          {project.badge && (
            <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase text-[#e5e1e4] bg-black/70 px-2 py-0.5 border border-[#353437]">
              {project.badge}
            </div>
          )}
        </div>

        {/* Narrative & Case Study */}
        <div className="flex flex-col gap-3 text-[#e4beb4]/90 text-sm sm:text-base leading-relaxed">
          <p>{project.fullDesc}</p>
        </div>

        {/* Technical Specs Grid if available */}
        {project.specs && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#131315] border border-[#2a2a2c]">
            {project.specs.resolution && (
              <div className="flex flex-col">
                <span className="font-headline text-[10px] uppercase text-[#e4beb4]/50">Resolution</span>
                <span className="font-mono text-xs text-[#e5e1e4] font-semibold">
                  {project.specs.resolution}
                </span>
              </div>
            )}
            {project.specs.frameRate && (
              <div className="flex flex-col">
                <span className="font-headline text-[10px] uppercase text-[#e4beb4]/50">Frame Rate</span>
                <span className="font-mono text-xs text-[#ff5722] font-semibold">
                  {project.specs.frameRate}
                </span>
              </div>
            )}
            {project.specs.software && (
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="font-headline text-[10px] uppercase text-[#e4beb4]/50">Software</span>
                <span className="font-mono text-xs text-[#e5e1e4] font-semibold">
                  {project.specs.software}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Focus Tags */}
        <div className="flex flex-col gap-2">
          <span className="font-headline text-xs uppercase tracking-wider text-[#e4beb4]/70">
            Focus Tags:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#201f22] border border-[#2a2a2c] text-[#e5e1e4] font-headline text-xs uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2c]">
          <span className="font-mono text-xs uppercase text-[#e4beb4]/60">
            AE // TIMELINE INSPECT
          </span>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#201f22] hover:bg-[#2a2a2c] text-[#e5e1e4] font-headline text-xs uppercase tracking-wider border border-[#353437] transition-colors"
              >
                View Code
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#ff5722] text-[#541200] font-headline text-xs uppercase tracking-wider font-bold hover:brightness-110 transition-all cursor-pointer"
            >
              Close Inspector
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
