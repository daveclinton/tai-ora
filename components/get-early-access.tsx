import { CheckCircle } from "lucide-react";
import React from "react";
import { GoldenLink } from "./golden-link";

const GetEarlyAccess = () => {
  return (
    <div className="w-full py-16 px-6 bg-gradient-to-r from-amber-500/20 to-teal-600/30">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 italic">
          Get Early Access
        </h2>
        <p className="text-teal-100 text-xl mb-2">Launching December 2025</p>
        <p className="text-teal-100 text-lg mb-8 max-w-3xl mx-auto">
          Sign up to get early access to authentic previews and journeys that
          cut through the hype and show what really works.
        </p>

        <div className="bg-white/90 rounded-2xl p-8 mb-10  mx-auto">
          <h3 className="text-2xl font-semibold text-teal-800 mb-6">
            With early access, you’ll be able to:
          </h3>
          <ul className="space-y-4 text-left">
            {[
              "Watch authentic previews through VeeVu™: see product benefits in seconds, no hype.",
              "Follow trustworthy journeys on iGlo™: capture reflections, photos and progress over time.",
              "Make better choices with clarity and confidence.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle
                  className="text-amber-600 mr-3 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-teal-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <GoldenLink href="/waitlist" className="text-lg text-white px-10 py-4">
          Get Early Access
        </GoldenLink>
      </div>
    </div>
  );
};

export default GetEarlyAccess;
