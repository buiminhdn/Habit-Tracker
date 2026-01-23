import HomeHero from "@/components/pages/home/home-hero";
import HomePreview from "@/components/pages/home/home-preview";
import HomeCapabilities from "@/components/pages/home/home-capabilities";
import HomePerformances from "@/components/pages/home/home-performances";
import HomeCTA from "@/components/pages/home/home-cta";
import HomeFeatures from "@/components/pages/home/home-features";
import HomeImpacts from "@/components/pages/home/home-impacts";
import ScrollToTop from "@/components/layout/scroll-to-top";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomePreview />
      <HomeCapabilities />
      <HomeFeatures />
      <HomePerformances />
      <HomeImpacts />
      <HomeCTA />
      <ScrollToTop />
    </>
  );
}
