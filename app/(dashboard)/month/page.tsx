"use client";

import React, { useState } from "react";
import { Check, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useHabits } from "@/hooks/use-habits";
import { getCurrentYear, getDaysInMonth } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateObjectiveDialog } from "@/components/pages/dashboard/dialog-objective";
import { MonthWeekItem } from "@/components/pages/dashboard/item-month-week";
import { MonthGrid } from "@/components/pages/dashboard/item-month-grid";
import { MONTHS } from "@/constants/app.constant";

function MonthPage() {
  const currentActualMonth = new Date().getMonth() + 1;
  const [currentMonth, setCurrentMonth] = useState(currentActualMonth);
  const { habits, consistencyData, weeklyProgress, overallDiscipline } =
    useHabits(currentMonth);

  const daysCount = getDaysInMonth(currentMonth, getCurrentYear());
  const days = Array.from({ length: daysCount }, (_, i) => i + 1);

  const isPastMonth = currentMonth < new Date().getMonth() + 1;

  return (
    <div className="pb-10">
      <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 md:gap-6">
        <div>
          <p className="text-center md:text-left text-3xl font-bold tracking-tight text-zinc-900 mb-1">
            {MONTHS[currentMonth - 1]}{" "}
            <span className="text-zinc-300">/ {getCurrentYear()}</span>
          </p>
          <p className="text-zinc-500 mt-2 font-bold uppercase tracking-widest text-[10px]">
            Monthly behavioral consistency analysis.
          </p>
        </div>
        <MonthGrid
          currentMonth={currentMonth}
          onMonthChange={setCurrentMonth}
          maxMonth={currentActualMonth}
        />
      </header>

      <div className="grid grid-cols-6 gap-4 lg:gap-6 mb-10">
        <Card className="col-span-6 md:col-span-4 border-zinc-200 shadow-xs">
          <CardContent className="flex flex-col justify-center h-full">
            <div className="flex justify-between mb-5">
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                Discipline Index
              </p>
              <p className="text-3xl font-black">{overallDiscipline}%</p>
            </div>
            <Progress
              value={overallDiscipline}
              className="h-1.5 bg-zinc-200"
              indicatorClassName={
                overallDiscipline < 40
                  ? "bg-rose-500"
                  : overallDiscipline > 80
                    ? "bg-emerald-500"
                    : "bg-zinc-900"
              }
            />
          </CardContent>
        </Card>

        <div className="col-span-6 md:col-span-2 flex items-stretch gap-4 lg:gap-6">
          <Card className="border-zinc-200 shadow-xs flex-1">
            <CardContent className="flex flex-col items-center justify-center h-full">
              <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">
                Metrics
              </p>
              <p className="text-3xl font-bold">{habits.length}</p>
            </CardContent>
          </Card>

          {!isPastMonth && (
            <div className="flex-1">
              <CreateObjectiveDialog
                triggerLabel="Add Metric"
                triggerVariant="default"
                triggerClassName="w-full h-full rounded-xl"
                submitLabel="Initialize"
              />
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto border border-zinc-200 rounded-t-xl rounded-b-sm shadow-xs mb-10">
        <Table>
          <TableHeader className="bg-white">
            <TableRow>
              <TableHead className="p-4 w-44 sticky left-0 z-10 border-r text-xs font-bold uppercase tracking-widest text-zinc-400 bg-white">
                Metric Title
              </TableHead>
              <TableHead className="p-4w-20 text-center text-xs font-bold uppercase tracking-widest text-zinc-400">
                Eff%
              </TableHead>
              {days.map((day) => (
                <TableHead
                  key={day}
                  className="text-center text-xs font-bold text-zinc-400 min-w-9"
                >
                  {day}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {habits.map((habit) => (
              <TableRow key={habit.id}>
                <TableCell className="p-4 sticky left-0 z-10 bg-white border-r text-xs font-bold text-zinc-900">
                  {habit.title}
                </TableCell>
                <TableCell className="p-4 text-center">
                  <p
                    className={`font-semibold text-xs ${
                      habit.progress < 40
                        ? "text-rose-600"
                        : habit.progress > 80
                          ? "text-emerald-600"
                          : "text-zinc-900"
                    }`}
                  >
                    {habit.progress}%
                  </p>
                </TableCell>
                {days.map((day) => {
                  const done = habit.history[day - 1];
                  return (
                    <TableCell key={day}>
                      <div
                        className={`w-4 h-4 mx-auto rounded flex items-center justify-center ${
                          done
                            ? "bg-black text-white"
                            : "bg-zinc-50 border border-zinc-200"
                        }`}
                      >
                        {done && <Check size={10} strokeWidth={4} />}
                      </div>
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10">
        <Card className="lg:col-span-7 border-zinc-200 shadow-xs h-fit">
          <CardContent>
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-zinc-400" size={18} />
                <p className="font-bold text-base text-zinc-900 uppercase tracking-tight">
                  Activity Analytics
                </p>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                {daysCount}-day cycle
              </p>
            </div>
            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={consistencyData.slice(0, daysCount)}
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

                  <Bar
                    dataKey="value"
                    barSize={8}
                    radius={[2, 2, 2, 2]}
                    shape={(props) => {
                      const { x, y, width, height, payload } = props;
                      const fill = payload.value > 85 ? "#000000" : "#e4e4e7";
                      return (
                        <rect
                          x={x}
                          y={y}
                          width={width}
                          height={height}
                          rx={2}
                          ry={2}
                          fill={fill}
                        />
                      );
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
          {weeklyProgress.map((week) => (
            <MonthWeekItem
              key={week.id}
              label={week.label}
              progress={week.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonthPage;
