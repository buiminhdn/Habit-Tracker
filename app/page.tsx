import Navbar from "@/components/layout/navbar";
import SectionAdvantages from "@/components/pages/home/section-advantages";
import SectionCapabilities from "@/components/pages/home/section-capabilities";
import SectionHero from "@/components/pages/home/section-hero";
import SectionPreview from "@/components/pages/home/section-preview";

export default function Home() {
  return (
    <div className="pb-96 min-h-screen">
      <Navbar />

      <SectionHero />

      <SectionPreview />

      <SectionCapabilities />

      <SectionAdvantages />
    </div>
  );
}
