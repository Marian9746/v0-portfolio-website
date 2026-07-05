"use client"

import { navigationItems, profileData } from "@/lib/profile-data"
import {
  User,
  Briefcase,
  GraduationCap,
  Zap,
  Heart,
  Award,
  Linkedin,
  Github,
  Mail,
  FileText,
} from "lucide-react"

interface NavigationMenuProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const iconMap = {
  user: User,
  briefcase: Briefcase,
  graduation: GraduationCap,
  zap: Zap,
  heart: Heart,
  award: Award,
} as const

export function NavigationMenu({ activeSection, onNavigate }: NavigationMenuProps) {
  const { personal } = profileData

  return (
    <div className="h-full flex flex-col bg-card text-card-foreground p-6 overflow-y-auto">
      {/* Profile Header */}
      <div className="mb-8 pb-6 border-b border-border">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto border-2 border-primary/30">
          <span className="text-2xl font-bold text-primary">
            {personal.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <h2 className="text-xl font-bold text-card-foreground">{personal.name}</h2>
        <p className="text-sm text-muted-foreground mt-1">{personal.title}</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-0.5">
        {navigationItems.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap] || User
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-left transition-all duration-200 ${
                isActive
                  ? "bg-primary/90 text-primary-foreground"
                  : "text-muted-foreground hover:bg-white/5 hover:text-card-foreground"
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* CV Request Button */}
      <div className="mt-auto pt-4">
        <a
          href={`mailto:${personal.email}?subject=CV Request&body=Hi Marian,%0D%0A%0D%0AI would like to request your CV for review.%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards`}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground rounded-lg transition-all duration-200"
        >
          <FileText className="w-4 h-4" />
          <span>Request my CV</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Connect
        </p>
        <div className="flex items-center gap-2">
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Hint */}
      <p className="mt-4 text-xs text-muted-foreground text-center opacity-60">
        Click outside or swipe to close
      </p>
    </div>
  )
}
