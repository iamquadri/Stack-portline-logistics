import Container from "@/components/ui/Container";
import RouteGraphic from "./RouteGraphic";

const modes = [
  "International sea routes",
  "Scheduled and chartered air freight",
  "Cross-border road transportation",
  "Coordinated multi-leg supply chains",
];

export default function GlobalOperations() {
  return (
    <section className="bg-[var(--color-navy)] text-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        {/* PHOTO SLOT: replace with a real route/network map graphic or photography once available */}
        <div className="order-2 aspect-[4/3.3] overflow-hidden rounded-sm border border-[#1C3A57] md:order-1">
          <RouteGraphic />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Connected to the world. Focused on your delivery.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#B7C4D3]">
            Whichever mode a shipment requires, it moves through a single
            coordinated plan rather than a chain of disconnected handoffs.
          </p>

          <ul className="mt-8 flex flex-col gap-4 border-t border-[#1C3A57] pt-6">
            {modes.map((mode) => (
              <li
                key={mode}
                className="flex items-center gap-3 text-sm text-[#DCE6F0]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                {mode}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
