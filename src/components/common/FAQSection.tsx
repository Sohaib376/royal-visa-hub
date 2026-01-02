import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          {title}
        </h2>
        <div className="w-20 h-1 bg-gold rounded-full" />
      </motion.div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-gold/50"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-gold py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
}
