import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Video Editing');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setMessage('');

      // Auto dismiss success toast after 6 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="w-full px-5 sm:px-8 lg:px-12 py-20 bg-[#131315] relative overflow-hidden border-t border-[#201f22]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute -bottom-20 right-1/4 w-[600px] h-[400px] bg-[#ff5722]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Direct Contact Column */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ff5722]" />
              08 — CONTACT
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl uppercase text-[#e5e1e4] font-bold tracking-tight leading-none">
              Have an idea? <br />
              <span className="text-[#ff5722]">Let's make it move.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#e4beb4]/85 max-w-lg mt-2 leading-relaxed">
              I'm currently open to editing, motion-design opportunities, collaborations and creative projects.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Email Box with Copy Button */}
            <div className="p-4 bg-[#1c1b1d] border border-[#2a2a2c] flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-headline text-[10px] uppercase tracking-wider text-[#e4beb4]/60">
                  Direct Mail
                </span>
                <span className="font-mono text-sm sm:text-base text-[#e5e1e4] font-semibold select-all">
                  {CONTACT_INFO.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className={`px-3 py-1.5 font-headline text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 border ${
                  copied
                    ? 'bg-[#ff5722] text-[#541200] border-[#ff5722] font-bold'
                    : 'bg-[#201f22] hover:bg-[#2a2a2c] text-[#e5e1e4] border-[#353437]'
                }`}
                title="Copy to clipboard"
              >
                <span className="material-symbols-outlined text-sm">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone / WhatsApp Box */}
            <div className="p-4 bg-[#1c1b1d] border border-[#2a2a2c] flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-headline text-[10px] uppercase tracking-wider text-[#e4beb4]/60">
                  Direct Line / WhatsApp
                </span>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="font-mono text-sm sm:text-base text-[#e5e1e4] font-semibold hover:text-[#ff5722] transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="px-3 py-1.5 bg-[#201f22] hover:bg-[#2a2a2c] text-[#e5e1e4] border border-[#353437] font-headline text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-sm text-[#ff5722]">call</span>
                <span>Call</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#e4beb4]/70">
            <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-ping" />
            <span>ESTIMATED RESPONSE TIME: {CONTACT_INFO.responseTime}</span>
          </div>
        </div>

        {/* Minimal Dark Interactive Form */}
        <div className="lg:col-span-6 bg-[#1c1b1d] p-6 sm:p-8 md:p-10 border border-[#2a2a2c] flex flex-col gap-6 shadow-2xl">
          <div className="flex items-center justify-between border-b border-[#2a2a2c] pb-3">
            <h3 className="font-headline text-lg sm:text-xl uppercase text-[#e5e1e4] font-bold">
              Commission Dispatch
            </h3>
            <span className="font-mono text-xs text-[#ffb5a0]">DIRECT PIPELINE</span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="font-headline text-[11px] uppercase tracking-wider text-[#e4beb4]/80"
              >
                Name / Organization
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Vance"
                className="w-full bg-[#131315] border border-[#2a2a2c] px-4 py-3 text-sm text-[#e5e1e4] placeholder-[#e4beb4]/30 focus:outline-none focus:border-[#ff5722] transition-colors font-body"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="font-headline text-[11px] uppercase tracking-wider text-[#e4beb4]/80"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@studio.com"
                className="w-full bg-[#131315] border border-[#2a2a2c] px-4 py-3 text-sm text-[#e5e1e4] placeholder-[#e4beb4]/30 focus:outline-none focus:border-[#ff5722] transition-colors font-body"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-headline text-[11px] uppercase tracking-wider text-[#e4beb4]/80">
                Project Category
              </label>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {['Video Editing', 'Motion Design', 'Scene Recreation', 'Other Inquiry'].map(
                  (cat) => (
                    <label
                      key={cat}
                      className={`flex items-center gap-2 p-3 border text-xs cursor-pointer transition-colors ${
                        projectType === cat
                          ? 'bg-[#201f22] border-[#ff5722] text-[#e5e1e4]'
                          : 'bg-[#131315] border-[#2a2a2c] text-[#e4beb4]/70 hover:border-[#353437]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="projectType"
                        value={cat}
                        checked={projectType === cat}
                        onChange={() => setProjectType(cat)}
                        className="accent-[#ff5722]"
                      />
                      <span className="font-headline">{cat}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="font-headline text-[11px] uppercase tracking-wider text-[#e4beb4]/80"
              >
                Project Scope / Timeline
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the story, references, and deadline..."
                className="w-full bg-[#131315] border border-[#2a2a2c] px-4 py-3 text-sm text-[#e5e1e4] placeholder-[#e4beb4]/30 focus:outline-none focus:border-[#ff5722] transition-colors font-body resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#ff5722] text-[#541200] font-headline text-xs uppercase tracking-wider font-bold shadow-[0_0_24px_rgba(255,87,34,0.35)] hover:brightness-110 hover:shadow-[0_0_36px_rgba(255,87,34,0.6)] transition-all cursor-pointer mt-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Dispatching Frame...' : 'Send message →'}
            </button>

            {isSuccess && (
              <div className="p-3 bg-[#ff5722]/15 border border-[#ff5722]/40 text-[#ffb5a0] font-mono text-xs uppercase text-center flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#ff5722]">check_circle</span>
                <span>Message registered. I will respond to your coordinates within 24 hours.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
