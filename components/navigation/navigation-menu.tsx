"use client"

import { navigationItems, profileData } from "@/lib/profile-data"
import {
  User,
  Briefcase,
  Zap,
  Heart,
  Award,
  Linkedin,
  Github,
  Mail,
  ChevronLeft,
} from "lucide-react"

interface NavigationMenuProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  user: User,
  briefcase: Briefcase,
  zap: Zap,
  heart: Heart,
  award: Award,
}

export function NavigationMenu({ activeSection, onNavigate }: NavigationMenuProps) {
  const { personal } = profileData

  return (
    <div className="h-full flex flex-col bg-card text-card-foreground p-6 overflow-y-auto">
      {/* Profile Header */}
      <div className="mb-8 pb-6 border-b border-border">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 border-2 border-primary/30">
          <span className="text-2xl font-bold text-primary">
            {personal.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <h2 className="text-xl font-bold text-foreground">{personal.name}</h2>
        <p className="text-sm text-muted-foreground mt-1">{personal.title}</p>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1">
        {navigationItems.map((item) => {
          const IconComponent = iconMap[item.icon] || User
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {isActive && <ChevronLeft className="w-4 h-4 ml-auto" />}
            </button>
          )
        })}
      </nav>

      {/* Social Links */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Connect
        </p>
        <div className="flex items-center gap-2">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Hint */}
      <p className="mt-6 text-xs text-muted-foreground text-center opacity-60">
        Click outside or swipe to close
      </p>
    </div>
  )
}
