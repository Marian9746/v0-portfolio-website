"use client"

import { profileData } from "@/lib/profile-data"
import {
  Heart,
  Code,
  Gamepad2,
  BookOpen,
  Camera,
  Dumbbell,
  Plane,
  Waves,
  Mountain,
  Kayak,
  Piano
} from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  gamepad: Gamepad2,
  book: BookOpen,
  camera: Camera,
  dumbbell: Dumbbell,
  plane: Plane,
  surfing: Waves,
  skiing: Mountain,
  kayak: Kayak,
  piano: Piano,
}

export function HobbiesSection() {
  const { hobbies } = profileData

  return (
    <section id="hobbies" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <Reveal>
          <SectionHeading icon={Heart} eyebrow="Hobbies & Interests" heading="Beyond the Code" />
        </Reveal>

        {/* Hobbies chips */}
        <RevealGroup className="flex flex-wrap gap-3">
          {hobbies.map((hobby, index) => {
            const IconComponent = iconMap[hobby.icon] || Heart

            return (
              <RevealItem key={index}>
                <span
                  title={hobby.description}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/60 border border-border/50 rounded-full text-sm font-medium text-foreground hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4 text-primary" />
                  {hobby.name}
                </span>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
