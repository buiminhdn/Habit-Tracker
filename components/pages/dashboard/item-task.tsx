"use client";

import { CheckCircle2, Circle, Trash2 } from "lucide-react";
import { Task } from "@/types/task.type";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete?: (id: string) => void;
  showStatus?: boolean;
}

export function TaskItem({
  task,
  onToggle,
  onDelete,
  showStatus = false,
}: TaskItemProps) {
  return (
    <div
      onClick={() => onToggle(task.id)}
      className={`flex items-center gap-4 p-4 rounded-lg border transition-colors duration-300 cursor-pointer group ${
        task.is_completed
          ? "bg-zinc-50 border-transparent opacity-80"
          : `bg-white border-zinc-200 hover:border-zinc-300`
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          task.is_completed
            ? "text-emerald-500"
            : `text-zinc-200 ${showStatus ? "group-hover:text-amber-500" : "group-hover:text-zinc-400"}`
        }`}
      >
        {task.is_completed ? (
          <CheckCircle2 size={22} strokeWidth={2} />
        ) : (
          <Circle size={22} strokeWidth={2} />
        )}
      </div>
      <div className="flex flex-col flex-1">
        <p
          className={`font-semibold text-sm ${
            task.is_completed ? "line-through text-zinc-400" : "text-zinc-900"
          }`}
        >
          {task.title}
        </p>
        {showStatus && (
          <span
            className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${
              task.is_completed ? "text-emerald-500" : "text-amber-500"
            }`}
          >
            {task.is_completed ? "Completed" : "Essential"}
          </span>
        )}
      </div>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
          className="text-zinc-300 hover:text-rose-500 transition-colors duration-200"
        >
          <Trash2 size={18} />
        </button>
      )}
    </div>
  );
}
