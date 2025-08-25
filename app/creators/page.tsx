import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";

export default function CreatorPage() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70">
      {/* Hero */}
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-16">
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
          A Māori-led platform uniting authenticity, wellbeing, and ethical
          beauty — welcoming all cultures with open hearts.
        </p>
      </div>

      {/* Why Join */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-amber-300 mb-4">
            Why Join as a Creator?
          </h2>
          <p className="text-teal-100/90 leading-relaxed">
            As a Creator on Tai Ora, you gain the tools to monetise your
            authentic product journeys. Protect your content, license your
            verified reviews, and build lasting trust with your audience and
            brands — all from one upload that powers both{" "}
            <span className="text-amber-300">VeeVu™</span> and{" "}
            <span className="text-amber-300">iGlo™</span>.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Upload your video",
                desc: "Share product benefits, usage, and your authentic experience.",
              },
              {
                title: "VeeVu™ auto-created",
                desc: "A short, engaging preview that showcases product highlights.",
              },
              {
                title: "iGlo™ journey built",
                desc: "A full, AI-verified record showing truthful results over time.",
              },
              {
                title: "License & Earn",
                desc: "Both VeeVu™ and iGlo™ reviews are assets brands can license.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-amber-300 mb-2">
                  {step.title}
                </h3>
                <p className="text-teal-100/90">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-lg italic text-amber-200">
            One video. Two outcomes. Double the impact.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-8">
            Benefits
          </h2>
          <ul className="space-y-4 text-teal-100/90">
            <li>
              • Monetise your real product experiences through both previews and
              full journeys
            </li>
            <li>• Stay protected — your content is yours</li>
            <li>• License verified reviews to brands on your terms</li>
            <li>
              • Join a community built on ethics, authenticity, and inclusivity
            </li>
          </ul>
          <div className="flex justify-center gap-6 mt-10">
            <GoldenButton href="/" className="text-base">
              Apply Now
            </GoldenButton>
            <Button
              variant="outline"
              className="border-2 border-amber-300 text-white hover:bg-amber-300/20 hover:border-amber-400 font-semibold px-10 py-4 text-base tracking-wide rounded-lg transition-colors bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 mb-10 text-center">
            Tips for Creating Videos
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                1. Before You Film
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-teal-100/90">
                <li>Choose a well-lit space with minimal background noise.</li>
                <li>Keep the product packaging visible and ready to show.</li>
                <li>
                  Know the basics: Product Name, Brand, 2–3 benefits,
                  claims/badges.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                2. Suggested Flow for Your Video
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-teal-100/90">
                <li>Hook (0–5s): Exciting benefit or bold claim.</li>
                <li>Product Intro (5–10s): Show and name product + brand.</li>
                <li>Key Benefits (10–30s): Share 2–3 short benefits.</li>
                <li>
                  Quick Demo (30–50s): Show use, describe feel/scent/texture.
                </li>
                <li>Call to Action (last 5–10s): Invite viewers to act.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                3. Upload Form — Don’t Skip
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-teal-100/90">
                <li>Video Title – Short, catchy, focused on benefit.</li>
                <li>Video Description – 1–2 lines on why you love it.</li>
                <li>Product + Brand Name – Exactly as on packaging.</li>
                <li>Category, Key Benefits (max 3), Call to Action.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                4. Filming Tips for Best Results
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-teal-100/90">
                <li>Lighting: Natural daylight or ring light.</li>
                <li>Background: Clean and uncluttered.</li>
                <li>Sound: Clear audio or subtitles.</li>
                <li>Energy: Be enthusiastic but authentic.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                5. Licensing Notes
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-teal-100/90">
                <li>Upload only content you created.</li>
                <li>Brands may license VeeVu™ under agreed terms.</li>
                <li>You retain ownership unless you transfer it.</li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-center italic text-amber-200">
            Your iGlo™ journey is the full story, your VeeVu™ preview is cut
            from that story. One video. Two outcomes. Double the impact.
          </p>
        </div>
      </section>
    </section>
  );
}
