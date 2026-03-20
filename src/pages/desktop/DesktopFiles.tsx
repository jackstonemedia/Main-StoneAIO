import React, { useState } from 'react';
import { Folder, File, Search, Plus, MoreHorizontal, Download, Trash2, ArrowLeft, Home } from 'lucide-react';

export default function DesktopFiles() {
  const [currentPath, setCurrentPath] = useState(['Home']);
  
  const files = [
    { id: 1, name: 'Documents', type: 'folder', size: '--', date: 'Oct 24, 2023', items: 12 },
    { id: 2, name: 'Downloads', type: 'folder', size: '--', date: 'Oct 23, 2023', items: 5 },
    { id: 3, name: 'Projects', type: 'folder', size: '--', date: 'Oct 20, 2023', items: 8 },
    { id: 4, name: 'Q3_Financial_Report.pdf', type: 'file', size: '2.4 MB', date: 'Oct 24, 2023' },
    { id: 5, name: 'competitor_analysis.md', type: 'file', size: '14 KB', date: 'Oct 23, 2023' },
    { id: 6, name: 'dataset_clean.csv', type: 'file', size: '142 MB', date: 'Oct 22, 2023' },
  ];

  return (
    <div className="h-full bg-[#fafafa] flex flex-col">
      <div className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-slate-400">
            <button className="p-1 hover:bg-slate-100 rounded-md transition-colors disabled:opacity-50" disabled={currentPath.length === 1}>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="p-1 hover:bg-slate-100 rounded-md transition-colors" onClick={() => setCurrentPath(['Home'])}>
              <Home className="w-4 h-4" />
            </button>
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
            {currentPath.map((path, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="text-slate-300">/</span>}
                <span className={i === currentPath.length - 1 ? "text-slate-900" : "hover:text-slate-900 cursor-pointer transition-colors"}>
                  {path}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search files..." 
              className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[13px] w-[240px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-[13px] font-medium hover:bg-slate-800 transition-colors">
            <Plus className="w-4 h-4" />
            New
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-[minmax(200px,1fr)_120px_120px_80px] gap-4 px-4 py-2 border-b border-slate-200 text-[12px] font-medium text-slate-500 uppercase tracking-wider mb-2">
            <div>Name</div>
            <div>Date Modified</div>
            <div>Size</div>
            <div className="text-right">Actions</div>
          </div>
          
          <div className="flex flex-col gap-1">
            {files.map((file) => (
              <div 
                key={file.id} 
                className="group grid grid-cols-[minmax(200px,1fr)_120px_120px_80px] gap-4 px-4 py-3 bg-white border border-transparent hover:border-slate-200 hover:shadow-sm rounded-lg items-center transition-all cursor-pointer"
                onClick={() => file.type === 'folder' && setCurrentPath([...currentPath, file.name])}
              >
                <div className="flex items-center gap-3">
                  {file.type === 'folder' ? (
                    <Folder className="w-5 h-5 text-indigo-400 fill-indigo-400/20" />
                  ) : (
                    <File className="w-5 h-5 text-slate-400" />
                  )}
                  <span className="text-[13px] font-medium text-slate-700 group-hover:text-indigo-600 transition-colors truncate">
                    {file.name}
                  </span>
                </div>
                <div className="text-[13px] text-slate-500">{file.date}</div>
                <div className="text-[13px] text-slate-500">{file.type === 'folder' ? `${file.items} items` : file.size}</div>
                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {file.type === 'file' && (
                    <button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                  <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
