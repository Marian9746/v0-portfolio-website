"use client"

import { useState, useCallback } from "react"
import { Meny } from "@/components/meny/meny"
import { NavigationMenu } from "@/components/navigation/navigation-menu"
import { AboutSection } from "@/components/sections/about-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { HobbiesSection } from "@/components/sections/hobbies-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { profileData } from "@/lib/profile-data"
import { Menu, ChevronRight } from "lucide-react"

const sectionComponents: Record<string, React.ComponentType> = {
  about: AboutSection,
  experience: ExperienceSection,
  skills: SkillsSection,
  hobbies: HobbiesSection,
  certifications: CertificationsSection,
}

export function ProfilePage() {
  const [activeSection, setActiveSection] = useState("about")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { personal } = profileData

  const handleNavigate = useCallback((sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }, [])

  const handleMenuToggle = useCallback((open: boolean) => {
    console.log('ProfilePage: Menu state changing to:', open)
    setIsMenuOpen(open)
  }, [])

  const ActiveComponent = sectionComponents[activeSection] || AboutSection

  return (
    <Meny
      config={{
        position: "left",
        width: 280,
        angle: 30,
        threshold: 40,
        overlap: 6,
        transitionDuration: "0.5s",
        transitionEasing: "ease",
      }}
      isOpen={isMenuOpen}
      onOpenChange={handleMenuToggle}
      menuContent={
        <NavigationMenu activeSection={activeSection} onNavigate={handleNavigate} />
      }
    >
      <main className="min-h-screen bg-background">
        {/* Menu Hint Arrow */}
        <div
          className="meny-arrow fixed left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 pointer-events-none"
          style={{ opacity: isMenuOpen ? 0 : 0.7 }}
        >
          <div className="flex items-center bg-secondary/80 rounded-r-lg py-4 px-1.5 backdrop-blur-sm">
            <ChevronRight className="w-4 h-4 text-primary animate-pulse" />
          </div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                console.log('Menu button clicked, current state:', isMenuOpen)
                handleMenuToggle(!isMenuOpen)
              }}
              className="p-2 -ml-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              <Menu className="w-5 h-5 text-foreground" />
            </button>
            <div className="text-center flex-1">
              <h1 className="text-lg font-semibold text-foreground">{personal.name}</h1>
              <p className="text-xs text-muted-foreground">{personal.subtitle}</p>
            </div>
            <div className="w-9" /> {/* Spacer for alignment */}
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-8 pb-20">
          <ActiveComponent />
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border">
          <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>Swipe right or hover left edge</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </main>
    </Meny>
  )
}
