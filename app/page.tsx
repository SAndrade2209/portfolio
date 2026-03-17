import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProjects } from "@/app/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl px-5 py-8 md:px-8">

        <SiteHeader active="/" />

        {/* Hero */}
        <section className="mb-20 pt-4">
          <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
            Based in Valencia, Spain
          </p>
          <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Selene Andrade
          </h1>
          <p className="mt-4 text-xl text-[var(--muted)] leading-snug">
            Data Engineer · MSc Artificial Intelligence ·{" "}
            <span className="text-[var(--accent)]">LLM &amp; RAG systems</span>
          </p>
        </section>

        {/* About */}
        <section className="mb-20">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase mb-5">
            About
          </p>
          <p className="text-base leading-relaxed text-[var(--foreground)]/80 max-w-xl">
            Data Engineer with experience building production data pipelines
            using PySpark, Databricks, and AWS. Recently focused on LLM
            systems — designing retrieval-augmented generation pipelines with
            hybrid search, reranking, and guardrails.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--foreground)]/80 max-w-xl">
            Interested in the intersection of data engineering and machine
            learning: reliable pipelines, retrieval systems, and applied AI
            that actually works in production.
          </p>
        </section>

        {/* Selected work */}
        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-7">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase">
              Selected work
            </p>
            <Link
              href="/projects"
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              All projects →
            </Link>
          </div>

          <div className="flex flex-col gap-5">
            {featuredProjects.map((project, i) => (
              <Link
                key={project.slug}
                href={project.href}
                className="group flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-shadow hover:shadow-md sm:flex-row sm:gap-6"
              >
                {/* Thumbnail */}
                <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl bg-[var(--surface-strong)] sm:w-36">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                {/* Meta */}
                <div className="flex flex-col justify-between gap-3">
                  <div>
                    <p className="mb-1.5 text-[10px] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
                      {String(i + 1).padStart(2, "0")} &middot; {project.kicker}
                    </p>
                    <h2 className="text-base font-semibold leading-snug text-[var(--foreground)]">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.stack.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[10px] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto text-sm font-medium text-[var(--foreground)] group-hover:underline underline-offset-2">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-[var(--border)] pt-10 pb-16">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--muted)] uppercase mb-5">
            Contact
          </p>
          <div className="flex flex-col gap-2 text-sm text-[var(--foreground)]/80">
            <a
              href="mailto:selene.andradelopez@gmail.com"
              className="hover:text-[var(--foreground)] transition-colors w-fit"
            >
              selene.andradelopez@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/selene-andrade-a23367163/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--foreground)] transition-colors w-fit"
            >
              linkedin.com/in/selene-andrade-a23367163 ↗
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}