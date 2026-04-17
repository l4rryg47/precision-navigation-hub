import heroImg from "@/assets/hero-drilling.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
    <img
      src={heroImg}
      alt="Drilling rig at dusk"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

    <div className="container relative z-10 mx-auto px-4 py-32">
      <motion.div
        className="max-w-2xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground shadow-glow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Shield className="w-4 h-4" />
          Industry-Leading Precision
        </motion.div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
          Drilling &amp; Hydraulic{" "}
          <span className="text-gradient-accent">Navigation</span>{" "}
          Specialists
        </h1>

        <p className="text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
          Delivering advanced directional drilling, MWD/LWD, and hydraulic motor solutions with
          unmatched accuracy and safety across global operations.
        </p>

        <motion.div
          className="flex flex-wrap gap-4 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8"
            asChild
          >
            <a href="#services">
              Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
