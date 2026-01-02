import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { DocumentList } from "@/components/common/DocumentList";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { Disclaimer } from "@/components/common/Disclaimer";
import { Button } from "@/components/ui/button";
import { Phone, Globe } from "lucide-react";

const WHATSAPP_NUMBER = "971565330500";
const documents = ["Valid passport", "DS-160 confirmation", "Passport photo", "Bank statements", "Employment documents", "Travel itinerary", "Previous US visas (if any)"];
const faqs = [
  { question: "What is the DS-160 form?", answer: "The DS-160 is the online nonimmigrant visa application form required for US visa applications." },
  { question: "Do I need an interview?", answer: "Yes, most applicants require an in-person interview at the US Consulate." },
  { question: "How do you help with the application?", answer: "We assist with DS-160 completion, document preparation, and interview guidance." },
  { question: "What questions are asked in the interview?", answer: "Questions typically cover travel purpose, ties to home country, and financial situation." },
  { question: "How long is US visa processing?", answer: "Interview wait times vary. After interview, processing takes 3-5 business days if approved." },
];

export default function USAVisa() {
  const whatsappMessage = "Hello Purple Royal Tourism, I need USA Visa Assistance. My nationality is: ___. Please advise.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <Layout>
      <PageHero subtitle="Global Visa Services" title="USA Visa Assistance" description="Guidance for US visitor visa applications including DS-160 and interview preparation." showCTA whatsappMessage={whatsappMessage} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "USA Visa" }]} />
      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-3 gap-12"><div className="lg:col-span-2 space-y-12"><DocumentList documents={documents} /><Disclaimer /><FAQSection faqs={faqs} /></div><div><div className="sticky top-24 bg-gradient-card border border-gold/30 rounded-2xl p-6"><Globe className="w-6 h-6 text-gold mb-4" /><p className="text-3xl font-bold text-gold mb-2">From AED 299</p><p className="text-sm text-muted-foreground mb-6">Service fee</p><a href={whatsappLink} target="_blank" rel="noopener noreferrer"><Button variant="whatsapp" className="w-full"><Phone className="w-4 h-4" />WhatsApp</Button></a></div></div></div></div></section>
      <CTASection whatsappMessage={whatsappMessage} />
    </Layout>
  );
}
