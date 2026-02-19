import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, User, ArrowRight } from "lucide-react";

const featuredPost = {
  title: "The Science Behind High-Intensity Interval Training",
  excerpt: "Discover why HIIT is the most efficient way to burn fat and build cardiovascular endurance, backed by the latest research.",
  date: "Feb 15, 2025",
  author: "Dr. Vikram Rathore",
  category: "Training Science",
};

const posts = [
  { title: "5 Essential Exercises for Building Core Strength", date: "Feb 10, 2025", author: "Meera Kapoor", category: "Workouts" },
  { title: "Nutrition Myths Debunked: What Actually Works", date: "Feb 5, 2025", author: "Neha Gupta", category: "Nutrition" },
  { title: "Recovery: Why Rest Days Are Non-Negotiable", date: "Jan 28, 2025", author: "Arjun Das", category: "Recovery" },
  { title: "How to Set and Achieve Your Fitness Goals in 2025", date: "Jan 20, 2025", author: "Kavya Sharma", category: "Motivation" },
  { title: "The Benefits of Morning vs Evening Workouts", date: "Jan 15, 2025", author: "Rohan Mehta", category: "Lifestyle" },
  { title: "Supplements Guide: What You Actually Need", date: "Jan 10, 2025", author: "Neha Gupta", category: "Nutrition" },
];

const Blog = () => {
  const { ref, isInView } = useAnimateOnScroll(0.1);

  return (
    <PageTransition>
      <section className="pt-32 section-padding">
        <div className="container-custom">
          <SectionHeading subtitle="Blog" title="Latest Articles" description="Expert insights, training tips, and nutrition advice." />

          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12 mb-12 group hover:glow-border transition-all duration-500 cursor-pointer"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{featuredPost.category}</span>
            <h2 className="text-2xl md:text-4xl font-black mt-3 mb-4 group-hover:text-gradient transition-all">
              {featuredPost.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-3xl">{featuredPost.excerpt}</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User size={14} /> {featuredPost.author}</span>
              <span className="flex items-center gap-2"><Calendar size={14} /> {featuredPost.date}</span>
            </div>
          </motion.div>

          {/* Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:glow-border transition-all duration-500"
              >
                <div className="aspect-video bg-secondary flex items-center justify-center group-hover:bg-muted transition-colors">
                  <span className="text-3xl font-black text-muted-foreground/10">{post.category.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  <h3 className="font-bold mt-2 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
