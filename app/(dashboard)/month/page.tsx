"use client";

import React, { useState } from "react";
import { Check, TrendingUp, AlertCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useHabits } from "@/hooks/use-habits";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateObjectiveDialog } from "@/components/pages/dashboard/dialog-objective";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function MonthPage() {
  const [currentMonth, setCurrentMonth] = useState(1);
  const { habits, consistencyData, overallDiscipline } = useHabits();

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="pb-10">
      <header className="flex justify-between items-center mb-10 gap-6">
        <div>
          <p className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">
            {MONTHS[currentMonth - 1]}{" "}
            <span className="text-zinc-300">/ 2026</span>
          </p>
          <p className="text-zinc-500 mt-1 text-sm font-bold uppercase tracking-widest text-[10px]">
            Monthly behavioral consistency analysis.
          </p>
        </div>
        <div className="flex gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200">
          {MONTHS.map((month, i) => (
            <button
              key={month}
              onClick={() => setCurrentMonth(i + 1)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                currentMonth === i + 1
                  ? "bg-black text-white"
                  : "text-zinc-400 hover:text-black hover:bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-12 gap-5 mb-10">
        <Card className="col-span-8 border-zinc-200 shadow-xs">
          <CardContent className="flex flex-col justify-center h-full">
            <div className="flex justify-between items-center mb-5">
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                Discipline Index
              </p>
              <p className="text-3xl font-black text-black">
                {overallDiscipline}%
              </p>
            </div>
            <Progress
              value={overallDiscipline}
              className="h-1.5"
              indicatorClassName={
                overallDiscipline < 50
                  ? "bg-rose-500"
                  : overallDiscipline > 80
                    ? "bg-emerald-500"
                    : "bg-zinc-900"
              }
            />
          </CardContent>
        </Card>

        <Card className="col-span-2 border-zinc-200 shadow-xs">
          <CardContent className="flex flex-col items-center justify-center text-center h-full">
            <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">
              Metrics
            </p>
            <p className="text-3xl font-black text-black">{habits.length}</p>
          </CardContent>
        </Card>

        <div className="col-span-2">
          <CreateObjectiveDialog
            triggerLabel="Add Metric"
            triggerVariant="default"
            triggerClassName="w-full h-full rounded-xl"
            submitLabel="Initialize"
          />
        </div>
      </div>

      <div className="overflow-x-auto border border-zinc-200 rounded-t-xl rounded-b-sm shadow-xs overflow-hidden mb-10">
        <Table>
          <TableHeader className="bg-white">
            <TableRow className="">
              <TableHead className="p-4 w-44 bg-white sticky left-0 z-10 border-r text-xs font-bold uppercase tracking-widest text-zinc-400">
                Metric Title
              </TableHead>
              <TableHead className="w-20 text-center text-xs font-bold uppercase tracking-widest text-zinc-400">
                Eff%
              </TableHead>
              {days.map((day) => (
                <TableHead
                  key={day}
                  className="px-1.5 py-4 text-center text-xs font-bold text-zinc-300 min-w-8.75"
                >
                  {day}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {habits.map((habit) => (
              <TableRow
                key={habit.id}
                className="group transition-colors hover:bg-zinc-50"
              >
                <TableCell className="p-4 sticky left-0 z-10 bg-white group-hover:bg-zinc-50 border-r text-xs font-bold text-zinc-900">
                  {habit.title}
                </TableCell>
                <TableCell className="p-4 text-center">
                  <p
                    className={`font-semibold text-xs ${habit.progress < 50 ? "text-rose-600" : "text-zinc-900"}`}
                  >
                    {habit.progress}%
                  </p>
                </TableCell>
                {habit.history.map((done, idx) => (
                  <TableCell key={idx} className="px-1.5 py-4 text-center">
                    <div
                      className={`w-4 h-4 mx-auto rounded flex items-center justify-center transition-all ${
                        done
                          ? "bg-black text-white"
                          : "bg-zinc-50 border border-zinc-200"
                      }`}
                    >
                      {done && <Check size={10} strokeWidth={4} />}
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <Card className="col-span-12 lg:col-span-7 border-zinc-200 shadow-xs h-fit">
          <CardContent>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-zinc-400" size={16} />
                <p className="font-bold text-base text-zinc-900 uppercase tracking-tight">
                  Activity Analytics
                </p>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                31-day cycle
              </p>
            </div>
            <div className="h-60 w-full font-sans">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={consistencyData}
                  margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                >
                  <XAxis dataKey="day" hide />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fill: "#A1A1AA" }}
                  />
                  <Tooltip
                    cursor={{ fill: "#f4f4f5" }}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e4e4e7",
                      boxShadow: "none",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  />
                  <Bar dataKey="value" radius={[2, 2, 2, 2]} barSize={8}>
                    {consistencyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.value > 85 ? "#000000" : "#e4e4e7"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-5 bg-zinc-900 text-white border-none shadow-xl relative overflow-hidden">
          <CardContent className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400">
                <AlertCircle size={20} />
              </div>
              <p className="text-xl font-bold uppercase tracking-tight">
                System Insights
              </p>
            </div>

            <div className="space-y-6 flex-1">
              <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/30">
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2">
                  Momentum
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-black text-emerald-400">12</p>
                  <p className="text-zinc-400 text-xs font-bold uppercase">
                    Streak
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/30">
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2">
                    Stability
                  </p>
                  <p className="text-xl font-black text-amber-500 uppercase">
                    Optimal
                  </p>
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700/30">
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mb-2">
                    Priority
                  </p>
                  <p className="text-xl font-black text-rose-500 uppercase">
                    High
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="mt-10 bg-white text-black py-7 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-zinc-100 border-none shadow-lg"
            >
              Download Full Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MonthPage;
