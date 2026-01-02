import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { DocumentList } from "@/components/common/DocumentList";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { Disclaimer } from "@/components/common/Disclaimer";
import { Button } from "@/components/ui/button";
import { Phone, Globe } from "lucide-react";

const WHATSAPP_NUMBER = "971565330500";
const documents = ["Valid passport", "Passport photos", "Bank statements (6 months)", "Employment/business documents", "Travel history", "Cover letter", "Proof of ties to UAE"];
const faqs = [
  { question: "How long does Canada visa processing take?", answer: "Processing typically takes 4-8 weeks depending on application volume." },
  { question: "What funds should I show?", answer: "Sufficient funds to cover your trip and living expenses. We advise on specific amounts." },
  { question: "Is biometrics required?", answer: "Yes, biometrics are required for most applicants at a designated center." },
  { question: "Can family apply together?", answer: "Yes, family applications can be submitted together." },
  { question: "What if I have travel history issues?", answer: "Disclose all history truthfully. Previous issues don't always prevent approval." },
];

export default function CanadaVisa() {
  const whatsappMessage = "Hello Purple Royal Tourism, I need Canada Visa Assistance. My nationality is: ___. Please advise.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <Layout>
      <PageHero subtitle="Global Visa Services" title="Canada Visa Assistance" description="Professional assistance for Canadian visitor visa applications." showCTA whatsappMessage={whatsappMessage} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Canada Visa" }]} />
      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-3 gap-12"><div className="lg:col-span-2 space-y-12"><DocumentList documents={documents} /><Disclaimer /><FAQSection faqs={faqs} /></div><div><div className="sticky top-24 bg-gradient-card border border-gold/30 rounded-2xl p-6"><Globe className="w-6 h-6 text-gold mb-4" /><p className="text-3xl font-bold text-gold mb-2">From AED 599</p><p className="text-sm text-muted-foreground mb-6">Service fee</p><a href={whatsappLink} target="_blank" rel="noopener noreferrer"><Button variant="whatsapp" className="w-full"><Phone className="w-4 h-4" />WhatsApp</Button></a></div></div></div></div></section>
      <CTASection whatsappMessage={whatsappMessage} />
    </Layout>
  );
}
