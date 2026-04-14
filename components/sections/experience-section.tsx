"use client"

import { profileData } from "@/lib/profile-data"
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react"

export function ExperienceSection() {
  const { experience } = profileData

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <Briefcase className="w-4 h-4" />
          <span>Experience</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
      </div>

      {/* Timeline */}
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        {experience.map((job, index) => (
          <div key={job.id} className="relative pl-10">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <div className="space-y-4 p-5 bg-secondary/30 rounded-lg border border-border/50 hover:border-border transition-colors">
              {/* Header */}
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-foreground">{job.role}</h3>
                <p className="text-primary font-medium">{job.company}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
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
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Achievements
                </h4>
                <ul className="space-y-1.5">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
          </div>
        ))}
      </div>
    </div>
  )
}
