"use client";

import React from "react";
import { CheckCircle2, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface ItemReflectionProps {
  text: string;
  answered?: boolean;
  onRemove: () => void;
}

export function ItemReflection({
  text,
  answered,
  onRemove,
}: ItemReflectionProps) {
  return (
    <Card className="shadow-xs border-zinc-200">
      <CardContent>
        <div className="flex gap-4 justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                answered
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-amber-50 text-amber-500"
              }`}
            >
              {answered ? <CheckCircle2 size={18} /> : <Sparkles size={18} />}
            </div>
            <p className="font-semibold sm:text-lg text-zinc-800">{text}</p>
          </div>
          <Button
            variant="ghost"
            onClick={onRemove}
            className="h-8 w-8 text-rose-600 bg-rose-100 hover:scale-105 transition-transform"
          >
            <X />
          </Button>
        </div>
        <Textarea
          className="min-h-35 p-4 text-zinc-700 font-medium placeholder:text-zinc-400 resize-none leading-relaxed text-sm"
          placeholder="Synthesize observations here..."
        />
      </CardContent>
    </Card>
  );
}
