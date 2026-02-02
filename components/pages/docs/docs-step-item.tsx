import React from "react";

interface DocsStepItemProps {
  icon: React.ReactNode;
  text: string;
}

export const DocsStepItem = ({ icon, text }: DocsStepItemProps) => {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:bg-black hover:border-black hover:scale-105">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-sm transition-colors group-hover:bg-zinc-800">
        {icon}
      </div>
      <p className="text-xs font-bold uppercase tracking-wider text-zinc-600 leading-tight transition-colors group-hover:text-white">
        {text}
      </p>
    </div>
  );
};
