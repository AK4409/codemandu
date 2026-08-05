import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", id: "features", label: "Features" },
  { href: "#about", id: "about", label: "About" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#portfolio", id: "portfolio", label: "Gallery" },
  { href: "#testimonials", id: "testimonials", label: "Testimonials" },
  { href: "#team", id: "team", label: "Team" },
  { href: "#contact", id: "contact", label: "Contact" },
];

// Underline that animates 0 -> 100% width on hover, and stays filled
// for whichever section is currently active while scrolling.
const NavLink = ({ href, label, isActive, onClick, className = "" }) => (
  <a
    href={href}
    onClick={onClick}
    className={`group relative text-xs font-semibold uppercase tracking-wider pb-1 transition-colors ${
      isActive ? "text-navy" : "text-gray-500 hover:text-navy"
    } ${className}`}
  >
    {label}
    <span
      className={`absolute left-0 bottom-0 h-0.5 bg-brand-gradient transition-all duration-300 ease-out ${
        isActive ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </a>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Counts a section active once it crosses the middle of the viewport,
      // so the underline updates as you scroll past each one.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#page-top"
            className="text-navy font-extrabold text-lg sm:text-2xl tracking-tight uppercase"
          >
            CodeMandu
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <NavLink key={link.id} {...link} isActive={activeSection === link.id} />
            ))}
          </div>

          <button
            className="md:hidden text-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 flex flex-col items-start gap-1">
          {links.map((link) => (
            <NavLink
              key={link.id}
              {...link}
              isActive={activeSection === link.id}
              onClick={() => setIsOpen(false)}
              className="py-2 text-sm"
            />
          ))}
        </div>
      )}
    </nav>
  );
};
