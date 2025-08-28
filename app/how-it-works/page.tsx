import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-900/70">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">
        {/* Glowing Logo Circle */}
        <div className="w-36 h-36 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-lg shadow-amber-400/70 ring-2 ring-amber-300/50 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
          <img
            src="/logo.png"
            alt="Tai Ora logo"
            className="w-full h-full object-cover relative z-10"
          />
        </div>

        <h1 className="text-white text-5xl md:text-6xl font-light italic mb-4 leading-tight tracking-wide drop-shadow-lg">
          How Tai Ora Works
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed">
          A wellbeing platform built on authenticity, connection and aroha
          welcoming all cultures with open hearts
        </p>
      </div>

      {/* Decorative Divider */}
      <div className="w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,
              70.36-5.37,136.33-33.31,206.8-37.5,
              C438.64,32.43,512.34,53.67,583,72.05,
              c69.27,18,138.3,24.88,209.4,13.08,
              36.15-6,69.85-17.84,104.45-29.34,
              C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-teal-800"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,
              47.69,72.05,99.41,111.27,165,111,
              224.58,91.58c31.15-10.15,60.09-26.07,
              89.67-39.8,40.92-19,84.73-46,
              130.83-49.67,36.26-2.85,70.9,9.42,
              98.6,31.56,31.77,25.39,62.32,62,
              103.63,73,40.44,10.79,81.35-6.69,
              119.13-24.28s75.16-39,116.92-43.05,
              c59.73-5.85,113.28,22.88,168.9,38.84,
              30.2,8.66,59,6.17,87.09-7.5,
              22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-teal-800"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,
              475.83,42.57c43-7.64,84.23-20.12,
              127.61-26.46,59-8.63,112.48,12.24,
              165.56,35.4C827.93,77.22,886,95.24,
              951.2,90c86.53-7,172.46-45.71,
              248.8-84.81V0Z"
            className="fill-teal-800"
          ></path>
        </svg>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto my-16 px-6 space-y-10">
        {/* One Upload Section */}
        <div className="bg-white rounded-xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
          <h2 className="text-teal-800 font-semibold text-2xl italic mb-4">
            One upload. Two outcomes.
          </h2>
          <p className="mb-6 text-teal-700">
            <span className="inline-block bg-amber-100 border border-amber-300 text-amber-700 px-3 py-1 rounded-full font-bold text-sm">
              Creators upload once
            </span>{" "}
            — sharing benefits, usage and authentic experience. Tai Ora then{" "}
            <strong>automatically creates two outputs</strong>:
          </p>
          <div className="grid md:grid-cols-2 gap-5 mb-4">
            <div>
              <h3 className="text-teal-800 text-lg font-semibold mb-2">
                VeeVu™
              </h3>
              <p className="text-teal-700">
                Short, meaningful preview cut from the journey — perfect for
                product pages, ads, and quick decisions.
              </p>
            </div>
            <div>
              <h3 className="text-teal-800 text-lg font-semibold mb-2">
                iGlo™
              </h3>
              <p className="text-teal-700">
                The full, AI-verified journey with photos, notes, reflections,
                and truthful results over time.
              </p>
            </div>
          </div>
          <p className="italic mt-3 text-amber-600">
            Result: one video powers both discovery <strong>and</strong> trust.
          </p>
        </div>

        {/* Steps for Creators */}
        <div className="bg-white rounded-xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
          <h2 className="text-teal-800 font-semibold text-2xl italic mb-4">
            Steps for Creators
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-teal-700">
            <li>
              <strong>Record your journey</strong> — Hook → Intro → Benefits →
              Demo → CTA.
            </li>
            <li>
              <strong>Upload & describe</strong> — Title, product, brand,
              category, key benefits.
            </li>
            <li>
              <strong>Auto VeeVu™</strong> — Tai Ora generates the preview cut
              from your journey.
            </li>
            <li>
              <strong>iGlo™ builds over time</strong> — Add photos, notes, and
              reflections as you go.
            </li>
            <li>
              <strong>Publish & license</strong> — Approve where your content
              appears and how it's used.
            </li>
          </ol>
        </div>

        {/* What Brands Receive */}
        <div className="bg-white rounded-xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
          <h2 className="text-teal-800 font-semibold text-2xl italic mb-4">
            What Brands Receive
          </h2>
          <ul className="list-disc list-inside space-y-2 text-teal-700">
            <li>
              <strong>Authentic social-proof</strong> that's consented and
              creator-owned.
            </li>
            <li>
              <strong>Performance-ready previews</strong> (VeeVu™) for ads,
              PDPs, and retail.
            </li>
            <li>
              <strong>Embedded journeys</strong> (iGlo™) that increase shopper
              confidence.
            </li>
          </ul>
        </div>

        {/* Ethics Section */}
        <div className="bg-white rounded-xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
          <h2 className="text-teal-800 font-semibold text-2xl italic mb-4">
            Ethics, Culture, and Care
          </h2>
          <ul className="list-disc list-inside space-y-2 text-teal-700">
            <li>
              Māori-led foundation; we welcome all peoples and cultures with
              open hearts.
            </li>
            <li>
              Respect for creator IP, informed consent, and transparent
              licensing.
            </li>
            <li>
              Wellbeing-first — no pressure to exaggerate claims or results.
            </li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-10 flex flex-col md:flex-row gap-6 justify-center">
          <GoldenButton href="/creators" className="text-base py-4 lg:py-0">
            For Creators
          </GoldenButton>
          <Button
            variant="outline"
            className="border-2  border-amber-300 text-white hover:bg-amber-300/20 hover:border-amber-400 font-semibold px-10 py-6 text-lg tracking-wide rounded-lg transition-colors bg-transparent"
          >
            For Brands
          </Button>
        </div>
      </div>
    </section>
  );
}
