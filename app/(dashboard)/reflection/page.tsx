"use client";

import React, { useState } from "react";
import { History, Calendar, Zap } from "lucide-react";
import { useReflection } from "@/hooks/use-reflection";
import { Button } from "@/components/ui/button";
import { DialogReflectionPrompt } from "@/components/pages/dashboard/dialog-reflection-prompt";
import { ItemReflection } from "@/components/pages/dashboard/item-reflection";

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default function ReflectionPage() {
  const { monthlyPrompts, yearlyPrompts, addPrompt, removePrompt } =
    useReflection();
  const [reflectionType, setReflectionType] = useState<"MONTH" | "YEAR">(
    "MONTH",
  );
  const [selectedPeriod, setSelectedPeriod] = useState("JAN");

  const currentQuestions =
    reflectionType === "MONTH" ? monthlyPrompts : yearlyPrompts;

  return (
    <div className="pb-10">
      <header className="flex justify-between mb-10 gap-6">
        <div>
          <p className="text-3xl font-bold tracking-tight text-zinc-900">
            Reflection
          </p>
          <p className="text-zinc-500 mt-2 font-bold uppercase tracking-widest text-[10px]">
            Strategic growth synthesis and retrospective.
          </p>
        </div>
        <div className="flex bg-zinc-100 p-1 h-fit rounded-xl border border-zinc-200">
          <button
            onClick={() => setReflectionType("MONTH")}
            className={`px-6 py-2 rounded-lg border text-xs font-bold uppercase tracking-widest ${
              reflectionType === "MONTH"
                ? "bg-white text-black border-zinc-200"
                : "text-zinc-400 hover:text-black border-transparent"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setReflectionType("YEAR")}
            className={`px-6 py-2 rounded-lg border text-xs font-bold uppercase tracking-widest ${
              reflectionType === "YEAR"
                ? "bg-white text-black border-zinc-200"
                : "text-zinc-400 hover:text-black border-transparent"
            }`}
          >
            Yearly
          </button>
        </div>
      </header>

      {reflectionType === "MONTH" && (
        <div className="flex gap-2 mb-10 overflow-x-auto pb-3 no-scrollbar">
          <div className="flex items-center pr-4 border-r-2 mr-2 border-zinc-200 text-zinc-400">
            <History size={24} />
          </div>
          {MONTHS.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedPeriod(m)}
              className={`px-4 py-1.5 rounded-full text-xs tracking-wider font-semibold ${
                selectedPeriod === m
                  ? "bg-black text-white"
                  : "text-zinc-400 hover:text-black hover:bg-zinc-50"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-6">
        <div className="flex justify-between items-center pl-2 mb-2">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-zinc-400" />
            <p className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Reflection Prompts ({currentQuestions.length})
            </p>
          </div>

          <DialogReflectionPrompt
            reflectionType={reflectionType}
            onAdd={addPrompt}
          />
        </div>

        <div className="space-y-6">
          {currentQuestions.map((q) => (
            <ItemReflection
              key={q.id}
              text={q.text}
              answered={q.answered}
              onRemove={() => removePrompt(reflectionType, q.id)}
            />
          ))}
        </div>

        {currentQuestions.length === 0 && (
          <div className="py-20 text-center bg-zinc-50/40 rounded-2xl border border-dashed border-zinc-200">
            <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest">
              No prompts defined.
            </p>
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-end">
        <Button className="py-6 rounded-lg font-bold text-xs uppercase tracking-widest">
          <Zap className="mr-2 h-4 w-4" />
          Sync to Archive
        </Button>
      </div>
    </div>
  );
}
