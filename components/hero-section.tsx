import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  variant:
    | "current"
    | "gold"
    | "split"
    | "minimal"
    | "luxury"
    | "gradient"
    | "image"
    | "cards"
    | "geometric"
    | "magazine";
}

export function HeroSection({ variant }: HeroSectionProps) {
  const getHeroStyles = () => {
    switch (variant) {
      case "current":
        return "bg-[#0D3E50] text-white";
      case "gold":
        return "bg-[#F5E6B8] text-[#0D3E50]";
      case "split":
        return "bg-[#D4A33A] text-[#0D3E50]";
      case "minimal":
        return "bg-white text-[#0D3E50]";
      case "luxury":
        return "bg-[#0D3E50] text-white";
      case "gradient":
        return "bg-gradient-to-br from-[#0D3E50] via-[#1A5A6B] to-[#D4A33A] text-white relative overflow-hidden";
      case "image":
        return "bg-white text-white relative";
      case "cards":
        return "bg-[#D4A33A] text-[#0D3E50]";
      case "geometric":
        return "bg-white text-[#0D3E50] relative overflow-hidden";
      case "magazine":
        return "bg-white text-[#0D3E50]";
      default:
        return "bg-[#0D3E50] text-white";
    }
  };

  const getHeadingColor = () => {
    switch (variant) {
      case "current":
        return "text-[#D4A33A]";
      case "gold":
        return "text-[#0D3E50]";
      case "split":
        return "text-[#0D3E50]";
      case "minimal":
        return "text-[#0D3E50]";
      case "luxury":
        return "text-[#D4A33A]";
      case "gradient":
        return "text-white drop-shadow-lg";
      case "image":
        return "text-white drop-shadow-xl";
      case "cards":
        return "text-[#0D3E50]";
      case "geometric":
        return "text-[#0D3E50]";
      case "magazine":
        return "text-[#0D3E50]";
      default:
        return "text-[#D4A33A]";
    }
  };

  const getButtonStyles = () => {
    switch (variant) {
      case "current":
        return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
      case "gold":
        return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
      case "split":
        return "bg-[#0D3E50] hover:bg-[#0A2F3D] text-white";
      case "minimal":
        return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
      case "luxury":
        return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
      case "gradient":
        return "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30";
      case "image":
        return "bg-[#D4A33A] hover:bg-[#B8921F] text-white shadow-xl";
      case "cards":
        return "bg-[#0D3E50] hover:bg-[#0A2F3D] text-white";
      case "geometric":
        return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
      case "magazine":
        return "bg-[#0D3E50] hover:bg-[#0A2F3D] text-white";
      default:
        return "bg-[#D4A33A] hover:bg-[#B8921F] text-white";
    }
  };

  if (variant === "image") {
    return (
      <section className="relative py-20 px-6 min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
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

          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${getHeadingColor()}`}
          >
            Truth in Beauty — Wellness with Purpose
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            A Māori-led platform uniting authenticity, wellbeing and ethical
            beauty — welcoming all cultures with open hearts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`text-lg px-8 py-4 ${getButtonStyles()}`}
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

  if (variant === "geometric") {
    return (
      <section className={`py-20 px-6 ${getHeroStyles()}`}>
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#D4A33A]/10 rounded-full" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-[#0D3E50]/10 rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#D4A33A]/20 rounded-full" />

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

          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${getHeadingColor()}`}
          >
            Truth in Beauty — Wellness with Purpose
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            A Māori-led platform uniting authenticity, wellbeing and ethical
            beauty — welcoming all cultures with open hearts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`text-lg px-8 py-4 ${getButtonStyles()}`}
            >
              I'm a Creator
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-[#0D3E50] text-[#0D3E50] hover:bg-[#0D3E50] hover:text-white bg-transparent"
            >
              I'm a Brand
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "gradient") {
    return (
      <section className={`py-20 px-6 ${getHeroStyles()}`}>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500" />

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

          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 ${getHeadingColor()}`}
          >
            Truth in Beauty — Wellness with Purpose
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
            A Māori-led platform uniting authenticity, wellbeing and ethical
            beauty — welcoming all cultures with open hearts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className={`text-lg px-8 py-4 ${getButtonStyles()}`}
            >
              I'm a Creator
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm bg-transparent"
            >
              I'm a Brand
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 px-6 ${getHeroStyles()}`}>
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#D4A33A] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1
          className={`text-5xl md:text-6xl font-bold mb-6 ${getHeadingColor()}`}
        >
          Truth in Beauty — Wellness with Purpose
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
          A Māori-led platform uniting authenticity, wellbeing and ethical
          beauty — welcoming all cultures with open hearts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className={`text-lg px-8 py-4 ${getButtonStyles()}`}
          >
            I'm a Creator
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={`text-lg px-8 py-4 border-2 ${
              variant === "current" || variant === "luxury"
                ? "border-white text-white hover:bg-white hover:text-[#0D3E50]"
                : "border-[#0D3E50] text-[#0D3E50] hover:bg-[#0D3E50] hover:text-white"
            }`}
          >
            I'm a Brand
          </Button>
        </div>
      </div>
    </section>
  );
}
