import { SectionHeading } from "./SectionHeading";
import { Code, Cloud, Lightbulb, ShieldCheck, BarChart3, Settings } from "lucide-react";

const icons = {
  code: Code,
  cloud: Cloud,
  consulting: Lightbulb,
  security: ShieldCheck,
  analytics: BarChart3,
  managed: Settings,
};

export const Services = ({ data }) => {
  return (
    <section id="services" className="py-20 bg-brand-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Our Services"
          subtitle="End-to-end IT solutions designed to keep your business secure, efficient, and ready to scale."
          dark
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {data
            ? data.map((s, i) => {
                const Icon = icons[s.icon] || Code;
                return (
                  <div key={i} className="text-center px-2">
                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white/15 text-white mb-5">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{s.name}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{s.text}</p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
