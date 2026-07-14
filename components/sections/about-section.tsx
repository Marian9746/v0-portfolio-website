"use client"

import type { LucideIcon } from "lucide-react"
import { User, Code, Braces, Component, Server, Database, Cloud, Container, GitBranch, Sparkles, Zap } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal } from "@/components/motion/reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LogoLoop } from "@/components/reactbits/LogoLoop"

const skillIcons: Array<{ match: string; icon: LucideIcon }> = [
  { match: "python", icon: Code },
  { match: "javascript", icon: Braces },
  { match: "react", icon: Component },
  { match: "next", icon: Component },
  { match: "node", icon: Server },
  { match: "sql", icon: Database },
  { match: "mongo", icon: Database },
  { match: "aws", icon: Cloud },
  { match: "cloud", icon: Cloud },
  { match: "docker", icon: Container },
  { match: "kubernetes", icon: Container },
  { match: "git", icon: GitBranch },
  { match: "ai", icon: Sparkles },
]

function getSkillIcon(name: string): LucideIcon {
  const lower = name.toLowerCase()
  return skillIcons.find(({ match }) => lower.includes(match))?.icon ?? Zap
}

export function AboutSection() {
  const { about, skills } = profileData

  const logos = skills.technical.map((skill) => {
    const Icon = getSkillIcon(skill.name)
    return {
      node: (
        <span className="inline-flex items-center gap-2 text-muted-foreground">
          <Icon className="w-4 h-4" />
          <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
        </span>
      ),
      ariaLabel: skill.name,
    }
  })

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

        {/* Description */}
        <Reveal className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm max-w-3xl">
          {about.description}
        </Reveal>

        {/* Areas of Expertise */}
        <Reveal className="space-y-4">
          <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/70">
            Areas of Expertise
          </h3>
          <Accordion type="single" collapsible className="border-t border-border/50">
            {about.areasOfExpertise.map((area) => (
              <AccordionItem key={area.title} value={area.title}>
                <AccordionTrigger className="text-foreground text-base">{area.title}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>{area.description}</p>
                  {area.note && <p className="mt-2 text-xs text-primary font-medium">{area.note}</p>}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Languages */}
        <Reveal className="text-xs text-muted-foreground/70">
          <span className="uppercase tracking-[0.15em] font-medium">Languages: </span>
          {skills.languages.map((lang, index) => (
            <span key={lang.name}>
              {lang.name} ({lang.level})
              {index < skills.languages.length - 1 && " · "}
            </span>
          ))}
        </Reveal>

        {/* Tech Stack marquee */}
        <Reveal>
          <LogoLoop logos={logos} speed={40} logoHeight={20} gap={40} fadeOut pauseOnHover />
        </Reveal>
      </div>
    </section>
  )
}
