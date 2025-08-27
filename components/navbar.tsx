"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GoldenButton } from "@/components/golden-button";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  type ValidPath =
    | "/"
    | "/how-it-works"
    | "/creators"
    | "/brand"
    | "/about"
    | "/partner"
    | "/contact";

  const pathToPageMap: Record<ValidPath, string> = {
    "/": "HOME",
    "/how-it-works": "HOW IT WORKS",
    "/creators": "CREATORS",
    "/brand": "BRAND",
    "/about": "ABOUT US",
    "/partner": "PARTNER WITH US",
    "/contact": "CONTACT US",
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
      <nav className="absolute top-0 left-0 right-0 z-50 p-3 md:p-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-white text-xl md:text-3xl font-bold tracking-wider"
          >
            TAI ORA
          </Link>

          {/* Desktop Navigation - Optimized for larger screens */}
          <div className="hidden xl:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-10">
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
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
            <Link
              href="/about"
              className={`transition-colors font-medium tracking-wide text-sm ${
                activePage === "ABOUT US"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              ABOUT US
            </Link>
            <Link
              href="/partner"
              className={`transition-colors font-medium tracking-wide text-sm ${
                activePage === "PARTNER WITH US"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              PARTNER
            </Link>
          </div>

          {/* Nest Hub Optimized Navigation (1024px) */}
          <div className="hidden lg:flex xl:hidden items-center absolute left-1/2 transform -translate-x-1/2 space-x-6">
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
            <Link
              href="/"
              className={`transition-colors font-medium tracking-wide text-xs ${
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
              className={`transition-colors font-medium tracking-wide text-xs ${
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
              className={`transition-colors font-medium tracking-wide text-xs ${
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
              className={`transition-colors font-medium tracking-wide text-xs ${
                activePage === "BRAND"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              BRAND
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-amber-200 text-xs font-medium tracking-wide flex items-center">
                MORE
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block right-0 mt-2 w-40 bg-teal-800/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden border border-amber-300/20">
                <Link
                  href="/about"
                  className={`block px-4 py-3 text-xs ${
                    activePage === "ABOUT US"
                      ? "text-amber-300 bg-teal-900/50 font-semibold"
                      : "text-white hover:text-amber-200 hover:bg-teal-700/50"
                  }`}
                  onClick={handleNavItemClick}
                >
                  ABOUT US
                </Link>
                <Link
                  href="/partner"
                  className={`block px-4 py-3 text-xs ${
                    activePage === "PARTNER WITH US"
                      ? "text-amber-300 bg-teal-900/50 font-semibold"
                      : "text-white hover:text-amber-200 hover:bg-teal-700/50"
                  }`}
                  onClick={handleNavItemClick}
                >
                  PARTNER WITH US
                </Link>
              </div>
            </div>
          </div>

          {/* Medium Screen Navigation (768px-1023px) */}
          <div className="hidden md:flex lg:hidden items-center absolute left-1/2 transform -translate-x-1/2 space-x-5">
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-cyan/40 to-transparent"></div>
            <Link
              href="/"
              className={`transition-colors font-medium tracking-wide text-xs ${
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
              className={`transition-colors font-medium tracking-wide text-xs ${
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
              className={`transition-colors font-medium tracking-wide text-xs ${
                activePage === "CREATORS"
                  ? "text-amber-300 font-semibold"
                  : "text-white hover:text-amber-200"
              }`}
              onClick={handleNavItemClick}
            >
              CREATORS
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-amber-200 text-xs font-medium tracking-wide flex items-center">
                MORE
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block right-0 mt-2 w-40 bg-teal-800/95 backdrop-blur-sm rounded-md shadow-lg overflow-hidden border border-amber-300/20">
                <Link
                  href="/brand"
                  className={`block px-4 py-3 text-xs ${
                    activePage === "BRAND"
                      ? "text-amber-300 bg-teal-900/50 font-semibold"
                      : "text-white hover:text-amber-200 hover:bg-teal-700/50"
                  }`}
                  onClick={handleNavItemClick}
                >
                  BRAND
                </Link>
                <Link
                  href="/about"
                  className={`block px-4 py-3 text-xs ${
                    activePage === "ABOUT US"
                      ? "text-amber-300 bg-teal-900/50 font-semibold"
                      : "text-white hover:text-amber-200 hover:bg-teal-700/50"
                  }`}
                  onClick={handleNavItemClick}
                >
                  ABOUT US
                </Link>
                <Link
                  href="/partner"
                  className={`block px-4 py-3 text-xs ${
                    activePage === "PARTNER WITH US"
                      ? "text-amber-300 bg-teal-900/50 font-semibold"
                      : "text-white hover:text-amber-200 hover:bg-teal-700/50"
                  }`}
                  onClick={handleNavItemClick}
                >
                  PARTNER WITH US
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <GoldenButton
              href="/contact"
              className="px-3 py-1.5 text-xs lg:px-4 lg:py-2 lg:text-sm"
            >
              Let's Connect
            </GoldenButton>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden fixed top-4 right-4 z-20 text-white bg-black/30 p-1.5 rounded-full"
          >
            <svg
              className="w-5 h-5"
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-teal-900 to-cyan-800 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-95 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="absolute top-16 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

          <Link
            href="/"
            className={`text-xl font-medium tracking-wide transition-colors ${
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
            className={`text-xl font-medium tracking-wide transition-colors ${
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
            className={`text-xl font-medium tracking-wide transition-colors ${
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
            className={`text-xl font-medium tracking-wide transition-colors ${
              activePage === "BRAND"
                ? "text-amber-300 font-semibold"
                : "text-white hover:text-amber-200"
            }`}
            onClick={handleNavItemClick}
          >
            BRAND
          </Link>
          <Link
            href="/about"
            className={`text-xl font-medium tracking-wide transition-colors ${
              activePage === "ABOUT US"
                ? "text-amber-300 font-semibold"
                : "text-white hover:text-amber-200"
            }`}
            onClick={handleNavItemClick}
          >
            ABOUT US
          </Link>
          <Link
            href="/partner"
            className={`text-xl font-medium tracking-wide transition-colors ${
              activePage === "PARTNER WITH US"
                ? "text-amber-300 font-semibold"
                : "text-white hover:text-amber-200"
            }`}
            onClick={handleNavItemClick}
          >
            PARTNER WITH US
          </Link>
          <div className="absolute bottom-32 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>

          <div className="pt-4">
            <GoldenButton href="/contact" className="px-6 py-2 text-base">
              LET'S CONNECT
            </GoldenButton>
          </div>
        </div>
      </div>
    </>
  );
}
