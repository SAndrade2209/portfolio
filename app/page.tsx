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
        <section className="mb-10 pt-4">
          {/*<p className="mb-4 text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase">*/}
          {/*  Based in Valencia, Spain*/}
          {/*</p>*/}
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Selene Andrade Lopez
          </h1>
          <p className="mt-4 text-2xl text-(--muted) leading-snug">
            Data Engineer · MSc Artificial Intelligence ·{" "}
            <span className="text-(--accent)">LLM &amp; RAG systems</span>
          </p>
          <p className="mt-3 text-lg text-(--foreground)/70 leading-relaxed">
            Building scalable data pipelines and retrieval systems.{" "}
            <span className="text-(--foreground)/90">
              Open to freelance projects in data engineering and applied AI.
            </span>
          </p>
        </section>

        {/* CV / GitHub / LinkedIn */}
        <div className="mb-12 -mt-6 flex flex-wrap gap-3">
          <a
            href="/cv_andrade.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-(--muted) transition-colors hover:text-foreground hover:border-foreground/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
          <a
            href="https://github.com/SAndrade2209"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-(--muted) transition-colors hover:text-foreground hover:border-foreground/30"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" className="fill-current" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/selene-andrade-a23367163/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-(--muted) transition-colors hover:text-foreground hover:border-foreground/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* About */}
        <section className="mb-12">
          <p className="text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
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
        <section className="mb-12">
          <p className="text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
            Experience
          </p>
          <div className="flex flex-col gap-10">

            {/* Windifferent */}
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <p className="text-base font-semibold text-foreground">
                  Data Engineer —{" "}
                  <span className="text-(--muted) font-normal">Windifferent (BairesDev)</span>
                </p>
                <p className="text-sm text-(--muted) shrink-0 ml-4">2022 — Present</p>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5 text-base text-(--foreground)/75 leading-relaxed">
                <li>Design and maintain large-scale ETL pipelines using PySpark on Databricks.</li>
                <li>Orchestrate data workflows with Airflow from ingestion to consumption.</li>
                <li>Work with AWS services for data such as Glue, S3, EventBridge</li>
                <li>Work with Delta Lake and Unity Catalog for governance, schema validation, and data quality.</li>
                <li>Helped design and implement the company&apos;s Delta Lake from scratch, supporting multi-source ingestion (JSON, Parquet, CSV, Databases) across a medallion architecture  at millions-of-records scale.</li>
                <li>Implement version control to ensure code quality and production stability.</li>
                <li>Write unit tests and automate Delta Lake maintenance using VACUUM and OPTIMIZE commands.</li>
                <li>Apply data partitioning strategies aligned with business requirements to improve query performance and reduce resource usage.</li>
              </ul>
              <div className="mt-4 pl-3 border-l border-(--border) flex flex-col gap-1 text-base text-(--foreground)/60">
                <p className="text-sm font-semibold tracking-wide text-(--muted) uppercase mb-1">Highlights</p>
                <p>– Designed and built the company&apos;s Delta Lake from scratch using medallion architecture, handling millions of records from multiple formats</p>
                <p>– Reduced storage costs by ~50% through Spark logic optimisation and data handling best practices</p>
                <p>– Implemented automated Delta Lake maintenance reducing manual operational overhead</p>
              </div>
            </div>

            {/* Sinerware */}
            <div>
              <div className="flex items-baseline justify-between mb-1">
                <p className="text-base font-semibold text-foreground">
                  Software Development Engineer —{" "}
                  <span className="text-(--muted) font-normal">Sinerware SAS</span>
                </p>
                <p className="text-sm text-(--muted) shrink-0 ml-4">2020 — 2022</p>
              </div>
              <ul className="mt-3 flex flex-col gap-1.5 text-base text-(--foreground)/75 leading-relaxed">
                <li>Maintained and optimised databases, including implementation of database objects and functional documentation.</li>
                <li>Reduced load times for system pages and trays by 95% through targeted performance improvements.</li>
                <li>Involved across the full project lifecycle — planning, design, development, testing, and delivery.</li>
                <li>Provided client support and training on developed systems.</li>
                <li>Developed software using Oracle PL/SQL, Oracle APEX, Python, and REST APIs.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <p className="text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
            Education
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline justify-between">
                <p className="text-base font-semibold text-foreground">MSc Artificial Intelligence</p>
                <p className="text-sm text-(--muted) shrink-0 ml-4">2022 — 2025</p>
              </div>
              <p className="text-base text-(--muted)">Johannes Kepler University, Austria</p>
              <p className="text-sm text-(--foreground)/50 mt-0.5">Graduated with honors</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-baseline justify-between">
                <p className="text-base font-semibold text-foreground">BSc Electronic Engineering</p>
                <p className="text-sm text-(--muted) shrink-0 ml-4">2015 — 2020</p>
              </div>
              <p className="text-base text-(--muted)">Universidad del Valle, Colombia</p>
              <p className="text-sm text-(--foreground)/50 mt-0.5">Thesis with honorable mention</p>
            </div>
          </div>
        </section>

        {/* What I work on */}
        <section className="mb-12">
          <p className="text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
            What I work on
          </p>
          <ul className="flex flex-col gap-2 text-base text-(--foreground)/75 leading-relaxed">
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
        <section className="mb-12">
          <div className="flex items-baseline justify-between mb-7">
            <p className="text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase">
              Selected work
            </p>
            <Link href="/projects" className="text-base text-(--muted) hover:text-foreground transition-colors">
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
                    <p className="mb-1.5 text-xs font-semibold tracking-[0.18em] text-(--muted) uppercase">
                      {String(i + 1).padStart(2, "0")} &middot; {project.kicker}
                    </p>
                    <h2 className="text-lg font-semibold leading-snug text-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-base leading-relaxed text-(--muted)">
                      {project.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.stack.slice(0, 4).map((tag) => (
                      <span key={tag} className="rounded-full border border-(--border) px-3 py-1 text-sm text-(--muted)">
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-base font-medium text-foreground group-hover:underline underline-offset-2">
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
          <p className="text-sm font-semibold tracking-[0.22em] text-(--muted) uppercase mb-5">
            Contact
          </p>
          <div className="flex flex-col gap-2 text-base text-(--foreground)/80">
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