import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";

export default function BrandPage() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70">
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-16">
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
          A Māori-led platform uniting authenticity, wellbeing, and ethical
          beauty — welcoming all cultures with open hearts.
        </p>
      </div>

      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-amber-300 mb-4">
            Why partner with Tai Ora?
          </h2>
          <p className="text-teal-100/90 leading-relaxed">
            One creator, two assets. With every upload, your brand receives both
            a <span className="text-amber-300">VeeVu™</span> preview and an{" "}
            <span className="text-amber-300">iGlo™</span> journey.
          </p>
          <ul className="mt-4 space-y-2 text-teal-100/90">
            <li>• VeeVu™ — short, high-impact previews that drive discovery</li>
            <li>
              • iGlo™ — full, AI-verified journeys that prove results and build
              trust
            </li>
            <li>• One upload, two outcomes — the hook and the proof</li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 mb-6 text-center">
            Ethical & inclusive by design
          </h2>
          <ul className="space-y-3 text-teal-100/90">
            <li>• Consent-first licensing with transparent terms</li>
            <li>• Real creators, real results — no gimmicks, no scripts</li>
            <li>
              • Māori-led platform welcoming all cultures with open hearts
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-10">
            What you can do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Source creator content across skincare, haircare, and wellness",
              "License VeeVu™ previews for paid media and product pages",
              "Embed iGlo™ journeys to increase PDP conversion with proof",
              "Run A/B tests with multiple VeeVu™ cuts auto-generated from journeys",
              "Request specific briefs or challenges for launches",
              "Measure performance with transparent, privacy-safe analytics",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all"
              >
                <p className="text-teal-100/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 mb-8 text-center">
            Licensing options
          </h2>
          <ul className="space-y-4 text-teal-100/90">
            <li>
              • Creator-owned, brand-licensed — flexible durations and
              placements
            </li>
            <li>• Co-branded — your brand identity alongside the creator</li>
            <li>• Full buyout — optional by mutual agreement</li>
          </ul>
          <p className="mt-6 text-center italic text-amber-200">
            All options uphold creator rights, cultural respect, and transparent
            usage.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <GoldenButton href="/contact" className="text-base w-full sm:w-auto">
            Talk to Us
          </GoldenButton>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-2 border-amber-300 text-white hover:bg-amber-300/20 hover:border-amber-400 font-semibold px-10 py-4 text-base tracking-wide rounded-lg transition-colors bg-transparent"
          >
            See How Creators Contribute
          </Button>
        </div>
      </section>
    </section>
  );
}
