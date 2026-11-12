import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PortLine Premium Logistics — email, phone, office location and business hours.",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <SectionHeading
          title="Contact us"
          description="Have a question before requesting a quote? Reach out directly."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 text-[var(--color-blue)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-ink)]">Email</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                    operations@portlinelogistics.example
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 text-[var(--color-blue)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-ink)]">Phone</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                    +1 (000) 000-0000
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-[var(--color-blue)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-ink)]">Office</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                    Freight House, Terminal District
                    <br />
                    (Address placeholder — update with real location)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 text-[var(--color-blue)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--color-ink)]">
                    Business Hours
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                    Monday &ndash; Friday, 9:00 AM &ndash; 6:00 PM
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 aspect-video overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
              {/* MAP SLOT: embed a real map (Google Maps / Mapbox) once the office address is finalized */}
              <div className="flex h-full items-center justify-center text-sm text-[var(--color-ink-muted)]">
                Map placeholder
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
