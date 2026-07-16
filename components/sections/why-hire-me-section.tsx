"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { CheckCircle2, Zap } from "lucide-react"
import { staggerContainer, fadeInUp } from "@/lib/motion"

const reasons = [
  {
    title: "Bilingual Technical Leadership",
    description: "Fluent in Spanish and English, enabling seamless cross-cultural team management and stakeholder communication.",
  },
  {
    title: "Proven Track Record at Tier-1 Firms",
    description: "5+ years at Accenture and NTT Data, delivering enterprise transformation projects for Fortune 500 companies.",
  },
  {
    title: "TOGAF® Certified Architect",
    description: "Enterprise architecture expertise backed by industry certification, ensuring scalable and strategic solutions.",
  },
  {
    title: "Full-Stack Technical Capability",
    description: "From strategy and architecture to hands-on coding (Python, React, AWS, Node.js, Docker, Kubernetes).",
  },
  {
    title: "Teaching & Mentorship Experience",
    description: "Designed and delivered MBA-level technology curriculum at ISDI, proven ability to translate complex concepts.",
  },
  {
    title: "Autonomous Problem Solver",
    description: "Comfortable with ambiguous problems. I deliver solutions that are documented, tested, and production-ready.",
  },
]

export function WhyHireMeSection() {
  return (
    <section
      id="why-hire-me"
      className="py-20 sm:py-32 px-6 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Why Work With Me"
          icon={Zap}
          title="What Sets Me Apart"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex gap-4 p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          Looking for someone who combines strategic thinking with hands-on execution?{" "}
          <a href="#contact" className="text-primary font-medium hover:underline">
            Let's talk
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
