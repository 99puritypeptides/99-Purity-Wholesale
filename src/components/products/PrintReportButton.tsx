'use client';

import { Printer } from 'lucide-react';

interface PrintReportButtonProps {
  label: string;
}

export default function PrintReportButton({ label }: PrintReportButtonProps) {
  return (
    <button 
      onClick={() => typeof window !== 'undefined' && window.print()}
      className="inline-flex items-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border border-white/5 transition-all active:scale-95"
    >
      <Printer className="w-3.5 h-3.5" />
      <span>{label}</span>
    </button>
  );
}
