import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Dumbbell, Users, Heart, Zap, Target, Flame, Clock, Star } from "lucide-react";

const services = [
  { icon: Dumbbell, title: "Strength Training", front: "Build raw power with premium equipment.", back: "Our strength program includes powerlifting, Olympic lifting, and bodybuilding tracks. Personalized programming with progressive overload methodology.", features: ["Free weights & machines", "Expert spotting", "Custom programs"] },
  { icon: Users, title: "Group Classes", front: "High-energy group sessions for all levels.", back: "From spin classes to boot camps, our certified instructors lead 50+ weekly group sessions in a motivating environment.", features: ["50+ weekly classes", "All fitness levels", "Certified instructors"] },
  { icon: Heart, title: "Cardio Programs", front: "Transform your cardiovascular health.", back: "State-of-the-art cardio equipment with personalized heart-rate zone training and endurance building programs.", features: ["Heart rate monitoring", "Treadmills & bikes", "Rowing machines"] },
  { icon: Zap, title: "HIIT Workouts", front: "Maximum results in minimum time.", back: "Scientifically designed interval training that burns fat for up to 48 hours post-workout. 30-minute sessions that deliver.", features: ["30-min sessions", "Afterburn effect", "Full body workout"] },
  { icon: Target, title: "Personal Training", front: "One-on-one expert coaching.", back: "Our certified personal trainers create bespoke programs tailored to your unique goals, body type, and schedule.", features: ["1-on-1 attention", "Custom nutrition", "Progress tracking"] },
  { icon: Flame, title: "CrossFit", front: "Functional fitness for real life.", back: "WODs designed to build functional strength, agility, and endurance. Competition-ready or just getting started.", features: ["Daily WODs", "Olympic lifting", "Community driven"] },
  { icon: Clock, title: "Yoga & Recovery", front: "Restore, recover, and rebalance.", back: "From power yoga to restorative sessions, our wellness programs help you recover faster and prevent injury.", features: ["Multiple styles", "Meditation", "Flexibility"] },
  { icon: Star, title: "Nutrition Coaching", front: "Fuel your transformation.", back: "Our registered dietitians create personalized meal plans that complement your training goals. Macro tracking included.", features: ["Meal planning", "Macro tracking", "Supplements guide"] },
];

const Services = () => {
  const { ref, isInView } = useAnimateOnScroll(0.05);
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <PageTransition>
      <section className="pt-32 section-padding">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Services"
            title="World-Class Training"
            description="Comprehensive fitness programs designed to help you achieve any goal."
          />

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative h-80 cursor-pointer perspective-1000"
                onClick={() => setFlipped(flipped === i ? null : i)}
              >
                <AnimatePresence mode="wait">
                  {flipped !== i ? (
                    <motion.div
                      key="front"
                      initial={{ rotateY: 180 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: -90 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:glow-border transition-all duration-500"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <s.icon size={32} className="text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">{s.front}</p>
                      <span className="mt-4 text-xs text-primary uppercase tracking-wider">Tap to flip</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      initial={{ rotateY: -180 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: 90 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 rounded-xl p-6 flex flex-col justify-center glow-border-intense bg-card"
                    >
                      <h3 className="text-lg font-bold mb-3 text-gradient">{s.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-4">{s.back}</p>
                      <ul className="space-y-2">
                        {s.features.map((f, j) => (
                          <li key={j} className="text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;
