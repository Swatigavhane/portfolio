import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="border-t border-white/[0.08] bg-[#060e20] py-8 text-xs font-mono text-[#869397]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#171f33] border border-white/10 flex items-center justify-center text-xs font-bold text-[#4cd7f6] shrink-0">
            {profile.initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#dae2fd] uppercase tracking-wider">
                {profile.name}
              </span>
              <span>-</span>
              <span className="text-[#bcc9cd]">{profile.role}</span>
            </div>
            <p className="text-[11px] text-[#869397] font-normal mt-0.5">
              Architecting high-scale web platforms, real-time systems, and AI integrations.
            </p>
          </div>
        </div>

        {/* Right: Location & Copyright */}
        <div className="text-center md:text-right space-y-1">
          <div className="text-[#4cd7f6] tracking-wider">
            LOCATION: PUNE, INDIA
          </div>
          <div className="text-[11px] text-[#869397]">
            © 2025 Swati Gavhane. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
