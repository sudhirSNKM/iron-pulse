import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const typingTexts = [
  "Build Your Legacy.",
  "Push Your Limits.",
  "Forge Your Strength.",
  "Become Unstoppable.",
];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          if (displayText === currentText) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentText.slice(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Iron Pulse Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="text-primary font-semibold uppercase tracking-[0.4em] text-sm mb-6"
        >
          Premium Fitness Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] mb-6"
        >
          Train Hard.
          <br />
          <span className="text-gradient">Stay Strong.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          className="text-xl md:text-2xl text-muted-foreground font-light h-10 mb-10"
        >
          <span>{displayText}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/membership"
            className="bg-gradient-primary text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover-glow hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Start Your Journey
          </Link>
          <Link
            to="/about"
            className="border border-foreground/30 text-foreground px-10 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3.5, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
