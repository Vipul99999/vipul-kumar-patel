import { PenTool, Code, Smartphone, Zap, HelpCircle } from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data?.description?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      {/* Highlights */}
<div>
  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
    Highlights
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
    {data?.highlightsData.map((item, index) => (
      <div
        key={index}
        className="bg-secondary border border-border rounded-2xl p-6 text-center hover:border-accent hover:-translate-y-1 transition-all duration-300"
      >
        <h4 className="text-2xl md:text-4xl font-bold text-accent mb-2">
          {item.number}
        </h4>

        <p className="text-xs md:text-sm text-muted-foreground">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data?.services?.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || HelpCircle
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <IconComponent className="w-full h-full text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
{/* What I Focus On */}
{data?.engineeringFocus && data.engineeringFocus.length > 0 && (
  <div>
    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
      What I Focus On
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.engineeringFocus.map((focus, index) => (
        <div
          key={index}
          className="bg-secondary border border-border rounded-2xl p-5 md:p-6 hover:border-accent hover:-translate-y-1 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center font-bold text-accent">
              {focus.title.charAt(0)}
            </div>

            <h4 className="text-lg font-semibold text-foreground">
              {focus.title}
            </h4>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {focus.text}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

     {/* Core Technologies */}
{data?.technologies && data.technologies.length > 0 && (
  <div>
    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
      Core Technologies
    </h3>

    <div className="flex flex-wrap gap-3">
      {data.technologies.map((tech, index) => (
        <span
          key={index}
          className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground hover:border-accent transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)}
    </div>
  )
}