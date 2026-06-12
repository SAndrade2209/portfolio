import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/app/data/projects";
import { ProfileTabs } from "@/components/ProfileTabs";
import { ChatNudge } from "@/components/ChatNudge";
import { FadeIn } from "@/components/FadeIn";
import type { ProjectCategory } from "@/app/data/projects";

const selectedProjects = featuredProjects.filter((p) =>
  ["paysim-fraud", "summarization", "scientific-rag"].includes(p.slug)
);

const categoryMeta: Record<ProjectCategory, { label: string; color: string }> = {
  "data-engineering": { label: "Data Engineering", color: "#7DC4AE" },
  "ai":              { label: "AI Systems",        color: "#C49A70" },
  "research":        { label: "Research",           color: "#B5705A" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1100px] px-8 py-0 md:px-20">

        <SiteHeader active="/" />

        {/* ── Hero ── */}
        <section className="mb-24">
          <h1 className="animate-fade-in-up delay-100 text-[2.6rem] font-bold leading-[1.2] text-foreground mb-5 tracking-[-0.02em]">
            hi, selene here.
          </h1>
          <p className="animate-fade-in-up delay-200 text-[17px] leading-[1.8] text-muted max-w-lg">
            Data Engineer &amp; AI Systems Engineer. I build production-grade data
            pipelines and RAG systems — optimized for reliability and scale.
          </p>
          <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap gap-6">
            <a
              href="mailto:selene.andradelopez@gmail.com"
              className="text-[13px] text-primary hover:opacity-75 transition-opacity"
            >
              Say hi! →
            </a>
            <a
              href="https://github.com/SAndrade2209"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-muted hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/selene-andrade-a23367163/"
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-muted hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/cv07052026.pdf"
              download
              className="text-[13px] text-muted hover:text-foreground transition-colors"
            >
              CV ↓
            </a>
          </div>
        </section>

        {/* ── About ── */}
        <FadeIn>
          <section className="mb-24">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase mb-7">
              / about me
            </p>
            <div className="flex flex-col gap-4 text-[15px] leading-[1.85] text-muted">
              <p>
                Data Engineer with experience building production-grade data
                pipelines using PySpark, Databricks, and AWS. I&apos;ve worked on
                large-scale ETL systems, focusing on performance, reliability,
                and cost efficiency.
              </p>
              <p>
                More recently, I&apos;ve been working on LLM-based systems —
                designing retrieval-augmented generation pipelines with hybrid
                search, reranking, and guardrails.
              </p>
              <p>
                I&apos;m particularly interested in projects that require robust data
                design or applied AI systems. Currently open to freelance work
                involving scalable pipelines, data platforms, or retrieval systems.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/60 uppercase mb-5">
                technologies
              </p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-8 max-w-sm">
                {[
                  "Python", "PySpark", "SQL", "AWS",
                  "Databricks", "Delta Lake", "Airflow", "dbt",
                  "LangChain", "RAG / LLMs",
                ].map((tech, i) => (
                  <li
                    key={tech}
                    style={{ animationDelay: `${i * 60}ms` }}
                    className="animate-slide-in-left flex items-center gap-2 text-[13px] text-muted"
                  >
                    <span className="text-primary text-[11px]">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeIn>

        {/* ── Chat nudge ── */}
        <FadeIn delay={100}>
          <ChatNudge />
        </FadeIn>

        {/* ── Experience ── */}
        <FadeIn>
          <section className="mb-24">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase mb-7">
              / experience
            </p>
            <ProfileTabs />
          </section>
        </FadeIn>

        {/* ── Selected Work ── */}
        <FadeIn>
          <section className="mb-24">
            <div className="flex items-center justify-between mb-8">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase">
                / projects
              </p>
              <Link href="/projects" className="text-[13px] text-muted hover:text-primary transition-colors">
                View all →
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {selectedProjects.map((project, i) => {
                const cat = categoryMeta[project.category];
                return (
                  <Link
                    key={project.slug}
                    href={project.href}
                    style={{ borderLeftColor: cat.color, animationDelay: `${i * 80}ms` }}
                    className="project-row animate-fade-in-up group flex items-start gap-5 rounded-xl border border-border bg-surface p-5 hover:bg-surface-strong overflow-hidden"
                  >
                    <span className="shrink-0 text-[11px] font-mono text-muted/40 pt-0.5 w-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          style={{ color: cat.color, borderColor: `${cat.color}40`, backgroundColor: `${cat.color}12` }}
                          className="rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-[0.12em] uppercase"
                        >
                          {cat.label}
                        </span>
                      </div>
                      <h2 className="text-[15px] font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {project.shortTitle}
                      </h2>
                      <p className="text-[13px] text-muted/70 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tag) => (
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
              })}
            </div>
          </section>
        </FadeIn>

        {/* ── Contact ── */}
        <FadeIn>
          <section className="border-t border-border pt-14 pb-20">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase mb-7">
              / get in touch
            </p>
            <p className="text-[15px] text-muted mb-7 max-w-sm leading-relaxed">
              Open to freelance work and interesting collaborations. Let&apos;s talk.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:selene.andradelopez@gmail.com"
                className="text-[13px] text-muted hover:text-primary transition-colors"
              >
                selene.andradelopez@gmail.com →
              </a>
              <a
                href="https://www.linkedin.com/in/selene-andrade-a23367163/"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-muted hover:text-primary transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}

