"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`${
        isHome
          ? "absolute top-0 left-0 w-full z-20 px-6 py-4 text-white"
          : "relative w-full bg-gradient-to-r from-[#0D3E50] via-[#1A5A6B] to-[#0D3E50] text-white px-6 py-4 shadow-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <Link href="/" className="text-2xl md:text-3xl font-bold">
            Tai Ora
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8 px-6 py-3 rounded-2xl backdrop-blur-sm border border-primary/40 bg-primary/10 shadow-lg">
          <Link
            href="/"
            className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/30 hover:scale-105 hover:shadow-md"
          >
            Home
          </Link>
          <Link
            href="/how-it-works"
            className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/30 hover:scale-105 hover:shadow-md"
          >
            How It Works
          </Link>
          <Link
            href="/creators"
            className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/30 hover:scale-105 hover:shadow-md"
          >
            Creators
          </Link>
          <Link
            href="/brands"
            className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/30 hover:scale-105 hover:shadow-md"
          >
            Brands
          </Link>
          <Link
            href="/pricing"
            className="px-3 py-2 rounded-lg transition-all duration-200 hover:bg-primary/30 hover:scale-105 hover:shadow-md"
          >
            Pricing
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="secondary" className="hidden md:block rounded-full">
            Let's Connect
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/20 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/10 backdrop-blur-md border-t border-primary/40 shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/creators"
              className="block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Creators
            </Link>
            <Link
              href="/brands"
              className="block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Brands
            </Link>
            <Link
              href="/pricing"
              className="block px-4 py-3 rounded-lg transition-all duration-200 hover:bg-primary/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-4 border-t border-primary/40">
              <Button variant="secondary" className="w-full rounded-full">
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
