"use client"

import { profileData } from "@/lib/profile-data"
import { User, Github, Linkedin, ExternalLink } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

function getYearsOfExperience(experience: { period: string }[]): number {
  const years = experience
    .map((job) => job.period.match(/\d{4}/)?.[0])
    .filter((year): year is string => Boolean(year))
    .map(Number)

  if (years.length === 0) return 0
  return new Date().getFullYear() - Math.min(...years)
}

export function AboutSection() {
  const { personal, about, certifications, projects, experience, skills } = profileData
  const yearsOfExperience = getYearsOfExperience(experience)

  const stats = [
    { label: "Years of Experience", value: `${yearsOfExperience}+` },
    { label: "Certifications", value: certifications.length },
    { label: "Projects", value: projects.length },
  ]

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <Reveal className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{about.headline}</h2>
        </Reveal>

        {/* Stats */}
        <RevealGroup className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="p-4 bg-secondary/60 rounded-lg text-center border border-border/50"
            >
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Two-column: description + strengths/tech stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
            {about.description}
          </Reveal>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
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
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
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
