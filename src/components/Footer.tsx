import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy-deep text-primary-foreground section-padding py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Greystone College" className="h-16 w-auto mb-4" />
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Achieving Excellence Together. A community dedicated to academic excellence and personal growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Programs", "Admissions", "Financial Aid", "Student Life", "Alumni"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-widest text-gold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">123 College Avenue, Greyston, ON</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">info@greystoncollege.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Greyston College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
