export const SectionHeading = ({ title, subtitle, dark = false }) => (
  <div className="text-center mb-14">
    <h2
      className={`text-2xl sm:text-3xl font-bold tracking-wide uppercase ${
        dark ? "text-white" : "text-navy"
      }`}
    >
      {title}
    </h2>
    <div className="w-14 h-0.5 bg-brand-gradient mx-auto mt-3 mb-4" />
    {subtitle && (
      <p className={`max-w-xl mx-auto text-sm ${dark ? "text-white/80" : "text-gray-500"}`}>
        {subtitle}
      </p>
    )}
  </div>
);
