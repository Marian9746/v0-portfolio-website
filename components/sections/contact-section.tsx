"use client"

import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

export function ContactSection() {
  const { personal } = profileData

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <Reveal className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-muted-foreground/70 text-xs font-medium uppercase tracking-[0.15em]">
            <MessageCircle className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">Let&apos;s Talk</h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Open to new opportunities, collaborations, and conversations about technology.
            Reach out through any of these channels.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {personal.location}
          </span>
          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            {personal.phone}
          </a>
        </Reveal>

        <RevealGroup className="flex flex-wrap items-center justify-center gap-4">
          <RevealItem>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </RevealItem>
          <RevealItem>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all duration-200 hover:bg-secondary/70 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </RevealItem>
          <RevealItem>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all duration-200 hover:bg-secondary/70 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
