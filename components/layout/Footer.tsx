import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { services } from "@/lib/data/services";
import { primaryNav } from "@/lib/data/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-[var(--color-border)]">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <Logo dark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#B7C4D3]">
            International freight forwarding, warehousing and customs
            coordination for businesses moving cargo across borders.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navigation</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[#B7C4D3] transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm text-[#B7C4D3] transition-colors hover:text-white"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-[#B7C4D3]">
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <span>operations@portlinelogistics.example</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <span>+1 (000) 000-0000</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Freight House, Terminal District</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1C3A57]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col-reverse items-center justify-between gap-4 px-6 py-6 text-xs text-[#8CA0B6] md:flex-row md:px-10">
          <p>&copy; {year} PortLine Premium Logistics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
