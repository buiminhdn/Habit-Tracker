"use client";

import { Rocket, Award, Activity, Zap } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  Tooltip,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import { useYear } from "@/hooks/use-year";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatCard } from "@/components/pages/dashboard/item-stat";
import { QuarterCard } from "@/components/pages/dashboard/item-quarter";

export default function YearPage() {
  const { monthlyData, statusDistribution, quarters, overallProgress } =
    useYear();

  return (
    <div className="pb-10">
      <header className="flex justify-between items-end mb-10">
        <div>
          <p className="text-3xl font-bold tracking-tight text-zinc-900">
            2026 Roadmap
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 mb-8">
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
                    cursor={{ fill: "#fcfcfd" }}
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

        <Card className="lg:col-span-2 shadow-xs border-zinc-200">
          <CardContent>
            <p className="font-bold text-base mb-6 text-zinc-900 uppercase">
              Status Distribution
            </p>
            <div className="h-64 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusDistribution}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={4}
                    stroke="none"
                  />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 ml-4">
                {statusDistribution.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.fill }}
                    ></div>
                    <div>
                      <p className="font-bold text-zinc-900 leading-tight">
                        {item.value}
                      </p>
                      <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider leading-tight whitespace-nowrap">
                        {item.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {quarters.map((q) => (
          <QuarterCard key={q.id} quarter={q} />
        ))}
      </div>
    </div>
  );
}
