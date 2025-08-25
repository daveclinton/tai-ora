"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GoldenButton } from "@/components/golden-button";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  type ValidPath = "/" | "/how-it-works" | "/creators" | "/brand";

  const pathToPageMap: Record<ValidPath, string> = {
    "/": "HOME",
    "/how-it-works": "HOW IT WORKS",
    "/creators": "CREATORS",
    "/brand": "BRAND",
  };

  const activePage = pathToPageMap[pathname as ValidPath] || "HOME";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider">
            TAI ORA
          </h1>
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-20">
            <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
            <Link
              href="/"
              className={`transition-colors font-medium tracking-wide text-sm ${
                activePage === "HOME"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              HOME
            </Link>
            <Link
              href="/how-it-works"
              className={`transition-colors font-medium tracking-wide text-sm ${
                activePage === "HOW IT WORKS"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              HOW IT WORKS
            </Link>
            <Link
              href="/creators"
              className={`transition-colors font-medium tracking-wide text-sm ${
                activePage === "CREATORS"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              CREATORS
            </Link>
            <Link
              href="/brand"
              className={`transition-colors font-medium tracking-wide text-sm ${
                activePage === "BRAND"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              BRAND
            </Link>
          </div>
          <div className="hidden md:block">
            <GoldenButton className="px-6 py-2 text-sm">
              GET STARTED
            </GoldenButton>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden fixed top-5 right-5 z-20 text-white bg-black/30 p-2 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-gradient-to-b from-teal-900 to-amber-900 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-95 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="absolute top-20 left-10 right-10 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

          <Link
            href="/"
            className={`text-2xl font-medium tracking-wide transition-colors ${
              activePage === "HOME"
                ? "text-amber-300 font-semibold"
                : "text-white hover:text-amber-200"
            }`}
            onClick={handleNavItemClick}
          >
            HOME
          </Link>
          <Link
            href="/how-it-works"
            className={`text-2xl font-medium tracking-wide transition-colors ${
              activePage === "HOW IT WORKS"
                ? "text-amber-300 font-semibold"
                : "text-white hover:text-amber-200"
            }`}
            onClick={handleNavItemClick}
          >
            HOW IT WORKS
          </Link>
          <Link
            href="/creators"
            className={`text-2xl font-medium tracking-wide transition-colors ${
              activePage === "CREATORS"
                ? "text-amber-300 font-semibold"
                : "text-white hover:text-amber-200"
            }`}
            onClick={handleNavItemClick}
          >
            CREATORS
          </Link>
          <Link
            href="/brand"
            className={`text-2xl font-medium tracking-wide transition-colors ${
              activePage === "BRAND"
                ? "text-amber-300 font-semibold"
                : "text-white hover:text-amber-200"
            }`}
            onClick={handleNavItemClick}
          >
            BRAND
          </Link>
          <div className="absolute bottom-40 left-10 right-10 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

          <div className="pt-4">
            <GoldenButton className="px-8 py-3 text-lg">
              GET STARTED
            </GoldenButton>
          </div>
        </div>
      </div>
    </>
  );
}
