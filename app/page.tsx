import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { StatsSection } from "@/components/home/stats-section"
import { FeaturesSection } from "@/components/home/features-section"
import { ProductsPreview } from "@/components/home/products-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <IntroSection />
        <StatsSection />
        <FeaturesSection />
        <ProductsPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  )
}
