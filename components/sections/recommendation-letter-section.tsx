"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, FileText, Linkedin, Quote, ScrollText } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -40 : 40, opacity: 0 }),
}

function renderWithBoldPhrases(text: string, phrases?: string[]) {
  if (!phrases || phrases.length === 0) return text

  const pattern = new RegExp(`(${phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g")

  return text.split(pattern).map((segment, index) =>
    phrases.includes(segment) ? (
      <strong key={index} className="font-semibold text-foreground">
        {segment}
      </strong>
    ) : (
      <span key={index}>{segment}</span>
    ),
  )
}

export function RecommendationLetterSection() {
  const { recommendationLetters } = profileData
  const [[index, direction], setIndexDirection] = useState<[number, number]>([0, 0])

  const paginate = (step: number) => {
    setIndexDirection(([current]) => {
      const next = (current + step + recommendationLetters.length) % recommendationLetters.length
      return [next, step]
    })
  }

  const letter = recommendationLetters[index]

  return (
    <section id="recommendation" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Reveal className="space-y-3">
          <SectionHeading icon={ScrollText} eyebrow="Recommendation Letters" heading="What others say" />
          <p className="text-muted-foreground max-w-xl text-sm">
            I&apos;ve worked with some amazing people, here is what they have to say about me.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous recommendation"
              className="hidden sm:flex shrink-0 w-9 h-9 items-center justify-center rounded-full bg-secondary hover:bg-secondary/70 text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-card border border-border/50 rounded-2xl p-8 sm:p-12 shadow-sm"
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-6" />
                  <p className="text-card-foreground leading-relaxed whitespace-pre-line text-sm font-mono">
                    {renderWithBoldPhrases(letter.body, letter.highlightPhrases)}
                  </p>
                  <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <p className="font-semibold text-card-foreground">{letter.fromName}</p>
                        {letter.linkedin && (
                          <a
                            href={letter.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${letter.fromName} on LinkedIn`}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-full text-xs font-medium text-primary transition-all duration-200 hover:scale-[1.05]"
                          >
                            <Linkedin className="w-3.5 h-3.5" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{letter.fromRole}</p>
                      <p className="text-sm text-muted-foreground">{letter.date}</p>
                    </div>
                    {(letter.files.en || letter.files.es) && (
                      <div className="flex flex-wrap gap-2">
                        {letter.files.en && (
                          <a
                            href={letter.files.en}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-secondary/70 rounded-full text-xs font-medium text-secondary-foreground transition-all duration-200 hover:scale-[1.03]"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            EN
                          </a>
                        )}
                        {letter.files.es && (
                          <a
                            href={letter.files.es}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-secondary/70 rounded-full text-xs font-medium text-secondary-foreground transition-all duration-200 hover:scale-[1.03]"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            ES
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next recommendation"
              className="hidden sm:flex shrink-0 w-9 h-9 items-center justify-center rounded-full bg-secondary hover:bg-secondary/70 text-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile arrows + pagination dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous recommendation"
              className="sm:hidden w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/70 text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {recommendationLetters.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => setIndexDirection([dotIndex, dotIndex > index ? 1 : -1])}
                  aria-label={`Go to recommendation ${dotIndex + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    dotIndex === index ? "bg-primary" : "bg-border hover:bg-muted-foreground/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next recommendation"
              className="sm:hidden w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/70 text-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
