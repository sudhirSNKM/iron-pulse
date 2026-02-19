import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Dumbbell, Users, Heart, Zap, Target, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build raw power with our premium equipment and expert guidance." },
  { icon: Users, title: "Group Classes", desc: "High-energy group sessions that push you beyond your limits." },
  { icon: Heart, title: "Cardio Programs", desc: "Burn fat, build endurance, and transform your cardiovascular health." },
  { icon: Zap, title: "HIIT Workouts", desc: "Intense interval training for maximum results in minimum time." },
  { icon: Target, title: "Personal Training", desc: "One-on-one sessions tailored to your specific goals." },
  { icon: Flame, title: "CrossFit", desc: "Functional fitness that prepares you for anything life throws at you." },
];

const ServicesPreview = () => {
  const { ref, isInView } = useAnimateOnScroll(0.1);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="World-class training programs designed to transform your body and mind."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-8 group hover:glow-border transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
