"use client"

import { profileData } from "@/lib/profile-data"
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Disclosure } from "@/components/motion/disclosure"

export function ExperienceSection() {
  const { experience } = profileData

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <Reveal className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          <span>Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Professional Journey</h2>
      </Reveal>

      {/* Timeline */}
      <RevealGroup className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        {experience.map((job, index) => (
          <RevealItem key={job.id} className="relative pl-10">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <div className="space-y-4 p-5 bg-secondary/60 rounded-lg border border-border/50 hover:border-border transition-colors">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                  <p className="text-primary font-medium">{job.company}</p>
                </div>
                <div className="shrink-0 text-right space-y-1 text-xs text-muted-foreground">
                  <span className="flex items-center justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </span>
                  <span className="flex items-center justify-end gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {job.description}
              </p>

              {/* Achievements */}
              <Disclosure label="Key Achievements" items={job.achievements} icon={CheckCircle} />

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {job.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
      </div>
    </section>
  )
}
