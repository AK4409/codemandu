import { Check } from "lucide-react";

export const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
          alt="About"
          className="rounded shadow-lg w-full h-80 object-cover grayscale"
        />

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-navy mb-2">About Us</h2>
          <div className="w-14 h-0.5 bg-brand-gradient mb-6" />
          <p className="text-gray-500 leading-relaxed mb-8">{data ? data.paragraph : "Loading..."}</p>

          <h4 className="font-semibold text-navy mb-4">Why Choose Us?</h4>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {data &&
              [...data.Why, ...data.Why2].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-1" strokeWidth={2} />
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
