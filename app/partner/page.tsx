import { Button } from "@/components/ui/button";

export default function PartnerPage() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-amber-900/70">
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
          Partner with Tai Ora
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed">
          A movement and AI-powered wellness platform helping people make better
          choices, discover authentic products and reclaim their time, identity
          and wellbeing.
        </p>
      </div>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-amber-300/20 shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            The Meaning of "Tai Ora"
          </h2>
          <p className="text-teal-700">
            In te reo Maori, Tai Ora speaks to health and wellness through the
            tides of life, reflecting our cultural grounding and vision for
            purposeful living.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-10">
            Why Partner With Us
          </h2>
          <p className="text-teal-100 text-center mb-10 max-w-3xl mx-auto">
            Sponsors and partners help us expand this vision, creating
            technology that uplifts people, not just profits. Collaborating with
            Tai Ora connects your brand to authentic, AI‑verified journeys and
            values‑led innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Authenticity",
                desc: "Real, timestamped, AI‑verified journeys",
              },
              {
                title: "Cultural grounding",
                desc: "Maori principles of balance and whanau",
              },
              {
                title: "Ethical innovation",
                desc: "AI that guides and supports, never controls",
              },
              {
                title: "Giving back",
                desc: "Profits fund community wellness hubs",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-amber-300/20 shadow-md hover:border-amber-300/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  ✓ {item.title}
                </h3>
                <p className="text-teal-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-10">
            Sponsorship Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Financial Sponsorship",
                desc: "Fuel product growth, Maori‑led creator programmes and community access.",
              },
              {
                title: "Brand Partnership",
                desc: "Showcase products through VeeVu™ and iGlo™ journeys that brands and users can trust.",
              },
              {
                title: "In‑kind Support",
                desc: "Provide products, services, or expertise to empower creators and communities.",
              },
              {
                title: "Research Collaboration",
                desc: "Join our university partnerships building T.A.I, Tai Ora Angel Intelligence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-amber-300/20 shadow-md hover:border-amber-300/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-10">
            The Principles That Shape Tai Ora
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Whakapapa",
                subtitle: "(lineage & Connection)",
                desc: "We honour the past, present and future. Our work is rooted in connection, to culture, community and each other.",
              },
              {
                title: "Whanau",
                subtitle: "(family & Care)",
                desc: "We create spaces where people feel supported, safe and empowered, just as they would in family.",
              },
              {
                title: "Manaakitanga",
                subtitle: "(respect & Upliftment)",
                desc: "We uplift people with care, empathy and respect, ensuring every voice and journey is valued.",
              },
              {
                title: "Kaitiakitanga",
                subtitle: "(guardianship & Sustainability)",
                desc: "We act as guardians of people, data and the environment, ensuring technology serves wellbeing and protects what matters.",
              },
              {
                title: "Pono",
                subtitle: "(truth & Integrity)",
                desc: "We are committed to authenticity, ensuring that every review, story and connection is real, transparent and trustworthy.",
              },
              {
                title: "Kotahitanga",
                subtitle: "(unity & Inclusivity)",
                desc: "Guided by Maori principles, Tai Ora is created for everyone, embracing diversity and building unity through shared purpose.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-amber-300/20 shadow-md hover:border-amber-300/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-amber-600 text-sm mb-3">{item.subtitle}</p>
                <p className="text-teal-700 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact Section */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-10">
            Our Vision & Impact
          </h2>

          <div className="bg-white rounded-2xl p-8 border border-amber-300/20 shadow-md">
            <p className="text-teal-700 mb-6">
              Our profits sustain and support the people building Tai Ora, fuel
              continued growth and enable us to dedicate a meaningful portion to
              social and cultural initiatives beyond the platform from
              self‑sustaining communities to projects that help people thrive
              worldwide. Tai Ora is not just technology, it's a global movement
              for purposeful living.
            </p>

            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Impact Snapshot
            </h3>
            <ul className="text-teal-700 space-y-2">
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>
                  Growing network of creators preparing to share authentic
                  product journeys
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>
                  Early interest from ethical beauty, self‑care and Maori‑led
                  brands
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-2">✓</span>
                <span>
                  Phase 1 launch focused on high‑quality content across skin,
                  hair and self‑care
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl bg-white rounded-2xl p-8 border border-amber-300/30 shadow-lg">
          <h2 className="text-3xl font-light italic text-teal-800 mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-teal-700 mb-8 text-center">
            For sponsorships and partnerships, contact Tania Pickering, Founder
            & CEO.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-lg p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-teal-800 text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-teal-300 rounded text-teal-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-teal-800 text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border border-teal-300 rounded text-teal-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-teal-800 text-sm font-medium mb-1">
                    Organisation
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-teal-300 rounded text-teal-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-teal-800 text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea className="w-full p-2 border border-teal-300 rounded h-24 text-teal-900 bg-white"></textarea>
                </div>
                <Button className="w-full bg-amber-400 text-teal-900 hover:bg-amber-300 font-semibold py-3">
                  Send Enquiry
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 h-full">
                <h3 className="text-teal-800 font-semibold text-lg mb-4">
                  Contact Information
                </h3>
                <p className="text-teal-700 mb-2">Tania Pickering</p>
                <p className="text-teal-700 mb-2">Founder & CEO</p>
                <p className="text-teal-700 mb-4 flex items-center">
                  <span className="mr-2">✉</span> tania@taiora.ai
                </p>
                <p className="text-teal-700 flex items-center">
                  <span className="mr-2">☎</span> +64 ••• ••• •••
                </p>

                <div className="mt-8 p-4 bg-teal-100 rounded-lg border border-teal-200">
                  <p className="text-teal-800 italic text-center">
                    "Tai Ora: Truth in Beauty. Wellness with Purpose."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
