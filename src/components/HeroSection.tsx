import React, { useState, useEffect, useRef } from 'react';
import { HERO_MEDIA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenReel: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReel, onNavigate }) => {
  // Live cinematic timecode state running at 24fps
  const [timecode, setTimecode] = useState({ min: 2, sec: 14, frame: 18 });
  const [scrubberPercent, setScrubberPercent] = useState(40);
  const [isScrubbing, setIsScrubbing] = useState(false);
  const scrubberTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimecode((prev) => {
        let f = prev.frame + 1;
        let s = prev.sec;
        let m = prev.min;
        if (f >= 24) {
          f = 0;
          s += 1;
          if (s >= 60) {
            s = 0;
            m += 1;
          }
        }
        return { min: m, sec: s, frame: f };
      });
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const formattedTimecode = `00:${String(timecode.min).padStart(2, '0')}:${String(
    timecode.sec
  ).padStart(2, '0')}:${String(timecode.frame).padStart(2, '0')}`;

  // Interactive scrubber calculation
  const handleScrub = (clientX: number) => {
    if (!scrubberTrackRef.current) return;
    const rect = scrubberTrackRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const pct = Math.round((pos / rect.width) * 100);
    setScrubberPercent(pct);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsScrubbing(true);
    handleScrub(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isScrubbing) handleScrub(e.clientX);
    };
    const handleMouseUp = () => {
      setIsScrubbing(false);
    };

    if (isScrubbing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isScrubbing]);

  // Calculate current scrubber timecode based on scrub percent (total 04:32 = 272 seconds)
  const currentScrubSeconds = Math.round((scrubberPercent / 100) * 272);
  const scrubMin = Math.floor(currentScrubSeconds / 60);
  const scrubSec = currentScrubSeconds % 60;
  const scrubFrames = Math.floor(((scrubberPercent % 4) / 4) * 24);
  const scrubTimecodeDisplay = `00:${String(scrubMin).padStart(2, '0')}:${String(
    scrubSec
  ).padStart(2, '0')}:${String(scrubFrames).padStart(2, '0')}`;

  return (
    <section
      id="top"
      className="relative w-full px-5 sm:px-8 lg:px-12 pt-12 pb-16 overflow-hidden max-w-7xl mx-auto"
    >
      {/* Ambient Radial Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#ff5722]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -top-24 right-12 w-[350px] h-[350px] bg-[#f3632d]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="flex flex-col gap-8">
        {/* Eyebrow Ticker & Technical Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#353437]/40 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2a2a2c]/60 backdrop-blur-md rounded-full border border-[#353437]/60">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] shadow-[0_0_12px_rgba(255,87,34,0.9)] animate-pulse" />
            <span className="font-headline text-[11px] font-medium tracking-widest uppercase text-[#e5e1e4]">
              VIDEO EDITOR • MOTION DESIGN
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-[#e4beb4]/80">
            <span className="hidden sm:inline-block">
              TIMECODE:{' '}
              <span className="text-[#ffb5a0] tracking-wider font-semibold font-mono">
                {formattedTimecode}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-red-400 font-semibold">FPS: 24.00 REC</span>
            </span>
          </div>
        </div>

        {/* Main Headline Typography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pt-4">
          <div className="lg:col-span-8 flex flex-col">
            <span className="font-headline text-lg sm:text-xl uppercase text-[#e4beb4] font-medium tracking-tight mb-2">
              Hey, I'm Darshan.
            </span>
            <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-[#e5e1e4] font-bold leading-none select-none">
              I MAKE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5e1e4] via-[#ffb5a0] to-[#ff5722]">
                IDEAS MOVE.
              </span>
            </h1>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 lg:pb-2">
            <p className="text-base sm:text-lg text-[#e5e1e4] font-medium leading-relaxed">
              Video editing and motion design for ideas that deserve attention.
            </p>
            <p className="text-xs sm:text-sm text-[#e4beb4]/80 leading-normal">
              I'm a developing video editor focused on Adobe After Effects, motion design, visual scene recreation, and creative editing.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('work')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ff5722] text-[#541200] font-headline text-xs uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(255,87,34,0.4)] hover:brightness-110 hover:shadow-[0_0_36px_rgba(255,87,34,0.6)] transition-all cursor-pointer"
              >
                View my work →
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#2a2a2c] text-[#e5e1e4] font-headline text-xs uppercase tracking-wider hover:bg-[#39393b] border border-[#353437] transition-colors cursor-pointer"
              >
                Let's talk →
              </button>
            </div>
          </div>
        </div>

        {/* CINEMATIC HERO MEDIA STAGE (Flowstate Visual Canvas) */}
        <div className="relative w-full rounded-none overflow-hidden bg-[#0e0e10] mt-4 shadow-2xl shadow-black/90 border border-[#201f22] group">
          {/* Film Viewfinder Overlays */}
          <div className="absolute top-4 left-4 z-20 font-headline text-[11px] font-medium uppercase tracking-widest text-[#ffb5a0] bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-[#353437]">
            OCTANE RENDER // 120FPS // 2.39:1
          </div>
          <div className="absolute top-4 right-4 z-20 font-headline text-[11px] font-medium uppercase tracking-widest text-[#e4beb4] bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-[#353437] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>SCENE_01 // REC_LOCK</span>
          </div>
          <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-3 font-mono text-xs text-[#e4beb4]/90 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-[#353437]">
            <span className="w-2 h-2 rounded-full bg-[#ff5722]" />
            <span>CYBERNETIC // FLOW // TIME_MARK [00:02:14:08]</span>
          </div>

          {/* Image Container with Framing */}
          <div className="relative w-full aspect-[21/9] min-h-[320px] max-h-[620px] overflow-hidden">
            <img
              src={HERO_MEDIA}
              alt="Flowstate Cinematic Visual Title Treatment"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#131315]/40 via-transparent to-[#131315]/40" />

            {/* Viewfinder Crosshair in center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-12 h-12 border border-[#e5e1e4] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#ff5722]" />
              </div>
            </div>

            {/* Interactive Floating Showreel Disc */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={onOpenReel}
                className="pointer-events-auto group/disc relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#2a2a2c]/85 backdrop-blur-md hover:bg-[#ff5722] text-[#e5e1e4] hover:text-[#541200] transition-all duration-300 shadow-[0_0_32px_rgba(0,0,0,0.8)] hover:shadow-[0_0_36px_rgba(255,87,34,0.7)] cursor-pointer border border-[#ff5722]/50"
                aria-label="Play Cinematic Reel"
              >
                <span className="material-symbols-outlined text-4xl sm:text-5xl ml-1">
                  play_arrow
                </span>
                {/* Orbiting Label */}
                <span className="absolute -bottom-8 font-headline text-[11px] uppercase tracking-widest text-[#ffb5a0] group-hover/disc:text-[#ff5722] font-bold whitespace-nowrap bg-black/80 px-2 py-0.5 border border-[#353437]">
                  PLAY REEL
                </span>
              </button>
            </div>
          </div>

          {/* Timeline Scrubber Simulation Under Hero */}
          <div className="w-full bg-[#1c1b1d] px-4 py-2.5 flex items-center gap-4 border-t border-[#2a2a2c] select-none">
            <span className="font-mono text-xs text-[#ffb5a0] font-semibold w-16 text-left">
              {scrubTimecodeDisplay}
            </span>

            {/* Interactive Timeline Track */}
            <div
              ref={scrubberTrackRef}
              onMouseDown={handleMouseDown}
              className="relative flex-1 h-2 bg-[#353437] rounded-none overflow-visible cursor-pointer py-1 group/scrub"
              title="Drag or click to scrub preview"
            >
              {/* Background Track */}
              <div className="w-full h-1.5 bg-[#201f22]" />
              {/* Progress Fill */}
              <div
                style={{ width: `${scrubberPercent}%` }}
                className="absolute top-1 left-0 h-1.5 bg-[#ff5722] shadow-[0_0_12px_#ff5722] transition-all duration-75"
              />
              {/* Thumb Scrubber Head */}
              <div
                style={{ left: `${scrubberPercent}%` }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border border-[#541200] shadow-[0_0_8px_#ff5722] transition-all duration-75"
              />
            </div>

            <span className="font-mono text-xs text-[#e4beb4]/70 w-16 text-right">00:04:32</span>
            <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-[#353437]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5722]" />
              <span className="font-headline text-[10px] tracking-wider uppercase text-[#e4beb4]">
                COLOR_SYNC
              </span>
            </div>
          </div>
        </div>

        {/* Metrics Ticker Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#1c1b1d] p-4 sm:p-5 border border-[#2a2a2c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#201f22] border border-[#353437] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#ff5722] text-xl">auto_fix_high</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-[11px] uppercase tracking-wider text-[#e4beb4]/70">
                Current Focus
              </span>
              <span className="text-sm font-semibold text-[#e5e1e4]">
                After Effects &amp; Motion Principles
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-[#2a2a2c] sm:pl-4 pt-3 sm:pt-0">
            <div className="w-10 h-10 bg-[#201f22] border border-[#353437] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#ff5722] text-xl">verified</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-[11px] uppercase tracking-wider text-[#e4beb4]/70">
                Availability
              </span>
              <span className="text-sm font-semibold text-[#e5e1e4]">
                Open for Freelance Commissions
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-[#2a2a2c] sm:pl-4 pt-3 sm:pt-0">
            <div className="w-10 h-10 bg-[#201f22] border border-[#353437] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#ff5722] text-xl">public</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-[11px] uppercase tracking-wider text-[#e4beb4]/70">
                Location
              </span>
              <span className="text-sm font-semibold text-[#e5e1e4]">
                India / Remote Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
