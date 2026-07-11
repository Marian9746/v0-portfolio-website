import { profileData } from "@/lib/profile-data"

export function Footer() {
  const { personal } = profileData

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <span>{personal.name}</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
