import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/app/data/projects";
import { ProfileTabs } from "@/components/ProfileTabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">

        <SiteHeader active="/" />

        {/* ── Hero ── */}
        <section className="mb-14 pt-8">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">

            {/* Left — text */}
            <div className="flex-1 max-w-2xl">
              <p className="mb-5 text-[13px] font-medium tracking-[0.18em] text-secondary/80 uppercase">
                Data Engineer · AI Systems
              </p>
              <h1 className="text-[2.75rem] font-bold leading-[1.08] tracking-[-0.025em] text-primary md:text-[3.25rem]">
                Hi! I'm Selene. I build Data systems
                <br className="hidden sm:block" />
                that drive decisions
              </h1>
              <p className="mt-6 text-[17px] leading-[1.75] text-foreground/55 max-w-lg">
                Scalable pipelines, lakehouse architectures, and retrieval-augmented
                generation systems — engineered for reliability and impact.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3 text-[13px] font-medium text-white shadow-[0_2px_8px_rgba(30,58,95,0.25)] transition-all hover:shadow-[0_4px_16px_rgba(30,58,95,0.3)] hover:-translate-y-0.5"
                >
                  View Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
                <a
                  href="https://github.com/SAndrade2209"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 text-[13px] font-medium text-muted shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14" className="fill-current" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="/cv_andrade.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3 text-[13px] font-medium text-muted shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  CV
                </a>
              </div>
            </div>

            {/* Right — pipeline visual + terminal */}
            <div className="flex flex-col gap-5 w-full max-w-xs shrink-0">

              {/* Pipeline flow */}
              <div className="rounded-2xl border border-border bg-surface p-6">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-muted/50 uppercase mb-4">Pipeline</p>
                <div className="flex flex-col gap-3">
                  {["Data Sources", "Airflow", "PySpark", "Delta Lake", "Analytics"].map((step, i) => (
                    <div key={step} className="flex items-center gap-3.5">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold text-primary/70">{i + 1}</span>
                      <span className="text-[13px] font-medium text-foreground/80">{step}</span>
                      {i < 4 && <span className="ml-auto text-border text-sm">↓</span>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal box */}
              <div className="rounded-2xl bg-[#1a2332] p-5 font-mono">
                <div className="flex items-center gap-1.5 mb-3.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex flex-col gap-1.5 text-[12px] leading-relaxed">
                  <p className="text-white/30">&gt; loading projects...</p>
                  <p className="text-[#28c840]/80">✔ pipelines optimized</p>
                  <p className="text-[#28c840]/80">✔ data quality improved</p>
                  <p className="text-[#28c840]/80">✔ insights delivered</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-8">
            About
          </p>
          <div className="flex flex-col gap-5 text-[15px] leading-[1.85] text-foreground/60">
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
              design or applied AI systems. Currently open to freelance
              work involving scalable pipelines, data platforms, or retrieval
              systems.
            </p>
          </div>
        </section>

        {/* ── Background (Tabs) ── */}
        <section className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-8">
            Background
          </p>
          <ProfileTabs />
        </section>

        {/* ── Selected Work ── */}
        <section className="mb-8">
          <div className="flex items-baseline justify-between mb-7">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">
              Selected work
            </p>
            <Link href="/projects" className="text-[13px] text-muted/60 hover:text-primary transition-colors font-medium">
              All projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.slug}
                href={project.href}
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-surface-strong mb-5">
                  <Image
                    src={project.iconImage}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Meta */}
                <p className="mb-2.5 text-[10px] font-semibold tracking-[0.18em] text-secondary/60 uppercase">
                  {String(i + 1).padStart(2, "0")} · {project.kicker}
                </p>
                <h2 className="text-[15px] font-semibold leading-snug text-primary mb-2">
                  {project.shortTitle}
                </h2>
                <p className="text-[13px] leading-relaxed text-foreground/45 line-clamp-3 mb-5">
                  {project.summary}
                </p>

                {/* Tags */}
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
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="border-t border-border pt-14 pb-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-8">
            Get in touch
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:selene.andradelopez@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              selene.andradelopez@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/selene-andrade-a23367163/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="opacity-50"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}

