import { Mail, Github, Linkedin, Globe } from "lucide-react";

export function ContactSection() {
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Let's Connect
          </h2>

          <div className="w-10 h-1 bg-accent rounded-full mb-6" />

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm a Software Engineer focused on Backend Engineering,
            Full-Stack Development, Scalable Systems, and AI-powered
            applications.
          </p>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm currently open to remote opportunities, engineering
            collaborations, open-source projects, and discussions around
            backend architecture, distributed systems, and practical AI
            products.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent hover:-translate-y-1"
          >
            <Mail className="size-5 text-accent" />

            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium text-foreground">
                vipul20020308@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Vipul99999"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent hover:-translate-y-1"
          >
            <Github className="size-5 text-accent" />

            <div>
              <p className="text-sm text-muted-foreground">GitHub</p>
              <p className="font-medium text-foreground">
                github.com/Vipul99999
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/vipul-kumar-patel-90b1242b1"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent hover:-translate-y-1"
          >
            <Linkedin className="size-5 text-accent" />

            <div>
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="font-medium text-foreground">
                Connect Professionally
              </p>
            </div>
          </a>

          <a
            href="https://vipul99999.github.io/Vipul_Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent hover:-translate-y-1"
          >
            <Globe className="size-5 text-accent" />

            <div>
              <p className="text-sm text-muted-foreground">Portfolio</p>
              <p className="font-medium text-foreground">
                View Portfolio Website
              </p>
            </div>
          </a>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Looking for a Backend, Full-Stack, or AI Engineer?
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Feel free to reach out if you're hiring, building a startup,
            working on scalable systems, or exploring AI-powered products.
            I'm always interested in meaningful engineering challenges and
            opportunities to learn and contribute.
          </p>
        </div>
      </div>
    </section>
  );
}