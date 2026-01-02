import { motion } from "framer-motion";
import { FileText, Check } from "lucide-react";

interface DocumentListProps {
  title?: string;
  documents: string[];
}

export function DocumentList({
  title = "Required Documents",
  documents,
}: DocumentListProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <FileText className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {documents.map((doc, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3"
          >
            <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{doc}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
