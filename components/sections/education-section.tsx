"use client"

import { profileData } from "@/lib/profile-data"
import { GraduationCap, MapPin, Calendar, BookOpen, CornerDownRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Disclosure } from "@/components/motion/disclosure"
import { SectionHeading } from "@/components/section-heading"

export function EducationSection() {
  const { education } = profileData

  return (
    <section id="education" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <Reveal>
        <SectionHeading icon={GraduationCap} eyebrow="Education" heading="Academic Background" />
      </Reveal>

      {/* Timeline */}
      <RevealGroup className="relative space-y-5">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        {education.map((item) => (
          <RevealItem key={item.id} className="relative pl-10">
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-primary-foreground" />
            </div>

            <div className="space-y-2.5 p-4 bg-secondary/60 rounded-lg border border-border/50 hover:border-border transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div className="flex-1 space-y-1">
                  <h3 className="text-base font-semibold text-foreground">{item.degree}</h3>
                  <p className="text-primary font-medium text-sm font-mono">{item.institution}</p>
                </div>
                <div className="shrink-0 space-y-1 text-xs font-light text-muted-foreground sm:text-right">
                  <span className="flex items-center gap-1 sm:justify-end">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 sm:justify-end">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {item.description ? (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              ) : null}

              {item.highlights && item.highlights.length > 0 ? (
                <Disclosure label="Highlights" items={item.highlights} icon={BookOpen} />
              ) : null}

              {item.exchange ? (
                <div className="flex items-start gap-2 pt-3 border-t border-border/40">
                  <CornerDownRight className="w-3.5 h-3.5 text-muted-foreground/60 mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground leading-snug">
                    <span className="italic">Exchange Program</span> — {item.exchange.institution},{" "}
                    {item.exchange.location}
                    <span className="block text-muted-foreground/70">{item.exchange.period}</span>
                  </p>
                </div>
              ) : null}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
      </div>
    </section>
  )
}
