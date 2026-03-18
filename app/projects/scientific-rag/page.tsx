import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";
export default function ScientificRAG() {
  const project = getProject("scientific-rag");
  const github = project.github;
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12">
        <SiteHeader active="/projects" />
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl bg-(--surface-strong)">
          <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
        </div>
        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-3">
            <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">{project.kicker}</p>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 shrink-0 rounded-full border border-(--border) px-5 py-2 text-sm font-medium text-(--muted) hover:text-foreground hover:border-foreground/30 transition-colors"
                aria-label="GitHub repository"
              >
                <svg viewBox="0 0 16 16" className="size-6 fill-current" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">{project.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-(--muted)">{project.longSummary}</p>
          <div className="mt-6 flex flex-wrap gap-6 border-t border-(--border) pt-5 text-sm text-(--muted)">
            <div>
              <p className="mb-0.5 font-semibold uppercase tracking-widest text-[15px]">Role</p>
              <p className="text-sm">{project.role}</p>
            </div>
            <div>
              <p className="mb-0.5 font-semibold uppercase tracking-widest text-[15px]">Period</p>
              <p className="text-sm">{project.period}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full border border-(--border) px-3 py-1 text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <section className="mb-10">
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">What I built</p>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm leading-relaxed text-(--foreground)/80">
                <span className="mt-0.5 shrink-0 text-(--accent)">&#9670;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-10">
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">Pipeline</p>
          <div className="flex flex-col gap-2 text-sm">
            {["User Query","Guardrail layer","Query expansion (multi-query)","Hybrid retrieval — dense + BM25 (Qdrant)","Cross-encoder reranking","LLM generation with conversational memory"].map((step, i) => (
              <div key={step} className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-2.5">
                <span className="shrink-0 text-[10px] font-semibold text-(--muted) w-5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-(--foreground)/80">{step}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12 rounded-2xl border border-(--border) bg-(--surface) px-6 py-5">
          <p className="mb-2 text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">Outcome</p>
          <p className="text-sm leading-relaxed text-(--foreground)/80">{project.outcome}</p>
        </section>
        <div className="flex items-center gap-5 border-t border-(--border) pt-8 pb-10 text-sm">
          <Link href="/projects" className="text-(--muted) hover:text-foreground transition-colors">← All projects</Link>
        </div>

        {/* Contact */}
        <section className="border-t border-(--border) pt-10 pb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">Contact</p>
          <div className="flex flex-col gap-2 text-sm text-(--foreground)/80">
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
