"use client";

import { useState } from "react";
import { Eye, Github } from "lucide-react";

import { portfolioData } from "@/lib/portfolio-data";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectImage } from "@/components/ProjectImage";

interface PortfolioSectionProps {
  data?: typeof portfolioData;
}

export function PortfolioSection({
  data = portfolioData,
}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? data.projects
      : data.projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Portfolio
        </h2>

        <div className="w-10 h-1 bg-accent rounded-full mb-6" />

        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          A collection of AI-powered products, scalable backend systems,
          full-stack applications, developer tools, and production-focused
          software projects built to solve real-world problems.
        </p>

        <p className="mt-3 text-sm text-accent font-medium">
          {data.projects.length}+ Featured Projects
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 md:gap-3">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition-all duration-200 ${
              activeFilter === category
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
          >
            {/* Project Preview */}
            <div className="relative aspect-[16/10] overflow-hidden bg-background">
              {project.image ? (
                <ProjectImage
                  image={project.image}
                  title={project.title}
                  category={project.category}
                />
              ) : (
                <ProjectVisual
                  title={project.title}
                  category={project.category}
                  tech={project.tech}
                />
              )}

              {/* Category */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-medium bg-background/90 backdrop-blur-sm border border-border capitalize">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} source code`}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="rounded-2xl border border-border bg-secondary p-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No projects found
          </h3>

          <p className="text-muted-foreground">
            Try selecting another category.
          </p>
        </div>
      )}
    </div>
  );
}