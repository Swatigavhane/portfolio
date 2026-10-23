import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  const { profile } = PORTFOLIO_DATA;
  const [topic, setTopic] = useState('Fullstack / Senior Role');
  const [duration, setDuration] = useState('30 min');
  const [date, setDate] = useState('2025-05-15');
  const [time, setTime] = useState('15:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-xl bg-[#0f172a] border border-white/10 shadow-2xl z-10 p-6 sm:p-7 text-[#dae2fd]">
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded bg-[#171f33] border border-white/10 text-[#4cd7f6]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Schedule Technical Chat</h2>
              <p className="text-xs text-[#869397] font-mono">with Swati Gavhane ({profile.location})</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#171f33] text-[#bcc9cd] hover:text-white border border-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center text-[#4edea3] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Meeting Request Sent!</h3>
            <p className="text-xs sm:text-sm text-[#bcc9cd] max-w-sm mx-auto leading-relaxed">
              Thanks {name || 'there'}! Your request for a <strong className="text-white">{duration}</strong> session on <strong className="text-white">{topic}</strong> has been dispatched directly to <strong className="text-[#4cd7f6]">{profile.email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded bg-[#4cd7f6] hover:bg-[#06b6d4] text-[#003640] text-xs font-semibold font-mono"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Discussion Topic */}
            <div>
              <label className="block text-xs font-mono text-[#869397] uppercase mb-1.5">
                Topic of Discussion
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Fullstack / Senior Role',
                  'WebRTC & Media Consulting',
                  'Architecture & Performance',
                  'Introductory Coffee Chat',
                ].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    className={`p-2 rounded text-left text-xs font-mono transition-all ${
                      topic === t
                        ? 'bg-[#4cd7f6]/15 border border-[#4cd7f6] text-[#4cd7f6] font-semibold'
                        : 'bg-[#131b2e] border border-white/5 text-[#bcc9cd] hover:border-white/20'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-mono text-[#869397] uppercase mb-1.5">
                Duration
              </label>
              <div className="flex gap-2">
                {['15 min (Quick sync)', '30 min (Technical deep dive)'].map((d) => (
                  <button
                    type="button"
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`flex-1 py-1.5 px-3 rounded text-xs font-mono transition-colors ${
                      duration === d
                        ? 'bg-[#4cd7f6] text-[#003640] font-semibold'
                        : 'bg-[#131b2e] border border-white/5 text-[#bcc9cd] hover:text-white'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred slot */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-[#869397] uppercase mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-[#131b2e] border border-white/10 text-xs font-mono text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#869397] uppercase mb-1">
                  Time (IST / Any)
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-[#131b2e] border border-white/10 text-xs font-mono text-[#dae2fd] focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-[#869397] uppercase mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Miller"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-[#131b2e] border border-white/10 text-xs font-mono text-[#dae2fd] placeholder:text-[#869397]/60 focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#869397] uppercase mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-[#131b2e] border border-white/10 text-xs font-mono text-[#dae2fd] placeholder:text-[#869397]/60 focus:outline-none focus:border-[#4cd7f6]"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[11px] font-mono text-[#869397] uppercase mb-1">
                Context / Role Link (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Brief note about the role, team, or problem domain..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-1.5 rounded bg-[#131b2e] border border-white/10 text-xs font-mono text-[#dae2fd] placeholder:text-[#869397]/60 focus:outline-none focus:border-[#4cd7f6]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded bg-[#4cd7f6] hover:bg-[#06b6d4] text-[#003640] text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(76,215,246,0.3)] mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Confirm & Dispatch Schedule</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
