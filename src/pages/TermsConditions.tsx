import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";

export default function TermsConditions() {
  return (
    <Layout>
      <PageHero subtitle="Legal" title="Terms & Conditions" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
      <section className="py-20"><div className="container mx-auto px-4 max-w-4xl prose prose-invert">
        <p className="text-muted-foreground">Last updated: January 2025</p>
        <h2 className="font-display text-xl text-foreground mt-8">Service Agreement</h2>
        <p className="text-muted-foreground">By using Purple Royal Tourism services, you agree to these terms. We provide visa consultancy and document preparation services only.</p>
        <h2 className="font-display text-xl text-foreground mt-8">No Guarantee of Approval</h2>
        <p className="text-muted-foreground">Visa approval is at the sole discretion of immigration authorities. We do not guarantee visa approval and are not liable for rejections.</p>
        <h2 className="font-display text-xl text-foreground mt-8">Client Responsibilities</h2>
        <p className="text-muted-foreground">Clients must provide accurate, truthful information. False information may result in visa rejection and legal consequences.</p>
        <h2 className="font-display text-xl text-foreground mt-8">Fees</h2>
        <p className="text-muted-foreground">Service fees cover our consultancy services. Government fees, embassy charges, and visa fees are additional.</p>
      </div></section>
    </Layout>
  );
}
