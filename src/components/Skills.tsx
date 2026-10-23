import React, { useState } from 'react';
import {
  Layout,
  Server,
  Code2,
  Zap,
  Brain,
  Terminal as TerminalIcon,
  Search,
  Check,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillsCategories } = PORTFOLIO_DATA;
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-4 h-4 text-[#4cd7f6]" />;
      case 'server':
        return <Server className="w-4 h-4 text-[#4edea3]" />;
      case 'code':
        return <Code2 className="w-4 h-4 text-[#4cd7f6]" />;
      case 'zap':
        return <Zap className="w-4 h-4 text-[#4edea3]" />;
      case 'brain':
        return <Brain className="w-4 h-4 text-[#4cd7f6]" />;
      case 'terminal':
        return <TerminalIcon className="w-4 h-4 text-[#3b82f6]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#4cd7f6]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-10 h-10 rounded bg-[#171f33] border border-white/10 flex items-center justify-center text-[#4cd7f6] mx-auto mb-4 shadow-[0_0_12px_rgba(76,215,246,0.15)]">
            <Layout className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#dae2fd] mb-2">
            Skills & Technology Stack
          </h2>
          <p className="text-xs sm:text-sm text-[#869397]">
            Comprehensive toolkit spanning frontend architecture, real-time client systems, and modern fullstack technologies.
          </p>

          {/* Quick interactive search filter */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="w-4 h-4 text-[#869397] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies (e.g. WebRTC, React, TypeScript)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0f172a] border border-white/10 text-xs font-mono text-[#dae2fd] placeholder:text-[#869397] focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#869397] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 6 Categorized Skill Cards */}
        <div className="space-y-5">
          {skillsCategories.map((category) => {
            const query = searchQuery.toLowerCase().trim();
            const matchingSkills = category.skills.filter((s) =>
              query ? s.toLowerCase().includes(query) : true
            );

            // If searching and this category has no matching skills, hide or dim it
            if (query && matchingSkills.length === 0) {
              return null;
            }

            return (
              <div
                key={category.id}
                className="rounded-lg bg-[#0f172a]/90 border border-white/[0.08] hover:border-[#4cd7f6]/30 transition-all p-5 sm:p-6 shadow-sm"
              >
                {/* Category Header */}
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded bg-[#171f33] border border-white/5 mt-0.5">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#dae2fd]">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#869397] mt-0.5">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4 pt-3 border-t border-white/[0.04]">
                  {category.skills.map((skill) => {
                    const isMatched =
                      query && skill.toLowerCase().includes(query);

                    return (
                      <div
                        key={skill}
                        className={`p-2 rounded text-[11px] font-mono leading-tight flex items-center justify-between transition-colors ${
                          isMatched
                            ? 'bg-[#4cd7f6]/20 border border-[#4cd7f6] text-[#4cd7f6] font-semibold'
                            : 'bg-[#131b2e] border border-white/5 text-[#bcc9cd] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/30'
                        }`}
                      >
                        <span className="truncate">{skill}</span>
                        {isMatched && (
                          <Check className="w-3 h-3 text-[#4cd7f6] shrink-0 ml-1" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
