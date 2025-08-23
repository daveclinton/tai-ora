import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-20 px-6 min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url('/hero.png?height=800&width=1200')`,
        }}
      />
      <div className="absolute inset-0 bg-[#0D3E50]/70" />
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#D4A33A] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl">
          Truth in Beauty — Wellness with Purpose
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
          A Māori-led platform uniting authenticity, wellbeing and ethical
          beauty — welcoming all cultures with open hearts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-[#D4A33A] hover:bg-[#B8921F] text-white shadow-xl"
          >
            I'm a Creator
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 border-2 border-white/50 text-white hover:bg-white hover:text-[#0D3E50] backdrop-blur-sm bg-transparent"
          >
            I'm a Brand
          </Button>
        </div>
      </div>
    </section>
  );
}
