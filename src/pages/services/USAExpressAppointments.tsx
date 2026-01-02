import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";
import { Disclaimer } from "@/components/common/Disclaimer";
import { Button } from "@/components/ui/button";
import { Phone, Zap } from "lucide-react";

const WHATSAPP_NUMBER = "971565330500";
const faqs = [
  { question: "What are express appointments?", answer: "We monitor for earlier US visa interview slots and assist with booking when available." },
  { question: "Can you guarantee an earlier date?", answer: "No, availability depends on embassy schedules. We assist when slots open." },
  { question: "Is there an additional fee?", answer: "Yes, express appointment assistance has a separate service fee from regular visa assistance." },
];

export default function USAExpressAppointments() {
  const whatsappMessage = "Hello Purple Royal Tourism, I need help with USA Express Visa Appointment. Current appointment date: ___. Please advise.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <Layout>
      <PageHero subtitle="Global Visa Services" title="USA Express Appointments" description="Assistance with securing expedited US visa interview appointments when available." showCTA whatsappMessage={whatsappMessage} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "USA Express Appointments" }]} />
      <section className="py-20"><div className="container mx-auto px-4"><div className="grid lg:grid-cols-3 gap-12"><div className="lg:col-span-2 space-y-12"><div className="prose prose-invert"><p className="text-muted-foreground">Our USA Express Appointments service assists clients who need earlier US visa interview dates. We monitor embassy schedules and help book when earlier slots become available.</p></div><Disclaimer text="Express appointment availability is subject to US embassy schedules and cannot be guaranteed. This service assists with booking when slots are available." /><FAQSection faqs={faqs} /></div><div><div className="sticky top-24 bg-gradient-card border border-gold/30 rounded-2xl p-6"><Zap className="w-6 h-6 text-gold mb-4" /><p className="text-3xl font-bold text-gold mb-2">From AED 799</p><p className="text-sm text-muted-foreground mb-6">Service fee</p><a href={whatsappLink} target="_blank" rel="noopener noreferrer"><Button variant="whatsapp" className="w-full"><Phone className="w-4 h-4" />WhatsApp</Button></a></div></div></div></div></section>
      <CTASection whatsappMessage={whatsappMessage} />
    </Layout>
  );
}
