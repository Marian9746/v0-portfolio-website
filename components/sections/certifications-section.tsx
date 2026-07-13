"use client"

import { profileData } from "@/lib/profile-data"
import { Award, ExternalLink } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

export function CertificationsSection() {
  const { certifications, personal } = profileData

  return (
    <section id="certifications" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <Reveal className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Certifications</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Professional Credentials</h2>
      </Reveal>

      {/* Certifications Grid */}
      <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {certifications.map((cert: any, index: number) => {
          const certUrl = cert.credlyUrl || cert.certificateUrl

          return (
            <RevealItem key={index}>
              <a
                href={certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-center p-4 h-full bg-secondary/60 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </a>
            </RevealItem>
          )
        })}
      </RevealGroup>

      {/* Credly CTA */}
      <Reveal className="flex flex-wrap items-center justify-between gap-4 p-5 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-muted-foreground">
          View my complete certification portfolio on Credly.
        </p>
        <a
          href={personal.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all duration-200 hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
        >
          <span>View Credly Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </Reveal>
      </div>
    </section>
  )
}
