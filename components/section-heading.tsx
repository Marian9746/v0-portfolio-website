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
  highlightWords?: string[]
}

const HEADING_CLASSNAME = "text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground"

function renderHighlighted(text: string, highlightWords: string[]) {
  const targets = new Set(highlightWords.map((word) => word.toLowerCase()))

  return text.split(/(\s+)/).map((token, index) => {
    const key = token.replace(/[^a-zA-Z0-9']/g, "").toLowerCase()
    return (
      <span key={index} className={targets.has(key) ? "text-primary" : undefined}>
        {token}
      </span>
    )
  })
}

export function SectionHeading({ icon: Icon, eyebrow, heading, align = "left", highlightWords }: SectionHeadingProps) {
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
      {highlightWords ? (
        <h2 className={cn(HEADING_CLASSNAME, centered && "text-center")}>
          {renderHighlighted(heading, highlightWords)}
        </h2>
      ) : (
        <SplitText tag="h2" text={heading} textAlign={align} className={HEADING_CLASSNAME} />
      )}
    </div>
  )
}
