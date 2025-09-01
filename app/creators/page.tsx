import { GoldenLink } from "@/components/golden-button";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Upload } from "lucide-react";
import Image from "next/image";

export default function CreatorPage() {
  return (
    <section className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-900/70">
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">
        <div className="w-36 h-36 rounded-full flex items-center justify-center overflow-hidden animate-heartbeat relative shadow-lg shadow-amber-400/70 ring-2 ring-amber-300/50 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-ping-slow"></div>
          <Image
            src="/logo.png"
            alt="Tai Ora logo"
            className="w-full h-full object-cover relative z-10"
            height={100}
            width={100}
          />
        </div>

        <h1 className="text-white text-5xl md:text-6xl font-bold italic mb-4 leading-tight tracking-wide drop-shadow-lg">
          Turn your passion into purpose
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed">
          iGlo™ allows creators to journal authentic experiences and monetise
          their reviews.
        </p>
      </div>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-amber-300/20 shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Why Join as a Creator?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Earn fairly",
                desc: "Get compensated for your authentic content and reviews",
                src: "/earn.svg",
              },
              {
                title: "Exclusive exposure",
                desc: "Gain visibility with brands seeking genuine recommendations",
                src: "/visibility.svg",
              },
              {
                title: "Supportive community",
                desc: "Join a network of like-minded creators focused on wellbeing",
                src: "/team-spirit.svg",
              },
            ].map((benefit, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-48 h-48 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <Image
                    src={benefit.src}
                    alt={benefit.title}
                    width={100}
                    height={100}
                    className="h-32 w-32 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-xl text-teal-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-teal-700/90 text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold italic text-amber-300 text-center mb-10">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-300/30 transform -translate-y-1/2  hidden md:block"></div>

            {[
              {
                step: "1",
                title: "Sign Up",
                desc: "Join our creator community",
                icon: "/signup-icon.svg",
              },
              {
                step: "2",
                title: "Create",
                desc: "Share authentic experiences",
                icon: "/create-icon.svg",
              },
              {
                step: "3",
                title: "Share",
                desc: "Publish your reviews",
                icon: "/share-icon.svg",
              },
              {
                step: "4",
                title: "Earn",
                desc: "Monetise your content",
                icon: "/earn-icon.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center mb-4"
              >
                <div className="w-32 h-32 rounded-full bg-amber-400 flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain z-10"
                  />
                  <div className="absolute  right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <span className="text-amber-600 text-sm font-bold">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-amber-300 mt-4 mb-1">
                  {item.title}
                </h3>
                <p className="text-teal-100 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white my-10 rounded-xl p-8 border border-amber-300/20 hover:border-amber-300/40 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <Upload className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-teal-800 font-semibold text-2xl italic">
                Different uploads. Different outcomes.
              </h2>
            </div>

            <p className="mb-6 text-teal-700">
              <span className="inline-block bg-amber-100 border border-amber-300 text-amber-700 px-3 py-1 rounded-full font-bold text-sm">
                Two ways to share your journey
              </span>{" "}
              Creators can share their authentic experiences in two
              complementary formats:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-teal-800 text-lg font-semibold mb-2">
                    VeeVu™
                  </h3>
                  <p className="text-teal-700">
                    a short, meaningful preview designed for product pages, ads
                    and quick decisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-teal-800 text-lg font-semibold mb-2">
                    iGlo™
                  </h3>
                  <p className="text-teal-700">
                    a full journey log with photos, notes, reflections and
                    verified results over time.
                  </p>
                </div>
              </div>
            </div>

            <p className="italic mt-3 text-amber-600">
              Together, these build both discovery and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Upload your video",
                desc: "Share product benefits, usage and your authentic experience.",
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
                className="bg-white rounded-xl p-6 border border-amber-300/20 hover:border-amber-300/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-teal-700/90">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/30 text-center">
          <h2 className="text-3xl font-bold italic text-amber-300 mb-6">
            Apply to Become a Creator
          </h2>
          <p className="text-teal-100 mb-8">
            Join our community of authentic creators and start turning your
            passion into purpose.
          </p>

          <div className="mx-auto lg:max-w-[70%] bg-white rounded-lg p-6 mb-6">
            <form className="space-y-4">
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-teal-300 rounded text-teal-900 placeholder-teal-400"
                />
              </div>
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-teal-300 rounded text-teal-900 placeholder-teal-400"
                />
              </div>
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Social Media
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-teal-300 rounded text-teal-900 placeholder-teal-400"
                  placeholder="Link"
                />
              </div>
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Why you want to join
                </label>
                <textarea
                  className="w-full p-2 border border-teal-300 rounded h-24 text-teal-900 placeholder-teal-400"
                  placeholder="Tell us why..."
                ></textarea>
              </div>
              <Button className="bg-amber-400 w-full lg:w-1/2  text-white hover:bg-amber-300 font-semibold py-3">
                Submit Application
              </Button>
            </form>
          </div>

          <div className="bg-amber-400/20 border border-amber-400/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-amber-300 font-medium">
              Limited spaces available for Phase 1 launch. Apply now to secure
              your spot!
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold italic text-amber-300 text-center mb-8">
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
              • Join a community built on ethics, authenticity and inclusivity
            </li>
          </ul>
          <div className="text-center mt-10 flex flex-col md:flex-row gap-6 justify-center">
            <GoldenLink href="/" className="text-base text-white py-4 lg:py-0">
              Apply Now
            </GoldenLink>
            <Button
              variant="outline"
              className="border-2  border-amber-300 text-white hover:bg-amber-300/20 hover:border-amber-400 font-semibold px-10 py-6 text-lg tracking-wide rounded-lg transition-colors bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
