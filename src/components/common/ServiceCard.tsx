import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  icon: LucideIcon;
  href: string;
  featured?: boolean;
}

export function ServiceCard({
  title,
  description,
  price,
  icon: Icon,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        to={href}
        className={`block h-full p-6 rounded-xl border transition-all duration-300 group ${
          featured
            ? "bg-gradient-card border-gold/30 hover:border-gold/60 shadow-gold/10"
            : "bg-card border-border hover:border-primary/50 shadow-card"
        } hover:shadow-elevated`}
      >
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          featured ? "bg-gold/20" : "bg-primary/20"
        }`}>
          <Icon className={`w-6 h-6 ${featured ? "text-gold" : "text-primary"}`} />
        </div>

        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {price && (
          <p className={`text-sm font-semibold mb-4 ${
            featured ? "text-gold" : "text-primary"
          }`}>
            {price}
          </p>
        )}

        <div className={`flex items-center gap-2 text-sm font-medium ${
          featured ? "text-gold" : "text-primary"
        } group-hover:gap-3 transition-all`}>
          Learn More
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
}
