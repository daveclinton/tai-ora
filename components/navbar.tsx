import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getButtonStyles, getNavbarStyles } from "@/lib/utils";

interface NavbarProps {
  variant: "current" | "gold" | "split" | "minimal" | "luxury" | "gradient";
}

export function Navbar({ variant }: NavbarProps) {
  return (
    <nav className={`px-6 py-4 ${getNavbarStyles(variant)}`}>
      {variant === "gradient" && (
        <>
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/placeholder.svg?height=100&width=1200')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D3E50]/80 via-[#1A5A6B]/60 to-[#0D3E50]/80" />
        </>
      )}

      <div className="container mx-auto flex items-center justify-between relative z-10">
        <Link href="/" className="text-2xl font-bold">
          Tai Ora
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Home
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            How It Works
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Creators
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Brands
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            Pricing
          </Link>
        </div>

        <Button className={getButtonStyles(variant)}>Let's Connect</Button>
      </div>
    </nav>
  );
}
