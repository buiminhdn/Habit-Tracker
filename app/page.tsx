import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/layout/scroll-to-top";
import HomeHero from "@/components/pages/home/home-hero";
import HomePreview from "@/components/pages/home/home-preview";
import HomeCapabilities from "@/components/pages/home/home-capabilities";
import HomePerformances from "@/components/pages/home/home-performances";
import HomeCTA from "@/components/pages/home/home-cta";
import HomeFeatures from "@/components/pages/home/home-features";
import HomeImpacts from "@/components/pages/home/home-impacts";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HomeHero />

      <HomePreview />

      <HomeCapabilities />

      <HomeFeatures />

      <HomePerformances />

      <HomeImpacts />

      <HomeCTA />

      <Footer />

      <ScrollToTop />
    </div>
  );
}
