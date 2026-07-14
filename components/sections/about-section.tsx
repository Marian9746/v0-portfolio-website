"use client"

import { User } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CertificationsTrustCard } from "@/components/certifications-trust-card"

export function AboutSection() {
  const { about } = profileData

  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Reveal>
          <SectionHeading icon={User} eyebrow="About Me" heading={about.headline} />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
          <Reveal className="lg:col-span-2 text-muted-foreground leading-relaxed whitespace-pre-line text-sm max-w-3xl">
            {about.description}
          </Reveal>

          <Reveal className="lg:col-span-1">
            <CertificationsTrustCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
