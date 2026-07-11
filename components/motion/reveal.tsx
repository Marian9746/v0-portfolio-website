"use client"

import { motion, type Variants } from "framer-motion"
import { fadeInUp, scrollViewport, staggerContainer } from "@/lib/motion"

interface RevealProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  as?: "div" | "section"
}

export function Reveal({ children, className, variants = fadeInUp, as = "div" }: RevealProps) {
  const Component = motion[as]
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={variants}
    >
      {children}
    </Component>
  )
}

interface RevealGroupProps {
  children: React.ReactNode
  className?: string
}

export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={scrollViewport}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, variants = fadeInUp }: Omit<RevealProps, "as">) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}
