"use client";

import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrustIndicator } from "@/components/trust-indicator";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Variation3() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className={`px-6 py-2 bg-[#021e25] text-white relative`}>
        <div className="container mx-auto flex items-center justify-between relative z-10">
          <Link
            href="/"
            className="text-xl md:text-2xl flex justify-center items-center gap-2 md:gap-4 font-bold"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 mx-auto rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="w-full h-full object-cover"
              />
            </div>
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

          <div className="flex items-center gap-4">
            <Button className="hidden sm:block bg-yellow-500 hover:bg-yellow-600 text-white text-sm md:text-base px-4 md:px-6">
              Let's Connect
            </Button>

            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#021e25] border-t border-teal-700/30 shadow-xl z-50">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <Link
                href="#"
                className="block py-3 hover:bg-white/10 rounded-lg px-4 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#"
                className="block py-3 hover:bg-white/10 rounded-lg px-4 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="block py-3 hover:bg-white/10 rounded-lg px-4 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Creators
              </Link>
              <Link
                href="#"
                className="block py-3 hover:bg-white/10 rounded-lg px-4 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Brands
              </Link>
              <Link
                href="#"
                className="block py-3 hover:bg-white/10 rounded-lg px-4 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-4 border-t border-teal-700/30">
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-[#021e25] via-[#0a2a32] to-[#134e4a] text-gray-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-teal-500/10 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-yellow-300/10 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center min-h-[80vh]">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-flex items-center px-3 md:px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 text-xs md:text-sm bg-white/90 backdrop-blur-sm">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Wellness with Purpose — Authenticity First
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-teal-200 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Truth in Beauty
                </span>
                <span className="block bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Wellness with
                </span>
                <span className="block bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                  Purpose.
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-teal-50/90 leading-relaxed">
                A Māori-led platform uniting authenticity, wellbeing and ethical
                beauty — welcoming all cultures with open hearts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base">
                  I'm a Creator
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 border border-teal-400/50 hover:bg-gradient-to-r hover:from-teal-600/20 hover:to-emerald-600/20 hover:border-teal-300 text-teal-300 font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm text-sm md:text-base">
                  I'm a Brand
                </button>
              </div>
              <TrustIndicator />
            </div>

            <div className="relative h-[500px] sm:h-[600px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
              <div className="absolute top-0 right-0 sm:top-0 sm:right-0 md:top-4 md:right-4 lg:top-0 lg:right-0 w-64 sm:w-72 md:w-80 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-2">
                      VeeVu™
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      VeeVu™ instantly transforms long product videos into
                      short, powerful previews that highlight what truly
                      matters. No gimmicks — just clear, authentic insights
                      designed to save time and boost discovery.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>

              <div className="absolute top-16 left-0 sm:top-20 sm:left-4 md:top-24 md:left-8 lg:top-32 lg:left-8 w-64 sm:w-72 md:w-80 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:-rotate-1 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent mb-2">
                      iGlo™
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      iGlo™ lets you document your full product journey with
                      photos, notes, and reflections. Over time, it creates an
                      AI-verified record of real results — building trust,
                      empowering your voice, and offering brands authentic
                      proof.
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
              </div>

              <div className="absolute top-32 right-2 sm:top-40 sm:right-2 md:top-48 md:right-4 lg:top-64 lg:right-4 w-64 sm:w-72 md:w-80 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:rotate-2 group">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-3">
                      Coming Soon
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg border-l-4 border-teal-400">
                        <h4 className="font-semibold text-teal-700 text-sm mb-1">
                          LydiaGlo™
                        </h4>
                        <p className="text-gray-600 text-xs">
                          Empowering recovery through healing, culture and
                          innovation.
                        </p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-400">
                        <h4 className="font-semibold text-purple-700 text-sm mb-1">
                          SoulGlo™
                        </h4>
                        <p className="text-gray-600 text-xs">
                          Nourish your spirit with guided journeys for inner
                          peace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              </div>

              <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400/60 rounded-full animate-ping"></div>
              <div className="absolute top-80 right-20 w-3 h-3 bg-teal-400/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer variant="split" />
    </div>
  );
}
