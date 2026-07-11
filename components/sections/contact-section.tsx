"use client"

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

export function ContactSection() {
  const { personal } = profileData

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <Reveal className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
            <MessageCircle className="w-4 h-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Let&apos;s Build Something</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Open to new opportunities, collaborations, and conversations about technology.
            Reach out through any of these channels.
          </p>
        </Reveal>

        <RevealGroup className="flex flex-wrap items-center justify-center gap-4">
          <RevealItem>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
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
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
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
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
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
