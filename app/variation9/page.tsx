import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation9() {
  return (
    <div className="min-h-screen">
      <Navbar variant="minimal" />
      <HeroSection variant="geometric" />
      <ContentBoxes variant="geometric" />
      <Footer variant="minimal" />
    </div>
  );
}
