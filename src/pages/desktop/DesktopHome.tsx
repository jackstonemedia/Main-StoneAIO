import React from 'react';
import { Monitor, Cpu, HardDrive, Activity, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DesktopHome() {
  const navigate = useNavigate();
  
  return (
    <div className="h-full bg-[#fafafa] p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-[24px] font-semibold text-slate-900 tracking-tight">Personal Desktop</h1>
            <p className="text-[14px] text-slate-500 mt-1">Instance: dev-env-01 • US-East</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-[13px] font-medium border border-emerald-200">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Running
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 text-slate-500 mb-3">
              <Cpu className="w-5 h-5" />
              <span className="text-[13px] font-medium uppercase tracking-wider">CPU Usage</span>
            </div>
            <div className="text-[32px] font-light text-slate-900">12%</div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-indigo-500 h-full w-[12%]" />
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 text-slate-500 mb-3">
              <Activity className="w-5 h-5" />
              <span className="text-[13px] font-medium uppercase tracking-wider">Memory</span>
            </div>
            <div className="text-[32px] font-light text-slate-900">2.4 <span className="text-[16px] text-slate-500">/ 8 GB</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-emerald-500 h-full w-[30%]" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 text-slate-500 mb-3">
              <HardDrive className="w-5 h-5" />
              <span className="text-[13px] font-medium uppercase tracking-wider">Storage</span>
            </div>
            <div className="text-[32px] font-light text-slate-900">45 <span className="text-[16px] text-slate-500">/ 256 GB</span></div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-amber-500 h-full w-[18%]" />
            </div>
          </div>
        </div>

        <h2 className="text-[16px] font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => navigate('/desktop/terminal')}
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-slate-900">Open Terminal</div>
                <div className="text-[13px] text-slate-500">Access command line interface</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
          </button>

          <button 
            onClick={() => navigate('/desktop/files')}
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-slate-900">Browse Files</div>
                <div className="text-[13px] text-slate-500">Manage workspace storage</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
          </button>
          
          <button 
            onClick={() => navigate('/desktop/agents')}
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-slate-900">Manage Agents</div>
                <div className="text-[13px] text-slate-500">Configure autonomous workers</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
          </button>

          <button 
            onClick={() => navigate('/desktop/workflows')}
            className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-indigo-300 hover:shadow-sm transition-all group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium text-slate-900">View Workflows</div>
                <div className="text-[13px] text-slate-500">Monitor automated processes</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
