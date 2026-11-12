import Link from "next/link";
import { ArrowRight, Plane, Ship, Truck, Warehouse, FileCheck2, PackageCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

const icons = {
  "air-freight": Plane,
  "ocean-freight": Ship,
  "road-transportation": Truck,
  warehousing: Warehouse,
  "customs-clearance": FileCheck2,
  "door-to-door": PackageCheck,
} as const;

export default function Services() {
  const [featured, ...rest] = services;
  const FeaturedIcon = icons[featured.slug];

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <SectionHeading
          title="Services built around each leg of the journey"
          description="Cargo rarely moves in one straight line. Each service below can run independently or as part of a single coordinated shipment."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Link
            href={`/services/${featured.slug}`}
            className="group flex flex-col justify-between rounded-sm border border-[var(--color-border)] bg-[var(--color-navy)] p-8 text-white transition-colors lg:col-span-2 lg:row-span-1"
          >
            <div>
              <FeaturedIcon size={26} strokeWidth={1.6} className="text-[#EAF2FA]" />
              <h3 className="mt-6 text-2xl font-semibold">{featured.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#B7C4D3]">
                {featured.shortDescription}
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white">
              Learn more
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>

          {rest.slice(0, 2).map((service) => {
            const Icon = icons[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-blue)]"
              >
                <div>
                  <Icon size={24} strokeWidth={1.6} className="text-[var(--color-blue)]" />
                  <h3 className="mt-6 text-lg font-semibold text-[var(--color-ink)]">
                    {service.name}
                  </h3>
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
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {rest.slice(2).map((service) => {
            const Icon = icons[service.slug];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between rounded-sm border border-[var(--color-border)] p-8 transition-colors hover:border-[var(--color-blue)]"
              >
                <div>
                  <Icon size={24} strokeWidth={1.6} className="text-[var(--color-blue)]" />
                  <h3 className="mt-6 text-lg font-semibold text-[var(--color-ink)]">
                    {service.name}
                  </h3>
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
        </div>
      </Container>
    </section>
  );
}
