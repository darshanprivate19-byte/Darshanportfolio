import React from 'react';
import { SERVICES } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full px-5 sm:px-8 lg:px-12 py-16 bg-[#131315] border-t border-[#201f22]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <span className="font-headline text-xs font-semibold uppercase tracking-widest text-[#ffb5a0] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ff5722]" />
            02 — WHAT I DO
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-[#e5e1e4] font-bold tracking-tight">
            Turning ideas into visual language.
          </h2>
        </div>

        {/* 4 Numbered Capability Strips */}
        <div className="flex flex-col gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative bg-[#1c1b1d] hover:bg-[#201f22] border border-[#2a2a2c] hover:border-[#353437] transition-all duration-300 p-6 md:p-8 overflow-hidden cursor-default"
            >
              {/* Left Accent Bar on Hover */}
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-transparent group-hover:bg-[#ff5722] group-hover:shadow-[0_0_12px_#ff5722] transition-all duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-2">
                  <span className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#353437] group-hover:text-[#ffb5a0] transition-colors">
                    {service.number}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-headline text-xl sm:text-2xl uppercase text-[#e5e1e4] font-bold group-hover:text-[#ff5722] transition-colors">
                    {service.title}
                  </h3>
                  <span className="font-headline text-[11px] uppercase text-[#e4beb4]/70 tracking-wider">
                    {service.tags}
                  </span>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-sm sm:text-base text-[#e4beb4]/85 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
