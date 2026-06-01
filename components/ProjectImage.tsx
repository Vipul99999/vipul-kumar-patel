'use client'

import { useState } from 'react'
import { Code2 } from 'lucide-react'

interface ProjectImageProps {
  image?: string
  title: string
  category: string
}

export function ProjectImage({
  image,
  title,
  category,
}: ProjectImageProps) {
  const [error, setError] = useState(false)

  const showFallback = !image || error

  if (showFallback) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-accent/20 via-accent/5 to-background">
        {/* Animated Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-accent/20 blur-3xl animate-pulse" />

          <div
            className="absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-accent/10 blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(to right,currentColor 1px,transparent 1px),linear-gradient(to bottom,currentColor 1px,transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-center items-center text-center p-6">
          <div className="mb-4 rounded-2xl bg-accent/10 p-4">
            <Code2 className="h-10 w-10 text-accent" />
          </div>

          <h3 className="font-bold text-lg text-foreground mb-2">
            {title}
          </h3>

          <span className="text-sm text-muted-foreground capitalize">
            {category}
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={title}
      onError={() => setError(true)}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
  )
}