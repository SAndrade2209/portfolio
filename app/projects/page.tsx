import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/app/data/projects";
import type { Project } from "@/app/data/projects";
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={project.href}
      className="group grid grid-cols-1 gap-6 rounded-2xl border border-(--border) bg-(--surface) p-6 transition-shadow hover:shadow-md sm:grid-cols-[200px_1fr]"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-(--surface-strong)">
        <Image
          src={project.iconImage}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 200px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold tracking-[0.18em] text-(--muted) uppercase">
            {String(index + 1).padStart(2, "0")} &middot; {project.kicker}
          </p>
          <h2 className="text-xl font-semibold text-foreground leading-snug">
            {project.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-(--muted)">
            {project.summary}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-(--border) px-3 py-1 text-sm text-(--muted)">
                {tag}
              </span>
            ))}
          </div>
          <span className="text-base font-medium text-foreground group-hover:underline underline-offset-2">
            View project &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
export default function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12">
        <SiteHeader active="/projects" />
        <section className="mb-14 pt-4">
          <p className="mb-4 text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase">Work</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">Projects</h1>
          <p className="mt-3 text-lg text-(--muted)">Independent work in data engineering and AI systems.</p>
        </section>
        <div className="flex flex-col gap-5">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Contact */}
        <section className="border-t border-(--border) mt-16 pt-10 pb-16">
          <p className="text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">Contact</p>
          <div className="flex flex-col gap-2 text-base text-(--foreground)/80">
            <a href="mailto:selene.andradelopez@gmail.com" className="hover:text-foreground transition-colors w-fit">
              selene.andradelopez@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/selene-andrade-a23367163/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors w-fit">
              linkedin.com/in/selene-andrade-a23367163 ↗
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
