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

function SectionCapabilities() {
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
    <section className="py-24 bg-black overflow-hidden mt-40">
      <div className="flex w-max animate-marquee">
        {capabilities.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-16 py-6">
            <item.icon className="text-emerald-400" size={24} />
            <span className="text-white text-xl font-black uppercase tracking-widest font-heading">
              {item.label}
            </span>
          </div>
        ))}
        {capabilities.map((item, i) => (
          <div key={`${i}-dup`} className="flex items-center gap-8 px-16 py-6">
            <item.icon className="text-emerald-400" size={24} />
            <span className="text-white text-xl font-black uppercase tracking-widest font-heading">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionCapabilities;
