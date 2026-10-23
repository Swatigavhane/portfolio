import React, { useState } from 'react';
import { Mail, Calendar, Terminal as TerminalIcon, Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenSchedule: () => void;
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSchedule,
  onOpenResume,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile } = PORTFOLIO_DATA;

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills & Architecture', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#0b1326]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#overview"
            className="w-9 h-9 rounded bg-[#171f33] border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-[#4cd7f6] hover:border-[#4cd7f6]/50 transition-colors shadow-sm"
          >
            {profile.initials}
          </a>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <a href="#overview" className="text-sm font-semibold text-[#dae2fd] hover:text-white transition-colors">
                {profile.name}
              </a>
              {/* Green status pill */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#10b981]/10 border border-[#10b981]/25 text-[11px] font-mono text-[#4edea3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="truncate max-w-[200px]">{profile.availability}</span>
              </div>
            </div>
            <span className="text-[11px] text-[#869397] font-mono">{profile.role}</span>
          </div>
        </div>

        {/* Center: Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-[#bcc9cd]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors whitespace-nowrap hover:text-[#4cd7f6] ${
                  isActive ? 'text-[#4cd7f6] font-semibold' : 'text-[#bcc9cd]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#bcc9cd] hover:text-white bg-[#131b2e] border border-white/10 hover:border-white/20 rounded transition-colors"
            title="View Technical Resume"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>CV</span>
          </button>

          <a
            href={`mailto:${profile.email}`}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#bcc9cd] hover:text-white bg-[#131b2e] border border-white/10 hover:border-white/20 rounded transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#4cd7f6]" />
            <span>Email Me</span>
          </a>

          <button
            onClick={onOpenSchedule}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#003640] bg-[#4cd7f6] hover:bg-[#06b6d4] rounded transition-all shadow-[0_0_16px_rgba(76,215,246,0.25)] hover:shadow-[0_0_20px_rgba(76,215,246,0.45)] whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule Chat</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded bg-[#171f33] border border-white/10 text-[#bcc9cd] hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0b1326] px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 px-2 py-1 rounded bg-[#10b981]/10 border border-[#10b981]/25 text-[11px] font-mono text-[#4edea3] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span>{profile.availability}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded bg-[#131b2e] border border-white/5 text-xs text-[#dae2fd] hover:text-[#4cd7f6] hover:border-[#4cd7f6]/30 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-xs font-mono text-center rounded bg-[#171f33] border border-white/10 text-[#bcc9cd]"
            >
              View CV / Resume
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="flex-1 py-2 text-xs text-center rounded bg-[#171f33] border border-white/10 text-[#bcc9cd]"
            >
              Email Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
