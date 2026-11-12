import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/home/CTASection";
import { services, getServiceBySlug } from "@/lib/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="border-b border-[var(--color-border)] bg-white">
        <Container className="py-16 md:py-20">
          <Link
            href="/services"
            className="text-sm font-medium text-[var(--color-blue)] hover:text-[var(--color-blue-dark)]"
          >
            &larr; All services
          </Link>
          <h1 className="mt-6 max-w-2xl text-3xl font-semibold text-[var(--color-ink)] md:text-4xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            {service.description}
          </p>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              What's included
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-muted)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-ink)]">
              Ideal for
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-muted)]">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-blue)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container className="py-16 md:py-20">
          <h2 className="text-lg font-semibold text-[var(--color-ink)]">
            Other services
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group flex flex-col justify-between rounded-sm border border-[var(--color-border)] bg-white p-6 transition-colors hover:border-[var(--color-blue)]"
              >
                <div>
                  <h3 className="text-base font-semibold text-[var(--color-ink)]">
                    {other.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
                    {other.shortDescription}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-blue)]">
                  Learn more
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
