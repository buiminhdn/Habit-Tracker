"use client";

import { Rocket, Award, Activity, Zap } from "lucide-react";
import { ResponsiveContainer, BarChart, XAxis, Tooltip, Bar } from "recharts";
import { useYear } from "@/hooks/use-year";
import { useHabits } from "@/hooks/use-habits";
import { getCurrentYear } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/pages/dashboard/item-stat";
import { QuarterCard } from "@/components/pages/dashboard/item-quarter";
import { HabitItem } from "@/components/pages/dashboard/item-habit";

export default function YearPage() {
  const { monthlyData, quarters, overallProgress } = useYear();
  const { habitsOverall } = useHabits();

  return (
    <div className="pb-10">
      <header className="flex justify-between items-end mb-10">
        <div>
          <p className="text-3xl font-bold tracking-tight text-zinc-900">
            {getCurrentYear()} Roadmap
          </p>
          <p className="text-zinc-500 mt-2 font-bold uppercase tracking-widest text-[10px]">
            Long-term strategic growth trajectory.
          </p>
        </div>
        <div className="text-right">
          <p className="text-4xl font-bold text-black">{overallProgress}%</p>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">
            Goal completion
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10">
        <StatCard
          icon={<Rocket size={16} />}
          title="Strategic Targets"
          value="6"
          label="Active"
          progress={33}
        />
        <StatCard
          icon={<Award size={16} />}
          title="Consistency"
          value="8.5"
          label="Average Index"
          progress={85}
        />
        <StatCard
          icon={<Zap size={16} />}
          title="Annual Momentum"
          value="9.2"
          label="Excellent"
          progress={92}
        />
      </div>

      <Card className="shadow-xs border-zinc-200 mb-10">
        <CardContent>
          <p className="font-bold mb-6 text-zinc-900 uppercase tracking-widest">
            Habit Performance
          </p>
          <div className="flex flex-col gap-2">
            {habitsOverall.map((habit) => (
              <HabitItem key={habit.id} habit={habit} />
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 mb-10">
        <Card className="lg:col-span-3 shadow-xs border-zinc-200">
          <CardContent>
            <div className="flex items-center gap-3 mb-8">
              <Activity className="text-zinc-400" size={18} />
              <p className="font-bold text-base text-zinc-900 uppercase">
                Behavioral Cycle
              </p>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fontWeight: 600,
                      fill: "#A1A1AA",
                      dy: 4,
                    }}
                  />

                  <Tooltip
                    cursor={{ fill: "#f4f4f5" }}
                    formatter={(value) => [`${value ?? 0}%`, "Progress"]}
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #f4f4f5",
                      boxShadow: "none",
                    }}
                  />

                  <Bar
                    dataKey="value"
                    barSize={24}
                    radius={[2, 2, 0, 0]}
                    shape={(props) => {
                      const { x, y, width, height, payload } = props;

                      const fill = payload.value > 0 ? "#000000" : "#f4f4f5";

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
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 h-fit">
          {quarters.map((q) => (
            <QuarterCard key={q.id} quarter={q} />
          ))}
        </div>
      </div>
    </div>
  );
}
