import React from "react";

interface DocsSectionHeaderProps {
  index: string;
  title: string;
}

export const DocsSectionHeader = ({ index, title }: DocsSectionHeaderProps) => {
  return (
    <div className="space-y-4">
      <p className="font-heading text-xs font-bold uppercase tracking-widest text-emerald-600">
        {index}
      </p>
      <p className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-zinc-900">
        {title}
      </p>
    </div>
  );
};
