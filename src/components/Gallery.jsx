
import { SectionHeading } from "./SectionHeading";

export const Gallery = ({ data }) => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Gallery" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leonec." />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          {data
            ? data.map((item, i) => (
                <div key={i} className="relative overflow-hidden group">
                  <img src={item.smallImage} alt={item.title} className="w-full h-48 sm:h-56 object-cover" />
                  <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" aria-label={`Project: ${item.title}`} >
                    <span className="text-white text-lg font-semibold">{item.title}</span>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
