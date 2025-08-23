import { HeroSection } from "@/components/hero-section";
import { ContentBoxes } from "@/components/content-boxes";
import { Footer } from "@/components/footer";
import { NewHero } from "@/components/new-hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NewHero />
      <HeroSection />
      <ContentBoxes />
      <Footer />
    </div>
  );
}
