import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
  variant?: "default" | "minimal";
}

const WHATSAPP_NUMBER = "971565330500";

export function CTASection({
  title = "Ready to Start Your Journey?",
  description = "Contact our visa experts today for personalized assistance with your travel documentation needs.",
  whatsappMessage = "Hello Purple Royal Tourism, I would like to inquire about your visa services.",
  variant = "default",
}: CTASectionProps) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  if (variant === "minimal") {
    return (
      <div className="py-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            Have questions? Our experts are ready to help.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp">
              <Phone className="w-4 h-4" />
              WhatsApp Now
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-royal p-10 md:p-16 text-center"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {description}
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl">
                <Phone className="w-5 h-5" />
                WhatsApp Now - Check Eligibility
              </Button>
            </a>
            <p className="text-sm text-primary-foreground/60 mt-4">
              +971 56 533 0500 - Available 7 days a week
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
