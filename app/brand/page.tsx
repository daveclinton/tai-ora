import { GoldenLink } from "@/components/golden-link";
import JoinWaitlist from "@/components/join-waitlist";

import {
  Handshake,
  FolderOpen,
  Play,
  Code,
  TestTube,
  Megaphone,
  BarChart3,
  FileText,
  Users,
  Shield,
  CheckCircle,
  Heart,
  Globe,
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
  const brandBenefits = [
    {
      icon: Users,
      title: "Authentic previews and reviews",
      description: "created by real people",
    },
    {
      icon: FileText,
      title: "Transparent licensing opportunities",
      description: "with creator content",
    },
    {
      icon: Handshake,
      title: "A platform built on culture, ethics and trust",
      description: "that leads to loyalty",
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

        <h1 className="text-white text-5xl md:text-6xl font-bold italic mb-4 leading-tight tracking-wide drop-shadow-lg">
          Match with your true customers
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed">
          Partner with Tai Ora to showcase your products through authentic
          previews and real journeys that build trust and loyalty.
        </p>
        <GoldenLink href="/waitlist" className="my-8 py-4 text-white">
          Register Your Interest
        </GoldenLink>
      </div>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 border border-amber-300/20 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center">
              <Handshake className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="text-teal-800 font-semibold text-2xl italic">
              For Brands
            </h2>
          </div>

          <div className="space-y-4">
            {brandBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-teal-50/50 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <span className="font-semibold text-teal-800">
                    {benefit.title}
                  </span>
                  <span className="text-teal-700"> {benefit.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm border-t border-amber-300/20">
        <div className="max-w-5xl mx-auto bg-white rounded-xl p-6 border border-amber-300/20">
          <h2 className="text-3xl font-bold italic text-teal-800 mb-6 text-center">
            Ethical & inclusive by design
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 flex items-center justify-center">
              <Shield className="w-14 h-14 text-amber-600 opacity-60" />
            </div>
          </div>
          <ul className="space-y-4 text-teal-700/90">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Consent-first licensing with transparent terms</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Real creators, real results — no gimmicks, no scripts</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                Māori-led platform welcoming all cultures with open hearts
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold italic text-amber-300 text-center mb-10">
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
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                Creator-owned, brand-licensed — flexible durations and
                placements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>
                Co-branded — your brand identity alongside the creator
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span>Full buyout — optional by mutual agreement</span>
            </li>
          </ul>
          <p className="mt-6 text-center italic text-amber-600 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5" />
            All options uphold creator rights, cultural respect, and transparent
            usage.
          </p>
        </div>
      </section>

      <JoinWaitlist />
    </section>
  );
}
