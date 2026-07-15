import { cn } from "@/lib/utils"

export function SectionDivider({ className }: { className?: string }) {
  return <div aria-hidden className={cn("h-px w-10 bg-gradient-to-r from-border to-transparent", className)} />
}
