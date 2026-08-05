import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

export const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="What Our Clients Say" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {data
            ? data.map((t, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                  <Quote className="w-6 h-6 text-brand mb-3" fill="currentColor" strokeWidth={0} />
                  <p className="text-gray-500 text-sm italic leading-relaxed">{t.text}</p>
                  <div className="flex items-center gap-3 mt-5">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover shrink-0"
                    />
                    <p className="text-navy text-sm font-semibold">{t.name}</p>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
