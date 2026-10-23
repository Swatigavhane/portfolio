import React, { useState } from 'react';
import { CheckCircle2, Building2, Calendar, MapPin, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string | null>(null);

  // All unique skills for filtering
  const allSkills = Array.from(
    new Set(experiences.flatMap((exp) => exp.skills))
  );

  const filteredExperiences = selectedSkillFilter
    ? experiences.filter((exp) => exp.skills.includes(selectedSkillFilter))
    : experiences;

  return (
    <section id="experience" className="py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#4cd7f6] block mb-1">
              CAREER TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#dae2fd]">
              Professional Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#869397] max-w-md md:text-right">
            6+ years of shipping scalable frontends, resilient micro-frontends, real-time communication systems, and high-performance web tooling.
          </p>
        </div>

        {/* Optional Filter by skill bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none text-xs">
          <span className="text-[11px] font-mono text-[#869397] flex items-center gap-1 shrink-0">
            <Filter className="w-3 h-3 text-[#4cd7f6]" />
            <span>Filter Tech:</span>
          </span>
          <button
            onClick={() => setSelectedSkillFilter(null)}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
              selectedSkillFilter === null
                ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                : 'bg-[#171f33] text-[#bcc9cd] hover:text-white border border-white/5'
            }`}
          >
            All Roles ({experiences.length})
          </button>
          {['LiveKit (WebRTC)', 'React.js', 'TypeScript', 'Node.js', 'React Query', 'Redux Toolkit'].map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkillFilter(selectedSkillFilter === skill ? null : skill)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors shrink-0 ${
                selectedSkillFilter === skill
                  ? 'bg-[#4cd7f6] text-[#003640] font-semibold shadow-[0_0_10px_rgba(76,215,246,0.3)]'
                  : 'bg-[#171f33] text-[#bcc9cd] hover:text-white border border-white/5'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Experiences List */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-lg bg-[#0f172a]/90 border border-white/[0.08] hover:border-[#4cd7f6]/35 transition-all p-5 sm:p-6 shadow-sm group"
            >
              {/* Card Top: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-white/[0.06]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-[#171f33] border border-white/10 flex items-center justify-center text-[#4cd7f6] shrink-0 mt-0.5 group-hover:border-[#4cd7f6]/50 transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#dae2fd] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#869397] font-mono mt-0.5">
                      <span className="text-[#4cd7f6] font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Period pill */}
                <div className="shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono border ${
                      exp.current
                        ? 'bg-[#10b981]/10 border-[#10b981]/30 text-[#4edea3]'
                        : 'bg-[#171f33] border-white/10 text-[#bcc9cd]'
                    }`}
                  >
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 mb-5">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#4edea3] shrink-0 mt-0.5 opacity-90" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Footer */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                {exp.skills.map((skill) => (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkillFilter(selectedSkillFilter === skill ? null : skill)}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      selectedSkillFilter === skill
                        ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                        : 'bg-[#131b2e] border border-white/5 text-[#869397] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/30'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
