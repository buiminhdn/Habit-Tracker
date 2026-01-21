import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/layout/scroll-to-top";
import SectionAdvantages from "@/components/pages/home/section-advantages";
import SectionCapabilities from "@/components/pages/home/section-capabilities";
import SectionCTA from "@/components/pages/home/section-cta";
import SectionFramework from "@/components/pages/home/section-framework";
import SectionHero from "@/components/pages/home/section-hero";
import SectionPerformances from "@/components/pages/home/section-performances";
import SectionPreview from "@/components/pages/home/section-preview";

export default function Home() {
  return (
    <div>
      <Navbar />

      <SectionHero />

      <SectionPreview />

      <SectionCapabilities />

      <SectionAdvantages />

      <SectionPerformances />

      <SectionFramework />

      <SectionCTA />

      <Footer />

      <ScrollToTop />
    </div>
  );
}
