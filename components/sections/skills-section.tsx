"use client"

import type { LucideIcon } from "lucide-react"
import {
  Zap,
  Brain,
  Languages,
  Code,
  Braces,
  Component,
  Server,
  Database,
  Cloud,
  Container,
  GitBranch,
  Sparkles,
} from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

const skillIcons: Array<{ match: string; icon: LucideIcon }> = [
  { match: "python", icon: Code },
  { match: "javascript", icon: Braces },
  { match: "react", icon: Component },
  { match: "node", icon: Server },
  { match: "sql", icon: Database },
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

export function SkillsSection() {
  const { skills } = profileData

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <Reveal className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground/70 text-xs font-medium uppercase tracking-[0.15em]">
            <Zap className="w-4 h-4" />
            <span>Skills & Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">Technical Expertise</h2>
        </Reveal>

        {/* Technical Skills */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Technical Skills</h3>
          </div>
          <RevealGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.technical.map((skill) => {
              const Icon = getSkillIcon(skill.name)
              return (
                <RevealItem
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-secondary/60 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
                >
                  <div className="p-2 bg-primary/10 rounded-md shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>

        {/* Soft Skills */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Soft Skills</h3>
          </div>
          <RevealGroup className="flex flex-wrap gap-2">
            {skills.soft.map((skill, index) => (
              <RevealItem key={index}>
                <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full font-medium hover:bg-secondary/80 transition-colors">
                  {skill}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* Languages */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Languages</h3>
          </div>
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {skills.languages.map((lang, index) => (
              <RevealItem
                key={index}
                className="p-4 bg-secondary/50 rounded-lg border border-border/50 text-center"
              >
                <p className="font-semibold text-foreground">{lang.name}</p>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
