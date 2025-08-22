import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation6() {
  return (
    <div className="min-h-screen">
      <Navbar variant="gradient" />
      <HeroSection variant="gradient" />
      <ContentBoxes variant="gradient" />
      <Footer variant="gradient" />
    </div>
  );
}
