import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#4cd7f6] block mb-1">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#dae2fd]">
            Education & Credentials
          </h2>
        </div>

        {/* Education Card */}
        <div className="rounded-lg bg-[#0f172a]/90 border border-white/[0.08] hover:border-[#4cd7f6]/40 transition-all p-6 sm:p-7 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Left Degree Details */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-12 h-12 rounded bg-[#171f33] border border-white/10 flex items-center justify-center text-[#4cd7f6] shrink-0 mt-1 shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono uppercase tracking-wider bg-[#171f33] border border-white/10 text-[#4cd7f6] font-semibold">
                    {education.degree}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#131b2e] border border-white/5 text-[#bcc9cd]">
                    {education.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#dae2fd] mb-1">
                  {education.institute}
                </h3>

                <div className="text-xs font-mono text-[#869397] mb-3">
                  <span>{education.location}</span>
                  <span className="mx-2">•</span>
                  <span className="text-[#bcc9cd]">Graduation: {education.graduation}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#869397] leading-relaxed max-w-2xl">
                  {education.coursework}
                </p>
              </div>
            </div>

            {/* Right Academic Standing Badge */}
            <div className="lg:w-72 p-4 rounded-lg bg-[#131b2e] border border-white/5 flex flex-col justify-center text-center lg:text-right shrink-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#869397] mb-1">
                ACADEMIC STANDING
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-[#4edea3] mb-1 flex items-center justify-center lg:justify-end gap-1.5">
                <Award className="w-4 h-4 text-[#4edea3]" />
                <span>{education.standing}</span>
              </div>
              <div className="text-[11px] text-[#869397] font-mono">
                {education.standingSubtext}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
