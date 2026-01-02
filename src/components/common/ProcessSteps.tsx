import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ProcessStepsProps {
  steps: Step[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative"
        >
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
          )}

          <div className="relative bg-card border border-border rounded-xl p-6 text-center hover:border-gold/50 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-royal flex items-center justify-center">
              <span className="text-gold font-display text-2xl font-bold">
                {step.number}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
