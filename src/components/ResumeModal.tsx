import React, { useState } from 'react';
import { X, Copy, Check, Download, Printer, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { profile, experiences, coreTechnologies, education } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textContent = `
SWATI GAVHANE - SENIOR FULLSTACK & FRONTEND ENGINEER
Location: ${profile.location} | Email: ${profile.email} | Phone: ${profile.phone}
Experience: ${profile.experience}

SUMMARY:
${profile.bio}

CORE TECHNOLOGIES:
${coreTechnologies.join(', ')}

EXPERIENCE:
${experiences
  .map(
    (e) => `
${e.role} - ${e.company} (${e.period})
Location: ${e.location}
Key Accomplishments:
${e.bullets.map((b) => `• ${b}`).join('\n')}
Technologies: ${e.skills.join(', ')}
`
  )
  .join('\n')}

EDUCATION:
${education.degree} - ${education.institute}
${education.location} | Graduation: ${education.graduation}
Standing: ${education.standing}
Coursework: ${education.coursework}
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl z-10 p-6 sm:p-8 text-[#dae2fd]">
        {/* Top Header Actions */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider">
              CURRICULUM VITAE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#171f33] hover:bg-[#1e293b] border border-white/10 text-xs font-mono text-[#bcc9cd] hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#4edea3]" />
                  <span className="text-[#4edea3]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#171f33] hover:bg-[#1e293b] border border-white/10 text-xs font-mono text-[#bcc9cd] hover:text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#171f33] text-[#bcc9cd] hover:text-white border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable / Rendered CV Content */}
        <div className="space-y-6 text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-6">
            <h1 className="text-2xl font-bold text-white mb-1">{profile.name}</h1>
            <p className="text-[#4cd7f6] font-mono text-xs mb-3 font-semibold">
              {profile.role} (6+ Years of Experience)
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-[#869397]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#4cd7f6]" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#4edea3]" />
                {profile.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#3b82f6]" />
                {profile.phone}
              </span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4cd7f6] font-semibold mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-[#bcc9cd] leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Core Stack */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4cd7f6] font-semibold mb-2">
              CORE TECHNOLOGIES
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {coreTechnologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-[#131b2e] border border-white/5 font-mono text-[11px] text-[#bcc9cd]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4cd7f6] font-semibold mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-3.5 rounded bg-[#131b2e]/60 border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="text-[11px] font-mono text-[#4edea3]">{exp.period}</span>
                  </div>
                  <div className="text-xs text-[#869397] font-mono mb-2">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-[#bcc9cd] mb-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-[#869397]">
                    <span className="text-white/60">Skills: </span>
                    {exp.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#4cd7f6] font-semibold mb-2">
              EDUCATION
            </h2>
            <div className="p-3.5 rounded bg-[#131b2e]/60 border border-white/5">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white">{education.degree}</span>
                <span className="text-[11px] font-mono text-[#4edea3]">{education.standing}</span>
              </div>
              <div className="text-xs text-[#869397] font-mono mb-1">
                {education.institute} • {education.location} (Graduation: {education.graduation})
              </div>
              <p className="text-xs text-[#bcc9cd]">
                {education.coursework}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
