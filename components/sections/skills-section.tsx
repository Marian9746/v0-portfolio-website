"use client"

import { profileData } from "@/lib/profile-data"
import { Zap, Code, Brain, Languages } from "lucide-react"

export function SkillsSection() {
  const { skills } = profileData

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          <span>Skills & Capabilities</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground">Technical Expertise</h2>
      </div>

      {/* Technical Skills */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Code className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Technical Skills</h3>
        </div>
        <div className="space-y-4">
          {skills.technical.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Soft Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full font-medium hover:bg-secondary/80 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Languages className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Languages</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {skills.languages.map((lang, index) => (
            <div
              key={index}
              className="p-4 bg-secondary/50 rounded-lg border border-border/50 text-center"
            >
              <p className="font-semibold text-foreground">{lang.name}</p>
              <p className="text-sm text-muted-foreground">{lang.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
