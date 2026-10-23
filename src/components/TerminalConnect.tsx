import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Terminal as TerminalIcon, Send, CornerDownLeft, Sparkles, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TerminalConnectProps {
  onOpenSchedule: () => void;
  onOpenResume: () => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'system' | 'error';
  text: string;
}

export const TerminalConnect: React.FC<TerminalConnectProps> = ({
  onOpenSchedule,
  onOpenResume,
}) => {
  const { profile } = PORTFOLIO_DATA;
  const [commandInput, setCommandInput] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      type: 'system',
      text: `> Swati Gavhane | Senior Fullstack Engineer (6+ yrs) initialized.`,
    },
    {
      id: 'init-2',
      type: 'system',
      text: `> Ready for new opportunities in Pune, India & Remote.`,
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const quickCommands = [
    'schedule-chat',
    'contact-info',
    'view-resume',
    'skills',
    'clear',
  ];

  const handleRunCommand = (cmdToRun?: string) => {
    const rawCmd = (cmdToRun || commandInput).trim().toLowerCase();
    if (!rawCmd) return;

    // Log the user input command
    const newLogs: CommandLog[] = [
      ...logs,
      { id: String(Date.now()), type: 'input', text: `> ${rawCmd}` },
    ];

    switch (rawCmd) {
      case 'schedule-chat':
      case 'schedule':
      case 'chat':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: `Opening scheduling modal to book a meeting...`,
        });
        setLogs(newLogs);
        setCommandInput('');
        onOpenSchedule();
        return;

      case 'contact-info':
      case 'contact':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: `Email: ${profile.email}\nPhone: ${profile.phone}\nLocation: ${profile.location}\nStatus: Available for Senior Roles (Pune / Remote)`,
        });
        break;

      case 'view-resume':
      case 'resume':
      case 'cv':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: `Displaying technical curriculum vitae...`,
        });
        setLogs(newLogs);
        setCommandInput('');
        onOpenResume();
        return;

      case 'skills':
      case 'stack':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: `Core: React, Next.js, TypeScript, Node.js, WebRTC (LiveKit), PostgreSQL, TanStack Query, Tailwind CSS, DuckDB-wasm`,
        });
        break;

      case 'clear':
      case 'cls':
        setLogs([
          {
            id: String(Date.now()),
            type: 'system',
            text: `> Terminal console cleared. Ready for commands.`,
          },
        ]);
        setCommandInput('');
        return;

      case 'help':
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'output',
          text: `Available commands: schedule-chat, contact-info, view-resume, skills, clear, help`,
        });
        break;

      default:
        newLogs.push({
          id: String(Date.now() + 1),
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type 'help' or click quick commands above.`,
        });
        break;
    }

    setLogs(newLogs);
    setCommandInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand();
    }
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <section id="contact" className="py-16 md:py-20 border-t border-white/[0.06] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Window Header Bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-xs font-mono text-[#869397] ml-2">
            swati@portfolio: ~/connect
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#dae2fd] mb-2">
            Let's Connect & Build
          </h2>
          <p className="text-xs sm:text-sm text-[#869397] max-w-2xl">
            Open to Senior Fullstack and Senior Frontend roles. Let's discuss high-scale web platforms, real-time architectures, or collaborative product opportunities.
          </p>
        </div>

        {/* Terminal Box */}
        <div className="rounded-lg bg-[#060e20] border border-white/10 p-4 sm:p-6 mb-8 font-mono shadow-2xl">
          {/* Quick command hints bar */}
          <div className="flex flex-wrap items-center gap-2 pb-3 mb-4 border-b border-white/[0.06] text-xs text-[#869397]">
            <span className="text-[#869397]"># Quick commands:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleRunCommand(cmd)}
                className="px-2 py-0.5 rounded bg-[#131b2e] hover:bg-[#171f33] border border-white/5 hover:border-[#4cd7f6]/40 text-[#4cd7f6] text-[11px] transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Logs output */}
          <div className="space-y-1.5 text-xs mb-4 max-h-60 overflow-y-auto scrollbar-thin">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`whitespace-pre-wrap leading-relaxed ${
                  log.type === 'system'
                    ? 'text-[#869397]'
                    : log.type === 'input'
                    ? 'text-[#4cd7f6] font-semibold'
                    : log.type === 'error'
                    ? 'text-[#ffb4ab]'
                    : 'text-[#4edea3]'
                }`}
              >
                {log.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive Command Prompt Line */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.06]">
            <span className="text-[#4cd7f6] font-bold text-xs select-none">&gt;</span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'schedule-chat' or 'contact-info'..."
              className="flex-1 bg-transparent border-none text-xs font-mono text-[#dae2fd] placeholder:text-[#869397]/70 focus:outline-none"
            />
            <button
              onClick={() => handleRunCommand()}
              className="px-3 py-1 rounded bg-[#4cd7f6] hover:bg-[#06b6d4] text-[#003640] text-xs font-semibold font-mono flex items-center gap-1 transition-all shadow-[0_0_10px_rgba(76,215,246,0.3)] shrink-0"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Contact Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#003640] bg-[#4cd7f6] hover:bg-[#06b6d4] rounded transition-all shadow-[0_0_20px_rgba(76,215,246,0.25)] hover:shadow-[0_0_25px_rgba(76,215,246,0.45)]"
          >
            <Mail className="w-4 h-4" />
            <span>Email Swati Directly</span>
          </a>

          <button
            onClick={handleCopyPhone}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-mono text-[#dae2fd] hover:text-white bg-[#131b2e] hover:bg-[#1e293b] border border-white/10 hover:border-white/20 rounded transition-all"
            title="Click to copy phone number"
          >
            <Phone className="w-4 h-4 text-[#4edea3]" />
            <span>{profile.phone}</span>
            {copiedPhone ? (
              <span className="text-[10px] text-[#4edea3] font-mono ml-1">Copied!</span>
            ) : (
              <Copy className="w-3 h-3 text-[#869397] ml-1" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
