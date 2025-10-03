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
        <span className="absolute left-5 inline-flex items-center justify-center w-10 h-10 rounded-md bg-white border border-paper-line text-brand overflow-hidden">
          {icon}
        </span>
      )}
      <span className="pointer-events-none leading-none">{label}</span>
    </Link>
  );
}


