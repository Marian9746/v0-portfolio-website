"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FileText, Menu, X } from "lucide-react"
import { navigationItems, profileData } from "@/lib/profile-data"
import { useActiveSection } from "@/hooks/use-active-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { personal } = profileData
  const activeId = useActiveSection(navigationItems.map((item) => item.id))

  const cvMailto = `mailto:${personal.email}?subject=CV Request&body=Hi Marian,%0D%0A%0D%0AI would like to request your CV for review.%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards`

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold text-foreground tracking-tight">
          {personal.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                activeId === item.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground font-light",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a
            href={cvMailto}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 hover:scale-[1.03] hover:shadow-md active:scale-[0.98] text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Request CV</span>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2 text-sm rounded-md transition-colors",
                    activeId === item.id
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={cvMailto}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 mt-2 px-3 py-2 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-200 hover:bg-primary/90 active:scale-[0.98] text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Request my CV</span>
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
