"use client";

export default function Variation11() {
  return (
    <div className="min-h-screen bg-[#003848] text-white font-sans">
      <style jsx global>{`
        :root {
          --teal-1: #004050;
          --teal-2: #003848;
          --gold: #cfa84e;
          --white: #ffffff;
          --pearl: #f9f9f7;
          --ink: #222222;
          --aqua: #6cc7c4;
          --koru-teal: #0e6e73;
          --gold-bright: #ffd700;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#004050] px-6 py-[18px] grid grid-cols-3 items-center shadow-lg">
        <div className="font-bold text-[#CFA84E] text-xl justify-self-start">
          Tai Ora
        </div>

        <nav className="justify-self-center">
          <a
            href="#"
            className="text-white mx-[14px] no-underline font-semibold hover:text-[#CFA84E] transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white mx-[14px] no-underline font-semibold hover:text-[#CFA84E] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-white mx-[14px] no-underline font-semibold hover:text-[#CFA84E] transition-colors"
          >
            Creators
          </a>
          <a
            href="#"
            className="text-white mx-[14px] no-underline font-semibold hover:text-[#CFA84E] transition-colors"
          >
            Brands
          </a>
          <a
            href="#"
            className="text-white mx-[14px] no-underline font-semibold hover:text-[#CFA84E] transition-colors"
          >
            Pricing
          </a>
        </nav>

        <div className="justify-self-end">
          <a
            href="#"
            className="bg-gradient-to-br from-[#CFA84E] to-[#FFD700] text-[#003848] px-5 py-2.5 rounded-full font-bold no-underline hover:shadow-lg transition-shadow"
          >
            Let's Connect
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#004050] to-[#003848] px-5 py-20 pb-15 text-center relative">
        <div className="w-24 h-24 mx-auto mb-6 bg-[#D4A33A] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
          <img
            src="/logo.png"
            alt="Company Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="font-serif text-[56px] m-0 text-[#CFA84E] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] leading-tight">
          Truth in Beauty — Wellness with Purpose
        </h1>

        <p className="text-[22px] my-[14px] mb-7 text-white max-w-4xl mx-auto">
          A Māori-led platform uniting authenticity, wellbeing and ethical
          beauty — welcoming all cultures with open hearts.
        </p>

        <div className="mt-7 flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="text-base min-w-[160px] text-center px-[22px] py-3 rounded-xl font-bold shadow-[0_6px_12px_rgba(0,0,0,0.25)] bg-gradient-to-br from-[#6CC7C4] to-[#0E6E73] text-[#FFD700] no-underline hover:shadow-xl transition-shadow"
          >
            I'm a Creator
          </a>

          <a
            href="#"
            className="text-base min-w-[160px] text-center px-[22px] py-3 rounded-xl font-bold shadow-[0_6px_12px_rgba(0,0,0,0.25)] bg-gradient-to-br from-[#b8860b] to-[#ffd700] text-[#063b40] no-underline hover:shadow-xl transition-shadow"
          >
            I'm a Brand
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto my-15 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-7 px-5">
        <div className="bg-[#F9F9F7] rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.15)] p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-[#CFA84E] m-0 mb-3 text-2xl font-serif">
            VeeVu™
          </h3>
          <p className="text-[#222222] m-0 text-base leading-relaxed">
            VeeVu™ instantly transforms long product videos into short, powerful
            previews that highlight what truly matters. No gimmicks — just
            clear, authentic insights designed to save time and boost discovery.
          </p>
        </div>

        <div className="bg-[#F9F9F7] rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.15)] p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-[#CFA84E] m-0 mb-3 text-2xl font-serif">iGlo™</h3>
          <p className="text-[#222222] m-0 text-base leading-relaxed">
            iGlo™ lets you document your full product journey with photos,
            notes, and reflections. Over time, it creates an AI-verified record
            of real results — building trust, empowering your voice, and
            offering brands authentic proof.
          </p>
        </div>

        <div className="bg-[#F9F9F7] rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.15)] p-6 text-center hover:shadow-xl transition-shadow">
          <h3 className="text-[#CFA84E] m-0 mb-3 text-2xl font-serif">
            Coming Soon
          </h3>
          <p className="text-[#222222] m-0 text-base leading-relaxed">
            <strong>LydiaGlo™</strong> — Empowering recovery through healing,
            culture and innovation.
            <br />
            <br />
            <strong>SoulGlo™</strong> — Nourish your spirit with guided journeys
            for inner peace.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#022e34] text-[#CFA84E] text-center p-6 mt-15">
        © 2025 Tai Ora • Māori-led, ethics-first wellness with purpose — created
        to welcome all
      </footer>
    </div>
  );
}
