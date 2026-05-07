import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";

export default function ScientificRAG() {
  const project = getProject("scientific-rag");
  const github = project.github;
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">
        <SiteHeader active="/projects" />

        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-surface-strong">
          <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 1060px" quality={90} className="object-cover" priority />
        </div>

        <div className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">{project.kicker}</p>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 shrink-0 rounded-full border border-border bg-surface px-5 py-2 text-[13px] font-medium text-muted transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 16 16" className="size-4 fill-current" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
          <h1 className="text-[2rem] font-bold leading-snug tracking-[-0.02em] text-primary md:text-[2.5rem]">{project.title}</h1>
          <p className="mt-5 text-[16px] leading-[1.8] text-justify text-foreground/55">{project.longSummary}</p>
          <div className="mt-8 flex flex-wrap gap-8 border-t border-border pt-6 text-[13px] text-muted">
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60">Role</p>
              <p className="text-foreground/65">{project.role}</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/60">Period</p>
              <p className="text-foreground/65">{project.period}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/6 px-3 py-1 text-[11px] font-medium text-primary/70">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-14">
          <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">What I built</p>
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
          <p className="mb-6 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Pipeline</p>
          <div className="flex flex-col gap-2.5">
            {["User Query","Guardrail layer","Query expansion (multi-query)","Hybrid retrieval — dense + BM25 (Qdrant)","Cross-encoder reranking","LLM generation with conversational memory"].map((step, i) => (
              <div key={step} className="flex items-center gap-4 rounded-xl border border-border bg-surface px-6 py-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[14px] text-foreground/60">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-border bg-surface px-8 py-6">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Outcome</p>
          <p className="text-[14px] leading-[1.8] text-justify text-foreground/60">{project.outcome}</p>
        </section>

        <div className="flex items-center border-t border-border pt-10 pb-12">
          <Link href="/projects" className="text-[13px] text-muted/60 hover:text-primary transition-colors font-medium">← All projects</Link>
        </div>

        <section className="border-t border-border pt-20 pb-24">
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
