import Link from "next/link";
import { cn } from "@/lib/utils";
import type React from "react";

interface SecondaryLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SecondaryLink({
  href,
  children,
  className,
}: SecondaryLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center bg-transparent backdrop-blur-sm  font-semibold px-8 text-lg tracking-wide rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white text-white hover:bg-white hover:text-teal-800",
        className
      )}
    >
      {children}
    </Link>
  );
}
