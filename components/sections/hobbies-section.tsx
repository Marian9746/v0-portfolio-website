"use client"

import { profileData } from "@/lib/profile-data"
import {
  Heart,
  Code,
  Gamepad2,
  BookOpen,
  Camera,
  Dumbbell,
  Plane,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  gamepad: Gamepad2,
  book: BookOpen,
  camera: Camera,
  dumbbell: Dumbbell,
  plane: Plane,
}

export function HobbiesSection() {
  const { hobbies } = profileData

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <Heart className="w-4 h-4" />
          <span>Hobbies & Interests</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground">Beyond the Code</h2>
        <p className="text-muted-foreground">
          What keeps me inspired and balanced outside of work
        </p>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => {
          const IconComponent = iconMap[hobby.icon] || Heart

          return (
            <div
              key={index}
              className="group p-5 bg-secondary/30 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-semibold text-foreground">{hobby.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Fun Fact */}
      <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-muted-foreground italic">
          &ldquo;I believe that diverse interests fuel creativity. My hobbies help me approach
          problems from different angles and bring fresh perspectives to my work.&rdquo;
        </p>
      </div>
    </div>
  )
}
