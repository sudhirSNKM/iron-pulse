import PageTransition from "@/components/layout/PageTransition";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import CTABanner from "@/components/home/CTABanner";

const Index = () => {
  return (
    <PageTransition>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <TestimonialCarousel />
      <CTABanner />
    </PageTransition>
  );
};

export default Index;
