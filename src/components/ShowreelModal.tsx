import React, { useState, useEffect, useRef } from 'react';
import { HERO_MEDIA } from '../data/portfolioData';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(25);
  const [isMuted, setIsMuted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Audio Waveform Visualizer Animation loop on canvas
  useEffect(() => {
    if (!isOpen) return;
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const numBars = 48;
      const barWidth = canvas.width / numBars;

      for (let i = 0; i < numBars; i++) {
        let height = 10;
        if (isPlaying) {
          // Dynamic wave generator
          const wave1 = Math.sin(tick * 0.1 + i * 0.35);
          const wave2 = Math.cos(tick * 0.07 - i * 0.2);
          const val = Math.abs(wave1 * 0.6 + wave2 * 0.4);
          height = Math.max(6, val * canvas.height * 0.75);
        } else {
          height = 6;
        }

        const x = i * barWidth;
        const y = (canvas.height - height) / 2;

        const grad = ctx.createLinearGradient(0, y, 0, y + height);
        grad.addColorStop(0, '#ff5722');
        grad.addColorStop(1, '#ffb5a0');

        ctx.fillStyle = isPlaying ? grad : '#353437';
        ctx.fillRect(x + 1, y, barWidth - 2, height);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isOpen, isPlaying]);

  // Playhead progress timer
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentSeconds = Math.round((progress / 100) * 128); // 2:08 duration
  const min = Math.floor(currentSeconds / 60);
  const sec = currentSeconds % 60;
  const timeFormatted = `00:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0e0e10] border border-[#2a2a2c] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#1c1b1d] border-b border-[#2a2a2c]">
          <div className="flex items-center gap-2.5 font-headline text-xs uppercase text-[#ff5722] font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-pulse" />
            <span>DARSHAN // EDITORIAL REEL 2024-2025</span>
          </div>

          <button
            onClick={onClose}
            className="text-[#e4beb4]/70 hover:text-[#e5e1e4] transition-colors cursor-pointer"
            aria-label="Close Showreel"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={HERO_MEDIA}
            alt="Showreel Visual Background"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-70 scale-102 transition-transform duration-1000' : 'opacity-40'
            }`}
          />

          {/* Central Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/30 p-6 text-center select-none">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#ff5722] text-[#541200] flex items-center justify-center shadow-[0_0_36px_#ff5722] hover:scale-105 transition-all cursor-pointer group"
              aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
            >
              <span className="material-symbols-outlined text-4xl sm:text-5xl">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <div className="flex flex-col gap-1">
              <span className="font-headline text-lg sm:text-xl uppercase tracking-wider text-[#e5e1e4] font-bold">
                Motion Reel Showcase
              </span>
              <span className="font-mono text-xs uppercase text-[#ffb5a0]">
                {isPlaying ? 'PLAYBACK ACTIVE // 60 FPS' : 'PAUSED // AT FRAME'}
              </span>
            </div>
          </div>

          {/* Film Viewfinder Brackets */}
          <div className="absolute top-4 left-4 font-mono text-[11px] text-[#e4beb4]/70 bg-black/60 px-2 py-0.5 border border-[#353437]">
            2.39:1 CINEMA SCOPE
          </div>
          <div className="absolute top-4 right-4 font-mono text-[11px] text-[#ff5722] bg-black/60 px-2 py-0.5 border border-[#353437] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span>PLAYHEAD REC</span>
          </div>

          {/* Audio Visualizer Overlay at bottom of video */}
          <div className="absolute bottom-3 left-4 right-4 h-8 pointer-events-none opacity-80">
            <canvas ref={canvasRef} width={600} height={32} className="w-full h-full" />
          </div>
        </div>

        {/* Transport Controls Bar */}
        <div className="bg-[#1c1b1d] p-4 flex flex-col gap-2 border-t border-[#2a2a2c]">
          {/* Progress Scrubber */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
              setProgress(pct);
            }}
            className="w-full h-1.5 bg-[#201f22] cursor-pointer relative"
          >
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-[#ff5722] shadow-[0_0_8px_#ff5722]"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-[#e5e1e4] hover:text-[#ff5722] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-[#e5e1e4] hover:text-[#ff5722] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
              </button>

              <span className="font-mono text-xs text-[#ffb5a0]">
                {timeFormatted} / 00:02:08
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px] text-[#e4beb4]/70">
              <span className="hidden sm:inline">HD 1080P // STEREO // AUDIO SYNC ENABLED</span>
              <button
                onClick={onClose}
                className="px-3 py-1 bg-[#ff5722] text-[#541200] font-headline text-xs uppercase font-bold hover:brightness-110 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
