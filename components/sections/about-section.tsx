"use client"

import { profileData } from "@/lib/profile-data"
import { User, MapPin, Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react"

export function AboutSection() {
  const { personal, about } = profileData

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <User className="w-4 h-4" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground">{about.headline}</h2>
      </div>

      {/* Description */}
      <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
        {about.description}
      </div>

      {/* Highlights */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Key Strengths
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {about.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-foreground bg-secondary/50 px-3 py-2 rounded-md"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-3 pt-4 border-t border-border">
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
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-3">
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
      </div>
    </div>
  )
}
