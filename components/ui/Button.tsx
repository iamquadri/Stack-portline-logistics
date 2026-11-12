import Link from "next/link";
import { type ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

type ButtonProps =
  | (BaseProps & {
      href: string;
      type?: never;
      onClick?: never;
    })
  | (BaseProps & {
      href?: never;
      type?: "button" | "submit";
      onClick?: () => void;
      disabled?: boolean;
    });

const variantClasses: Record<string, string> = {
  primary:
    "bg-[var(--color-blue)] text-white hover:bg-[var(--color-blue-dark)]",
  secondary:
    "border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-blue)] hover:text-[var(--color-blue)]",
  ghost: "text-[var(--color-blue)] hover:text-[var(--color-blue-dark)] px-0",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-150";
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {children}
    </button>
  );
}
