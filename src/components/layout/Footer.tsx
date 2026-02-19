import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black tracking-wider text-gradient mb-4">
              IRON PULSE
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transform your body, elevate your mind. Premium fitness experience since 2015.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover-glow"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Trainers", "Membership", "Gallery", "Blog"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-foreground">Hours</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p>Mon - Fri: 5:00 AM - 11:00 PM</p>
              <p>Saturday: 6:00 AM - 10:00 PM</p>
              <p>Sunday: 7:00 AM - 8:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-6 text-foreground">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>123 Fitness Street, Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <span>info@ironpulse.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="neon-line mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Iron Pulse Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
