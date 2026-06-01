'use client'

import {
  Database,
  BrainCircuit,
  LayoutDashboard,
  Code2,
} from 'lucide-react'

interface ProjectVisualProps {
  title: string
  category: string
  tech: string[]
}

export function ProjectVisual({
  title,
  category,
  tech,
}: ProjectVisualProps) {
  const renderBackground = () => {
    switch (category) {
      case 'backend':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent" />

            <div className="absolute inset-0 opacity-20">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(59,130,246,.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(59,130,246,.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '22px 22px',
                }}
              />
            </div>

            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
          </>
        )

      case 'full-stack':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="space-y-3">
                <div className="h-4 w-32 rounded bg-violet-400" />
                <div className="h-4 w-48 rounded bg-violet-400" />
                <div className="h-4 w-24 rounded bg-violet-400" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-violet-500/10 to-transparent" />
          </>
        )

      case 'ai':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-fuchsia-500/15 to-blue-500/15 animate-pulse" />

            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 400 200"
            >
              <circle cx="100" cy="50" r="5" fill="currentColor" />
              <circle cx="200" cy="100" r="5" fill="currentColor" />
              <circle cx="300" cy="50" r="5" fill="currentColor" />
              <circle cx="150" cy="150" r="5" fill="currentColor" />
              <circle cx="250" cy="150" r="5" fill="currentColor" />

              <line
                x1="100"
                y1="50"
                x2="200"
                y2="100"
                stroke="currentColor"
              />
              <line
                x1="200"
                y1="100"
                x2="300"
                y2="50"
                stroke="currentColor"
              />
              <line
                x1="200"
                y1="100"
                x2="150"
                y2="150"
                stroke="currentColor"
              />
              <line
                x1="200"
                y1="100"
                x2="250"
                y2="150"
                stroke="currentColor"
              />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse" />
          </>
        )

      default:
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-pink-500/10 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 w-24 rounded-xl border border-current" />
                <div className="h-16 w-24 rounded-xl border border-current" />
                <div className="h-16 w-24 rounded-xl border border-current" />
                <div className="h-16 w-24 rounded-xl border border-current" />
              </div>
            </div>
          </>
        )
    }
  }

  const getIcon = () => {
    switch (category) {
      case 'backend':
        return <Database className="w-10 h-10 text-blue-400" />

      case 'full-stack':
        return <Code2 className="w-10 h-10 text-violet-400" />

      case 'ai':
        return <BrainCircuit className="w-10 h-10 text-cyan-400" />

      default:
        return <LayoutDashboard className="w-10 h-10 text-orange-400" />
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {renderBackground()}

      <div className="relative z-10 flex h-full flex-col justify-between p-5">
        <div className="flex justify-between items-start">
          {getIcon()}

          <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs capitalize backdrop-blur">
            {category}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-foreground mb-3">
            {title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-background/70 px-2 py-1 text-xs backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}