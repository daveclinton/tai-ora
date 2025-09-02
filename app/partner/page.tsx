"use client";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Globe,
  Shield,
  Sparkles,
  DollarSign,
  Handshake,
  Gift,
  Microscope,
  TreePine,
  Users,
  Crown,
  Eye,
  CheckCircle,
  TrendingUp,
  Mail,
  Phone,
  Quote,
  Loader2,
} from "lucide-react";
import { ChangeEvent, useState } from "react";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const partnershipValues = [
    {
      icon: Heart,
      title: "Authenticity",
      desc: "Real, timestamped, AI‑verified journeys",
    },
    {
      icon: TreePine,
      title: "Cultural grounding",
      desc: "Maori principles of balance and whanau",
    },
    {
      icon: Shield,
      title: "Ethical innovation",
      desc: "AI that guides and supports, never controls",
    },
    {
      icon: Gift,
      title: "Giving back",
      desc: "Profits fund community wellness hubs",
    },
  ];

  const sponsorshipOpportunities = [
    {
      icon: DollarSign,
      title: "Financial Sponsorship",
      desc: "Fuel product growth, Maori‑led creator programmes and community access.",
    },
    {
      icon: Handshake,
      title: "Brand Partnership",
      desc: "Showcase products through VeeVu™ and iGlo™ journeys that brands and users can trust.",
    },
    {
      icon: Gift,
      title: "In‑kind Support",
      desc: "Provide products, services, or expertise to empower creators and communities.",
    },
    {
      icon: Microscope,
      title: "Research Collaboration",
      desc: "Join our university partnerships building T.A.I, Tai Ora Angel Intelligence.",
    },
  ];

  const principles = [
    {
      icon: TreePine,
      title: "Whakapapa",
      subtitle: "(lineage & Connection)",
      desc: "We honour the past, present and future. Our work is rooted in connection, to culture, community and each other.",
    },
    {
      icon: Users,
      title: "Whanau",
      subtitle: "(family & Care)",
      desc: "We create spaces where people feel supported, safe and empowered, just as they would in family.",
    },
    {
      icon: Crown,
      title: "Manaakitanga",
      subtitle: "(respect & Upliftment)",
      desc: "We uplift people with care, empathy and respect, ensuring every voice and journey is valued.",
    },
    {
      icon: Shield,
      title: "Kaitiakitanga",
      subtitle: "(guardianship & Sustainability)",
      desc: "We act as guardians of people, data and the environment, ensuring technology serves wellbeing and protects what matters.",
    },
    {
      icon: Eye,
      title: "Pono",
      subtitle: "(truth & Integrity)",
      desc: "We are committed to authenticity, ensuring that every review, story and connection is real, transparent and trustworthy.",
    },
    {
      icon: Globe,
      title: "Kotahitanga",
      subtitle: "(unity & Inclusivity)",
      desc: "Guided by Maori principles, Tai Ora is created for everyone, embracing diversity and building unity through shared purpose.",
    },
  ];

  return (
    <div className="flex flex-col bg-gradient-to-br from-teal-800/90 via-teal-700/80 to-cyan-900/70 min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20">
        <div className="w-36 h-36 rounded-full flex items-center justify-center overflow-hidden relative shadow-2xl shadow-amber-400/40 ring-4 ring-amber-300/30 mx-auto mb-8 bg-gradient-to-br from-amber-400/20 to-teal-400/20 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-teal-400/30 animate-pulse"></div>
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center relative z-10">
            <span className="text-3xl font-bold text-teal-800">TO</span>
          </div>
        </div>

        <h1 className="text-white text-5xl md:text-6xl font-bold italic mb-6 leading-tight tracking-wide drop-shadow-2xl">
          Partner with Tai Ora
        </h1>
        <p className="text-teal-100 max-w-2xl text-lg leading-relaxed mb-8">
          A movement and AI-powered wellness platform helping people make better
          choices, discover authentic products and reclaim their time, identity
          and wellbeing.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-teal-200 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>AI-Verified Authenticity</span>
          </div>
          <div className="flex items-center gap-2">
            <TreePine className="w-4 h-4" />
            <span>Māori-Led Innovation</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span>Community-Centered Impact</span>
          </div>
        </div>
      </div>

      {/* Meaning Section */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/20 shadow-xl text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Sparkles className="w-8 h-8 text-amber-600" />
            <h2 className="text-2xl font-semibold text-teal-800">
              The Meaning of "Tai Ora"
            </h2>
            <Sparkles className="w-8 h-8 text-amber-600" />
          </div>
          <p className="text-teal-700 text-lg">
            In te reo Māori, Tai Ora speaks to health and wellness through the
            tides of life, reflecting our cultural grounding and vision for
            purposeful living.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Handshake className="w-10 h-10 text-amber-300" />
            <h2 className="text-4xl font-bold italic text-amber-300 text-center">
              Why Partner With Us
            </h2>
          </div>

          <p className="text-teal-100 text-center mb-12 max-w-4xl mx-auto text-xl leading-relaxed">
            Sponsors and partners help us expand this vision, creating
            technology that uplifts people, not just profits. Collaborating with
            Tai Ora connects your brand to authentic, AI‑verified journeys and
            values‑led innovation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipValues.map((item, i) => (
              <div
                key={i}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-amber-300/30 shadow-lg hover:shadow-xl hover:border-amber-300/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 bg-amber-50 rounded-xl">
                    <item.icon className="w-10 h-10 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-teal-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-teal-700 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="px-6 py-16 bg-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Gift className="w-10 h-10 text-amber-300" />
            <h2 className="text-4xl font-bold italic text-amber-300 text-center">
              Sponsorship Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {sponsorshipOpportunities.map((item, i) => (
              <div
                key={i}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 border border-amber-300/30 shadow-lg hover:shadow-xl hover:border-amber-300/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0 bg-amber-50 rounded-xl">
                    <item.icon className="w-10 h-10 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-teal-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-teal-700 text-lg leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <Heart className="w-10 h-10 text-amber-300" />
            <h2 className="text-4xl font-bold italic text-amber-300 text-center">
              The Principles That Shape Tai Ora
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, i) => (
              <div
                key={i}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-amber-300/30 shadow-lg hover:shadow-xl hover:border-amber-300/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-amber-50 rounded-lg">
                    <item.icon className="w-7 h-7 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-800">
                      {item.title}
                    </h3>
                    <p className="text-amber-600 text-sm font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-teal-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact Section */}
      <section className="px-6 py-16 bg-black/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <TrendingUp className="w-10 h-10 text-amber-300" />
            <h2 className="text-4xl font-bold italic text-amber-300 text-center">
              Our Vision & Impact
            </h2>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-amber-300/30 shadow-xl">
            <p className="text-teal-700 mb-8 text-lg leading-relaxed">
              Our profits sustain and support the people building Tai Ora, fuel
              continued growth and enable us to dedicate a meaningful portion to
              social and cultural initiatives beyond the platform from
              self‑sustaining communities to projects that help people thrive
              worldwide. Tai Ora is not just technology, it's a global movement
              for purposeful living.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <CheckCircle className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl font-semibold text-teal-800">
                Impact Snapshot
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-teal-700 font-medium">
                  Growing network of creators preparing to share authentic
                  product journeys
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-teal-700 font-medium">
                  Early interest from ethical beauty, self‑care and Māori‑led
                  brands
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-teal-700 font-medium">
                  Phase 1 launch focused on high‑quality content across skin,
                  hair and self‑care
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl bg-white/95 backdrop-blur-sm rounded-3xl p-12 border border-amber-300/40 shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Mail className="w-10 h-10 text-teal-800" />
            <h2 className="text-4xl font-bold italic text-teal-800 text-center">
              Get In Touch
            </h2>
          </div>

          <p className="text-teal-700 mb-12 text-center text-xl">
            For sponsorships and partnerships, contact Tania Pickering, Founder
            & CEO.
          </p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-teal-50/80 rounded-2xl p-8">
              {submitStatus === "success" && (
                <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <p className="text-green-800 font-semibold">
                      Kia ora! Your message has been sent successfully.
                    </p>
                  </div>
                  <p className="text-green-700 mt-2">
                    We'll get back to you within 48 hours.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
                  <p className="text-red-800 font-semibold">
                    Sorry, there was an error sending your message.
                  </p>
                  <p className="text-red-700 mt-2">
                    Please try again or contact us directly at tania@taiora.ai
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-teal-800 text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full p-4 border-2 border-teal-200 rounded-lg text-teal-900 bg-white disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-teal-800 text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full p-4 border-2 border-teal-200 rounded-lg text-teal-900 bg-white disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-teal-800 text-sm font-semibold mb-2">
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="w-full p-4 border-2 border-teal-200 rounded-lg text-teal-900 bg-white disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                    placeholder="Your company or organisation"
                  />
                </div>

                <div>
                  <label className="block text-teal-800 text-sm font-semibold mb-2">
                    Partnership Interest *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full p-4 border-2 border-teal-200 rounded-lg text-teal-900 bg-white disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all resize-none"
                    placeholder="Tell us about your partnership interest, goals, and how you'd like to collaborate with Tai Ora..."
                  ></textarea>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-teal-900 font-bold py-4 px-8 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </div>
                  ) : (
                    "Send Partnership Enquiry"
                  )}
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-200 rounded-2xl p-8 h-full">
                <h3 className="text-teal-800 font-bold text-2xl mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-teal-800 font-semibold text-lg">
                      Tania Pickering
                    </p>
                    <p className="text-teal-700">Founder & CEO</p>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                    <Mail className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-700 font-medium">
                      tania@taiora.ai
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white/60 rounded-lg">
                    <Phone className="w-5 h-5 text-teal-600" />
                    <span className="text-teal-700 font-medium">
                      +64 ••• ••• •••
                    </span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl border-2 border-teal-300">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Quote className="w-6 h-6 text-teal-800" />
                  </div>
                  <p className="text-teal-800 italic text-center font-semibold text-lg">
                    "Tai Ora: Truth in Beauty. Wellness with Purpose."
                  </p>
                </div>

                <div className="mt-6 p-4 bg-white/40 rounded-lg border border-amber-300">
                  <p className="text-teal-700 text-sm text-center">
                    We typically respond within 24-48 hours during business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
