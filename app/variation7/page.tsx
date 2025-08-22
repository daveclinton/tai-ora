import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";

export default function Variation7() {
  return (
    <div className="min-h-screen">
      <Navbar variant="gradient" />
      <HeroSection variant="image" />
      <ContentBoxes variant="image" />
      <Footer variant="gradient" />
    </div>
  );
}
