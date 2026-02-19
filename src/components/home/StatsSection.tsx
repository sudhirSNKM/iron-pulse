import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Users, Dumbbell, Trophy, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: 5000, suffix: "+", label: "Active Members" },
  { icon: Dumbbell, value: 150, suffix: "+", label: "Equipment" },
  { icon: Trophy, value: 50, suffix: "+", label: "Awards Won" },
  { icon: Calendar, value: 10, suffix: "+", label: "Years Experience" },
];

const Counter = ({ target, suffix, started }: { target: number; suffix: string; started: boolean }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 60);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [started, target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsSection = () => {
  const { ref, isInView } = useAnimateOnScroll(0.3);

  return (
    <section className="section-padding bg-card border-y border-border">
      <div ref={ref} className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <stat.icon size={36} className="text-primary mx-auto mb-4" />
            <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
              <Counter target={stat.value} suffix={stat.suffix} started={isInView} />
            </div>
            <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
