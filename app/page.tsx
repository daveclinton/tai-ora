import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0D3E50] mb-8">
            Tai Ora Design Variations
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Choose from 10 different design variations of the Tai Ora landing
            page
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/variation1">
              <div className="p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-[#D4A33A] hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-[#0D3E50]">
                  Magazine Style
                </h3>
                <p className="text-sm text-gray-600">
                  Editorial layout with featured images and typography
                </p>
              </div>
            </Link>

            <Link href="/variation2">
              <div className="p-6 border-2 border-[#D4A33A] rounded-lg hover:bg-[#D4A33A] hover:text-white transition-colors">
                <h3 className="text-xl font-semibold mb-2">Gold Emphasis</h3>
                <p className="text-sm">
                  Light gold background, teal headings, gold buttons
                </p>
              </div>
            </Link>

            <Link href="/variation3">
              <div className="p-6 border-2 border-[#0D3E50] rounded-lg hover:bg-gradient-to-r hover:from-[#D4A33A] hover:to-[#0D3E50] hover:text-white transition-colors">
                <h3 className="text-xl font-semibold mb-2">Split Contrast</h3>
                <p className="text-sm">
                  Hero section gold with teal text, alternating sections
                </p>
              </div>
            </Link>

            <Link href="/variation4">
              <div className="p-6 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <h3 className="text-xl font-semibold mb-2">Minimalist Teal</h3>
                <p className="text-sm">
                  Mostly white background with teal accents and gold buttons
                </p>
              </div>
            </Link>

            <Link href="/variation5">
              <div className="p-6 bg-[#0D3E50] text-white rounded-lg hover:bg-[#0A2F3D] transition-colors">
                <h3 className="text-xl font-semibold mb-2">
                  Luxury Gold Accents
                </h3>
                <p className="text-sm">
                  Dark teal backgrounds with white text and gold highlights
                </p>
              </div>
            </Link>

            <Link href="/variation6">
              <div className="p-6 bg-gradient-to-br from-[#0D3E50] to-[#D4A33A] text-white rounded-lg hover:scale-105 transition-transform">
                <h3 className="text-xl font-semibold mb-2">Modern Gradient</h3>
                <p className="text-sm opacity-90">
                  Stunning gradient backgrounds with floating elements
                </p>
              </div>
            </Link>

            <Link href="/variation7">
              <div className="p-6 border-2 border-[#D4A33A] rounded-lg hover:shadow-xl hover:shadow-[#D4A33A]/20 transition-all">
                <h3 className="text-xl font-semibold mb-2 text-[#0D3E50]">
                  Image Hero
                </h3>
                <p className="text-sm text-gray-600">
                  Full-width hero images with overlay text
                </p>
              </div>
            </Link>

            <Link href="/variation8">
              <div className="p-6 bg-[#D4A33A] text-[#0D3E50] rounded-lg hover:bg-[#C4932A] transition-colors">
                <h3 className="text-xl font-semibold mb-2">Card Layout</h3>
                <p className="text-sm opacity-80">
                  Modern card-based design with image backgrounds
                </p>
              </div>
            </Link>

            <Link href="/variation9">
              <div className="p-6 border-2 border-[#0D3E50] rounded-lg hover:bg-[#0D3E50] hover:text-white transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4A33A] rounded-bl-full opacity-20"></div>
                <h3 className="text-xl font-semibold mb-2">Geometric</h3>
                <p className="text-sm">
                  Clean geometric shapes with strategic image placement
                </p>
              </div>
            </Link>

            <Link href="/variation10">
              <div className="p-6 border-2 border-[#0D3E50] rounded-lg hover:bg-[#0D3E50] hover:text-white transition-colors">
                <h3 className="text-xl font-semibold mb-2">Current Balance</h3>
                <p className="text-sm">
                  Teal background with gold headings and gold CTA
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
