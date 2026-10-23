import React from 'react';
import { Layers, ShieldCheck, ArrowRight, MessageSquare, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSchedule }) => {
  const { profile, coreTechnologies, heroSubCards } = PORTFOLIO_DATA;

  return (
    <section id="overview" className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
      {/* Background ambient cyan/blue radial gradient glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] pointer-events-none opacity-40 blur-[120px] -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(76, 215, 246, 0.18), rgba(59, 130, 246, 0.08) 50%, transparent 80%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Experience Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171f33] border border-white/10 text-xs font-mono text-[#bcc9cd] mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>{profile.experience}</span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-[#dae2fd] leading-[1.15] mb-6 max-w-4xl">
          Architecting high-scale web platforms,{' '}
          <span className="text-[#4cd7f6] underline decoration-[#4cd7f6]/40 underline-offset-8 decoration-2">
            real-time systems,
          </span>{' '}
          and AI integrations.
        </h1>

        {/* Bio summary paragraph */}
        <p className="text-base sm:text-lg text-[#bcc9cd] leading-relaxed max-w-3xl mb-8 font-normal">
          {profile.bio}
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#003640] bg-[#4cd7f6] hover:bg-[#06b6d4] rounded transition-all shadow-[0_0_20px_rgba(76,215,246,0.3)] hover:shadow-[0_0_25px_rgba(76,215,246,0.5)] active:scale-[0.98]"
          >
            <Layers className="w-4 h-4" />
            <span>View Experience & Projects</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-[#dae2fd] hover:text-white bg-[#131b2e] hover:bg-[#1e293b] border border-white/10 hover:border-white/20 rounded transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 text-[#4cd7f6]" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Core Technologies & Stack bar */}
        <div className="rounded-lg bg-[#0f172a]/90 border border-white/[0.08] p-4 sm:p-5 mb-6">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#869397] mb-3 pb-2 border-b border-white/[0.06]">
            <div className="flex items-center gap-2 text-[#4cd7f6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
              <span className="font-semibold text-white/90">CORE TECHNOLOGIES & STACK</span>
            </div>
            <span className="text-[#869397] hidden sm:inline">Production-Hardened</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {coreTechnologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#171f33] border border-white/5 text-xs font-mono text-[#dae2fd] hover:border-[#4cd7f6]/40 hover:text-[#4cd7f6] transition-colors"
              >
                <span className="text-[#4cd7f6]">•</span>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 2-Column Hero Sub-Cards: Architecture & Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {heroSubCards.map((card, idx) => (
            <div
              key={card.title}
              className="rounded-lg bg-[#0f172a]/90 border border-white/[0.08] p-4 sm:p-5 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#4cd7f6] mb-3 pb-2 border-b border-white/[0.06]">
                {idx === 0 ? (
                  <Layers className="w-3.5 h-3.5" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-[#4edea3]" />
                )}
                <span className="font-semibold text-[#dae2fd]">{card.title}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {card.items.map((item) => (
                  <div
                    key={item}
                    className="p-2 rounded bg-[#131b2e] border border-white/5 text-[11px] font-mono text-[#bcc9cd] leading-tight hover:text-[#4cd7f6] hover:border-[#4cd7f6]/30 transition-colors flex items-center"
                  >
                    {item}
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
