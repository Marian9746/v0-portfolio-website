"use client"

import { profileData } from "@/lib/profile-data"
import { User, Github, Linkedin, ExternalLink } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

export function AboutSection() {
  const { personal, about, skills } = profileData

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <Reveal className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground/70 text-xs font-medium uppercase tracking-[0.15em]">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">{about.headline}</h2>
        </Reveal>

        {/* Two-column: description + strengths/tech stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
            {about.description}
          </Reveal>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                Key Strengths
              </h3>
              <RevealGroup className="space-y-3">
                {about.highlights.map((highlight, index) => (
                  <RevealItem key={index} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
                Tech Stack
              </h3>
              <RevealGroup className="space-y-3">
                {skills.technical.map((skill) => (
                  <RevealItem key={skill.name} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
