import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-700/70">
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">
        <div className="w-36 h-36 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-lg shadow-amber-400/70 ring-2 ring-teal-300/50 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-300/30 to-amber-400/30 animate-ping-slow"></div>
          <img
            src="/logo.png"
            alt="Tai Ora logo"
            className="w-full h-full object-cover relative z-10"
          />
        </div>

        <h1 className="text-white text-5xl md:text-6xl font-light italic mb-4 leading-tight tracking-wide drop-shadow-lg">
          About Tai Ora
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed">
          A wellbeing platform built on authenticity, connection and aroha
          welcoming all cultures with open hearts
        </p>
      </div>
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-teal-200 shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Our Story
          </h2>
          <p className="text-teal-700/90 leading-relaxed">
            Kia ora, I'm Tania Pickering, and Tai Ora is the vision that has
            called me home. I was born in Aotearoa New Zealand, where from a
            young age I faced challenges that built resilience and a
            determination to create something greater. My experiences overseas
            strengthened my connection to my roots and inspired the creation of
            Tai Ora.
          </p>
        </div>
      </section>
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-teal-200 shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            What Tai Ora Means
          </h2>
          <p className="text-teal-700/90 leading-relaxed">
            Tai Ora carries deep meaning. Tai speaks to the tides and flow of
            life; Ora means wellbeing, life and healing. Together, Tai Ora is a
            platform designed to help people reclaim their time, identity and
            wellbeing. It is grounded in cultural values that unite people
            through beauty, self-care and wellness in ethical and inclusive
            ways.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-10">
            Our Purpose
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Empower",
                desc: "Empower people to make better, more authentic choices",
              },
              {
                title: "Showcase",
                desc: "Showcase products and practices that support true wellbeing",
              },
              {
                title: "Build",
                desc: "Build a platform that extends into real-world sustainable communities",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-teal-200 hover:border-teal-300 transition-all text-center"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-700/90">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-lg text-amber-200">
            At the heart of Tai Ora is a simple truth: I see you. We exist to
            ensure people feel seen, supported and inspired.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-teal-300/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light italic text-amber-300 text-center mb-8">
            Our Principles
          </h2>
          <p className="text-center text-teal-100/90 mb-10">
            Guided by values drawn from te ao Māori, principles deeply rooted in
            culture yet universally relevant:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Whakapapa",
                desc: "Honouring our roots and connections, knowing we are part of a greater lineage.",
              },
              {
                title: "Manaakitanga",
                desc: "Caring for others with respect, generosity and aroha.",
              },
              {
                title: "Kaitiakitanga",
                desc: "Protecting the land, people and knowledge for future generations.",
              },
              {
                title: "Pono",
                desc: "Acting with honesty, transparency and integrity.",
              },
              {
                title: "Kotahitanga",
                desc: "Uniting communities across cultures with shared purpose.",
              },
              {
                title: "Ora",
                desc: "Placing wellbeing at the heart of everything we do.",
              },
            ].map((principle, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-teal-200 hover:border-teal-300 transition-all"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {principle.title}
                </h3>
                <p className="text-teal-700/90">{principle.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-lg text-amber-200">
            While our roots are Māori, our vision is universal: to empower all
            people, across all cultures, to live authentically and with
            wellbeing.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-teal-200 shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-800 mb-6 text-center">
            A Note from Our Founder
          </h2>

          <div className="text-teal-700 leading-relaxed space-y-4 italic">
            <p>Kia Ora,</p>

            <p>
              When I began this journey, I felt a deep connection to my roots in
              Aotearoa. Tai Ora grew from that connection, a platform to bring
              people together through culture, wellness and authenticity,
              wherever they are in the world.
            </p>

            <p>
              For me, Tai Ora is about people, being seen, heard and supported.
              It's about weaving culture, wellness and purpose into everyday
              life. A place where authenticity matters, wellbeing is grounded in
              truth and community always comes first.
            </p>

            <p>
              I see you. I see your journey, your strength, your potential. My
              hope is that Tai Ora will walk alongside you, empowering you to
              reclaim your time, your identity and your wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light italic text-amber-300 mb-6">
            Join Our Journey
          </h2>
          <p className="text-teal-100/90 mb-8">
            Become part of a community that values authenticity, wellbeing, and
            cultural connection.
          </p>
          <div className="text-center mt-10 flex flex-col md:flex-row gap-6 justify-center">
            <GoldenButton
              href="/creator"
              className="text-base text-white py-4 lg:py-0"
            >
              Join as Creator
            </GoldenButton>
            <Button
              variant="outline"
              className="border-2 border-teal-300 text-white hover:bg-teal-300/20 hover:border-teal-400 font-semibold px-10 py-6 text-base tracking-wide rounded-lg transition-colors bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
