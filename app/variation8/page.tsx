import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation8() {
  return (
    <div className="min-h-screen">
      <Navbar variant="luxury" />
      <HeroSection variant="cards" />
      <ContentBoxes variant="cards" />
      <Footer variant="luxury" />
    </div>
  );
}
