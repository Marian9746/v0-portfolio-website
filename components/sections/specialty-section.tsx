"use client"

import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import {
  Layers,
  Building2,
  Bot,
  Cpu,
  Code,
  Braces,
  Component,
  Server,
  Database,
  Cloud,
  Container,
  GitBranch,
  Sparkles,
  Zap,
} from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


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

const expertiseIcons: Array<{ match: string; icon: LucideIcon }> = [
  { match: "digital transformation", icon: Building2 },
  { match: "ai & automation", icon: Bot },
  { match: "iot", icon: Cpu },
  { match: "cloud migration", icon: Cloud },
]

function getExpertiseIcon(title: string): LucideIcon {
  const lower = title.toLowerCase()
  return expertiseIcons.find(({ match }) => lower.includes(match))?.icon ?? Layers
}

export function SpecialtySection() {
  const { about, skills } = profileData

  const logos = skills.technical.map((skill) => {
    const Icon = getSkillIcon(skill.name)
    return {
      node: (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/50 bg-secondary/40 text-muted-foreground">
          <Icon className="w-4 h-4" />
          <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
        </span>
      ),
      ariaLabel: skill.name,
    }
  })

  return (
    <section id="specialty" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <Reveal>
          <SectionHeading icon={Layers} eyebrow="Speciality" heading="Areas of Expertise" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch">
          <RevealGroup className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {about.areasOfExpertise.map((area) => {
                const Icon = getExpertiseIcon(area.title)
                return (
                  <RevealItem key={area.title}>
                    <AccordionItem
                      value={area.title}
                      className="rounded-2xl border border-border/50 bg-card px-5 shadow-sm hover:border-primary/40 transition-colors"
                    >
                      <AccordionTrigger className="text-foreground text-base hover:no-underline">
                        <span className="flex items-center gap-3">
                          <Icon className="w-4 h-4 text-primary shrink-0" />
                          {area.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-7">
                        <p>{area.description}</p>
                        {area.note && <p className="mt-2 text-xs text-primary font-medium">{area.note}</p>}
                      </AccordionContent>
                    </AccordionItem>
                  </RevealItem>
                )
              })}
            </Accordion>
          </RevealGroup>

          <Reveal className="relative rounded-2xl overflow-hidden border border-border/50 aspect-[4/5] lg:aspect-auto group">
            <Image
              src="/placeholder-escritorio.jpeg"
              alt="Technology dashboard showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Reveal>
        </div>

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


      </div>
    </section>
  )
}
