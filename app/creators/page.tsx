"use client";
import { GoldenLink } from "@/components/golden-link";
import { Button } from "@/components/ui/button";
import {
  Eye,
  FileText,
  Handshake,
  Heart,
  Megaphone,
  Upload,
  Users,
  CheckCircle,
  Loader2,
} from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export default function CreatorPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    socialMedia: "",
    reason: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.reason) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/creator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", socialMedia: "", reason: "" });
      } else {
        const errorData = await response.json();
        console.error("Application error:", errorData.error);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <section className="px-6 py-12 bg-white/5 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto justify-center items-center flex flex-col gap-3">
          <h2 className="text-3xl font-bold italic text-amber-300 text-center mb-8">
            Creators: Why Join?
          </h2>
          <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-amber-300/30">
            <p className="text-teal-900 text-lg mb-6 text-center">
              Tai Ora is inviting early creators to help shape a new way of
              sharing and earning. With VeeVu™ and iGlo™, you can:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  title: "Share your authentic journey and voice",
                  icon: <Megaphone className="w-6 h-6 text-amber-600" />,
                },
                {
                  title: "Build ownership of your story and content",
                  icon: <FileText className="w-6 h-6 text-amber-600" />,
                },
                {
                  title:
                    "Earn opportunities through ethical brand partnerships",
                  icon: <Handshake className="w-6 h-6 text-amber-600" />,
                },
                {
                  title: "Help people make better, more informed choices",
                  icon: <Users className="w-6 h-6 text-amber-600" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 bg-amber-100/10 rounded-lg"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 p-1">
                    {item.icon}
                  </div>
                  <p className="text-teal-700 text-lg">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <GoldenLink
            href="/waitlist"
            className="text-lg px-10 py-3 text-white"
          >
            Apply for Early Access
          </GoldenLink>
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
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 font-semibold">
                    Kia ora! Your application has been submitted successfully.
                  </p>
                </div>
                <p className="text-green-700 mt-2 text-sm">
                  We'll review your application and get back to you within 5-7
                  business days.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">
                  Sorry, there was an error submitting your application.
                </p>
                <p className="text-red-700 mt-2 text-sm">
                  Please check that all required fields are filled and try
                  again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-2 border border-teal-300 rounded text-teal-900 placeholder-teal-400 disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-2 border border-teal-300 rounded text-teal-900 placeholder-teal-400 disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Social Media
                </label>
                <input
                  type="text"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full p-2 border border-teal-300 rounded text-teal-900 placeholder-teal-400 disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all"
                  placeholder="Instagram, TikTok, YouTube, etc."
                />
              </div>
              <div>
                <label className="block text-teal-800 text-md font-medium mb-1">
                  Why you want to join *
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-2 border border-teal-300 rounded h-24 text-teal-900 placeholder-teal-400 disabled:opacity-50 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 transition-all resize-none"
                  placeholder="Tell us about your passion for authentic reviews and why you'd like to be part of the Tai Ora creator community..."
                ></textarea>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-400 w-full lg:w-1/2 text-white hover:bg-amber-300 font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  "Submit Application"
                )}
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
    </section>
  );
}
