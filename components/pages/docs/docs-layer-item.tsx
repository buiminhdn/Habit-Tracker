import React from "react";
import { ChevronRight } from "lucide-react";

interface DocsLayerItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const DocsLayerItem = ({
  icon,
  title,
  description,
}: DocsLayerItemProps) => {
  return (
    <div className="group flex items-center justify-between gap-6 rounded-xl border-2 border-zinc-100 bg-white p-8 transition-colors duration-300 hover:bg-zinc-50 hover:border-black">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-zinc-900">{icon}</span>
          <p className="font-heading text-xl font-black uppercase text-zinc-900 tracking-tight">
            {title}
          </p>
        </div>
        <p className="text-zinc-500 text-base">{description}</p>
      </div>
      <ChevronRight
        size={20}
        className="text-zinc-300 transition-transform group-hover:translate-x-2 group-hover:text-black"
      />
    </div>
  );
};
