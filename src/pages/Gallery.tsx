import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { X } from "lucide-react";

const categories = ["All", "Training", "Equipment", "Events", "Community"];

const images = [
  { src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop", category: "Training", label: "Strength Session" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop", category: "Equipment", label: "Premium Equipment" },
  { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop", category: "Events", label: "Competition Day" },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop", category: "Community", label: "Team Spirit" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", category: "Training", label: "CrossFit WOD" },
  { src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800&auto=format&fit=crop", category: "Equipment", label: "Free Weights Zone" },
  { src: "https://images.unsplash.com/photo-1574680096141-9c32f278d50f?q=80&w=800&auto=format&fit=crop", category: "Events", label: "Member Meetup" },
  { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop", category: "Community", label: "Group Energy" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", category: "Training", label: "Personal Training" },
  { src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop", category: "Equipment", label: "Cardio Floor" },
  { src: "https://images.unsplash.com/photo-1550345332-09e24f619717?q=80&w=800&auto=format&fit=crop", category: "Events", label: "Annual Awards" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop", category: "Community", label: "Success Stories" },
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
                className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${filter === cat
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
                  <img src={img.src} alt={img.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-300" />
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
              className="bg-secondary rounded-2xl max-w-4xl w-full mx-4 overflow-hidden glow-border relative"
            >
              <div className="aspect-video relative">
                <img src={filtered[lightbox]?.src} alt={filtered[lightbox]?.label} className="w-full h-full object-contain bg-black/50" />
              </div>
              <div className="p-4 bg-background/80 backdrop-blur absolute bottom-0 left-0 right-0">
                <div className="text-center">
                  <p className="text-2xl font-bold">{filtered[lightbox]?.label}</p>
                  <p className="text-primary">{filtered[lightbox]?.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
