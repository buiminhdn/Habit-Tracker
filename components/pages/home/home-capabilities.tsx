import {
  Terminal,
  ShieldCheck,
  Activity,
  Globe,
  Infinity,
  FastForward,
  Workflow,
  Cpu,
} from "lucide-react";

function HomeCapabilities() {
  const capabilities = [
    { icon: Terminal, label: "Command Center" },
    { icon: ShieldCheck, label: "Private Roadmap" },
    { icon: Activity, label: "Momentum Engine" },
    { icon: Globe, label: "Cloud Synchronized" },
    { icon: Infinity, label: "Infinite Focus" },
    { icon: FastForward, label: "Frictionless UI" },
    { icon: Workflow, label: "Strategic Workflow" },
    { icon: Cpu, label: "Deep Processing" },
  ];

  return (
    <section className="mt-20 overflow-hidden bg-black py-12 md:mt-40 md:py-24">
      <div className="flex w-max animate-marquee">
        {capabilities.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-8 py-4 md:gap-8 md:px-16 md:py-6"
          >
            <item.icon className="text-emerald-400" size={20} />
            <span className="font-heading text-sm font-black uppercase tracking-widest text-white md:text-xl">
              {item.label}
            </span>
          </div>
        ))}
        {capabilities.map((item, i) => (
          <div
            key={`${i}-dup`}
            className="flex items-center gap-4 px-8 py-4 md:gap-8 md:px-16 md:py-6"
          >
            <item.icon className="text-emerald-400" size={20} />
            <span className="font-heading text-sm font-black uppercase tracking-widest text-white md:text-xl">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeCapabilities;
