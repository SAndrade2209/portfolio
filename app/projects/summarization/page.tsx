import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";

export default function SummarizationProject() {
  const project = getProject("summarization");
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">
        <SiteHeader active="/projects" />

        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-surface-strong">
          <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 1060px" quality={90} className="object-contain" priority />
        </div>

        <div className="mb-16">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">{project.kicker}</p>
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
            {["PDF documents ingested in batches","Chunking + vector store indexing","Batch summarisation (LLM)","Evaluation — accuracy, completeness, tone","Correction loop (LLM iterative refinement)","Combination into final structured report","Final evaluation + selection"].map((step, i) => (
              <div key={step} className="flex items-center gap-4 rounded-xl border border-border bg-surface px-6 py-3.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[14px] text-foreground/60">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-border bg-surface px-8 py-6">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Outcome</p>
          <p className="text-[14px] leading-[1.8] text-justify text-foreground/60 whitespace-pre-line">{project.outcome}</p>
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
