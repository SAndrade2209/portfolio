import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/app/data/projects";
import type { Project } from "@/app/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={project.href}
      className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-strong mb-5">
        <Image
          src={project.iconImage}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <p className="mb-2.5 text-[10px] font-semibold tracking-[0.18em] text-secondary/60 uppercase">
        {String(index + 1).padStart(2, "0")} · {project.kicker}
      </p>
      <h2 className="text-[15px] font-semibold text-primary leading-snug mb-2">
        {project.shortTitle}
      </h2>
      <p className="text-[13px] leading-relaxed text-foreground/45 line-clamp-3 mb-5">
        {project.summary}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5 mb-4">
        {project.stack.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-full bg-primary/6 px-2.5 py-0.5 text-[11px] font-medium text-primary/70">
            {tag}
          </span>
        ))}
      </div>
      <span className="text-[13px] font-medium text-secondary/70 group-hover:text-primary transition-colors">
        View project →
      </span>
    </Link>
  );
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">
        <SiteHeader active="/projects" />

        <section className="mb-14 pt-4">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Work</p>
          <h1 className="text-[2.25rem] font-bold leading-tight tracking-[-0.02em] text-primary">Projects</h1>
          <p className="mt-3 text-[15px] text-foreground/50">Independent work in data engineering and AI systems.</p>
        </section>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Contact */}
        <section className="border-t border-border mt-28 pt-20 pb-24">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-8">Get in touch</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:selene.andradelopez@gmail.com" className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5">
              selene.andradelopez@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/selene-andrade-a23367163/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
