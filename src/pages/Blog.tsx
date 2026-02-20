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
  image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
};

const posts = [
  { title: "5 Essential Exercises for Building Core Strength", date: "Feb 10, 2025", author: "Meera Kapoor", category: "Workouts", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" },
  { title: "Nutrition Myths Debunked: What Actually Works", date: "Feb 5, 2025", author: "Neha Gupta", category: "Nutrition", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop" },
  { title: "Recovery: Why Rest Days Are Non-Negotiable", date: "Jan 28, 2025", author: "Arjun Das", category: "Recovery", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop" },
  { title: "How to Set and Achieve Your Fitness Goals in 2025", date: "Jan 20, 2025", author: "Kavya Sharma", category: "Motivation", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&auto=format&fit=crop" },
  { title: "The Benefits of Morning vs Evening Workouts", date: "Jan 15, 2025", author: "Rohan Mehta", category: "Lifestyle", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop" },
  { title: "Supplements Guide: What You Actually Need", date: "Jan 10, 2025", author: "Neha Gupta", category: "Nutrition", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=800&auto=format&fit=crop" },
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
            className="relative rounded-2xl overflow-hidden mb-12 group glow-border cursor-pointer h-[500px]"
          >
            <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">{featuredPost.category}</span>
              <h2 className="text-2xl md:text-4xl font-black mb-4 group-hover:text-primary transition-colors max-w-3xl">
                {featuredPost.title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl line-clamp-2 md:line-clamp-none">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><User size={14} /> {featuredPost.author}</span>
                <span className="flex items-center gap-2"><Calendar size={14} /> {featuredPost.date}</span>
              </div>
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
                className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:glow-border transition-all duration-500 flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                  <h3 className="font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2 flex-grow">{post.title}</h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
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
