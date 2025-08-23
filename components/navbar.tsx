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
        <Link href="/" className="text-2xl font-bold">
          Tai Ora
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/creators">Creators</Link>
          <Link href="/brands">Brands</Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        <Button className="bg-gradient-to-r from-[#D4A33A] to-[#F5D76E] hover:from-[#B8921F] hover:to-[#D4A33A] text-white shadow-lg">
          Let's Connect
        </Button>
      </div>
    </nav>
  );
}
