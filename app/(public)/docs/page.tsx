import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  FastForward,
  ArrowRight,
  ChevronRight,
  Mail,
  MessageSquare,
  Compass,
} from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-32 md:py-48">
      <article className="space-y-24">
        {/* Hero Section: System Handbook */}
        <section className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-100 bg-zinc-50 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="font-heading text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              System Manual v2.0
            </p>
          </div>
          <div className="space-y-6">
            <p className="font-heading text-6xl font-black uppercase leading-[0.9] tracking-tighter md:text-8xl">
              System <br />
              <span className="text-zinc-300">Handbook.</span>
            </p>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-500 md:text-xl text-pretty">
              Hướng dẫn toàn diện về hệ điều hành hiệu suất cao Shape Your Days.
              Được thiết kế để giúp bạn kiểm soát hoàn toàn thời gian, thói quen
              và mục tiêu chiến lược.
            </p>
          </div>
        </section>

        <Separator className="bg-zinc-200/60" />

        {/* 00: Quick Start */}
        <section className="space-y-12">
          <div className="space-y-4">
            <p className="font-heading text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              00 — Onboarding
            </p>
            <p className="font-heading text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl">
              Bắt đầu nhanh
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: <Target size={16} />, text: "Thiết lập Habit cơ bản" },
              { icon: <Zap size={16} />, text: "Xác định Primary Tasks" },
              { icon: <Compass size={16} />, text: "Xây dựng Roadmap năm" },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-zinc-100 bg-white p-5 transition-all hover:bg-zinc-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-white shadow-sm">
                  {step.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-600 leading-tight">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 01: Core Philosophy */}
        <section className="space-y-12">
          <div className="space-y-4">
            <p className="font-heading text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              01 — Philosophy
            </p>
            <p className="font-heading text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl">
              Triết lý cốt lõi
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-lg font-bold border-l-4 border-black pl-5 text-zinc-900">
                Local-First Performance
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                Dữ liệu của bạn được ưu tiên lưu trữ và xử lý trực tiếp trên
                thiết bị (Local-First). Điều này không chỉ đảm bảo tốc độ phản
                hồi 0ms mà còn bảo vệ quyền riêng tư tuyệt đối cho lộ trình cá
                nhân của bạn.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-bold border-l-4 border-zinc-200 pl-5 text-zinc-900">
                Behavioral Momentum
              </p>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                Hệ thống không đánh giá bạn qua số ngày liên tiếp (streaks) đơn
                thuần. Chúng tôi tính toán &quot;Momentum&quot; dựa trên chất
                lượng thực hiện và cường độ công việc, cho phép bạn linh hoạt
                nhưng vẫn giữ được kỷ luật.
              </p>
            </div>
          </div>
        </section>

        {/* 02: Structural Layers */}
        <section className="space-y-12">
          <div className="space-y-4">
            <p className="font-heading text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              02 — Logic
            </p>
            <p className="font-heading text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl">
              Hệ thống 4 tầng kiến trúc
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: <Target size={20} />,
                title: "Daily Execution",
                desc: "Quản lý 3-5 Primary Tasks và các Foundational Habits. Tập trung vào Efficiency Score hàng ngày.",
              },
              {
                icon: <Zap size={20} />,
                title: "Weekly Strategy",
                desc: "Theo dõi tiến độ mục tiêu tuần và thực hiện Strategic Review để tối ưu hóa chu kỳ tiếp theo.",
              },
              {
                icon: <BarChart3 size={20} />,
                title: "Monthly Intelligence",
                desc: "Phân tích Discipline Index và Activity Analytics. Xác định các điểm nghẽn trong hành vi.",
              },
              {
                icon: <Calendar size={20} />,
                title: "Yearly Roadmap",
                desc: "Kết nối tầm nhìn năm với các Quarterly Targets. Theo dõi Annual Momentum dài hạn.",
              },
            ].map((layer, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl border border-zinc-200 p-8 transition-all hover:bg-zinc-50 hover:border-black"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-900">{layer.icon}</span>
                    <p className="font-heading text-xl font-black uppercase text-zinc-900 tracking-tight">
                      {layer.title}
                    </p>
                  </div>
                  <p className="text-zinc-500 text-sm md:text-base max-w-xl">
                    {layer.desc}
                  </p>
                </div>
                <ChevronRight
                  size={20}
                  className="hidden md:block text-zinc-200 transition-transform group-hover:translate-x-1 group-hover:text-black"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 03: Feature Guide */}
        <section className="space-y-12">
          <div className="space-y-4">
            <p className="font-heading text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              03 — Features
            </p>
            <p className="font-heading text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl">
              Công cụ tối ưu hóa
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 rounded-4xl bg-zinc-900 p-10 text-white">
              <p className="font-heading text-xl font-black uppercase tracking-widest border-b border-white/10 pb-4">
                Daily Insight
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Khu vực chuyên biệt để ghi chép các &quot;Strategic
                Breakthroughs&quot;. Đừng để những bài học quý giá trôi đi, hãy
                lưu giữ chúng trong Journal để xây dựng trí tuệ thói quen.
              </p>
            </div>
            <div className="space-y-6 rounded-4xl bg-zinc-100 p-10 text-zinc-900 border border-zinc-200">
              <p className="font-heading text-xl font-black uppercase tracking-widest border-b border-black/5 pb-4">
                Reflection Engine
              </p>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Hệ thống câu hỏi phản hồi định kỳ được thiết kế để kích hoạt tư
                duy phản biện về hiệu suất của chính bạn. Đồng bộ hóa các bản
                Reflection vào Archive để theo dõi quá trình trưởng thành.
              </p>
            </div>
          </div>
        </section>

        {/* 04: Data Architecture */}
        <section className="rounded-4xl bg-emerald-50 p-8 md:p-14 space-y-8 border border-emerald-100/50">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-emerald-200">
            <ShieldCheck size={32} className="text-emerald-500" />
          </div>
          <div className="space-y-4">
            <p className="font-heading text-2xl font-black uppercase tracking-tight text-emerald-950">
              Security & Privacy
            </p>
            <p className="text-emerald-900/60 leading-relaxed text-sm md:text-base">
              Hệ thống hoạt động độc lập với Cloud. Dữ liệu chỉ được đồng bộ hóa
              thông qua lệnh &quot;Sync to Archive&quot; do chính bạn khởi tạo.
              Bạn có toàn quyền kiểm soát, xuất hoặc xóa bỏ lộ trình của mình
              bất cứ lúc nào.
            </p>
          </div>
        </section>

        {/* 05: Contact & Community */}
        <section className="space-y-12">
          <div className="space-y-4">
            <p className="font-heading text-xs font-black uppercase tracking-[0.3em] text-emerald-600">
              04 — Support
            </p>
            <p className="font-heading text-3xl font-black uppercase tracking-tight text-zinc-900 md:text-4xl">
              Kết nối với chúng tôi
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                icon: <Mail size={20} />,
                label: "Support",
                val: "support@shapeyourdays.com",
              },
              {
                icon: <MessageSquare size={20} />,
                label: "Discord",
                val: "discord.gg/shapeyourdays",
              },
            ].map((contact, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-3xl border border-zinc-200 p-8 transition-all hover:border-black bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 transition-colors group-hover:bg-black group-hover:text-white">
                    {contact.icon}
                  </div>
                  <p className="font-heading font-black uppercase tracking-[0.2em] text-[10px] text-zinc-400">
                    {contact.label}
                  </p>
                </div>
                <p className="font-bold text-zinc-900 break-all">
                  {contact.val}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden rounded-[40px] bg-black p-10 md:p-24 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.15),transparent)] pointer-events-none" />
          <div className="relative z-10 space-y-12">
            <div className="space-y-6">
              <p className="font-heading text-6xl font-black uppercase leading-[0.85] tracking-tighter md:text-7xl">
                Shape <br />
                Your Days.
              </p>
              <p className="mx-auto max-w-md text-zinc-400 text-xs font-bold uppercase tracking-[0.4em]">
                Strategic Execution Engine
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-16 rounded-xl bg-white px-12 text-sm font-black uppercase tracking-widest text-black hover:bg-emerald-400 transition-all active:scale-95 shadow-xl"
              >
                <Link href={ROUTES.AUTH.SIGNUP}>Bắt đầu ngay</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 rounded-xl border-white/10 bg-white/5 px-12 text-sm font-black uppercase tracking-widest text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <Link
                  href={ROUTES.PUBLIC.HOME}
                  className="flex items-center gap-2"
                >
                  <FastForward size={18} /> Xem Demo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </article>

      {/* Navigation Footer */}
      <nav className="mt-20 flex justify-center">
        <Link
          href={ROUTES.PUBLIC.HOME}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-black transition-colors"
        >
          Quay lại trang chủ{" "}
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </nav>
    </div>
  );
}
