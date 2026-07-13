"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, FileText, Linkedin, Quote, ScrollText } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -40 : 40, opacity: 0 }),
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
    <section id="recommendation" className="scroll-mt-24 py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Reveal className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm uppercase tracking-wider">
            <ScrollText className="w-4 h-4" />
            <span>Recommendation Letters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">In Their Words</h2>
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
                  <p className="text-card-foreground leading-relaxed whitespace-pre-line text-sm sm:text-base font-mono">
                    {letter.body}
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
