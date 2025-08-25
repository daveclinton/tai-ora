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
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Image (Desktop only) */}
        <div className="hidden lg:block lg:w-1/4 h-64 lg:h-screen relative overflow-hidden">
          <img
            src="/left-hero.png"
            alt="Portrait of a woman representing natural beauty"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content with mobile background */}
        <div className="lg:w-3/4 bg-teal-700 flex flex-col justify-center items-center px-6 py-12 lg:px-16 lg:py-24 relative lg:bg-teal-700">
          <div className="lg:hidden absolute inset-0 z-0">
            <img
              src="/left-hero.png"
              alt="Portrait of a woman representing natural beauty"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-teal-700/80"></div>
          </div>

          <div className="relative z-10">
            {/* Logo */}
            <div className="mb-12 flex justify-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center  overflow-hidden">
                <img
                  src="/logo.png"
                  alt="Portrait of a woman representing natural beauty"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center max-w-lg">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-wide">
                Truth in Beauty,
                <br />
                Wellness with
                <br />
                Purpose
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
