import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { X } from "lucide-react";

const categories = ["All", "Training", "Equipment", "Events", "Community"];

const images = [
  { src: "", category: "Training", label: "Strength Session" },
  { src: "", category: "Equipment", label: "Premium Equipment" },
  { src: "", category: "Events", label: "Competition Day" },
  { src: "", category: "Community", label: "Team Spirit" },
  { src: "", category: "Training", label: "CrossFit WOD" },
  { src: "", category: "Equipment", label: "Free Weights Zone" },
  { src: "", category: "Events", label: "Member Meetup" },
  { src: "", category: "Community", label: "Group Energy" },
  { src: "", category: "Training", label: "Personal Training" },
  { src: "", category: "Equipment", label: "Cardio Floor" },
  { src: "", category: "Events", label: "Annual Awards" },
  { src: "", category: "Community", label: "Success Stories" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isInView } = useAnimateOnScroll(0.05);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <PageTransition>
      <section className="pt-32 section-padding">
        <div className="container-custom">
          <SectionHeading subtitle="Gallery" title="Inside Iron Pulse" description="A glimpse into our world-class facilities and community." />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={ref} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.label}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  onClick={() => setLightbox(i)}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
                >
                  <div className={`bg-secondary ${i % 3 === 0 ? "aspect-square" : i % 3 === 1 ? "aspect-[3/4]" : "aspect-video"} flex items-center justify-center`}>
                    <span className="text-4xl font-black text-muted-foreground/10">{img.label.charAt(0)}</span>
                  </div>
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-lg">{img.label}</p>
                      <p className="text-primary text-sm">{img.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-foreground">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-secondary rounded-2xl max-w-2xl w-full aspect-video flex items-center justify-center glow-border"
            >
              <div className="text-center">
                <p className="text-2xl font-bold">{filtered[lightbox]?.label}</p>
                <p className="text-primary">{filtered[lightbox]?.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
