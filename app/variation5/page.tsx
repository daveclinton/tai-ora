import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation5() {
  return (
    <div className="min-h-screen">
      <Navbar variant="luxury" />
      <HeroSection variant="luxury" />
      <ContentBoxes variant="luxury" />
      <Footer variant="luxury" />
    </div>
  );
}
