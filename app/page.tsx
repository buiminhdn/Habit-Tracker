import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/layout/scroll-to-top";
import HomeHero from "@/components/pages/home/home-hero";
import HomePreview from "@/components/pages/home/home-preview";
import HomeCapabilities from "@/components/pages/home/home-capabilities";
import HomeAdvantages from "@/components/pages/home/home-advantages";
import HomePerformances from "@/components/pages/home/home-performances";
import HomeFramework from "@/components/pages/home/home-framework";
import HomeCTA from "@/components/pages/home/home-cta";

export default function Home() {
  return (
    <div>
      <Navbar />

      <HomeHero />

      <HomePreview />

      <HomeCapabilities />

      <HomeAdvantages />

      <HomePerformances />

      <HomeFramework />

      <HomeCTA />

      <Footer />

      <ScrollToTop />
    </div>
  );
}
