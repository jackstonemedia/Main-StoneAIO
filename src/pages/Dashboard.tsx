import React from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Monitor, GitBranch, Folder, Clock, Plus, Play, Square, MoreHorizontal, Terminal, Box } from "lucide-react"

export default function Dashboard() {
  const navigate = useNavigate()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"

  const workspaces = [
    { id: 1, name: "Personal Desktop", type: "Local", status: "active", lastActive: "Just now" },
    { id: 2, name: "Development Env", type: "Cloud", status: "sleeping", lastActive: "2h ago" },
    { id: 3, name: "Data Processing", type: "Cloud", status: "offline", lastActive: "1d ago" },
  ]

  const workflows = [
    { id: 1, name: "Daily Report Generator", trigger: "Schedule", status: "active", lastRun: "10m ago" },
    { id: 2, name: "Lead Nurture Sequence", trigger: "Webhook", status: "active", lastRun: "1h ago" },
    { id: 3, name: "Invoice Processor", trigger: "Email", status: "paused", lastRun: "2d ago" },
  ]

  const recentFiles = [
    { name: "Q3_Financial_Report.pdf", type: "Document", size: "2.4 MB", time: "10:42 AM" },
    { name: "competitor_analysis.md", type: "Markdown", size: "14 KB", time: "Yesterday" },
    { name: "dataset_clean.csv", type: "Data", size: "142 MB", time: "Oct 24" },
  ]

  return (
    <div className="h-full bg-[#fafafa] text-slate-900 font-sans pb-[80px] overflow-y-auto custom-scrollbar">
      <div className="mx-auto max-w-[900px] px-[40px]">
        
        {/* HEADER */}
        <header className="pt-[60px] mb-[56px]">
          <div className="flex items-center justify-between">
            <h1 className="text-[32px] font-light tracking-[-0.02em]">{greeting}, Jack.</h1>
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => navigate("/desktop/home")} 
                className="bg-slate-900 text-white hover:bg-slate-800 font-medium text-[13px] h-9 px-4 rounded-lg shadow-sm"
              >
                <Monitor className="w-4 h-4 mr-2" />
                Open Desktop
              </Button>
            </div>
          </div>
          <div className="mt-[12px] flex items-center gap-3 text-[13px] text-slate-500">
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              <span>System Online</span>
            </div>
            <span>·</span>
            <span>2 Workspaces Active</span>
            <span>·</span>
            <span>4 Workflows Running</span>
          </div>
        </header>

        {/* CLOUD COMPUTER STRIP */}
        <section className="mb-[64px]">
          <div 
            onClick={() => navigate("/desktop/terminal")}
            className="bg-slate-900 rounded-xl p-4 flex items-center gap-4 shadow-sm border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-800 shrink-0">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex-1 font-mono text-[12px] text-emerald-400/70 truncate flex items-center gap-3">
              <span className="text-emerald-400">root@cloud-os:~#</span>
              <span>tail -f /var/log/workflows.log</span>
              <span className="animate-pulse">_</span>
            </div>
            <div className="shrink-0 text-[12px] text-slate-400 font-mono">
              CPU: 12% | MEM: 2.4GB
            </div>
          </div>
        </section>

        {/* WORKSPACES */}
        <section className="mb-[64px]">
          <div className="mb-[24px] flex items-center justify-between">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Your Workspaces</h2>
            <button className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-medium">View all</button>
          </div>
          <div className="flex flex-col">
            {workspaces.map((workspace) => (
              <div key={workspace.id} className="group flex items-center border-b border-slate-200 py-[16px] hover:bg-slate-50/50 transition-colors -mx-4 px-4 rounded-lg">
                <div className="w-[240px] shrink-0 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0">
                    <Box className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-slate-900">{workspace.name}</div>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="text-[11px] text-slate-500">{workspace.type}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-[24px] flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${workspace.status === 'active' ? 'bg-emerald-500' : workspace.status === 'sleeping' ? 'bg-amber-400' : 'bg-slate-300'}`} />
                  <span className="text-[13px] text-slate-500 capitalize">{workspace.status}</span>
                </div>
                <div className="flex shrink-0 items-center gap-[16px]">
                  <span className="text-[12px] text-slate-400 w-[100px] text-right">{workspace.lastActive}</span>
                  <button 
                    onClick={() => navigate("/desktop/home")}
                    className="text-[13px] font-medium text-indigo-600 hover:text-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Connect →
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center py-[16px] -mx-4 px-4">
              <button className="flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors">
                <Plus className="w-4 h-4" /> Create New Workspace
              </button>
            </div>
          </div>
        </section>

        {/* WORKFLOW AUTOMATIONS */}
        <section className="mb-[64px]">
          <div className="mb-[24px] flex items-center justify-between">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Workflow Automations</h2>
            <button className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-medium">View all</button>
          </div>
          <div className="flex flex-col">
            {workflows.map((workflow) => (
              <div key={workflow.id} className="group flex items-center border-b border-slate-200 py-[16px] hover:bg-slate-50/50 transition-colors -mx-4 px-4 rounded-lg">
                <div className="w-[240px] shrink-0 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <GitBranch className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[14px] font-medium text-slate-900">{workflow.name}</div>
                    <div className="mt-0.5 text-[11px] text-slate-500">Trigger: {workflow.trigger}</div>
                  </div>
                </div>
                <div className="flex-1 px-[24px] flex items-center gap-2">
                  <span className={`text-[12px] px-2 py-0.5 rounded-full font-medium ${
                    workflow.status === 'active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    {workflow.status}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-[16px]">
                  <span className="text-[12px] text-slate-400 w-[100px] text-right">{workflow.lastRun}</span>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
                      {workflow.status === 'active' ? <Square className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-center py-[16px] -mx-4 px-4">
              <button className="flex items-center gap-2 text-[13px] font-medium text-slate-500 hover:text-slate-900 transition-colors">
                <Plus className="w-4 h-4" /> Create Workflow
              </button>
            </div>
          </div>
        </section>

        {/* RECENT FILES */}
        <section>
          <div className="mb-[24px] flex items-center justify-between">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Recent Files</h2>
            <button 
              onClick={() => navigate("/desktop/files")}
              className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-medium"
            >
              Open Explorer
            </button>
          </div>
          <div className="flex flex-col">
            {recentFiles.map((file, i) => (
              <div key={i} className="group flex items-center border-b border-slate-200 py-[12px] hover:bg-slate-50/50 transition-colors -mx-4 px-4 rounded-lg">
                <div className="w-[300px] shrink-0 flex items-center gap-3">
                  <Folder className="w-4 h-4 text-slate-400" />
                  <span className="text-[13px] font-medium text-slate-700">{file.name}</span>
                </div>
                <div className="flex-1 text-[13px] text-slate-500">
                  {file.type}
                </div>
                <div className="flex shrink-0 items-center gap-[24px]">
                  <span className="text-[12px] text-slate-400">{file.size}</span>
                  <span className="text-[12px] text-slate-400 w-[80px] text-right">{file.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
