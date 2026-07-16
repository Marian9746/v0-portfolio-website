import { SiteNav } from "@/components/navigation/site-nav"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SpecialtySection } from "@/components/sections/specialty-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { RecommendationLetterSection } from "@/components/sections/recommendation-letter-section"
import { HobbiesSection } from "@/components/sections/hobbies-section"
import { ContactSection } from "@/components/sections/contact-section"
import { WhyHireMeSection } from "@/components/sections/why-hire-me-section"
import { Footer } from "@/components/footer"

export function PortfolioPage() {
  return (
    <>
      <SiteNav />
      <main className="bg-background">
        <HeroSection />
        <AboutSection />
        <SpecialtySection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <WhyHireMeSection />
        <RecommendationLetterSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
