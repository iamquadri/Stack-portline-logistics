import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { primaryNav } from "@/lib/data/nav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-sm bg-[var(--color-blue)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-blue-dark)]"
          >
            Request a Quote
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
