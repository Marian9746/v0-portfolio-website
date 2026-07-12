"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { staggerContainer, fadeInUp } from "@/lib/motion"

export function HeroSection() {
  const { personal } = profileData

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        <motion.span
          variants={fadeInUp}
          className="text-sm uppercase tracking-[0.2em] text-muted-foreground"
        >
          {personal.title}
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-7xl font-extrabold tracking-tight text-foreground text-balance"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-muted-foreground max-w-xl text-balance leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  )
}
