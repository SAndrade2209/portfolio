import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";

export default function AlbumCovers() {
  const project = getProject("album-covers");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">
        <SiteHeader active="/projects" />

        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-surface-strong">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 1060px"
            quality={90}
            className="object-contain"
            priority
          />
        </div>

        <div className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">
              {project.kicker}
            </p>
            <a
              href="https://zenodo.org/records/15839739"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 shrink-0 rounded-full border border-border bg-surface px-5 py-2 text-[13px] font-medium text-muted transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Paper
            </a>
          </div>
          <h1 className="text-[2rem] font-bold leading-snug tracking-[-0.02em] text-primary md:text-[2.5rem]">
            {project.title}
          </h1>
          <p className="mt-5 text-[16px] leading-[1.8] text-justify text-foreground/55 whitespace-pre-line">
            {project.longSummary}
          </p>
          <div className="mt-8 flex flex-wrap gap-8 border-t border-border pt-6 text-[13px] text-muted">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60">
                Role
              </p>
              <p className="text-foreground/65">{project.role}</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60">
                Period
              </p>
              <p className="text-foreground/65">{project.period}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/6 px-3 py-1 text-[11px] font-medium text-primary/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-14">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">
            What I built
          </p>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3.5 rounded-xl border border-border bg-surface px-6 py-4 text-[14px] leading-relaxed text-foreground/60">
                <span className="mt-0.5 shrink-0 text-secondary/50">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">
            Pipeline
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              "Dataset collection — 3,000+ Billboard album covers with genre metadata",
              "Image captioning — BLIP generates natural language descriptions per cover",
              "Object candidate extraction — parse captions into candidate object labels",
              "Zero-shot detection — Grounding DINO locates objects without task-specific training",
              "Aggregation & analysis — object frequencies analysed across genres and artists",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-4 rounded-xl border border-border bg-surface px-6 py-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14px] text-foreground/60">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-border bg-surface px-8 py-6">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">
            Outcome
          </p>
          <p className="text-[14px] leading-[1.8] text-justify text-foreground/60 whitespace-pre-line">
            {project.outcome}
          </p>
        </section>

        <div className="flex items-center border-t border-border pt-10 pb-12">
          <Link
            href="/projects"
            className="text-[13px] text-muted/60 hover:text-primary transition-colors font-medium"
          >
            ← All projects
          </Link>
        </div>

        <section className="border-t border-border pt-20 pb-24">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-8">
            Get in touch
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:selene.andradelopez@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
            >
              selene.andradelopez@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/selene-andrade-a23367163/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
