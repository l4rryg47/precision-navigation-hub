import mwdImg from "@/assets/mwd-equipment.jpg";
import controlImg from "@/assets/control-room.jpg";
import motorImg from "@/assets/hydraulic-motor.jpg";
import { Compass, Monitor, Wrench, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const services = [
  {
    icon: Compass,
    title: "Directional Drilling",
    desc: "Precision well placement with advanced survey and steering technologies for complex trajectories.",
    img: mwdImg,
  },
  {
    icon: Monitor,
    title: "MWD / LWD Services",
    desc: "Real-time measurement and logging while drilling to optimize wellbore positioning and formation evaluation.",
    img: controlImg,
  },
  {
    icon: Wrench,
    title: "Hydraulic Motor Systems",
    desc: "High-performance downhole motor solutions engineered for reliability in extreme drilling conditions.",
    img: motorImg,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">What We Do</p>
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
          Specialist Drilling Services
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Comprehensive solutions from wellbore planning to execution, powered by cutting-edge technology.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="group rounded-xl overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center mt-4 text-sm font-semibold text-accent hover:underline"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
