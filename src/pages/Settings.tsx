import React from 'react';

export default function Settings() {
  return (
    <div className="h-full bg-[#fafafa] p-8 overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[24px] font-semibold text-slate-900 tracking-tight mb-8">Settings</h1>
        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-slate-500">Manage your account and application settings here.</p>
        </div>
      </div>
    </div>
  );
}
