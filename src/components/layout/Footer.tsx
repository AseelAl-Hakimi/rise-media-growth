import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-heading font-bold mb-4">
              <span className="text-primary">Rise</span>
              <span className="text-foreground">Media</span>
              <span className="text-primary">TV</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Elevating personal brands through strategic social media management and content creation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/risemediatv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/risemediatv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/risemediatv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Services", "Pricing", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {["Social Media Management", "Content Creation", "Brand Growth", "Lead Generation"].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:risemediatvmgmt@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  risemediatvmgmt@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/risemediatvmgmt/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  Book a Strategy Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} RiseMediaTV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;