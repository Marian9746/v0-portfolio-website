"use client"

import { profileData } from "@/lib/profile-data"
import { Award, ExternalLink, Calendar, Building } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"

export function CertificationsSection() {
  const { certifications, personal } = profileData

  return (
    <section id="certifications" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <Reveal className="space-y-2">
        <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Certifications</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Professional Credentials</h2>
        <p className="text-muted-foreground">
          Verified certifications and professional achievements
        </p>
      </Reveal>

      {/* Certifications Grid */}
      <RevealGroup className="grid grid-cols-1 gap-4">
        {certifications.map((cert: any, index: number) => {
          const certUrl = cert.credlyUrl || cert.certificateUrl
          const isExternal = certUrl?.startsWith('http')
          
          return (
            <RevealItem key={index}>
              <a
                href={certUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-5 bg-secondary/30 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {cert.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </span>
                      {!isExternal && certUrl && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                          PDF
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </RevealItem>
          )
        })}
      </RevealGroup>

      {/* Credly CTA */}
      <Reveal className="p-6 bg-primary/5 rounded-lg border border-primary/20 space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">View All Credentials</h3>
          <p className="text-sm text-muted-foreground">
            Check out my complete certification portfolio on Credly, including verified badges
            and detailed credential information.
          </p>
        </div>
        <a
          href={personal.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Award className="w-5 h-5" />
          <span>View Credly Profile</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </Reveal>

      {/* Stats */}
      <RevealGroup className="grid grid-cols-3 gap-4">
        <RevealItem className="p-4 bg-secondary/30 rounded-lg text-center border border-border/50">
          <p className="text-2xl font-bold text-primary">{certifications.length}+</p>
          <p className="text-sm text-muted-foreground">Certifications</p>
        </RevealItem>
        <RevealItem className="p-4 bg-secondary/30 rounded-lg text-center border border-border/50">
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-sm text-muted-foreground">Verified</p>
        </RevealItem>
        <RevealItem className="p-4 bg-secondary/30 rounded-lg text-center border border-border/50">
          <p className="text-2xl font-bold text-primary">Active</p>
          <p className="text-sm text-muted-foreground">Status</p>
        </RevealItem>
      </RevealGroup>
      </div>
    </section>
  )
}
