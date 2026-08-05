import { ArrowRight } from "lucide-react";

export const Header = ({ data }) => {
  return (
    <header id="page-top" className="relative pt-16 md:pt-36">
      <div
        className="relative min-h-[600px] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-white/40" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy leading-tight uppercase">
              {data ? data.title : "Loading..."}
            </h1>
            <p className="mt-6 text-white-600 max-w-md">
              {data ? data.paragraph : "Loading..."}
            </p>
            <a
              href="#features"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full text-white text-sm font-semibold uppercase tracking-wide bg-brand-gradient hover:opacity-90 transition-opacity"
            >
              Learn More
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
