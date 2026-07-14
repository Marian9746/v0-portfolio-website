"use client"

import { useState } from "react"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { FileText, Menu, X } from "lucide-react"
import { navigationItems, profileData } from "@/lib/profile-data"
import { useActiveSection } from "@/hooks/use-active-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const SCROLL_RANGE = [0, 80]

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { personal } = profileData
  const activeId = useActiveSection(navigationItems.map((item) => item.id))

  const { scrollY } = useScroll()
  const maxWidth = useTransform(scrollY, SCROLL_RANGE, [1152, 860])
  const paddingX = useTransform(scrollY, SCROLL_RANGE, [24, 16])
  const paddingY = useTransform(scrollY, SCROLL_RANGE, [18, 10])
  const glassOpacity = useTransform(scrollY, SCROLL_RANGE, [0, 1])

  const cvMailto = `mailto:${personal.email}?subject=CV Request&body=Hi Marian,%0D%0A%0D%0AI would like to request your CV for review.%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards`

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6">
      <motion.nav
        style={{ maxWidth, paddingLeft: paddingX, paddingRight: paddingX, paddingTop: paddingY, paddingBottom: paddingY }}
        className="relative mx-auto flex items-center justify-between gap-4 rounded-full"
      >
        <motion.div
          aria-hidden
          style={{ opacity: glassOpacity }}
          className="absolute inset-0 -z-10 rounded-full bg-background/80 backdrop-blur-xl border border-border shadow-lg shadow-black/5"
        />

        <a href="#hero" className="font-semibold text-foreground tracking-tight shrink-0">
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
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden max-w-5xl mx-auto mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-lg"
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
