"use client"

import { useState } from "react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { ChevronDown, ExternalLink, FolderGit2, Github, Linkedin } from "lucide-react"
import { profileData } from "@/lib/profile-data"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const linkIcons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  external: ExternalLink,
}

type Project = (typeof profileData)["projects"][number]

// Longer/heavier tag rows eat more vertical space, so cards with denser tag
// lists get a shorter description clamp to keep every card the same height
// when collapsed — without ever hiding a tag.
const TAG_CHARS_PER_LINE_LOST = 65

function ProjectCard({ project, personal }: { project: Project; personal: (typeof profileData)["personal"] }) {
  const [expanded, setExpanded] = useState(false)

  const link = project.link
  const Icon = link ? (linkIcons[link.type] ?? ExternalLink) : null
  const url = link ? (link.url ?? (link.type === "linkedin" ? personal.linkedin : personal.github)) : null

  const tagChars = project.tech.reduce((sum, tag) => sum + tag.length, 0)
  const descriptionLines = Math.max(2, 4 - Math.floor(tagChars / TAG_CHARS_PER_LINE_LOST))

  return (
    <RevealItem className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors duration-300 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-semibold text-card-foreground line-clamp-2 min-h-[2.75rem]">{project.name}</h3>

        <div className="space-y-1.5">
          <p
            className={cn(
              "text-sm text-muted-foreground leading-relaxed",
              !expanded &&
                (descriptionLines === 4 ? "line-clamp-4" : descriptionLines === 3 ? "line-clamp-3" : "line-clamp-2"),
            )}
          >
            {project.description}
          </p>
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", expanded && "rotate-180")} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {project.tech.map((tech) => (
            <span key={tech} className="px-2.5 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>

        {link && Icon && url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon className="w-4 h-4" />
            {link.label}
          </a>
        )}
      </div>
    </RevealItem>
  )
}

export function ProjectsSection() {
  const { projects, personal } = profileData

  return (
    <section id="projects" className="scroll-mt-24 py-14 sm:py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <Reveal className="space-y-3">
          <SectionHeading icon={FolderGit2} eyebrow="Projects" heading="Selected Work" />
          <p className="text-muted-foreground max-w-xl text-sm">
            A few representative projects. More details and case studies coming soon.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} personal={personal} />
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
