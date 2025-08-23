"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`${
        isHome
          ? "absolute top-0 left-0 w-full z-20 px-6 py-4 text-white"
          : "relative w-full bg-gradient-to-r from-[#0D3E50] via-[#1A5A6B] to-[#0D3E50] text-white px-6 py-4 shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Tai Ora
          </Link>
          <div className="w-24 h-24 mb-32 bg-[#D4A33A] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/creators">Creators</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        <Button variant="secondary" className="rounded-full">
          Let's Connect
        </Button>
      </div>
    </nav>
  );
}
