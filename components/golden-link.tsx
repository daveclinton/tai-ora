import Link from "next/link";
import { cn } from "@/lib/utils";
import type React from "react";

interface GoldenLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function GoldenLink({ href, children, className }: GoldenLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-8 text-lg tracking-wide rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl border-0",
        className
      )}
    >
      {children}
    </Link>
  );
}
