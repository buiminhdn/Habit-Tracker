import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Zap,
  Target,
  BarChart3,
  Calendar,
  Mail,
  MessageSquare,
  Compass,
} from "lucide-react";
import { DocsSectionHeader } from "@/components/pages/docs/docs-section-header";
import { DocsStepItem } from "@/components/pages/docs/docs-step-item";
import { DocsPhilosophyItem } from "@/components/pages/docs/docs-philosophy-item";
import { DocsLayerItem } from "@/components/pages/docs/docs-layer-item";
import { DocsContactItem } from "@/components/pages/docs/docs-contact-item";
import { DocsFeatureItem } from "@/components/pages/docs/docs-feature-item";
import { DocsSecurityInfo } from "@/components/pages/docs/docs-security-info";
import { DocsCTA } from "@/components/pages/docs/docs-cta";

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-32 sm:pt-48">
      <article className="space-y-16 sm:space-y-24">
        {/* Hero Section: System Handbook */}
        <section className="flex flex-col gap-4 items-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-100 bg-white px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <p className="font-heading text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
              System Manual v2.0
            </p>
          </div>
          <div className="space-y-6">
            <p className="flex flex-wrap items-center justify-center font-heading text-6xl sm:text-8xl font-bold uppercase tracking-tighter">
              System <br />
              <span className="text-zinc-300 ml-6">Handbook.</span>
            </p>
            <p className="sm:text-xl text-center font-medium leading-relaxed text-zinc-500">
              Hướng dẫn toàn diện về hệ điều hành hiệu suất cao Shape Your Days.
              <br className="hidden sm:block" />
              Được thiết kế để giúp bạn kiểm soát hoàn toàn thời gian, thói quen
              và mục tiêu chiến lược.
            </p>
          </div>
        </section>

        <Separator className="bg-zinc-200/60" />

        {/* 00: Quick Start */}
        <section className="space-y-8 sm:space-y-12">
          <DocsSectionHeader index="00 — Onboarding" title="Bắt đầu nhanh" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { icon: <Target size={16} />, text: "Thiết lập Habit cơ bản" },
              { icon: <Zap size={16} />, text: "Xác định Primary Tasks" },
              { icon: <Compass size={16} />, text: "Xây dựng Roadmap năm" },
            ].map((step, i) => (
              <DocsStepItem key={i} icon={step.icon} text={step.text} />
            ))}
          </div>
        </section>

        {/* 01: Core Philosophy */}
        <section className="space-y-8 sm:space-y-12">
          <DocsSectionHeader index="01 — Philosophy" title="Triết lý cốt lõi" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <DocsPhilosophyItem
              title="Local-First Performance"
              description="Dữ liệu của bạn được ưu tiên lưu trữ và xử lý trực tiếp trên thiết bị (Local-First). Điều này không chỉ đảm bảo tốc độ phản hồi 0ms mà còn bảo vệ quyền riêng tư tuyệt đối cho lộ trình cá nhân của bạn."
            />
            <DocsPhilosophyItem
              title="Behavioral Momentum"
              description='Hệ thống không đánh giá bạn qua số ngày liên tiếp (streaks) đơn thuần. Chúng tôi tính toán "Momentum" dựa trên chất lượng thực hiện và cường độ công việc, cho phép bạn linh hoạt nhưng vẫn giữ được kỷ luật.'
            />
          </div>
        </section>

        {/* 02: Structural Layers */}
        <section className="space-y-8 sm:space-y-12">
          <DocsSectionHeader
            index="02 — Logic"
            title="Hệ thống 4 tầng kiến trúc"
          />
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
              <DocsLayerItem
                key={i}
                icon={layer.icon}
                title={layer.title}
                description={layer.desc}
              />
            ))}
          </div>
        </section>

        {/* 03: Feature Guide */}
        <section className="space-y-8 sm:space-y-12">
          <DocsSectionHeader index="03 — Features" title="Công cụ tối ưu hóa" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <DocsFeatureItem
              variant="dark"
              title="Daily Insight"
              description="Khu vực chuyên biệt để ghi chép các 'Strategic Breakthroughs'. Đừng để những bài học quý giá trôi đi, hãy lưu giữ chúng trong Journal để xây dựng trí tuệ thói quen."
            />
            <DocsFeatureItem
              title="Reflection Engine"
              description="Hệ thống câu hỏi phản hồi định kỳ được thiết kế để kích hoạt tư duy phản biện về hiệu suất của chính bạn. Đồng bộ hóa các bản Reflection vào Archive để theo dõi quá trình trưởng thành."
            />
          </div>
        </section>

        {/* 04: Data Architecture */}
        <DocsSecurityInfo />

        {/* 05: Contact & Community */}
        <section className="space-y-8 sm:space-y-12">
          <DocsSectionHeader
            index="04 — Support"
            title="Kết nối với chúng tôi"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              {
                icon: <Mail size={20} />,
                label: "Support",
                val: "support@shapeyourdays.com",
              },
              {
                icon: <MessageSquare size={20} />,
                label: "Community",
                val: "discord.gg/shapeyourdays",
              },
            ].map((contact, i) => (
              <DocsContactItem
                key={i}
                icon={contact.icon}
                label={contact.label}
                value={contact.val}
              />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <DocsCTA />
      </article>
    </div>
  );
}
