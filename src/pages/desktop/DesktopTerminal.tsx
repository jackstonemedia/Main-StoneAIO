import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DesktopTerminal() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Nexus OS v1.0.4 (cloud-env-01)' },
    { type: 'system', text: 'Type "help" for a list of available commands.' },
    { type: 'prompt', text: 'root@cloud-os:~# ' }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      const newHistory = [...history, { type: 'command', text: cmd }];
      
      if (cmd === 'help') {
        newHistory.push({ type: 'output', text: 'Available commands: help, clear, ls, pwd, date, echo, whoami' });
      } else if (cmd === 'clear') {
        setHistory([{ type: 'prompt', text: 'root@cloud-os:~# ' }]);
        setInput('');
        return;
      } else if (cmd === 'ls') {
        newHistory.push({ type: 'output', text: 'workspace/  documents/  downloads/  config.json' });
      } else if (cmd === 'pwd') {
        newHistory.push({ type: 'output', text: '/root' });
      } else if (cmd === 'date') {
        newHistory.push({ type: 'output', text: new Date().toString() });
      } else if (cmd === 'whoami') {
        newHistory.push({ type: 'output', text: 'root' });
      } else if (cmd.startsWith('echo ')) {
        newHistory.push({ type: 'output', text: cmd.substring(5) });
      } else if (cmd !== '') {
        newHistory.push({ type: 'error', text: `Command not found: ${cmd}` });
      }
      
      newHistory.push({ type: 'prompt', text: 'root@cloud-os:~# ' });
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="h-full bg-[#fafafa] p-6 flex flex-col">
      <div className="flex-1 bg-slate-900 rounded-xl overflow-hidden shadow-xl flex flex-col border border-slate-800">
        <div className="h-10 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2 text-slate-400">
            <TerminalIcon className="w-4 h-4" />
            <span className="text-[13px] font-medium font-mono">root@cloud-os:~</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-slate-500 hover:text-slate-300 transition-colors">
              <Minimize2 className="w-4 h-4" />
            </button>
            <button className="text-slate-500 hover:text-slate-300 transition-colors">
              <Maximize2 className="w-4 h-4" />
            </button>
            <button onClick={() => navigate('/desktop/home')} className="text-slate-500 hover:text-red-400 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto font-mono text-[14px] custom-scrollbar" onClick={() => document.getElementById('terminal-input')?.focus()}>
          {history.map((line, i) => (
            <div key={i} className="mb-1">
              {line.type === 'system' && <div className="text-slate-400">{line.text}</div>}
              {line.type === 'output' && <div className="text-emerald-300">{line.text}</div>}
              {line.type === 'error' && <div className="text-red-400">{line.text}</div>}
              {line.type === 'command' && (
                <div className="flex">
                  <span className="text-emerald-400 mr-2">root@cloud-os:~#</span>
                  <span className="text-slate-200">{line.text}</span>
                </div>
              )}
              {line.type === 'prompt' && i === history.length - 1 && (
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">{line.text}</span>
                  <input
                    id="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="bg-transparent border-none outline-none text-slate-200 flex-1 caret-slate-200"
                    autoFocus
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
}
