import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label="PortLine Premium Logistics — home"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="2"
          stroke={dark ? "#EAF2FA" : "#1D5DA6"}
          strokeWidth="1.5"
        />
        <path
          d="M6 19L11 9L16 15L22 7"
          stroke={dark ? "#EAF2FA" : "#1D5DA6"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="7" r="1.6" fill={dark ? "#EAF2FA" : "#1D5DA6"} />
      </svg>
      <span
        className={`font-mono text-[15px] font-medium tracking-tight ${
          dark ? "text-white" : "text-[var(--color-navy)]"
        }`}
      >
        PORTLINE
      </span>
    </Link>
  );
}
