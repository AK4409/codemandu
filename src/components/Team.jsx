import { SectionHeading } from "./SectionHeading";
import { FaLinkedinIn } from "react-icons/fa";

export const Team = ({ data }) => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Meet the Team"
          subtitle="The people behind the code — engineers, architects, and strategists driving your projects forward."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {data
            ? data.map((member, i) => (
                <div key={i} className="text-center group">
                  <div className="relative overflow-hidden rounded mb-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-44 object-cover"
                    />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="absolute inset-0 flex items-center justify-center bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-navy">
                        <FaLinkedinIn className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                  <h3 className="font-semibold text-navy text-sm">{member.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{member.job}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
