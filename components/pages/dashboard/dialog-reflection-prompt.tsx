"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { ReflectionType } from "@/types/reflection.type";

interface DialogReflectionPromptProps {
  reflectionType: ReflectionType;
  onAdd: (type: ReflectionType, text: string) => void;
}

export function DialogReflectionPrompt({
  reflectionType,
  onAdd,
}: DialogReflectionPromptProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newQuestionText, setNewQuestionText] = useState("");

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    onAdd(reflectionType, newQuestionText);
    setNewQuestionText("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="uppercase text-xs font-bold"
        >
          <Plus size={12} /> Custom Prompt
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl uppercase font-bold">
            New {reflectionType === "monthly" ? "Monthly" : "Yearly"} Prompt
          </DialogTitle>
        </DialogHeader>
        <form className="space-y-4 pt-2" onSubmit={handleAddQuestion}>
          <Field>
            <Label className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Prompt Statement
            </Label>
            <Textarea
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              placeholder="e.g. Analyze recurrent bottlenecks..."
              className="h-28 rounded-xl resize-none"
            />
          </Field>
          <DialogFooter>
            <Button type="submit" className="w-full py-5.5 rounded-lg">
              Set Prompt
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
