import { HeroSection } from "@/components/hero-section"
import { WebinarDetailsSection } from "@/components/webinar-details-section"
import { WhyAttendSection } from "@/components/why-attend-section"
import { WhatYouLearnSection } from "@/components/what-you-learn-section"
import { MentorSection } from "@/components/mentor-section"
import { CommunitySection } from "@/components/community-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DisclaimerSection } from "@/components/disclaimer-section"
import { Footer } from "@/components/footer-section"

export default function WebinarLandingPage() {
  return (
    <>
      {/* Header Here */}
      <main className="min-h-screen">
        <HeroSection />
        <WebinarDetailsSection />
        <WhyAttendSection />
        <WhatYouLearnSection />
        <MentorSection />
        <CommunitySection />
        <PricingSection />
        <TestimonialsSection />
        <DisclaimerSection />
        <Footer />
      </main>
    </>
  )
}
