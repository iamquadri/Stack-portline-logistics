import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section className="bg-[var(--color-surface)]">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <h2 className="text-3xl font-semibold leading-tight text-[var(--color-ink)] md:text-4xl">
          We understand that logistics is not simply about moving cargo. It is
          about keeping businesses moving.
        </h2>
        <div className="flex flex-col justify-between">
          <p className="text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            Every shipment sits inside a larger operation — a delivery date, a
            customer commitment, a production schedule. We plan routes,
            coordinate documentation, and stay in contact through transit so
            that the businesses we work with can plan around a shipment with
            confidence, not guesswork.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-blue)] hover:text-[var(--color-blue-dark)]"
          >
            More about PortLine
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
