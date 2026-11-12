import Link from "next/link";
import RouteGraphic from "./RouteGraphic";

export default function Hero() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-16 md:px-10 md:py-24">
        <div>
          <h1 className="text-4xl font-semibold leading-[1.1] text-[var(--color-ink)] md:text-5xl">
            Moving your business forward, across borders.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg">
            PortLine Premium Logistics plans and coordinates air, ocean and
            road freight for businesses that need their cargo to arrive on
            schedule, cleared, and accounted for — from first pickup to final
            delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-sm bg-[var(--color-blue)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-blue-dark)]"
            >
              Request a Quote
            </Link>
            <Link
              href="/track"
              className="inline-flex items-center justify-center rounded-sm border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]"
            >
              Track Shipment
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-6">
            <div>
              <dt className="font-mono text-xs text-[var(--color-ink-muted)]">
                MODE
              </dt>
              <dd className="mt-1 text-sm font-medium text-[var(--color-ink)]">
                International Shipping
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-[var(--color-ink-muted)]">
                SCOPE
              </dt>
              <dd className="mt-1 text-sm font-medium text-[var(--color-ink)]">
                Freight Solutions
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-[var(--color-ink-muted)]">
                MANAGED
              </dt>
              <dd className="mt-1 text-sm font-medium text-[var(--color-ink)]">
                End-to-End Logistics
              </dd>
            </div>
          </dl>
        </div>

        {/* PHOTO SLOT: replace RouteGraphic with corporate photography (cargo vessel, terminal, or freight aircraft) once available */}
        <div className="aspect-[4/3.3] overflow-hidden rounded-sm border border-[var(--color-border)]">
          <RouteGraphic />
        </div>
      </div>
    </section>
  );
}
