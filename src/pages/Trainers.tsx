import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Instagram, Twitter, X } from "lucide-react";

const trainers = [
  {
    name: "Vikram Rathore",
    role: "Head Trainer / Strength",
    experience: "12 years",
    speciality: "Powerlifting, Olympic Lifting",
    bio: "Former national powerlifting champion with a passion for transforming beginners into competitors.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Meera Kapoor",
    role: "Yoga & Wellness",
    experience: "8 years",
    speciality: "Vinyasa, Recovery",
    bio: "Certified yoga therapist who believes in the powerful connection between mind and body.",
    image: "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Arjun Das",
    role: "CrossFit Coach",
    experience: "10 years",
    speciality: "CrossFit, HIIT",
    bio: "Level 3 CrossFit certified coach who has trained multiple regional competitors.",
    image: "https://images.unsplash.com/photo-1534367507873-ee2f79ec1896?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Neha Gupta",
    role: "Nutrition & Cardio",
    experience: "6 years",
    speciality: "Nutrition, Endurance",
    bio: "Registered dietitian and marathon runner combining science-based nutrition with cardiovascular training.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Rohan Mehta",
    role: "Boxing & MMA",
    experience: "9 years",
    speciality: "Boxing, Kickboxing",
    bio: "Former amateur boxing champion bringing combat sports training to fitness enthusiasts.",
    image: "https://images.unsplash.com/photo-1549476464-37392f717551?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Kavya Sharma",
    role: "Group Fitness",
    experience: "7 years",
    speciality: "Zumba, Aerobics",
    bio: "Energetic instructor who turns every session into a celebration of movement and music.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop"
  },
];

const Trainers = () => {
  const { ref, isInView } = useAnimateOnScroll(0.1);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PageTransition>
      <section className="pt-32 section-padding">
        <div className="container-custom">
          <SectionHeading
            subtitle="Our Team"
            title="Elite Trainers"
            description="Certified professionals dedicated to your success."
          />

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onClick={() => setSelected(i)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <div className="aspect-square bg-secondary overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-3">
                      {[Instagram, Twitter].map((Icon, j) => (
                        <span key={j} className="w-9 h-9 rounded-full border border-foreground/30 flex items-center justify-center text-foreground hover:text-primary hover:border-primary transition-colors">
                          <Icon size={16} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-lg">{t.name}</h3>
                <p className="text-primary text-sm font-medium">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl p-8 max-w-md w-full glow-border relative"
            >
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
              <div className="w-24 h-24 rounded-full overflow-hidden mb-6 mx-auto glow-border">
                <img
                  src={trainers[selected].image}
                  alt={trainers[selected].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{trainers[selected].name}</h3>
              <p className="text-primary text-center text-sm font-medium mb-4">{trainers[selected].role}</p>
              <p className="text-muted-foreground text-sm text-center leading-relaxed mb-4">{trainers[selected].bio}</p>
              <div className="flex justify-between text-sm">
                <div><span className="text-muted-foreground">Experience:</span> <span className="font-medium">{trainers[selected].experience}</span></div>
                <div><span className="text-muted-foreground">Focus:</span> <span className="font-medium">{trainers[selected].speciality}</span></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Trainers;
