import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wider">
            TAI ORA
          </h1>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide"
            >
              CREATORS
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide"
            >
              BRAND
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide"
            >
              PRICING
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        <div className="lg:hidden relative min-h-screen flex">
          {/* Background Row - Image Left, Faded Background Right */}
          <div className="absolute inset-0 flex">
            {/* Left Side - Image */}
            <div className="w-1/2 h-full relative overflow-hidden">
              <img
                src="/left-hero.png"
                alt="Portrait of a woman representing natural beauty"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Faded Background */}
            <div className="w-1/2 h-full bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70"></div>
          </div>

          {/* Overlay Content - Text and Buttons on Top */}
          <div className="relative z-10 flex flex-col justify-center items-center px-6 py-12 w-full">
            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
                <img
                  src="/logo.png"
                  alt="Portrait of a woman representing natural beauty"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center max-w-lg">
              <h2 className="text-white text-4xl md:text-5xl font-light italic mb-8 leading-tight tracking-wide animate-fade-in drop-shadow-lg">
                I see you
              </h2>

              <p className="text-white text-lg mb-12 leading-relaxed drop-shadow-md">
                A Māori-led platform uniting authenticity, wellbeing and ethical
                beauty — welcoming all cultures with open hearts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 justify-center">
                <GoldenButton>I'M A CREATOR</GoldenButton>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold px-8 py-6 text-lg tracking-wide rounded-lg transition-colors bg-transparent backdrop-blur-sm"
                >
                  I'M A BRAND
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image Section - Now Visible Below Content */}
        <div className="lg:hidden h-64 relative overflow-hidden">
          <img
            src="/left-hero.png"
            alt="Portrait of a woman representing natural beauty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex lg:flex-row lg:min-h-screen">
          {/* Left Side - Image */}
          <div className="lg:w-1/4 h-screen relative overflow-hidden">
            <img
              src="/left-hero.png"
              alt="Portrait of a woman representing natural beauty"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-3/4 bg-teal-700 flex flex-col justify-center items-center px-16 py-24">
            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
                <img
                  src="/logo.png"
                  alt="Portrait of a woman representing natural beauty"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center max-w-lg">
              <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-light italic mb-8 leading-tight tracking-wide animate-fade-in">
                I see you
              </h2>

              <p className="text-teal-100 text-lg md:text-xl mb-12 leading-relaxed">
                A Māori-led platform uniting authenticity, wellbeing and ethical
                beauty — welcoming all cultures with open hearts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GoldenButton>I'M A CREATOR</GoldenButton>
                <Button
                  variant="outline"
                  className="border-2 border-teal-500 text-white hover:bg-teal-600 hover:border-teal-600 font-semibold px-8 py-6 text-lg tracking-wide rounded-lg transition-colors bg-transparent"
                >
                  I'M A BRAND
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-6 right-6 z-20 text-white">
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
