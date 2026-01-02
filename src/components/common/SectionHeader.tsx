import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}
    >
      {label && (
        <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? "text-foreground/80" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
