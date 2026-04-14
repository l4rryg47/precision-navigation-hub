import { motion, type Variant } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const hidden: Variant = { opacity: 0, y: 40 };
const visible: Variant = { opacity: 1, y: 0 };

const AnimatedSection = ({ children, className, delay = 0 }: AnimatedSectionProps) => (
  <motion.div
    initial={hidden}
    whileInView={visible}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
