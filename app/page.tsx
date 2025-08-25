import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl md:text-2xl font-bold tracking-wider">
            TAI ORA
          </h1>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide text-sm"
            >
              HOME
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide text-sm"
            >
              CREATORS
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide text-sm"
            >
              BRAND
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-200 transition-colors font-medium tracking-wide text-sm"
            >
              PRICING
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col min-h-screen">
        {/* Mobile Layout */}
        <div className="lg:hidden relative min-h-screen flex flex-col">
          {/* Background Row - Image and Gradient */}
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full relative overflow-hidden">
              <img
                src="/left-hero.png"
                alt="Portrait of a woman representing natural beauty"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 h-full bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70"></div>
          </div>

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col justify-center items-center px-6 py-8 w-full flex-grow">
            {/* Logo - Increased size */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
                <img
                  src="/logo.png"
                  alt="Tai Ora logo"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center max-w-md">
              <h2 className="text-white text-4xl md:text-5xl font-light italic mb-6 leading-tight tracking-wide animate-fade-in drop-shadow-lg">
                I see you
              </h2>

              <p className="text-white text-base md:text-lg mb-10 leading-relaxed drop-shadow-md">
                A Māori-led platform uniting authenticity, wellbeing and ethical
                beauty — welcoming all cultures with open hearts.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 justify-center">
                <GoldenButton className="py-4 text-base">
                  I'M A CREATOR
                </GoldenButton>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-800 font-semibold px-6 py-4 text-base tracking-wide rounded-lg transition-colors bg-transparent backdrop-blur-sm"
                >
                  I'M A BRAND
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Image */}
        <div className="lg:hidden h-56 relative overflow-hidden">
          <img
            src="/left-hero.png"
            alt="Portrait of a woman representing natural beauty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row lg:min-h-screen">
          {/* Left Side - Image - Increased width */}
          <div className="w-2/5 h-screen relative overflow-hidden">
            <img
              src="/left-hero.png"
              alt="Portrait of a woman representing natural beauty"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content with Gradient Background */}
          <div className="w-3/5 relative flex flex-col justify-center items-center px-12 py-16">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-xl">
              {/* Logo - Increased size */}
              <div className="mb-10 flex justify-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
                  <img
                    src="/logo.png"
                    alt="Tai Ora logo"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="text-center">
                <h2 className="text-white text-6xl font-light italic mb-8 leading-tight tracking-wide animate-fade-in">
                  I see you
                </h2>

                <p className="text-teal-100 text-xl mb-12 leading-relaxed px-4">
                  A Māori-led platform uniting authenticity, wellbeing and
                  ethical beauty — welcoming all cultures with open hearts.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-6 justify-center">
                  <GoldenButton className="py-5 text-lg px-10">
                    I'M A CREATOR
                  </GoldenButton>
                  <Button
                    variant="outline"
                    className="border-2 border-teal-500 text-white hover:bg-teal-600 hover:border-teal-600 font-semibold px-10 py-5 text-lg tracking-wide rounded-lg transition-colors bg-transparent"
                  >
                    I'M A BRAND
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-5 right-5 z-20 text-white bg-black/30 p-2 rounded-full">
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
