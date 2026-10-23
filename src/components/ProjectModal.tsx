import React, { useState } from 'react';
import { X, Check, Copy, Code2, Server, Cpu, ExternalLink } from 'lucide-react';
import { CaseStudyItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: CaseStudyItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.deepDive.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl z-10 p-6 sm:p-8 text-[#dae2fd]">
        {/* Top bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#171f33] border border-white/10 text-[#4cd7f6]"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#171f33] border border-white/10 text-[#bcc9cd] hover:text-white hover:border-white/20 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-3.5 rounded-lg bg-[#131b2e] border border-white/5 flex flex-col justify-between"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#869397]">
                {metric.label}
              </span>
              <span className="text-lg font-bold font-mono text-[#4cd7f6] mt-1">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Deep Dive Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#869397] mb-2 flex items-center gap-2">
              <Server className="w-3.5 h-3.5 text-[#4edea3]" />
              <span>Architectural Overview</span>
            </h3>
            <p className="text-sm text-[#bcc9cd] leading-relaxed">
              {project.deepDive.overview}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#869397] mb-2 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#4cd7f6]" />
              <span>System Tier Breakdown</span>
            </h3>
            <ul className="space-y-2">
              {project.deepDive.architecture.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-[#bcc9cd] flex items-start gap-2.5 p-2.5 rounded bg-[#131b2e]/60 border border-white/5"
                >
                  <span className="text-[#4cd7f6] font-mono font-bold mt-0.5">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#869397] mb-2">
              Key Engineering Highlights
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {project.deepDive.technicalHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="text-xs text-[#bcc9cd] p-2.5 rounded bg-[#131b2e]/40 border border-white/5 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet with Copy */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-[#869397] mb-2">
              <div className="flex items-center gap-1.5 text-[#dae2fd]">
                <Code2 className="w-3.5 h-3.5 text-[#4cd7f6]" />
                <span>Production Implementation Snippet</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171f33] hover:bg-[#1e293b] border border-white/10 text-xs font-mono text-[#bcc9cd] hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                    <span className="text-[#4edea3]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 rounded-lg bg-[#090d16] border border-white/10 text-[11px] sm:text-xs font-mono text-[#dae2fd] overflow-x-auto leading-relaxed scrollbar-thin">
              <code>{project.deepDive.codeSnippet}</code>
            </pre>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-[#171f33] border border-white/5 text-xs font-mono text-[#bcc9cd]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
