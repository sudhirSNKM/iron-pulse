import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

interface Props {
  subtitle: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

const SectionHeading = ({ subtitle, title, description, align = "center" }: Props) => {
  const { ref, isInView } = useAnimateOnScroll();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-5xl font-black uppercase mt-3 mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
      <div className="neon-line w-20 mx-auto mt-6" style={align === "left" ? { marginLeft: 0 } : {}} />
    </motion.div>
  );
};

export default SectionHeading;
