import { SectionHeading } from "./SectionHeading";
import { Headset, Cloud, Users, Code2 } from "lucide-react";

const icons = {
  support: Headset,
  cloud: Cloud,
  team: Users,
  code: Code2,
};

export const Features = ({ data }) => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Features" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {data
            ? data.map((f, i) => {
                const Icon = icons[f.icon] || Code2;
                return (
                  <div key={i} className="text-center px-2">
                    <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-brand-gradient text-white mb-5">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold text-navy mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
