import React from "react";

interface DocsContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const DocsContactItem = ({
  icon,
  label,
  value,
}: DocsContactItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border-2 border-zinc-200 p-8 transition-all duration-500 hover:border-black hover:bg-zinc-50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-200/50">
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-900 transition-all duration-500 group-hover:scale-110 group-hover:bg-black group-hover:text-white group-hover:rotate-6">
            {icon}
          </div>
          <div className="space-y-0.5">
            <p className="font-heading font-black uppercase tracking-[0.2em] text-[10px] text-zinc-400 transition-colors group-hover:text-zinc-500">
              {label}
            </p>
            <div className="h-0.5 w-0 bg-black transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
        <p className="font-bold text-xl text-zinc-900 break-all transition-transform duration-500 group-hover:translate-x-1">
          {value}
        </p>
      </div>

      {/* Background Accent */}
      <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-zinc-100/50 transition-all duration-700 group-hover:scale-[3] group-hover:bg-zinc-200/20" />
    </div>
  );
};
