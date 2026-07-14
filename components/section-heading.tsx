"use client"

import type { LucideIcon } from "lucide-react"
import SplitText from "@/components/reactbits/SplitText"
import { SectionDivider } from "@/components/section-divider"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  icon: LucideIcon
  eyebrow: string
  heading: string
  align?: "left" | "center"
}

export function SectionHeading({ icon: Icon, eyebrow, heading, align = "left" }: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div className="space-y-3">
      <SectionDivider className={cn(centered && "mx-auto")} />
      <div
        className={cn(
          "flex items-center gap-2 text-muted-foreground/70 text-xs font-medium uppercase tracking-[0.15em]",
          centered && "justify-center",
        )}
      >
        <Icon className="w-4 h-4" />
        <span>{eyebrow}</span>
      </div>
      <SplitText
        tag="h2"
        text={heading}
        textAlign={align}
        className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"
      />
    </div>
  )
}
