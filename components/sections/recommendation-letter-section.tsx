"use client"

import { Download, Quote, ScrollText } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal } from "@/components/motion/reveal"

export function RecommendationLetterSection() {
  const { recommendationLetter } = profileData

  return (
    <section id="recommendation" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        <Reveal className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
            <ScrollText className="w-4 h-4" />
            <span>Recommendation Letter</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">In Their Words</h2>
        </Reveal>

        <Reveal>
          <div className="relative bg-card border border-border/50 rounded-2xl p-8 sm:p-12 shadow-sm">
            <Quote className="w-8 h-8 text-primary/30 mb-6" />
            <p className="text-card-foreground leading-relaxed whitespace-pre-line text-sm sm:text-base font-mono">
              {recommendationLetter.body}
            </p>
            <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-semibold text-card-foreground">{recommendationLetter.fromName}</p>
                <p className="text-sm text-muted-foreground">{recommendationLetter.fromRole}</p>
                <p className="text-sm text-muted-foreground">{recommendationLetter.date}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={recommendationLetter.files.en}
                  download
                  className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download (EN)
                </a>
                <a
                  href={recommendationLetter.files.es}
                  download
                  className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Descargar (ES)
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
