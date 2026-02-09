import React from "react";

interface DocsFeatureItemProps {
  title: string;
  description: string;
  variant?: "dark" | "light";
}

export const DocsFeatureItem = ({
  title,
  description,
  variant = "light",
}: DocsFeatureItemProps) => {
  if (variant === "dark") {
    return (
      <div className="space-y-6 rounded-2xl bg-zinc-900 p-10 text-white transition-all duration-300 hover:bg-black hover:scale-105">
        <p className="font-heading text-xl font-bold uppercase tracking-widest border-b border-white/10 pb-4">
          {title}
        </p>
        <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-2xl bg-zinc-100 p-10 text-zinc-900 border-2 border-zinc-200 transition-all duration-300 hover:bg-white hover:border-black hover:scale-105">
      <p className="font-heading text-xl font-bold uppercase tracking-widest border-b border-black/5 pb-4">
        {title}
      </p>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
