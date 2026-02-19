import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  { name: "Arjun Sharma", role: "Member since 2020", text: "Iron Pulse completely transformed my life. I lost 30kg and gained confidence I never knew I had. The trainers are world-class." },
  { name: "Priya Patel", role: "Member since 2021", text: "The energy at Iron Pulse is electric. Every session pushes me to be better. This isn't just a gym — it's a lifestyle." },
  { name: "Rahul Verma", role: "Member since 2019", text: "Best investment I've ever made. The facilities are top-notch and the community is incredibly supportive." },
  { name: "Ananya Singh", role: "Member since 2022", text: "I've tried many gyms, but nothing comes close to Iron Pulse. The personal training program is exceptional." },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const { ref, isInView } = useAnimateOnScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <SectionHeading subtitle="Testimonials" title="What Our Members Say" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="max-w-3xl mx-auto relative"
        >
          <Quote size={48} className="text-primary/20 mx-auto mb-6" />

          <div className="relative h-48 md:h-36">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 text-center"
              >
                <p className="text-lg md:text-xl text-foreground/90 italic leading-relaxed mb-6">
                  "{testimonials[current].text}"
                </p>
                <p className="font-bold text-primary">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
