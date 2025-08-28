import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";
import {
  Handshake,
  Layers,
  TrendingUp,
  FolderOpen,
  Play,
  Code,
  TestTube,
  Megaphone,
  BarChart3,
  FileText,
  Users,
  Shield,
} from "lucide-react";

export default function BrandPage() {
  const capabilities = [
    {
      icon: FolderOpen,
      title: "Source creator content across skincare, haircare and wellness",
    },
    {
      icon: Play,
      title: "License VeeVu™ previews for paid media and product pages",
    },
    {
      icon: Code,
      title: "Embed iGlo™ journeys to increase PDP conversion with proof",
    },
    {
      icon: TestTube,
      title:
        "Run A/B tests with multiple VeeVu™ cuts auto-generated from journeys",
    },
    {
      icon: Megaphone,
      title: "Request specific briefs or challenges for launches",
    },
    {
      icon: BarChart3,
      title: "Measure performance with transparent, privacy-safe analytics",
    },
  ];

  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-900/70">
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">
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

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-amber-300/20 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <Handshake className="w-8 h-8 text-amber-600 opacity-80" />
            </div>
            <h2 className="text-2xl font-semibold text-teal-800">
              Why partner with Tai Ora?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Layers className="w-10 h-10 text-amber-600 opacity-70" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">
                Dual Asset Creation
              </h3>
              <p className="text-sm text-teal-700/90">
                Different Uploads, Different Value
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-amber-600 opacity-70" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">
                Proven Results
              </h3>
              <p className="text-sm text-teal-700/90">
                AI-verified journeys that build trust
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Handshake className="w-10 h-10 text-amber-600 opacity-70" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">
                Brand Partnership
              </h3>
              <p className="text-sm text-teal-700/90">
                Flexible collaboration models
              </p>
            </div>
          </div>

          <p className="text-teal-700/90 leading-relaxed">
            Creators choose how they share their experience with your product: a{" "}
            <span className="text-amber-600">VeeVu™</span> preview and an{" "}
            <span className="text-amber-600">iGlo™</span> journey.
          </p>
          <ul className="mt-4 space-y-2 text-teal-700/90">
            <li>
              • VeeVu™ — short product previews designed for quick discovery and
              decision-making.
            </li>
            <li>
              • iGlo™ — authentic, AI-verified reviews and full journey logs
              that build lasting trust.
            </li>
            <li>
              • Different uploads, different outcomes — the hook and the proof
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20">
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 border border-amber-300/20">
          <h2 className="text-3xl font-light italic text-teal-800 mb-6 text-center">
            Ethical & inclusive by design
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center">
              <Shield className="w-14 h-14 text-amber-600 opacity-60" />
            </div>
          </div>
          <ul className="space-y-3 text-xl text-teal-700/90">
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
            {capabilities.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center opacity-70 group-hover:opacity-90 transition-opacity">
                    <item.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-teal-700/90  text-lg leading-relaxed">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20">
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 border border-amber-300/20">
          <h2 className="text-3xl font-bold italic text-teal-800 mb-8 text-center">
            Licensing options
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <FileText className="w-10 h-10 text-amber-600 opacity-70" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">
                Flexible Terms
              </h3>
              <p className="text-sm text-teal-700/90">
                Creator-owned, brand-licensed with flexible durations
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-amber-600 opacity-70" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">Co-branded</h3>
              <p className="text-sm text-teal-700/90">
                Your brand identity alongside the creator
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Shield className="w-10 h-10 text-amber-600 opacity-70" />
              </div>
              <h3 className="font-semibold text-teal-800 mb-2">Full Buyout</h3>
              <p className="text-sm text-teal-700/90">
                Optional by mutual agreement with full rights transfer
              </p>
            </div>
          </div>

          <ul className="space-y-4 text-teal-700/90">
            <li>
              • Creator-owned, brand-licensed — flexible durations and
              placements
            </li>
            <li>• Co-branded — your brand identity alongside the creator</li>
            <li>• Full buyout — optional by mutual agreement</li>
          </ul>
          <p className="mt-6 text-center italic text-amber-600">
            All options uphold creator rights, cultural respect, and transparent
            usage.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <GoldenButton
            href="/contact"
            className="text-base py-3 w-full text-white sm:w-auto"
          >
            Talk to Us
          </GoldenButton>
          <Button
            variant="outline"
            className="w-full sm:w-auto border-2 border-amber-300 text-white hover:bg-amber-300/20 hover:border-amber-400 font-semibold px-10 py-6 text-base tracking-wide rounded-lg transition-colors bg-transparent"
          >
            See How Creators Contribute
          </Button>
        </div>
      </section>
    </section>
  );
}
