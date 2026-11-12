import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-blue-tint)]">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center md:py-16">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)] md:text-3xl">
            Ready to move a shipment?
          </h2>
          <p className="mt-2 text-base text-[var(--color-ink-muted)]">
            Tell us what you need to ship and we'll put together a plan.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-sm bg-[var(--color-blue)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-blue-dark)]"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
