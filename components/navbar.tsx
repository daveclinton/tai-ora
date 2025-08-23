import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav
      className={`px-6 py-4 bg-gradient-to-r from-[#0D3E50] via-[#1A5A6B] to-[#0D3E50] text-white relative overflow-hidden`}
    >
      <>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/hero.png?height=100&width=1200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3E50]/80 via-[#1A5A6B]/60 to-[#0D3E50]/80" />
      </>
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

        <Button className="bg-gradient-to-r from-[#D4A33A] to-[#F5D76E] hover:from-[#B8921F] hover:to-[#D4A33A] text-white shadow-lg">
          Let's Connect
        </Button>
      </div>
    </nav>
  );
}
