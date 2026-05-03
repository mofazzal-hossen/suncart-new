import HeroSection from "@/components/home/HeroSection";
import PopularProducts from "@/components/home/PopularProducts";
import SummerTips from "@/components/home/SummerTips";
import TopBrands from "@/components/home/TopBrands";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
      <CTABanner />
    </div>
  );
}