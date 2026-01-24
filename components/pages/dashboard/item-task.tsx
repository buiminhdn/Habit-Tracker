"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { Task } from "@/types/app.type";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  showStatus?: boolean;
}

export function TaskItem({
  task,
  onToggle,
  showStatus = false,
}: TaskItemProps) {
  return (
    <div
      onClick={() => onToggle(task.id)}
      className={`flex items-center gap-4 p-4 rounded-lg border transition-colors duration-300 cursor-pointer group ${
        task.done
          ? "bg-zinc-50 border-transparent opacity-80"
          : `bg-white border-zinc-200 hover:border-zinc-300`
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          task.done
            ? "text-emerald-500"
            : `text-zinc-200 ${showStatus ? "group-hover:text-amber-500" : "group-hover:text-zinc-400"}`
        }`}
      >
        {task.done ? (
          <CheckCircle2 size={22} strokeWidth={2} />
        ) : (
          <Circle size={22} strokeWidth={2} />
        )}
      </div>
      <div>
        <p
          className={`font-semibold text-sm ${
            task.done ? "line-through text-zinc-400" : "text-zinc-900"
          }`}
        >
          {task.title}
        </p>
        {showStatus && (
          <span
            className={`text-[10px] font-bold uppercase tracking-widest ${
              task.done ? "text-emerald-500" : "text-amber-500"
            }`}
          >
            {task.done ? "Completed" : "Essential"}
          </span>
        )}
      </div>
    </div>
  );
}
