import React from 'react';

export default function Marketplace() {
  return (
    <div className="h-full bg-[#fafafa] p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-8">Marketplace</h1>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-slate-500">Discover new apps, agents, and workflows.</p>
        </div>
      </div>
    </div>
  );
}
