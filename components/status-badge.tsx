"use client"

export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 dark:bg-green-950/30 dark:border-green-800">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-sm font-medium text-green-700 dark:text-green-400">
        Open to Opportunities
      </span>
    </div>
  )
}
