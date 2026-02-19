import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Visit Us", value: "123 Fitness Street, Mumbai, Maharashtra 400001" },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
  { icon: Mail, label: "Email Us", value: "info@ironpulse.com" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM" },
];

const Contact = () => {
  const { ref, isInView } = useAnimateOnScroll(0.1);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="pt-32 section-padding">
        <div className="container-custom">
          <SectionHeading subtitle="Contact" title="Get In Touch" description="Ready to start your journey? Reach out to us." />

          <div ref={ref} className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="glass-card rounded-xl p-6 flex items-start gap-4 hover:glow-border transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{info.label}</h4>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="rounded-xl overflow-hidden border border-border h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783953402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Iron Pulse Location"
                />
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                {[
                  { label: "Full Name", type: "text", placeholder: "John Doe" },
                  { label: "Email", type: "email", placeholder: "john@example.com" },
                  { label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
                ].map((field, i) => (
                  <div key={i} className="relative group">
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your fitness goals..."
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-lg font-bold uppercase tracking-wider hover-glow hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {sending ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : sent ? (
                    "Message Sent! ✓"
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
