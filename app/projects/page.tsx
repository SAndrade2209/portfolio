import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/app/data/projects";
import { FadeIn } from "@/components/FadeIn";
import type { Project, ProjectCategory } from "@/app/data/projects";

const categoryMeta: Record<ProjectCategory, { label: string; color: string; description: string }> = {
  "data-engineering": {
    label: "Data Engineering",
    color: "#7DC4AE",
    description: "Production pipelines, lakehouse architectures, and orchestration systems.",
  },
  "ai": {
    label: "AI Systems",
    color: "#C49A70",
    description: "LLM pipelines, retrieval-augmented generation, and document intelligence.",
  },
  "research": {
    label: "Research",
    color: "#B5705A",
    description: "Applied ML research with peer-reviewed publications.",
  },
};

const categoryOrder: ProjectCategory[] = ["data-engineering", "ai", "research"];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const cat = categoryMeta[project.category];
  return (
    <Link
      href={project.href}
      style={{ borderLeftColor: cat.color, animationDelay: `${index * 70}ms` }}
      className="project-row animate-fade-in-up group flex items-start gap-5 rounded-xl border border-border bg-surface p-5 hover:bg-surface-strong overflow-hidden"
    >
      <span className="shrink-0 text-[11px] font-mono text-muted/40 pt-0.5 w-5 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <h2 className="text-[15px] font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
          {project.shortTitle}
        </h2>
        <p className="text-[13px] text-muted/70 leading-relaxed line-clamp-2 mb-3">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-muted/60">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-muted/30 group-hover:text-primary transition-colors mt-1">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
      </svg>
    </Link>
  );
}

export default function Projects() {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    meta: categoryMeta[cat],
    projects: featuredProjects.filter((p) => p.category === cat),
  })).filter((g) => g.projects.length > 0);

  let globalIndex = 0;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1100px] px-8 py-0 md:px-20">
        <SiteHeader active="/projects" />

        <FadeIn>
          <section className="mb-16">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase mb-5">
              / projects
            </p>
            <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] text-foreground mb-3">
              All Projects
            </h1>
            <p className="text-[15px] text-muted">Independent work in data engineering, AI systems, and research.</p>
          </section>
        </FadeIn>

        {grouped.map(({ cat, meta, projects }) => (
          <FadeIn key={cat}>
            <section className="mb-16">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  style={{ color: meta.color, borderColor: `${meta.color}35`, backgroundColor: `${meta.color}10` }}
                  className="rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase"
                >
                  {meta.label}
                </span>
                <p className="text-[13px] text-muted/60">{meta.description}</p>
              </div>

              <div className="flex flex-col gap-3">
                {projects.map((project) => {
                  const idx = globalIndex++;
                  return <ProjectRow key={project.slug} project={project} index={idx} />;
                })}
              </div>
            </section>
          </FadeIn>
        ))}

        <FadeIn>
          <section className="border-t border-border pt-14 pb-20">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase mb-7">
              / get in touch
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:selene.andradelopez@gmail.com" className="text-[13px] text-muted hover:text-primary transition-colors">
                selene.andradelopez@gmail.com →
              </a>
              <a href="https://www.linkedin.com/in/selene-andrade-a23367163/" target="_blank" rel="noreferrer" className="text-[13px] text-muted hover:text-primary transition-colors">
                LinkedIn →
              </a>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
