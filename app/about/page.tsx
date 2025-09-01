import { GoldenButton } from "@/components/golden-button";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Users,
  Globe,
  Sparkles,
  Target,
  Eye,
  Shield,
  HandHeart,
  Trees,
  Star,
  CircleDashed,
  Mail,
  Clock,
  Lightbulb,
  Scale,
  CheckCircle,
} from "lucide-react";

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

        <h1 className="text-white text-5xl md:text-6xl font-bold italic mb-4 leading-tight tracking-wide drop-shadow-lg">
          Our Journey, Our Story, Our Why
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed">
          A wellbeing platform built on authenticity, connection and aroha
          welcoming all cultures with open hearts
        </p>
      </div>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-teal-200 shadow-lg">
          <div className="flex items-center mb-4">
            <CircleDashed className="text-amber-600 mr-2" size={24} />
            <h2 className="text-2xl font-semibold text-teal-800">
              How Tai Ora Began
            </h2>
          </div>
          <p className="text-teal-700/90 leading-relaxed">
            Tai Ora was born from my own journey. In life and work I've always
            focused on efficiency and problem solving and I wanted to bring that
            same clarity to wellbeing choices. Like many, I found myself
            standing in front of shelves or scrolling my phone, unsure which
            products were truly good. I wanted ethical options I could trust,
            but the information was confusing and unreliable, and I saw others
            struggling in the same way.
          </p>
          <p className="text-teal-700/90 leading-relaxed mt-4">
            That experience sparked the idea for Tai Ora: a digital platform
            that is authentic, cultural and built for everyone. Through tools
            like VeeVu™ and iGlo™, Tai Ora connects creators, brands and
            communities to cut through influencer hype and deliver clarity,
            authenticity and collective wellbeing.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-teal-300/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-8">
            <Heart className="text-amber-300 mr-2" size={28} />
            <h2 className="text-3xl font-bold italic text-amber-300">
              Our Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Authenticity first",
                desc: "Real journeys matter more than marketing.",
                icon: <CheckCircle className="text-amber-600 mb-2" size={24} />,
              },
              {
                title: "Cultural respect",
                desc: "Grounded in Māori values of aroha, whanaungatanga (connection) and manaakitanga (care), while welcoming all cultures.",
                icon: <Globe className="text-amber-600 mb-2" size={24} />,
              },
              {
                title: "Ethics and trust",
                desc: "We protect creators, value consent and ensure fairness for users and brands.",
                icon: <Shield className="text-amber-600 mb-2" size={24} />,
              },
              {
                title: "Clarity and simplicity",
                desc: "Wellbeing should be easier, not harder.",
                icon: <Scale className="text-amber-600 mb-2" size={24} />,
              },
            ].map((principle, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-teal-200 hover:border-teal-300 transition-all"
              >
                <div className="flex items-center mb-3">
                  {principle.icon}
                  <h3 className="text-xl font-semibold text-teal-800 ml-2">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-teal-700/90">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-10">
            <Target className="text-amber-300 mr-2" size={28} />
            <h2 className="text-3xl font-bold italic text-amber-300">
              Our Purpose
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-teal-200 shadow-lg mb-10">
            <p className="text-teal-700/90 text-center text-lg leading-relaxed">
              Our purpose is simple: to help people make confident choices about
              their wellbeing. We do this by connecting users with trustworthy
              creators and ethical brands, so decisions are based on real
              experiences rather than hype or paid influence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Truth",
                desc: "Honesty in every journey and review.",
                icon: (
                  <CheckCircle
                    className="text-amber-600 mb-4 mx-auto"
                    size={32}
                  />
                ),
              },
              {
                title: "Connection",
                desc: "People, culture and technology working together.",
                icon: (
                  <Users className="text-amber-600 mb-4 mx-auto" size={32} />
                ),
              },
              {
                title: "Care",
                desc: "Prioritising wellbeing and safety for users and communities.",
                icon: (
                  <HandHeart
                    className="text-amber-600 mb-4 mx-auto"
                    size={32}
                  />
                ),
              },
              {
                title: "Innovation",
                desc: "Using technology in service of people, not the other way around.",
                icon: (
                  <Lightbulb
                    className="text-amber-600 mb-4 mx-auto"
                    size={32}
                  />
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border border-teal-200 hover:border-teal-300 transition-all text-center"
              >
                {item.icon}
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-teal-700/90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-teal-200 shadow-lg">
          <div className="flex items-center mb-4">
            <Globe className="text-amber-600 mr-2" size={24} />
            <h2 className="text-2xl font-semibold text-teal-800">
              The Meaning of Tai Ora
            </h2>
          </div>
          <p className="text-teal-700/90 leading-relaxed">
            Tai means 'tide' or 'flow,' and Ora means 'life' or 'wellbeing.'
            Together, Tai Ora represents the natural flow of life and health,
            guided by culture and collective care. It symbolises balance,
            renewal and the connection between people and the environment.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-teal-300/20">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center items-center mb-8">
            <Sparkles className="text-amber-300 mr-2" size={28} />
            <h2 className="text-3xl font-bold italic text-amber-300">
              Our Vision
            </h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl p-8 border border-teal-200 shadow-lg mb-6">
            <p className="text-teal-700/90 text-center text-lg leading-relaxed">
              We envision a world where wellbeing is personal, trusted and
              accessible to everyone. Tai Ora will grow into a wider ecosystem
              that supports every aspect of life, combining wisdom from
              communities with the guidance of technology to create a system
              that truly cares for people.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-teal-200 shadow-lg mt-10">
            <div className="flex items-center mb-4">
              <Clock className="text-amber-600 mr-2" size={24} />
              <h2 className="text-2xl font-semibold text-teal-800">
                Our Future
              </h2>
            </div>
            <p className="text-teal-700/90 leading-relaxed">
              VeeVu™ and iGlo™ are only the beginning. In the future we aim to
              work alongside practitioners, communities and organisations to
              expand Tai Ora's impact, offering deeper pathways to emotional
              recovery, creativity, cultural healing and connection.
            </p>
            <p className="text-teal-700/90 leading-relaxed mt-4 font-semibold">
              Together, we will create a system that empowers people to reclaim
              their time, identity and wellbeing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <Mail className="text-amber-300 mr-2" size={28} />
            <h2 className="text-2xl font-bold italic text-amber-300">
              Join Our Waitlist
            </h2>
          </div>
          <p className="text-teal-100/90 mb-8 text-lg">
            Be part of our journey. Join the waitlist and be the first to know
            when we launch in December 2025.
          </p>
          <div className="text-center mt-10 flex flex-col md:flex-row gap-6 justify-center">
            <GoldenButton
              href="/waitlist"
              className="text-base text-white py-4 lg:py-0"
            >
              Join Waitlist
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
