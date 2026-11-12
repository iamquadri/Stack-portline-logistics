import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Request",
    description: "Tell us what you need to ship, and where it needs to go.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Our team determines the appropriate mode, route, and documentation.",
  },
  {
    number: "03",
    title: "Transport",
    description:
      "Your shipment moves through the selected transportation network.",
  },
  {
    number: "04",
    title: "Deliver",
    description: "Your cargo reaches its destination, tracked and accounted for.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <SectionHeading
          title="How a shipment moves through PortLine"
          description="A consistent process from first request to final delivery, regardless of mode."
        />

        <div className="route-line mt-16 hidden md:grid md:grid-cols-4 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              <div className="relative z-10 h-2.5 w-2.5 rounded-full bg-[var(--color-blue)]" />
              <span className="font-mono text-xs text-[var(--color-ink-muted)]">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8 md:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                <div className="mt-1 w-px flex-1 bg-[var(--color-border)]" />
              </div>
              <div className="pb-2">
                <span className="font-mono text-xs text-[var(--color-ink-muted)]">
                  {step.number}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
