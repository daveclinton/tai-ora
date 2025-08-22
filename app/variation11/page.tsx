import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation1() {
  return (
    <div className="min-h-screen">
      <Navbar variant="current" />
      <HeroSection variant="current" />
      <ContentBoxes variant="current" />
      <Footer variant="current" />
    </div>
  );
}
