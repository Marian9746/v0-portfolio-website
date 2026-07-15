"use client"

import { Linkedin, Mail, User } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CertificationsTrustCard } from "@/components/certifications-trust-card"

export function AboutSection() {
  const { about, personal } = profileData

  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <Reveal>
          <SectionHeading
            icon={User}
            eyebrow="About Me"
            heading={about.headline}
            highlightWords={["Engineer", "curious"]}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
          <div className="lg:col-span-2 space-y-4">
            <Reveal className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm max-w-3xl">
              {about.description}
            </Reveal>

            <Reveal className="flex items-center gap-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-foreground/20 hover:bg-secondary/60 hover:text-foreground"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-foreground/20 hover:bg-secondary/60 hover:text-foreground"
              >
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-1">
            <CertificationsTrustCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
