import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Code, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA, CaseStudyItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const { caseStudies } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState<CaseStudyItem | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#4cd7f6] block mb-1">
              PRODUCTION SYSTEMS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#dae2fd]">
              Featured Work & Case Studies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#869397] max-w-md md:text-right">
            Highlighted platforms across real-time WebRTC media, client-side SQL with GenAI visualization, and custom headless editing primitives.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-6">
          {caseStudies.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="rounded-lg bg-[#0f172a]/90 border border-white/[0.08] hover:border-[#4cd7f6]/40 transition-all p-6 sm:p-7 shadow-sm group cursor-pointer relative"
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {project.badges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                      idx === 0
                        ? 'bg-[#171f33] text-[#4cd7f6] border border-[#4cd7f6]/20 font-semibold'
                        : 'bg-[#131b2e] text-[#bcc9cd] border border-white/5'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#dae2fd] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="p-1.5 rounded bg-[#171f33] border border-white/5 text-[#869397] group-hover:text-[#4cd7f6] group-hover:border-[#4cd7f6]/30 transition-all shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed mb-6 font-normal">
                {project.description}
              </p>

              {/* Metrics Strip (3 boxes) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded bg-[#131b2e] border border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#869397]">
                      {m.label}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#4cd7f6] mt-1">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags & Action */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.04]">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#171f33] border border-white/5 text-[#869397] group-hover:text-[#bcc9cd]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-mono text-[#4cd7f6] group-hover:underline flex items-center gap-1">
                  <span>Architecture Deep Dive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
