"use client"

import { User } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  const { about } = profileData

  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Reveal>
          <SectionHeading icon={User} eyebrow="About Me" heading={about.headline} />
        </Reveal>

        <Reveal className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm max-w-3xl">
          {about.description}
        </Reveal>
      </div>
    </section>
  )
}
