"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Award, ChevronDown, ExternalLink, ShieldCheck } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { cn } from "@/lib/utils"

export function CertificationsTrustCard() {
  const [open, setOpen] = useState(false)
  const { certifications, personal } = profileData
  const togaf = certifications.find((cert) => cert.name.toLowerCase().includes("togaf"))

  return (
    <div
      className={cn(
        "rounded-2xl border bg-gradient-to-br from-primary/5 via-card to-card overflow-hidden transition-colors duration-300",
        open ? "border-primary/40" : "border-border/50 hover:border-primary/40",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 p-4 text-left"
      >
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center bg-primary/10 rounded-lg shrink-0">
              <ShieldCheck className="w-4 h-4 text-primary" />
            </div>
            <span className="font-sans text-3xl font-black tracking-tight text-primary">{certifications.length}</span>
            <span className="font-sans text-xs font-medium uppercase tracking-wide text-muted-foreground leading-tight">
              Professional
              <br />
              Certifications
            </span>
          </div>

          {togaf && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              <Award className="w-3.5 h-3.5" />
              TOGAF® Certified
            </span>
          )}
        </div>

        <ChevronDown
          className={cn(
            "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-3 space-y-1 border-t border-border/50">
              {certifications.map((cert, index) => {
                const certUrl = cert.credlyUrl || cert.certificateUrl
                return (
                  <a
                    key={index}
                    href={certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/60 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-md shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-foreground leading-snug">{cert.name}</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </a>
                )
              })}

              <a
                href={personal.credly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-all duration-200 hover:bg-primary/90 hover:scale-[1.03] hover:shadow-md active:scale-[0.98]"
              >
                <span>Credly Profile</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
