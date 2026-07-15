"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { staggerContainer, fadeInUp } from "@/lib/motion"
import SplitText from "@/components/reactbits/SplitText"

export function HeroSection() {
  const { personal } = profileData

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center pt-28 pb-16 sm:min-h-screen sm:justify-center sm:pt-0 sm:pb-0 px-6 text-center relative isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 40%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 40%, black 0%, transparent 80%)",
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-3xl mx-auto flex flex-col items-center gap-6"
      >
        <motion.span
          variants={fadeInUp}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70"
        >
          {personal.title}
        </motion.span>

        <SplitText
          text={personal.name}
          tag="h1"
          className="text-6xl sm:text-8xl font-black tracking-tight text-foreground text-balance"
        />

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg font-light text-muted-foreground max-w-xl text-balance leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="group relative isolate inline-flex items-center justify-center overflow-hidden px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-[transform,box-shadow] duration-200 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-full -z-10 h-full rounded-t-full bg-primary transition-[bottom,border-radius] duration-500 ease-[cubic-bezier(0.4,0,0,1)] group-hover:bottom-0 group-hover:rounded-none"
            />
            <span className="relative block h-[1.25em] overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0,1)] group-hover:-translate-y-1/2">
                <span className="flex h-[1.25em] items-center justify-center transition-colors duration-500 group-hover:text-primary-foreground">
                  Get in touch
                </span>
                <span className="flex h-[1.25em] items-center justify-center text-primary-foreground">
                  Contact
                </span>
              </span>
            </span>
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-10 flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs font-light uppercase tracking-wider">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  )
}
