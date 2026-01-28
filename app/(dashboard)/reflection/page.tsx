"use client";

import React, { useState } from "react";
import {
  History,
  Plus,
  Calendar,
  CheckCircle2,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { useReflection } from "@/hooks/use-reflection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/ui/field";

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
  const [newQuestionText, setNewQuestionText] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currentQuestions =
    reflectionType === "MONTH" ? monthlyPrompts : yearlyPrompts;

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    addPrompt(reflectionType, newQuestionText);
    setNewQuestionText("");
    setIsDialogOpen(false);
  };

  return (
    <div className="pb-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <p className="text-3xl font-bold tracking-tight text-zinc-900">
            Analysis
          </p>
          <p className="text-zinc-500 mt-2 font-bold uppercase tracking-widest text-[10px]">
            Strategic growth synthesis and retrospective.
          </p>
        </div>
        <div className="flex bg-zinc-100 p-1 rounded-xl border border-zinc-200">
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
          <div className="flex items-center gap-2 pr-4 border-r border-zinc-300 text-zinc-400 shrink-0">
            <History size={20} />
          </div>
          {MONTHS.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedPeriod(m)}
              className={`px-4 py-1.5 rounded-full text-xs font-black transition-all shrink-0 ${
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

      <div className="space-y-6 max-w-4xl">
        <div className="flex justify-between items-center px-2 mb-2">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-zinc-400" />
            <p className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Metric Prompts ({currentQuestions.length})
            </p>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-600 hover:text-black"
              >
                <Plus size={12} /> Custom Prompt
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-xl uppercase font-bold text-zinc-900">
                  New {reflectionType === "MONTH" ? "Monthly" : "Yearly"} Prompt
                </DialogTitle>
              </DialogHeader>
              <form className="space-y-6 pt-4" onSubmit={handleAddQuestion}>
                <Field>
                  <Label className="text-xs font-black uppercase tracking-widest text-zinc-400">
                    Prompt Statement
                  </Label>
                  <Textarea
                    value={newQuestionText}
                    onChange={(e) => setNewQuestionText(e.target.value)}
                    placeholder="e.g. Analyze recurrent bottlenecks..."
                    className="h-28 rounded-xl"
                  />
                </Field>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full py-6 rounded-xl font-bold text-xs uppercase tracking-widest"
                  >
                    Set Prompt
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {currentQuestions.map((q) => (
            <Card key={q.id} className="shadow-xs border-zinc-100">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner transition-colors ${
                        q.answered
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-zinc-50 text-zinc-400"
                      }`}
                    >
                      {q.answered ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <Sparkles size={18} />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-lg tracking-tight text-zinc-900 leading-tight">
                        {q.text}
                      </p>
                      {q.answered && (
                        <span className="text-xs font-black text-emerald-600 uppercase tracking-widest mt-0.5 block">
                          Finalized Entry
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removePrompt(reflectionType, q.id)}
                    className="h-8 w-8 text-zinc-200 hover:text-rose-500 hover:bg-rose-50 transition-all"
                  >
                    <X size={16} />
                  </Button>
                </div>
                <Textarea
                  className="min-h-35 bg-zinc-50/50 border-transparent rounded-xl p-6 text-zinc-700 font-medium placeholder:text-zinc-300 focus:border-zinc-200 focus:bg-white focus:outline-none transition-all resize-none leading-relaxed text-sm"
                  placeholder="Synthesize observations here..."
                />
              </CardContent>
            </Card>
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

      <div className="mt-12 flex justify-end max-w-4xl">
        <Button className="px-10 py-6 rounded-xl font-bold bg-black text-white hover:bg-zinc-800 transition-all shadow-xl text-xs uppercase tracking-widest">
          <Zap className="mr-2 h-4 w-4" />
          Sync to Archive
        </Button>
      </div>
    </div>
  );
}
