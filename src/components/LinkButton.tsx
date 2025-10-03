import Link from "next/link";

import { ReactNode } from "react";

export function LinkButton({
  href,
  label,
  variant = "secondary",
  icon,
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}) {
  const cls = variant === "primary" ? "btn btn-primary" : "btn btn-outline";
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  return (
    <Link className={cls} href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener" : undefined}>
      {icon && (
        <span className="absolute left-4 inline-flex items-center justify-center w-7 h-7 rounded-md bg-brand/10 text-brand">
          {icon}
        </span>
      )}
      <span className="pointer-events-none leading-none">{label}</span>
    </Link>
  );
}


