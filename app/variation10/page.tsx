import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation10() {
  return (
    <div className="min-h-screen">
      <Navbar variant="gold" />
      <HeroSection variant="magazine" />
      <ContentBoxes variant="magazine" />
      <Footer variant="gold" />
    </div>
  );
}
