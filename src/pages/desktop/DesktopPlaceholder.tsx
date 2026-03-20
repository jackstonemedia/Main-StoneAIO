import React from 'react';

export default function DesktopPlaceholder({ title }: { title: string }) {
  return (
    <div className="h-full bg-white p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-8">{title}</h1>
        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-slate-500">The {title} module is currently under construction.</p>
        </div>
      </div>
    </div>
  );
}
