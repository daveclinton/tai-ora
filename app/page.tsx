import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-900/70">
      <div className="lg:hidden relative min-h-screen flex flex-col">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full relative overflow-hidden">
            <img
              src="/left-hero.png"
              alt="Portrait of a woman representing natural beauty"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full"></div>
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
              I SEE YOU
            </h2>

            <p className="text-white text-base md:text-lg mb-8 leading-relaxed drop-shadow-md">
              A wellbeing platform built on authenticity, connection and aroha
              welcoming all cultures with open hearts
            </p>

            <div className="flex flex-col gap-4 justify-center">
              <GoldenButton href="/creators" className="text-lg px-10">
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
                I SEE YOU
              </h2>

              <p className="text-teal-100 text-xl mb-10 leading-relaxed px-4">
                A wellbeing platform built on authenticity, connection, and
                aroha welcoming all cultures with open hearts
              </p>
              <div className="flex flex-row gap-6 justify-center">
                <GoldenButton href="/creators" className="text-lg">
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

      <div className="w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-teal-800"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-teal-800"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-teal-800"
          ></path>
        </svg>
      </div>

      <div className="w-full py-16 px-6 bg-teal-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-amber-300/30 shadow-lg">
            <img
              src="/founder.jpg"
              alt="Tania Pickering, Founder of Tai Ora"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <blockquote className="text-white text-xl italic mb-4 leading-relaxed">
              "Tai Ora is designed to help people feel seen, supported and
              empowered."
            </blockquote>
            <div className="text-amber-300 font-semibold text-lg">
              - Tania Pickering
            </div>
            <Link
              href="/about"
              className="inline-block mt-4 text-teal-100 hover:text-amber-300 transition-colors"
            >
              Learn more about our story →
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full py-8 px-6 relative bg-teal-800">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-12 italic">
            Our Innovations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                VeeVu™
              </h3>
              <p className="text-teal-800 leading-relaxed">
                Instantly transforms long product videos into short, powerful
                previews that highlight what truly matters. No gimmicks — just
                clear, authentic insights designed to save time and boost
                discovery.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                iGlo™
              </h3>
              <p className="text-teal-800 leading-relaxed">
                Lets you document your full product journey with photos, notes,
                and reflections. Over time, it creates an AI-verified record of
                real results — building trust, empowering your voice, and
                offering brands authentic proof.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">
                Coming Soon
              </h3>
              <p className="text-teal-800 leading-relaxed">
                <span className="block font-medium mb-2">LydiaGlo™</span>
                Empowering recovery through healing, culture and innovation.
                <span className="block font-medium mt-4 mb-2">SoulGlo™</span>
                Nourish your spirit with guided journeys for inner peace.
              </p>
              <Link
                href="/coming-soon"
                className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium"
              >
                Get early access →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-6 bg-gradient-to-r from-amber-500/20 to-teal-600/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 italic">
            Guided by values, grounded in culture and wellbeing.
          </h2>
          <p className="text-xl text-teal-100">Created for Everyone.</p>
        </div>
      </div>

      <div className="w-full py-16 px-6 bg-teal-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Join Our Waitlist
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Be the first to experience our new wellbeing tools and features
          </p>

          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-amber-300/30 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-teal-900/50 text-white placeholder-teal-200"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-amber-300/30 focus:outline-none focus:ring-2 focus:ring-amber-300 bg-teal-900/50 text-white placeholder-teal-200"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-teal-900 font-semibold rounded-lg transition-colors"
            >
              Get Early Access
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
