import { motion } from "framer-motion";
import { Phone, Clock, DollarSign, Globe, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { DocumentList } from "@/components/common/DocumentList";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { Disclaimer } from "@/components/common/Disclaimer";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "971565330500";

const documents = [
  "Valid passport with minimum 6 months validity beyond travel dates",
  "Passport-sized photographs (35x45mm, white background)",
  "Completed visa application form",
  "Travel insurance covering Schengen zone",
  "Flight itinerary (round trip)",
  "Hotel bookings or accommodation proof",
  "Bank statements (last 3-6 months)",
  "Employment letter or business documents",
  "Cover letter explaining travel purpose",
  "Previous travel history (visa copies, stamps)",
];

const faqs = [
  { question: "Which countries can I visit with a Schengen visa?", answer: "A Schengen visa allows travel to 27 European countries including France, Germany, Italy, Spain, Netherlands, Belgium, Austria, Greece, Portugal, Switzerland, and more. You must apply through the embassy of your main destination." },
  { question: "How long does Schengen visa processing take?", answer: "Processing typically takes 15-45 calendar days depending on the embassy and season. We recommend applying 4-6 weeks before travel." },
  { question: "What is your Schengen visa assistance service?", answer: "We help with document preparation, application form completion, appointment booking, and submission guidance. The visa decision is made by the embassy." },
  { question: "Do you guarantee Schengen visa approval?", answer: "No, visa approval is solely at the embassy's discretion. We ensure your documents are complete and properly prepared to support your application." },
  { question: "Which embassy should I apply to?", answer: "Apply to the embassy of your main destination country, or the first country of entry if visiting multiple countries equally." },
  { question: "What bank balance is required?", answer: "Requirements vary, but generally you should show sufficient funds to cover your trip. We advise on specific requirements based on your destination." },
  { question: "Is travel insurance mandatory?", answer: "Yes, travel insurance with minimum EUR 30,000 coverage valid in all Schengen countries is mandatory." },
  { question: "Can I apply if I have previous visa rejections?", answer: "Previous rejections don't automatically prevent future applications, but you should disclose them and address the reasons for rejection." },
  { question: "How long can I stay in the Schengen zone?", answer: "Standard tourist visas allow up to 90 days within a 180-day period. The specific validity depends on the visa granted." },
  { question: "What if my visa is rejected?", answer: "Our service fee is non-refundable if rejected. We can advise on reapplication options based on the rejection reason." },
];

export default function SchengenVisa() {
  const whatsappMessage = "Hello Purple Royal Tourism, I would like assistance with a Schengen Visa application. My nationality is: ___, destination country: ___, and travel dates: ___. Please advise.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Layout>
      <PageHero subtitle="Global Visa Services" title="Schengen Visa Assistance" description="Expert guidance for your Schengen visa application to visit 27 European countries. Professional document preparation and application support." showCTA whatsappMessage={whatsappMessage} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Schengen Visa Assistance" }]} />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Service Overview</h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-6" />
                <p className="text-muted-foreground">Our Schengen visa assistance service provides comprehensive support for UAE residents applying for European travel. We help with document preparation, form completion, and guide you through the entire application process.</p>
              </motion.div>
              <DocumentList documents={documents} />
              <Disclaimer />
              <FAQSection faqs={faqs} />
            </div>
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="sticky top-24 bg-gradient-card border border-gold/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4"><Globe className="w-6 h-6 text-gold" /><h3 className="font-display text-xl font-bold text-foreground">Service Fee</h3></div>
                <div className="mb-6"><p className="text-3xl font-bold text-gold">From AED 599</p><p className="text-sm text-muted-foreground">Assistance fee only</p></div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer"><Button variant="whatsapp" className="w-full" size="lg"><Phone className="w-4 h-4" />Inquire via WhatsApp</Button></a>
                <p className="text-xs text-muted-foreground mt-4 text-center">Embassy fees paid separately</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Ready to Visit Europe?" whatsappMessage={whatsappMessage} />
    </Layout>
  );
}
