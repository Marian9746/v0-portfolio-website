"use client"

import { useEffect, useState } from "react"
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

  const cvUrl = "/cv/CV_MarianDiazRomero_Engineer.pdf"

  // Native anchor hash-navigation gets cancelled if the menu's close
  // re-render happens in the same or an overlapping task, so we take over
  // the scroll ourselves: close the menu first, then scroll once its exit
  // animation has finished.
  const handleNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 250)
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
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
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:bg-primary/90 hover:scale-[1.03] hover:shadow-md active:scale-[0.98] text-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative z-50 w-9 h-9 flex items-center justify-center rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-7"
          >
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick(item.id)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.3, ease: "easeOut" }}
                className={cn(
                  "text-2xl font-semibold transition-colors",
                  activeId === item.id ? "text-primary" : "text-foreground hover:text-primary",
                )}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * navigationItems.length, duration: 0.3, ease: "easeOut" }}
              className="flex items-center gap-2 mt-3 px-5 py-3 bg-primary text-primary-foreground font-medium rounded-full transition-all duration-200 hover:bg-primary/90 active:scale-[0.98] text-base"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
