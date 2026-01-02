import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";

export default function RefundPolicy() {
  return (
    <Layout>
      <PageHero subtitle="Legal" title="Refund & Cancellation Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]} />
      <section className="py-20"><div className="container mx-auto px-4 max-w-4xl prose prose-invert">
        <p className="text-muted-foreground">Last updated: January 2025</p>
        <h2 className="font-display text-xl text-foreground mt-8">Service Fee Refunds</h2>
        <p className="text-muted-foreground">Once visa processing has begun, service fees are generally non-refundable as our work has been performed. Refunds may be considered only if cancellation occurs before any processing begins.</p>
        <h2 className="font-display text-xl text-foreground mt-8">Visa Rejection</h2>
        <p className="text-muted-foreground">Service fees are non-refundable if your visa is rejected, as our documentation service has been completed. Embassy and government fees follow their respective refund policies.</p>
        <h2 className="font-display text-xl text-foreground mt-8">Travel Packages</h2>
        <p className="text-muted-foreground">Umrah and travel package refunds depend on timing and costs already incurred. Early cancellations may receive partial refunds less non-recoverable deposits.</p>
        <h2 className="font-display text-xl text-foreground mt-8">Contact</h2>
        <p className="text-muted-foreground">For refund requests, contact info@purpleroyaltourism.com with your booking details.</p>
      </div></section>
    </Layout>
  );
}
