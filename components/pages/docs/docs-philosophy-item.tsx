import React from "react";

interface DocsPhilosophyItemProps {
  title: string;
  description: string;
}

export const DocsPhilosophyItem = ({
  title,
  description,
}: DocsPhilosophyItemProps) => {
  return (
    <div className="group space-y-4">
      <p className="text-lg font-bold border-l-4 border-zinc-200 pl-5 text-zinc-900 transition-colors duration-300 group-hover:border-black">
        {title}
      </p>
      <p className="text-zinc-500 leading-relaxed transition-colors duration-300 group-hover:text-zinc-900">
        {description}
      </p>
    </div>
  );
};
