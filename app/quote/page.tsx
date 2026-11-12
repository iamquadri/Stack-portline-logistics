import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your shipment — origin, destination, cargo and preferred method — and our team will follow up with a plan.",
};

export default function QuotePage() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <SectionHeading
          title="Request a quote"
          description="Tell us about your shipment and our team will follow up with a plan and pricing."
        />
        <div className="mt-10 max-w-3xl">
          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}
