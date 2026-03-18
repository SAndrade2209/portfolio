import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";
export default function SummarizationProject() {
  const project = getProject("summarization");
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12">
        <SiteHeader active="/projects" />
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl bg-(--surface-strong)">
          <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
        </div>
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase">{project.kicker}</p>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">{project.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-(--muted)">{project.longSummary}</p>
          <div className="mt-6 flex flex-wrap gap-6 border-t border-(--border) pt-5 text-base text-(--muted)">
            <div>
              <p className="mb-0.5 text-sm font-semibold uppercase tracking-widest">Role</p>
              <p className="text-base">{project.role}</p>
            </div>
            <div>
              <p className="mb-0.5 text-sm font-semibold uppercase tracking-widest">Period</p>
              <p className="text-base">{project.period}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-start">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full border border-(--border) px-3 py-1 text-sm">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <section className="mb-10">
          <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase">What I built</p>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-base leading-relaxed text-(--foreground)/80">
                <span className="mt-0.5 shrink-0 text-(--accent)">&#9670;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-10">
          <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase">Pipeline</p>
          <div className="flex flex-col gap-2 text-base">
            {["PDF documents ingested in batches","Chunking + vector store indexing","Batch summarisation (LLM)","Evaluation — accuracy, completeness, tone","Correction loop (LLM iterative refinement)","Combination into final structured report","Final evaluation + selection"].map((step, i) => (
              <div key={step} className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-2.5">
                <span className="shrink-0 text-xs font-semibold text-(--muted) w-5">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-(--foreground)/80">{step}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12 rounded-2xl border border-(--border) bg-(--surface) px-6 py-5">
          <p className="mb-2 text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase">Outcome</p>
          <p className="text-base leading-relaxed text-(--foreground)/80 whitespace-pre-line">{project.outcome}</p>
        </section>
        <div className="flex items-center gap-5 border-t border-(--border) pt-8 pb-10 text-base">
          <Link href="/projects" className="text-(--muted) hover:text-foreground transition-colors">← All projects</Link>
        </div>

        {/* Contact */}
        <section className="border-t border-(--border) pt-10 pb-16">
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
