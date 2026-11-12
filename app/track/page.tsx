import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TrackingForm from "@/components/tracking/TrackingForm";

export const metadata: Metadata = {
  title: "Track Shipment",
  description: "Enter a tracking number to see the current status of your shipment.",
};

export default function TrackPage() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <SectionHeading
          title="Track your shipment"
          description="Enter your tracking number to see where your shipment currently stands."
        />
        <div className="mt-10 max-w-2xl">
          <TrackingForm />
        </div>
      </Container>
    </section>
  );
}
