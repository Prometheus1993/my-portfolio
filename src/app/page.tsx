import HeroSection from "@/components/sections/HeroSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import AboutSummarySection from "@/components/sections/AboutSummarySection";
import AskSection from "@/components/sections/AskSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelectedWorkSection />
      <CapabilitiesSection />
      <AboutSummarySection />
      <AskSection />
      <ContactSection />
    </>
  );
}
