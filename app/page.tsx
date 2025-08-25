import { GoldenButton } from "@/components/golden-button";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex flex-col min-h-screen">
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
            {/* Logo with Golden Shadow */}
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-lg shadow-amber-400/70 ring-2 ring-amber-300/50">
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

              <p className="text-white text-base md:text-lg mb-8 leading-relaxed drop-shadow-md">
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

        <div className="lg:hidden h-56 relative overflow-hidden">
          <img
            src="/left-hero.png"
            alt="Portrait of a woman representing natural beauty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:min-h-screen">
          <div className="w-2/5 h-screen relative overflow-hidden">
            <img
              src="/left-hero.png"
              alt="Portrait of a woman representing natural beauty"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-3/5 relative flex flex-col justify-center items-center px-12 py-12">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70"></div>

            <div className="relative z-10 w-full max-w-xl">
              <div className="mb-8 flex justify-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-xl shadow-amber-400/70 ring-2 ring-amber-300/50">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
                  <img
                    src="/logo.png"
                    alt="Tai Ora logo"
                    className="w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-white text-6xl font-light italic mb-6 leading-tight tracking-wide animate-fade-in">
                  I see you
                </h2>

                <p className="text-teal-100 text-xl mb-10 leading-relaxed px-4">
                  A Māori-led platform uniting authenticity, wellbeing and
                  ethical beauty — welcoming all cultures with open hearts.
                </p>
                <div className="flex flex-row gap-6 justify-center">
                  <GoldenButton className="py-5 text-lg px-10">
                    I'M A CREATOR
                  </GoldenButton>
                  <Button
                    variant="outline"
                    className="border-2 border-amber-300 text-white hover:bg-amber-300/20 hover:border-amber-400 font-semibold px-10 py-5 text-lg tracking-wide rounded-lg transition-colors bg-transparent"
                  >
                    I'M A BRAND
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
