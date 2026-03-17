import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";

export default function SummarizationProject() {
  const project = getProject("summarization");

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl px-5 py-8 md:px-8">

        <SiteHeader active="/projects" />

        {/* Hero image */}
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl bg-[var(--surface-strong)]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        {/* Title block */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
            {project.kicker}
          </p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] max-w-xl">
            {project.longSummary}
          </p>

          {/* Metadata strip */}
          <div className="mt-6 flex flex-wrap gap-6 border-t border-[var(--border)] pt-5 text-xs text-[var(--muted)]">
            <div>
              <p className="mb-0.5 font-semibold uppercase tracking-widest text-[10px]">Role</p>
              <p>{project.role}</p>
            </div>
            <div>
              <p className="mb-0.5 font-semibold uppercase tracking-widest text-[10px]">Period</p>
              <p>{project.period}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What I built */}
        <section className="mb-10">
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
            What I built
          </p>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-relaxed text-[var(--foreground)]/80">
                <span className="mt-0.5 shrink-0 text-[var(--accent)]">◆</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Pipeline */}
        <section className="mb-10">
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
            Pipeline
          </p>
          <div className="flex flex-col gap-2 text-sm">
            {[
              "PDF documents ingested in batches",
              "Chunking + vector store indexing",
              "Batch summarisation (LLM)",
              "Evaluation — accuracy, completeness, tone",
              "Correction loop (LLM iterative refinement)",
              "Combination into final structured report",
              "Final evaluation + selection",
            ].map((step, i) => (
              <div key={step} className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5">
                <span className="shrink-0 text-[10px] font-semibold text-[var(--muted)] w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[var(--foreground)]/80">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-5">
          <p className="mb-2 text-[10px] font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">Outcome</p>
          <p className="text-sm leading-relaxed text-[var(--foreground)]/80">{project.outcome}</p>
        </section>

        {/* Footer nav */}
        <div className="flex items-center gap-5 border-t border-[var(--border)] pt-8 pb-16 text-sm">
          <Link href="/projects" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
            ← All projects
          </Link>
        </div>

      </div>
    </main>
  );
}