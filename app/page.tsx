import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/app/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12">

        <SiteHeader active="/" />

        {/* Hero */}
        <section className="mb-20 pt-4">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">
            Based in Valencia, Spain
          </p>
          <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Selene Andrade
          </h1>
          <p className="mt-4 text-xl text-(--muted) leading-snug">
            Data Engineer · MSc Artificial Intelligence ·{" "}
            <span className="text-(--accent)">LLM &amp; RAG systems</span>
          </p>
          <p className="mt-3 text-base text-(--foreground)/70 leading-relaxed">
            Building scalable data pipelines and retrieval systems.{" "}
            <span className="text-(--foreground)/90">
              Open to freelance projects in data engineering and applied AI.
            </span>
          </p>
        </section>

        {/* CV Download */}
        <div className="mb-20 -mt-12">
          <a
            href="/cv_andrade.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-xs font-medium text-(--muted) transition-colors hover:text-foreground hover:border-foreground/30"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        {/* About */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
            About
          </p>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-(--foreground)/80">
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

        {/* Experience */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase mb-7">
            Experience
          </p>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <p className="text-sm font-semibold text-foreground">
                  Data Engineer —{" "}
                  <span className="text-(--muted) font-normal">
                    Windifferent (BairesDev)
                  </span>
                </p>
                <p className="text-xs text-(--muted) shrink-0 ml-4">
                  2022 — Present
                </p>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5 text-sm text-(--foreground)/75 leading-relaxed">
                <li>
                  Design and maintain large-scale ETL pipelines using PySpark
                  on Databricks.
                </li>
                <li>
                  Orchestrate data workflows with Airflow and AWS.
                </li>
                <li>
                  Work with Delta Lake and Unity Catalog for governance and
                  data quality.
                </li>
              </ul>
              <div className="mt-4 pl-3 border-l border-(--border) flex flex-col gap-1 text-sm text-(--foreground)/60">
                <p className="text-xs font-semibold tracking-wide text-(--muted) uppercase mb-1">
                  Highlights
                </p>
                <p>– Reduced storage costs by ~50% through Spark optimizations</p>
                <p>– Built testing pipelines for production stability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase mb-7">
            Education
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-foreground">
                  MSc Artificial Intelligence
                </p>
                <p className="text-xs text-(--muted) shrink-0 ml-4">
                  2022 — 2025
                </p>
              </div>
              <p className="text-sm text-(--muted)">
                Johannes Kepler University, Austria
              </p>
              <p className="text-xs text-(--foreground)/50 mt-0.5">
                Graduated with honors
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-foreground">
                  BSc Electronic Engineering
                </p>
                <p className="text-xs text-(--muted) shrink-0 ml-4">
                  2015 — 2020
                </p>
              </div>
              <p className="text-sm text-(--muted)">
                Universidad del Valle, Colombia
              </p>
              <p className="text-xs text-(--foreground)/50 mt-0.5">
                Thesis with honorable mention
              </p>
            </div>
          </div>
        </section>

        {/* What I work on */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
            What I work on
          </p>
          <ul className="flex flex-col gap-2 text-sm text-(--foreground)/75 leading-relaxed">
            {[
              "Scalable ETL and data pipelines",
              "Data platform design (lakehouse, batch processing)",
              "Retrieval systems and RAG pipelines",
              "Document processing and summarisation systems",
              "Performance optimization and cost reduction in data workflows",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-(--muted) mt-px">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Selected work */}
        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-7">
            <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">
              Selected work
            </p>
            <Link
              href="/projects"
              className="text-sm text-(--muted) hover:text-foreground transition-colors"
            >
              All projects →
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.slug}
                href={project.href}
                className="group relative flex flex-col gap-5 rounded-2xl border border-(--border) bg-(--surface) p-5 transition-shadow hover:shadow-md sm:flex-row sm:gap-6"
              >
                {/* Thumbnail */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-(--surface-strong) sm:w-36">
                  <Image
                    src={project.iconImage}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Meta */}
                <div className="flex flex-col justify-between gap-3">
                  <div>
                    <p className="mb-1.5 text-[10px] font-semibold tracking-[0.18em] text-(--muted) uppercase">
                      {String(i + 1).padStart(2, "0")} &middot; {project.kicker}
                    </p>
                    <h2 className="text-base font-semibold leading-snug text-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-(--muted)">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.stack.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-(--border) px-3 py-1 text-xs text-(--muted)"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-sm font-medium text-foreground group-hover:underline underline-offset-2">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-(--border) pt-10 pb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
            Contact
          </p>
          <div className="flex flex-col gap-2 text-sm text-(--foreground)/80">
            <a
              href="mailto:selene.andradelopez@gmail.com"
              className="hover:text-foreground transition-colors w-fit"
            >
              selene.andradelopez@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/selene-andrade-a23367163/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors w-fit"
            >
              linkedin.com/in/selene-andrade-a23367163 ↗
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}