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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/ui/field";

interface AddTaskDialogProps {
  onAdd?: (title: string) => void;
}

export function AddTaskDialog({ onAdd }: AddTaskDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd?.(title);
      setTitle("");
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="uppercase text-xs font-bold"
        >
          <Plus size={12} /> New Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl uppercase font-bold">
            Create New Objective
          </DialogTitle>
        </DialogHeader>
        <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
          <Field>
            <Label
              htmlFor="task-title"
              className="text-xs font-semibold uppercase tracking-widest text-zinc-400"
            >
              Objective Description
            </Label>
            <Input
              id="task-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Complete review"
              className="py-5 rounded-lg"
            />
          </Field>
          <DialogFooter>
            <Button type="submit" className="w-full py-5.5 rounded-lg">
              Set Goal
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
