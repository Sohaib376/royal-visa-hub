import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  whatsappMessage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

const WHATSAPP_NUMBER = "971565330500";

export function PageHero({
  title,
  subtitle,
  description,
  showCTA = false,
  whatsappMessage = "Hello Purple Royal Tourism, I would like to inquire about your services.",
  breadcrumbs,
}: PageHeroProps) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative py-20 md:py-28 bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
          >
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-gold transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.div>
        )}

        <div className="max-w-4xl">
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4"
            >
              {subtitle}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
            >
              {description}
            </motion.p>
          )}

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5" />
                  WhatsApp Now
                </Button>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
