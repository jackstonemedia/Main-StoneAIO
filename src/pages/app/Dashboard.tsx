import React from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"

export default function Dashboard() {
  const navigate = useNavigate()
  
  const getTimeOfDay = () => {
    const hours = new Date().getHours()
    if (hours < 12) return "morning"
    if (hours < 18) return "afternoon"
    return "evening"
  }

  const stats = [
    { label: "Total Agents", value: "5", trend: "↑ 2 added this week" },
    { label: "Tasks Today", value: "143", trend: "↑ 18% vs yesterday" },
    { label: "Voice Calls", value: "41", trend: "↑ 8 in last hour" },
    { label: "Workflows Run", value: "28", trend: "All completed ✓" },
  ]

  const agents = [
    { id: 1, name: "Research Agent", type: "Autonomous", status: "online", desc: "Scans the web, summarizes competitors, writes reports." },
    { id: 2, name: "Sales Caller", type: "Voice", status: "online", desc: "Handles outbound sales calls and books discovery meetings." },
    { id: 3, name: "Lead Nurture", type: "Workflow", status: "active", desc: "Automated multi-step sequence for new CRM leads." },
    { id: 4, name: "Email Drafter", type: "Autonomous", status: "standby", desc: "Reads inbox, drafts replies, saves to Notion." },
    { id: 5, name: "Support Bot", type: "Voice", status: "offline", desc: "Answers customer support questions via phone." },
  ]

  const activity = [
    { time: "14:32:01", msg: "Research Agent fetched 3 competitor URLs", agent: "Research Agent" },
    { time: "14:31:44", msg: "Memory updated: competitor_pricing_q1", agent: "Research Agent" },
    { time: "14:28:11", msg: "Voice Agent received inbound call #0041", agent: "Sales Caller" },
    { time: "14:25:03", msg: "Workflow trigger fired: new CRM lead added", agent: "Lead Nurture" },
    { time: "14:18:55", msg: "File written to workspace: report_draft.md", agent: "Research Agent" },
    { time: "14:12:30", msg: "MCP tool called: web_search", agent: "Research Agent" },
    { time: "14:10:22", msg: "Email draft saved to Notion", agent: "Email Drafter" },
    { time: "14:05:01", msg: "Voice call ended — outcome: Qualified", agent: "Sales Caller" },
  ]

  const marketplace = [
    { id: 1, name: "AI Sales Caller", desc: "Full outbound cold-calling agent that qualifies and books.", rating: "★★★★★", installs: "847" },
    { id: 2, name: "Lead Nurture Engine", desc: "7-step email + SMS sequence triggered on new lead.", rating: "★★★★★", installs: "623" },
    { id: 3, name: "Research Analyst", desc: "Searches web, synthesizes findings, writes structured reports.", rating: "★★★★★", installs: "412" },
  ]

  const quickActions = [
    { icon: "⊕", name: "New Voice Agent", desc: "Build a calling agent", path: "/app/builder/voice" },
    { icon: "◈", name: "New Workflow", desc: "Automate a process", path: "/app/builder/workflow" },
    { icon: "⬡", name: "Browse Marketplace", desc: "Import a pre-built agent", path: "/app/marketplace/browse" },
    { icon: "⚙", name: "Cloud Computer", desc: "Open your workspace", path: "/app/files" },
  ]

  const mcpTools = [
    { name: "web_search", status: "Active" },
    { name: "code_execution", status: "Active" },
    { name: "file_system", status: "Active" },
    { name: "browser_control", status: "Active" },
    { name: "memory", status: "Active" },
  ]

  return (
    <div id="page-dashboard" className="flex h-full flex-col bg-[#0a0a0a] text-white">
      {/* TOP WELCOME BAR */}
      <header className="flex h-[56px] shrink-0 items-center justify-between border-b border-white/10 px-[28px]">
        <div className="flex flex-col">
          <h2 className="bold-title text-lg leading-tight">Good {getTimeOfDay()}, Jack.</h2>
          <div className="flex items-center gap-2 text-[13px] font-medium text-white/40">
            <span>Jack's Workspace</span>
            <span className="status-dot online" />
            <span>2 agents running</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/app/files")} className="btn-primary">
            Open Cloud Computer
          </button>
          <button onClick={() => navigate("/app/agents")} className="btn-ghost">
            + Create Agent
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-1 overflow-hidden">
        {/* LEFT COLUMN */}
        <div className="flex-1 overflow-y-auto p-[24px_20px_24px_28px]">
          {/* SECTION 1: STATS ROW */}
          <div className="grid grid-cols-4 gap-3">
            {stats.map((stat, i) => (
              <div key={i} className="card p-4">
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                  {stat.label}
                </div>
                <div className="mt-1 text-[28px] font-light leading-none">
                  {stat.value}
                </div>
                <div className="mt-2 text-[12px] font-medium text-white/40">
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>

          {/* SECTION 2: CLOUD COMPUTER WIDGET */}
          <div className="mt-8">
            <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
              YOUR CLOUD COMPUTER
            </div>
            <div className="card p-0">
              {/* Status Bar */}
              <div className="flex h-[48px] items-center justify-between border-b border-white/10 px-4">
                <div className="flex items-center gap-2 text-[14px] font-medium">
                  <span>Jack's Workspace</span>
                  <span className="status-dot online" />
                  <span className="text-white/60">Online</span>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => navigate("/app/files")} className="btn-ghost px-2 py-1 text-[10px]">Terminal</button>
                  <div className="h-4 w-[1px] bg-white/10 mx-1" />
                  <button onClick={() => navigate("/app/files")} className="btn-ghost px-2 py-1 text-[10px]">Files</button>
                  <div className="h-4 w-[1px] bg-white/10 mx-1" />
                  <button onClick={() => navigate("/app/files")} className="btn-primary px-3 py-1 text-[10px]">Open Full Workspace →</button>
                </div>
              </div>
              {/* Content */}
              <div className="flex gap-4 p-4">
                <div className="h-[130px] flex-1 overflow-hidden rounded-lg bg-black/40 p-3 font-mono text-[11px] leading-relaxed border border-white/5">
                  <div className="text-white/40">stone@workspace:~$ agent status</div>
                  <div className="text-white/80">[●] research_agent — RUNNING</div>
                  <div className="text-white/80">[●] voice_agent_01 — STANDBY</div>
                  <div className="flex items-center gap-1 text-white/40">
                    <span>stone@workspace:~$</span>
                    <span className="h-3 w-1.5 bg-white/40 animate-blink" />
                  </div>
                </div>
                <div className="flex w-[240px] flex-col gap-3">
                  {[
                    { label: "CPU", val: "12%", fill: 12 },
                    { label: "RAM", val: "1.2 / 4 GB", fill: 30 },
                    { label: "Storage", val: "840 MB / 10 GB", fill: 8 },
                  ].map((m) => (
                    <div key={m.label} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-medium">
                        <span className="text-white/40">{m.label}</span>
                        <span>{m.val}</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-white/5 border border-white/5">
                        <div 
                          className="h-full rounded-full bg-white/40" 
                          style={{ width: `${m.fill}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                  <div className="mt-auto flex items-center justify-between text-[12px] text-white/40">
                    <span>MCP: 5 tools active</span>
                    <button onClick={() => navigate("/app/settings")} className="hover:text-white transition-colors">Manage →</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: YOUR AGENTS */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                YOUR AGENTS
              </div>
              <button onClick={() => navigate("/app/agents")} className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white">
                View all →
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {agents.map((agent) => (
                <div 
                  key={agent.id} 
                  className="card flex w-[200px] shrink-0 cursor-pointer flex-col p-4 transition-all hover:bg-white/[0.04]"
                  onClick={() => navigate(`/app/agents`)}
                >
                  <div className="flex items-center justify-between">
                    <span className="tag">{agent.type}</span>
                    <span className={cn("status-dot", agent.status)} />
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold">{agent.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-normal text-white/40">
                    {agent.desc}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-white/40">Last run: 2h ago</span>
                    <button className="text-[12px] font-black uppercase tracking-widest text-white/60 hover:text-white">Open →</button>
                  </div>
                </div>
              ))}
              <div 
                className="card flex w-[200px] shrink-0 cursor-pointer flex-col items-center justify-center border-dashed bg-transparent p-4 transition-all hover:bg-white/5"
                onClick={() => navigate("/app/agents")}
              >
                <div className="text-[32px] font-light text-white/40">+</div>
                <div className="mt-1 text-[14px] font-medium">New Agent</div>
                <div className="text-[11px] text-white/40">Voice, Workflow, Autonomous</div>
              </div>
            </div>
          </div>

          {/* SECTION 4: RECENT ACTIVITY */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                RECENT ACTIVITY
              </div>
              <button onClick={() => navigate("/app/logs")} className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white">
                View all →
              </button>
            </div>
            <div className="space-y-0">
              {activity.map((item, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-white/5 py-2 text-[12px]">
                  <span className="w-[70px] shrink-0 font-mono text-[11px] text-white/40">{item.time}</span>
                  <span className="flex-1 text-[13px] text-white/80">{item.msg}</span>
                  <span className="tag shrink-0">{item.agent}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 5: MARKETPLACE PICKS */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                FROM THE MARKETPLACE
              </div>
              <button onClick={() => navigate("/app/marketplace/browse")} className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white">
                Browse all →
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {marketplace.map((item) => (
                <div key={item.id} className="card p-4">
                  <span className="tag text-[10px]">STONE AIO OFFICIAL</span>
                  <h3 className="mt-2 text-[15px] font-semibold">{item.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-normal text-white/40">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-[11px] text-white/40">
                      <span className="text-amber-400">{item.rating}</span>
                      <span className="ml-2">{item.installs} installs</span>
                    </div>
                    <button onClick={() => navigate(`/app/marketplace/browse`)} className="btn-ghost px-3 py-1 text-[10px]">Import →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — LIVE ACTIVITY PANEL */}
        <div className="w-[320px] shrink-0 overflow-y-auto p-[24px_28px_24px_0]">
          <div className="sticky top-0 space-y-8">
            {/* BLOCK 1: ACTIVE AGENTS */}
            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                ACTIVE AGENTS
              </div>
              <div className="space-y-3">
                <div className="card p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold">Research Agent</span>
                    <span className="status-dot online" />
                  </div>
                  <div className="mt-1"><span className="tag">Autonomous</span></div>
                  <div className="mt-2 text-[12px] italic text-white/40">"Scanning competitor pricing pages..."</div>
                  <div className="mt-3 h-[3px] w-full rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-white/40" style={{ width: '60%' }} />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => navigate("/app/agents")} className="btn-ghost px-3 py-1 text-[10px]">View</button>
                    <button onClick={() => alert("Agent paused. Frontend only.")} className="btn-ghost px-3 py-1 text-[10px] text-red-400 hover:text-red-300">Stop</button>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold">Sales Caller</span>
                    <span className="status-dot standby" />
                  </div>
                  <div className="mt-1"><span className="tag">Voice</span></div>
                  <div className="mt-2 text-[12px] italic text-white/40">"Waiting for inbound trigger..."</div>
                  <div className="mt-3 h-[3px] w-full rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-white/40" style={{ width: '0%' }} />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => navigate("/app/agents")} className="btn-ghost px-3 py-1 text-[10px]">View</button>
                    <button onClick={() => alert("Agent paused. Frontend only.")} className="btn-ghost px-3 py-1 text-[10px] text-red-400 hover:text-red-300">Stop</button>
                  </div>
                </div>
              </div>
            </div>

            {/* BLOCK 2: QUICK ACTIONS */}
            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                QUICK ACTIONS
              </div>
              <div className="space-y-2">
                {quickActions.map((action, i) => (
                  <div 
                    key={i} 
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:bg-white/5"
                    onClick={() => navigate(action.path)}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[16px] border border-white/5">
                      {action.icon}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <div className="text-[13px] font-semibold leading-tight">{action.name}</div>
                      <div className="truncate text-[11px] text-white/40">{action.desc}</div>
                    </div>
                    <div className="text-[14px] text-white/20">→</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOCK 3: MCP STATUS */}
            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                MCP TOOLS
              </div>
              <div className="card p-4">
                <div className="space-y-2">
                  {mcpTools.map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between text-[12px]">
                      <span className="font-mono text-white/80">{tool.name}</span>
                      <div className="flex items-center gap-2 text-[11px] text-white/40">
                        <span className="status-dot online" />
                        <span>{tool.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={() => navigate("/app/settings")} className="mt-4 text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white">
                  Manage MCP →
                </button>
              </div>
            </div>

            {/* BLOCK 4: WORKSPACE HEALTH */}
            <div>
              <div className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-white/40">
                WORKSPACE
              </div>
              <div className="card p-4 space-y-4">
                {[
                  { label: "CPU", val: "12%", fill: 12 },
                  { label: "RAM", val: "1.2 GB", fill: 30 },
                  { label: "Storage", val: "840 MB", fill: 8 },
                ].map((m) => (
                  <div key={m.label} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-medium">
                      <span className="text-white/40">{m.label}</span>
                      <span>{m.val}</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-white/5 border border-white/5">
                      <div className="h-full rounded-full bg-white/40" style={{ width: `${m.fill}%` }} />
                    </div>
                  </div>
                ))}
                <button onClick={() => navigate("/app/files")} className="mt-2 text-[11px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white">
                  Full Computer →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
