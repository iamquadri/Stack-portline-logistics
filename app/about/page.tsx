import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import RouteGraphic from "@/components/home/RouteGraphic";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PortLine Premium Logistics coordinates international freight, warehousing and customs clearance with a focus on operational precision and client transparency.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-white">
        <Container className="py-16 md:py-24">
          <SectionHeading
            title="A logistics partner built around operational precision"
            description="PortLine Premium Logistics coordinates international freight for businesses that need cargo to move predictably — with clear documentation, consistent communication, and a plan for every leg of the journey."
          />
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-20">
          {/* PHOTO SLOT: replace with corporate photography of operations staff or a facility */}
          <div className="aspect-[4/3.3] overflow-hidden rounded-sm border border-[var(--color-border)] md:order-2">
            <RouteGraphic />
          </div>

          <div className="md:order-1">
            <h2 className="text-2xl font-semibold text-[var(--color-ink)] md:text-3xl">
              Our approach
            </h2>
            <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-[var(--color-ink-muted)]">
              <p>
                We understand that logistics is not simply about moving
                cargo. It is about keeping businesses moving. A shipment sits
                inside a larger operation — a delivery date, a customer
                commitment, a production schedule — and a delay anywhere in
                the chain has consequences beyond the shipment itself.
              </p>
              <p>
                Our role is to plan each leg of a shipment's route, prepare
                the documentation it needs to cross borders without
                unnecessary delay, and stay in contact through transit so the
                businesses we work with always know where a shipment stands.
              </p>
              <p>
                We work across air, ocean and road freight, and coordinate
                warehousing and customs clearance where a shipment requires
                it — as one managed plan rather than a set of separate
                vendors to track individually.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)]">
        <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 md:py-20">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">
              Our commitment to clients
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              Clear, honest communication about where a shipment stands —
              including when a delay occurs — rather than silence between
              pickup and delivery.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-ink)]">
              Our operational approach
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
              Every shipment is planned around its own constraints — mode,
              destination, documentation and timeline — rather than fitted
              into a single standard process.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
