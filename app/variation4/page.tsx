import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation4() {
  return (
    <div className="min-h-screen">
      <Navbar variant="minimal" />
      <HeroSection variant="minimal" />
      <ContentBoxes variant="minimal" />
      <Footer variant="minimal" />
    </div>
  );
}
