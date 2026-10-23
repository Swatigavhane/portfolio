import React from 'react';
import { Briefcase, Zap, Smile, Users, TrendingUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Metrics: React.FC = () => {
  const { metrics } = PORTFOLIO_DATA;

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'briefcase':
        return <Briefcase className="w-3.5 h-3.5 text-[#4cd7f6]" />;
      case 'zap':
        return <Zap className="w-3.5 h-3.5 text-[#4edea3]" />;
      case 'smile':
        return <Smile className="w-3.5 h-3.5 text-[#4cd7f6]" />;
      case 'users':
        return <Users className="w-3.5 h-3.5 text-[#3b82f6]" />;
      default:
        return <TrendingUp className="w-3.5 h-3.5 text-[#4cd7f6]" />;
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => (
            <div
              key={item.label}
              className="rounded-lg bg-[#0f172a]/90 border border-white/[0.08] p-5 hover:border-[#4cd7f6]/40 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Metric Header */}
                <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-[#869397] uppercase mb-3">
                  <span>{item.label}</span>
                  <div className="p-1 rounded bg-[#171f33] border border-white/5">
                    {renderIcon(item.icon)}
                  </div>
                </div>

                {/* Big Metric Value */}
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#dae2fd] group-hover:text-white transition-colors mb-2">
                  {item.value}
                </div>

                {/* Description */}
                <p className="text-xs text-[#bcc9cd] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer Indicator or Tag */}
              <div>
                {item.hasProgressBar ? (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[10px] font-mono text-[#869397]">
                      <span>4.2s (Initial)</span>
                      <span className="text-[#4edea3] font-semibold">1.2s (Optimized)</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#171f33] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#4cd7f6] to-[#4edea3] rounded-full transition-all duration-1000"
                        style={{ width: `${item.progressPercent}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`text-[11px] font-mono pt-2 border-t border-white/[0.06] ${
                      item.footerColor === 'emerald'
                        ? 'text-[#4edea3]'
                        : item.footerColor === 'cyan'
                        ? 'text-[#4cd7f6]'
                        : 'text-[#869397]'
                    }`}
                  >
                    {item.footerTag}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
