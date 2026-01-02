import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "971565330500";
const WHATSAPP_MESSAGE = "Hello Purple Royal Tourism, I would like to inquire about your visa services.";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const visaServices = [
  { name: "UAE Tourist Visa - 30 Days", href: "/services/uae-tourist-visa-30-days" },
  { name: "UAE Tourist Visa - 60 Days", href: "/services/uae-tourist-visa-60-days" },
  { name: "UAE Visa Renewal by Bus", href: "/services/uae-visa-renewal-bus" },
  { name: "Schengen Visa Assistance", href: "/services/schengen-visa" },
  { name: "Canada Visa Assistance", href: "/services/canada-visa" },
  { name: "USA Visa Assistance", href: "/services/usa-visa" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Document Checklists", href: "/document-checklists" },
];

export function Footer() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-royal flex items-center justify-center">
                  <span className="text-gold font-display font-bold text-2xl">P</span>
                </div>
                <div>
                  <span className="font-display text-xl font-semibold text-foreground block">
                    Purple Royal
                  </span>
                  <span className="text-xs text-muted-foreground tracking-wider uppercase">
                    Tourism
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your trusted Dubai-based visa and travel consultancy. We provide professional 
                assistance for UAE visas, global visa applications, and Umrah packages.
              </p>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" className="w-full">
                <Phone className="w-4 h-4" />
                WhatsApp: +971 56 533 0500
              </Button>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-6">
              Visa Services
            </h4>
            <ul className="space-y-3">
              {visaServices.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-6">
            <div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-6">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    CBD Bank Building, Sharaf DG Metro Station Exit 1, 
                    Office No 12, 3rd Floor, Al Mankhool, Dubai
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <a
                    href="tel:+971565330500"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    +971 56 533 0500
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <a
                    href="mailto:info@purpleroyaltourism.com"
                    className="text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    info@purpleroyaltourism.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-base font-semibold text-foreground mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-xs text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              {currentYear} Purple Royal Tourism. All rights reserved. 
              Dubai, United Arab Emirates.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Visa approval is subject to the relevant authorities. 
              We provide documentation assistance only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
