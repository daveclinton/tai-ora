import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Variation2() {
  return (
    <div className="min-h-screen">
      <nav className={`px-6 py-4 bg-yellow-50 text-[#0D3E50]`}>
        <div className="container mx-auto flex items-center justify-between relative z-10">
          <Link
            href="/"
            className="text-2xl flex justify-center items-center gap-4 font-bold"
          >
            <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center  overflow-hidden">
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
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Let's Connect
          </Button>
        </div>
        <div className="h-px bg-yellow-500 mt-4" />
      </nav>

      <div className="min-h-screen bg-yellow-50 text-gray-800 overflow-hidden">
        <div className="container mx-auto px-6 py-12 lg:py-20">
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-24">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-teal-500 text-teal-600 text-sm mb-8 bg-white/50">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              Wellness with Purpose — Authenticity First
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-teal-700">Truth in Beauty</span>
              <span className="block text-teal-800">Wellness with</span>
              <span className="block text-teal-900">Purpose.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              A Māori-led platform uniting authenticity, wellbeing and ethical
              beauty — welcoming all cultures with open hearts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors shadow-lg">
                I'm a Creator
              </button>
              <button className="px-8 py-4 border border-teal-600 hover:bg-teal-600 hover:text-white text-teal-600 font-semibold rounded-lg transition-colors">
                I'm a Brand
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {/* VeeVu Feature */}
            <div className="bg-white/70 rounded-xl p-8 border border-yellow-200 hover:border-teal-400 transition-colors shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-teal-600">VeeVu™</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                VeeVu™ instantly transforms long product videos into short,
                powerful previews that highlight what truly matters. No gimmicks
                — just clear, authentic insights designed to save time and boost
                discovery.
              </p>
            </div>

            {/* iGlo Feature */}
            <div className="bg-white/70 rounded-xl p-8 border border-yellow-200 hover:border-teal-400 transition-colors shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="text-2xl font-bold text-teal-600">iGlo™</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                iGlo™ lets you document your full product journey with photos,
                notes, and reflections. Over time, it creates an AI-verified
                record of real results — building trust, empowering your voice,
                and offering brands authentic proof.
              </p>
            </div>

            {/* Coming Soon Feature */}
            <div className="bg-white/70 rounded-xl p-8 border border-yellow-200 hover:border-teal-400 transition-colors shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                <h3 className="text-2xl font-bold text-teal-600">
                  Coming Soon
                </h3>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold text-teal-600 mb-2">
                    LydiaGlo™
                  </h4>
                  <p className="text-sm">
                    Empowering recovery through healing, culture and innovation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-600 mb-2">SoulGlo™</h4>
                  <p className="text-sm">
                    Nourish your spirit with guided journeys for inner peace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with Trust Indicators */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              {/* Trust badges or icons could go here */}
              <div className="flex items-center text-teal-600">
                <span className="text-sm">Trusted by creators worldwide</span>
              </div>
              <div className="flex items-center text-teal-600">
                <span className="text-sm">Culturally authentic</span>
              </div>
              <div className="flex items-center text-teal-600">
                <span className="text-sm">AI-powered insights</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-200/30 via-transparent to-transparent pointer-events-none"></div>
      </div>
      <Footer variant="gold" />
    </div>
  );
}
