import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plane, Ship, Truck, Warehouse, FileCheck2, PackageCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/home/CTASection";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Air freight, ocean freight, road transportation, warehousing, customs clearance and door-to-door delivery — coordinated as one plan or run independently.",
};

const icons = {
  "air-freight": Plane,
  "ocean-freight": Ship,
  "road-transportation": Truck,
  warehousing: Warehouse,
  "customs-clearance": FileCheck2,
  "door-to-door": PackageCheck,
} as const;

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-white">
        <Container className="py-16 md:py-24">
          <SectionHeading
            title="Freight and logistics services"
            description="Each service below can run on its own or as part of a single coordinated shipment plan, depending on what a route requires."
          />
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3 md:py-20">
          {services.map((service) => {
            const Icon = icons[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-blue)]"
              >
                <div>
                  <Icon size={24} strokeWidth={1.6} className="text-[var(--color-blue)]" />
                  <h2 className="mt-6 text-lg font-semibold text-[var(--color-ink)]">
                    {service.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-blue)]">
                  Learn more
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            );
          })}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
