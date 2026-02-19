import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Eye, Award, TrendingUp } from "lucide-react";

const timeline = [
  { year: "2015", title: "The Beginning", desc: "Iron Pulse was founded with a vision to create a premium fitness experience." },
  { year: "2017", title: "First Expansion", desc: "Opened our second location with state-of-the-art equipment." },
  { year: "2019", title: "Award Winning", desc: "Recognized as the Best Fitness Center in the region." },
  { year: "2021", title: "Digital Revolution", desc: "Launched online training programs reaching 10,000+ members." },
  { year: "2024", title: "Global Vision", desc: "Expanding to 5 cities with our premium fitness brand." },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower every individual to unlock their full physical potential through world-class training and unwavering support." },
  { icon: Eye, title: "Our Vision", desc: "To become the most trusted and transformative fitness brand, inspiring millions to live stronger, healthier lives." },
  { icon: Award, title: "Excellence", desc: "We pursue excellence in everything — from our facilities and equipment to our trainers and member experience." },
  { icon: TrendingUp, title: "Growth", desc: "We believe in continuous growth — both for our members and our team. Every day is a chance to be better." },
];

const About = () => {
  const { ref: valRef, isInView: valVisible } = useAnimateOnScroll(0.1);
  const { ref: tlRef, isInView: tlVisible } = useAnimateOnScroll(0.1);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-[0.3em]">About Us</span>
            <h1 className="text-4xl md:text-6xl font-black uppercase mt-3 mb-6">
              More Than <br /><span className="text-gradient">A Gym</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Iron Pulse Fitness was born from a belief that fitness should be an experience — not just a routine. 
              We combine cutting-edge equipment, expert trainers, and an electric atmosphere to create 
              a space where champions are forged.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Since 2015, we've helped over 5,000 members transform their bodies and minds. 
              Our approach is simple: provide world-class facilities, hire the best trainers, 
              and build a community that pushes each other to be extraordinary.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden glow-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                <span className="text-8xl font-black text-primary/10">IP</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary rounded-xl p-6 text-primary-foreground">
              <div className="text-3xl font-black">10+</div>
              <div className="text-sm font-medium">Years Strong</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeading subtitle="Our Values" title="What Drives Us" />
          <div ref={valRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={valVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl p-8 hover:glow-border transition-all duration-500 group perspective-1000"
              >
                <v.icon size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading subtitle="Our Journey" title="The Iron Pulse Story" />
          <div ref={tlRef} className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={tlVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-xs shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
