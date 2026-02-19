import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Link } from "react-router-dom";

const CTABanner = () => {
  const { ref, isInView } = useAnimateOnScroll();

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-background to-primary/10" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="container-custom relative text-center"
      >
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
          Ready to <span className="text-gradient">Transform</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
          Your journey to a stronger, healthier you starts with a single step. Take it today.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gradient-primary text-primary-foreground px-12 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover-glow hover:scale-105 transition-all duration-300 animate-pulse-glow"
        >
          Get Started Now
        </Link>
      </motion.div>
    </section>
  );
};

export default CTABanner;
