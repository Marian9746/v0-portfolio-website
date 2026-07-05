"use client"

import { profileData } from "@/lib/profile-data"
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react"

export function EducationSection() {
  const { education } = profileData

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Education</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground">Academic Background</h2>
      </div>

      {/* Timeline */}
      <div className="relative space-y-8">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

        {education.map((item) => (
          <div key={item.id} className="relative pl-10">
            <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-primary-foreground" />
            </div>

            <div className="space-y-4 p-5 bg-secondary/30 rounded-lg border border-border/50 hover:border-border transition-colors">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
                <p className="text-primary font-medium">{item.institution}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
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
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {item.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                        <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
