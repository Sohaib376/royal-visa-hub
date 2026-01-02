import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  price: string;
  priceNote?: string;
  features: string[];
  whatsappMessage: string;
  featured?: boolean;
}

const WHATSAPP_NUMBER = "971565330500";

export function PricingCard({
  title,
  price,
  priceNote,
  features,
  whatsappMessage,
  featured = false,
}: PricingCardProps) {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl p-8 ${
        featured
          ? "bg-gradient-card border-2 border-gold/50 shadow-gold"
          : "bg-card border border-border shadow-card"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        {title}
      </h3>

      <div className="mb-6">
        <span className={`font-display text-4xl font-bold ${
          featured ? "text-gold" : "text-primary"
        }`}>
          {price}
        </span>
        {priceNote && (
          <span className="text-sm text-muted-foreground ml-2">
            {priceNote}
          </span>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
              featured ? "text-gold" : "text-primary"
            }`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
        <Button
          variant={featured ? "gold" : "outlineGold"}
          className="w-full"
        >
          <Phone className="w-4 h-4" />
          Inquire Now
        </Button>
      </a>
    </motion.div>
  );
}
