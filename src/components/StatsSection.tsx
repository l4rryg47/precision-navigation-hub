const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "1,200+", label: "Wells Drilled" },
  { value: "40+", label: "Countries Served" },
  { value: "99.7%", label: "Safety Record" },
];

const StatsSection = () => (
  <section className="bg-gradient-dark py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl lg:text-4xl font-extrabold text-accent">{s.value}</p>
            <p className="mt-1 text-sm text-primary-foreground/60">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
