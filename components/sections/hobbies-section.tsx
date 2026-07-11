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
  Waves,
  Mountain,
  Kayak,
  Piano
} from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  gamepad: Gamepad2,
  book: BookOpen,
  camera: Camera,
  dumbbell: Dumbbell,
  plane: Plane,
  surfing: Waves,
  skiing: Mountain,
  kayak: Kayak,
  piano: Piano,

}

export function HobbiesSection() {
  const { hobbies } = profileData

  return (
    <section id="hobbies" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <Reveal className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <Heart className="w-4 h-4" />
          <span>Hobbies & Interests</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Beyond the Code</h2>
        <p className="text-muted-foreground">
          What keeps me inspired and balanced outside of work
        </p>
      </Reveal>

      {/* Hobbies Grid */}
      <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {hobbies.map((hobby, index) => {
          const IconComponent = iconMap[hobby.icon] || Heart

          return (
            <RevealItem
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
            </RevealItem>
          )
        })}
      </RevealGroup>

      {/* Fun Fact */}
      <Reveal className="p-6 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-muted-foreground italic">
          &ldquo;I believe that diverse interests fuel creativity. My hobbies help me approach
          problems from different angles and bring fresh perspectives to my work.&rdquo;
        </p>
      </Reveal>
      </div>
    </section>
  )
}
