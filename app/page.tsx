import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="flex flex-col">
      <div className="lg:hidden relative min-h-screen flex flex-col">
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

        <div className="relative z-10 flex flex-col justify-center items-center px-6 py-8 w-full flex-grow">
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

          <div className="text-center max-w-md">
            <h2 className="text-white text-4xl md:text-5xl font-light italic mb-6 leading-tight tracking-wide animate-fade-in drop-shadow-lg">
              I see you
            </h2>

            <p className="text-white text-base md:text-lg mb-8 leading-relaxed drop-shadow-md">
              A Māori-led platform uniting authenticity, wellbeing and ethical
              beauty — welcoming all cultures with open hearts.
            </p>

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
                A Māori-led platform uniting authenticity, wellbeing and ethical
                beauty — welcoming all cultures with open hearts.
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

      <div className="w-full py-16 px-6 bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-12 italic">
            Our Innovations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VeeVu Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                VeeVu™
              </h3>
              <p className="text-teal-100 leading-relaxed">
                Instantly transforms long product videos into short, powerful
                previews that highlight what truly matters. No gimmicks — just
                clear, authentic insights designed to save time and boost
                discovery.
              </p>
            </div>

            {/* iGlo Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                iGlo™
              </h3>
              <p className="text-teal-100 leading-relaxed">
                Lets you document your full product journey with photos, notes,
                and reflections. Over time, it creates an AI-verified record of
                real results — building trust, empowering your voice, and
                offering brands authentic proof.
              </p>
            </div>

            {/* Coming Soon Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                Coming Soon
              </h3>
              <p className="text-teal-100 leading-relaxed">
                <span className="block font-medium mb-2">LydiaGlo™</span>
                Empowering recovery through healing, culture and innovation.
                <span className="block font-medium mt-4 mb-2">SoulGlo™</span>
                Nourish your spirit with guided journeys for inner peace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
