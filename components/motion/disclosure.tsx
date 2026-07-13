"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface DisclosureProps {
  label: string
  items: string[]
  icon: LucideIcon
}

export function Disclosure({ label, items, icon: Icon }: DisclosureProps) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform duration-200", open && "rotate-180")}
        />
        {label} ({items.length})
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden space-y-1.5 mt-2"
          >
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
