import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/common/PageHero";
import { FAQSection } from "@/components/common/FAQSection";
import { CTASection } from "@/components/common/CTASection";

const generalFAQs = [
  {
    question: "What services does Purple Royal Tourism provide?",
    answer: "Purple Royal Tourism provides professional visa consultancy and travel services including UAE tourist visas (30 and 60 days), visa renewal services (by bus and flight), Umrah packages from Dubai, and global visa assistance for Schengen countries, Canada, and the USA. We focus on accurate document preparation and clear guidance throughout the application process."
  },
  {
    question: "Is Purple Royal Tourism a licensed company?",
    answer: "Yes, Purple Royal Tourism is a Dubai-registered tourism company operating in accordance with UAE regulations. We are located in Al Mankhool, Dubai, and provide professional visa consultancy services."
  },
  {
    question: "Do you guarantee visa approval?",
    answer: "No, we do not guarantee visa approval. Visa decisions are made solely by the relevant immigration authorities, embassies, or consulates. We provide documentation assistance, application guidance, and ensure your documents are prepared accurately to support your application. The final decision always rests with the issuing authority."
  },
  {
    question: "How can I contact Purple Royal Tourism?",
    answer: "The fastest way to reach us is via WhatsApp at +971 56 533 0500. You can also email us at info@purpleroyaltourism.com or visit our office at CBD Bank Building, Sharaf DG Metro Station Exit 1, Office No 12, 3rd Floor, Al Mankhool, Dubai."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash payments at our office and bank transfers. Payment details will be provided when you confirm your service. Please note that service fees are typically collected before processing begins."
  },
  {
    question: "Are your prices inclusive of all fees?",
    answer: "Our service fees cover our consultancy and document preparation services. However, government fees, embassy charges, consulate fees, visa fees, and any third-party costs are additional and paid separately. We provide a clear breakdown of all costs before you proceed."
  },
  {
    question: "How long does the visa process take?",
    answer: "Processing times vary depending on the type of visa and the issuing authority. UAE tourist visas typically take 3-5 working days. Global visas such as Schengen, Canada, and USA have longer processing times that depend on embassy schedules. We provide estimated timelines for each service, but actual processing depends on the authorities."
  },
  {
    question: "Can you help with urgent visa requirements?",
    answer: "For UAE visas, we offer express processing options where available. For global visas, processing times are set by the embassies and consulates. We can advise you on the fastest options available and help you prepare your documents promptly, but we cannot expedite embassy processing times."
  },
  {
    question: "What happens if my visa application is rejected?",
    answer: "If your visa application is rejected, our service fee is generally non-refundable as the work of document preparation and submission has been completed. However, we will advise you on your options, including whether reapplication is possible and what additional documentation might strengthen a future application. Please review our refund policy for specific details."
  },
  {
    question: "Do you offer visa renewal services?",
    answer: "Yes, we offer UAE visa renewal services through border runs by bus (to Oman) or by flight. These services include transportation, exit/entry processing, and coordination of all logistics. Contact us to discuss which option is best for your situation."
  },
];

const uaeVisaFAQs = [
  {
    question: "Who is eligible for a UAE tourist visa?",
    answer: "Eligibility for a UAE tourist visa depends on your nationality. Citizens of many countries can obtain visas on arrival, while others require a pre-arranged visa. Contact us with your nationality and travel dates, and we will advise on your eligibility and the visa options available to you."
  },
  {
    question: "What documents are needed for a UAE tourist visa?",
    answer: "Typically, you will need a valid passport (minimum 6 months validity), a passport-sized photograph with white background, confirmed travel dates, and proof of accommodation. Additional documents may be required based on your nationality. We provide a complete checklist based on your specific situation."
  },
  {
    question: "How long can I stay on a UAE tourist visa?",
    answer: "We offer 30-day and 60-day UAE tourist visas. The 30-day visa is suitable for short visits, while the 60-day visa is ideal for extended stays. Some visas may be extendable, depending on the type issued. We can advise on the best option for your travel plans."
  },
  {
    question: "Can I extend my UAE tourist visa?",
    answer: "Some UAE tourist visas are extendable, while others require you to exit and re-enter the country. If extension is not possible, we offer visa renewal services through border runs by bus or flight. Contact us before your visa expires to discuss your options."
  },
  {
    question: "How long does a UAE tourist visa take to process?",
    answer: "Standard UAE tourist visa processing typically takes 3-5 working days. Express processing may be available for urgent cases, subject to additional fees. We will provide you with an estimated timeline when you submit your documents."
  },
];

const globalVisaFAQs = [
  {
    question: "What Schengen countries can I visit with Schengen visa assistance?",
    answer: "A Schengen visa allows travel to 27 European countries including France, Germany, Italy, Spain, Netherlands, Belgium, Austria, Greece, Portugal, and others. You must apply through the embassy of the main destination country or the first country of entry."
  },
  {
    question: "What documents are needed for a Schengen visa?",
    answer: "Common documents include a valid passport, completed application form, passport photos, travel insurance, proof of accommodation, flight itinerary, bank statements, employment letter, and cover letter. Requirements may vary by country. We provide a detailed checklist and assist with document preparation."
  },
  {
    question: "How far in advance should I apply for a Schengen visa?",
    answer: "We recommend applying 4-6 weeks before your intended travel date. You can apply up to 6 months in advance for frequent travelers. Processing times vary by embassy and season, so early application is advisable."
  },
  {
    question: "What is USA visa assistance?",
    answer: "Our USA visa assistance includes DS-160 form completion, document preparation, interview appointment booking, and interview preparation guidance. We help you present a strong application, though the visa decision is made by the US embassy."
  },
  {
    question: "What are USA Express Appointments?",
    answer: "USA Express Appointments is our service to assist with securing expedited US visa interview slots when available. This is subject to embassy availability and cannot be guaranteed. We monitor for openings and assist with the booking process."
  },
];

export default function FAQ() {
  return (
    <Layout>
      <PageHero
        subtitle="FAQ"
        title="Frequently Asked Questions"
        description="Find answers to common questions about our visa services, processes, and policies."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FAQSection title="General Questions" faqs={generalFAQs} />
        </div>
      </section>

      <section className="py-20 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <FAQSection title="UAE Tourist Visa Questions" faqs={uaeVisaFAQs} />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <FAQSection title="Global Visa Questions" faqs={globalVisaFAQs} />
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        description="Our visa experts are ready to help. Contact us via WhatsApp for personalized assistance."
      />
    </Layout>
  );
}
