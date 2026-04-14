import { motion } from "framer-motion";

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
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="font-heading text-3xl lg:text-4xl font-extrabold text-accent">{s.value}</p>
            <p className="mt-1 text-sm text-primary-foreground/60">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
