"use client"

import { profileData } from "@/lib/profile-data"
import { User, MapPin, Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react"
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
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <Reveal className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{about.headline}</h2>
        </Reveal>

        {/* Description */}
        <Reveal className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
          {about.description}
        </Reveal>

        {/* Stats */}
        <RevealGroup className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="p-4 bg-secondary/30 rounded-lg text-center border border-border/50"
            >
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Highlights */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Key Strengths
          </h3>
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {about.highlights.map((highlight, index) => (
              <RevealItem
                key={index}
                className="flex items-center gap-2 text-foreground bg-secondary/50 px-3 py-2 rounded-md"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span className="text-sm">{highlight}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Tech Stack */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </h3>
          <RevealGroup className="flex flex-wrap gap-2">
            {skills.technical.map((skill) => (
              <RevealItem key={skill.name}>
                <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  {skill.name}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Contact Info */}
        <Reveal className="space-y-3 pt-4 border-t border-border">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{personal.location}</span>
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">{personal.email}</span>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">{personal.phone}</span>
            </a>
          </div>
        </Reveal>

        {/* Social Links */}
        <Reveal className="flex flex-wrap gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
