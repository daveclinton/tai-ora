import { GoldenLink } from "@/components/golden-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import JoinWaitlist from "@/components/join-waitlist";
import { SecondaryLink } from "@/components/secondary-link";

export default function Home() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-900/70">
      {/* Hero Banner */}
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
            <h2 className="text-white text-4xl md:text-5xl font-bold italic mb-6 leading-tight tracking-wide animate-fade-in drop-shadow-lg">
              I SEE YOU
            </h2>

            <p className="text-white text-base md:text-lg mb-8 leading-relaxed drop-shadow-md">
              A wellbeing platform built on authenticity, connection and aroha
              welcoming all cultures with open hearts
            </p>

            <div className="flex flex-col gap-4 justify-center">
              <GoldenLink href="/creators" className="text-lg px-10">
                I'M A CREATOR
              </GoldenLink>
              <SecondaryLink href="/brand" className="tetx-lg px-10">
                I'M A BRAND
              </SecondaryLink>
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
              <h2 className="text-white text-6xl font-bold italic mb-6 leading-tight tracking-wide animate-fade-in">
                I SEE YOU
              </h2>

              <p className="text-teal-100 text-xl mb-10 leading-relaxed px-4">
                A wellbeing platform built on authenticity, connection, and
                aroha welcoming all cultures with open hearts
              </p>
              <div className="flex flex-row gap-6 justify-center">
                <GoldenLink href="/creators" className="text-lg">
                  I'M A CREATOR
                </GoldenLink>
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

      {/* Intro / What is Tai Ora */}
      <div className="w-full py-16 px-6 bg-teal-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 italic">
            What is Tai Ora?
          </h2>
          <p className="text-white text-xl md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Tai Ora is a digital wellbeing platform that connects users with
            trustworthy creators and ethical brands. We cut through the
            influencer hype to deliver clarity, authenticity and collective
            wellbeing through innovative tools like VeeVu™ and iGlo™.
          </p>

          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 mt-12">
            <Avatar className="w-48 h-48 overflow-hidden border-4 border-amber-300/30 shadow-lg">
              <AvatarImage src="/profile.png" />
              <AvatarFallback>TP</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <blockquote className="text-white text-xl italic mb-4 leading-relaxed">
                "Tai Ora is designed to help people feel seen, supported and
                empowered in their wellbeing journey."
              </blockquote>
              <div className="text-amber-300 font-semibold text-lg">
                - Tania Pickering, Founder
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
      </div>

      {/* Features Section with VeeVu and iGlo */}
      <div className="w-full py-16 px-6 relative bg-teal-800">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 italic">
            Our Innovations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center ">
                <img
                  src="/VeeVu.png"
                  alt="VeeVu logo"
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">
                VeeVu™
              </h3>
              <p className="text-teal-800 leading-relaxed mb-4">
                Watch authentic previews through VeeVu™: see product benefits in
                seconds, no hype.
              </p>
              <p className="text-teal-700">
                Instantly transforms long product videos into short, powerful
                previews that highlight what truly matters. No gimmicks, just
                clear, authentic insights.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                <img
                  src="/iGloIcon.png"
                  alt="iGlo logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">
                iGlo™
              </h3>
              <p className="text-teal-800 leading-relaxed mb-4">
                Follow trustworthy journeys on iGlo™: capture reflections,
                photos and progress over time.
              </p>
              <p className="text-teal-700">
                Document your full product journey with photos, notes, and
                reflections. Creates an AI-verified record of real results,
                building trust and offering authentic proof.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Waitlist Section */}
      <JoinWaitlist />

      <div className="w-full py-12 px-6 bg-teal-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 italic">
            Guided by values, grounded in culture and wellbeing.
          </h2>
          <p className="text-3xl text-bold text-teal-100">
            Created for Everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
