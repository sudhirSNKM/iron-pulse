import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 1999,
    yearly: 19999,
    features: ["Access to gym floor", "Basic equipment", "Locker room access", "2 group classes/week", "Fitness assessment"],
    popular: false,
  },
  {
    name: "Premium",
    monthly: 3999,
    yearly: 39999,
    features: ["Full gym access 24/7", "All equipment & zones", "Unlimited group classes", "1 PT session/month", "Nutrition consultation", "Sauna & steam room", "Priority booking"],
    popular: true,
  },
  {
    name: "Elite",
    monthly: 6999,
    yearly: 69999,
    features: ["Everything in Premium", "4 PT sessions/month", "Custom meal plans", "Recovery zone access", "Guest passes (2/month)", "VIP locker", "Exclusive events", "Online training portal"],
    popular: false,
  },
];

const Membership = () => {
  const [yearly, setYearly] = useState(false);
  const { ref, isInView } = useAnimateOnScroll(0.1);

  return (
    <PageTransition>
      <section className="pt-32 section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative z-10">
          <SectionHeading
            subtitle="Membership"
            title="Choose Your Plan"
            description="Flexible plans designed for every fitness journey."
          />

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`w-14 h-7 rounded-full relative transition-colors duration-300 ${yearly ? "bg-primary" : "bg-muted"}`}
            >
              <motion.div
                animate={{ x: yearly ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-6 h-6 rounded-full bg-foreground absolute top-0.5"
              />
            </button>
            <span className={`font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly <span className="text-primary text-xs">(Save 15%)</span>
            </span>
          </div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`rounded-2xl p-8 relative transition-all duration-500 hover:-translate-y-2 ${plan.popular
                    ? "glow-border-intense glass-card"
                    : "glass-card hover:glow-border"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black text-gradient">
                    ₹{(yearly ? plan.yearly : plan.monthly).toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-sm">/{yearly ? "year" : "month"}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check size={16} className="text-primary shrink-0" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-all duration-300 ${plan.popular
                      ? "bg-gradient-primary text-primary-foreground hover-glow hover:scale-105"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Membership;
