import { Globe2, ShieldCheck, Radar, Clock } from "lucide-react";
import Container from "@/components/ui/Container";

const points = [
  {
    icon: Globe2,
    label: "Global Shipping",
    detail: "Coordinated freight across international lanes.",
  },
  {
    icon: ShieldCheck,
    label: "Secure Handling",
    detail: "Cargo tracked and accounted for at every transfer.",
  },
  {
    icon: Radar,
    label: "Real-Time Tracking",
    detail: "Shipment status available whenever you need it.",
  },
  {
    icon: Clock,
    label: "Reliable Delivery",
    detail: "Transit plans built around your delivery window.",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[var(--color-surface)]">
      <Container className="py-14 md:py-16">
        <p className="max-w-xl text-lg font-medium text-[var(--color-ink)] md:text-xl">
          Logistics solutions designed around your business.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex flex-col gap-3">
              <Icon size={22} className="text-[var(--color-blue)]" strokeWidth={1.75} />
              <div>
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {label}
                </p>
                <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
