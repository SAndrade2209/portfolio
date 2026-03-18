import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";

export default function AlbumCovers() {
  const project = getProject("album-covers");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12">
        <SiteHeader active="/projects" />

        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl bg-(--surface-strong)">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
            priority
          />
        </div>

        <div className="mb-12">
          <div className="flex items-start justify-between gap-4 mb-3">
            <p className="text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">
              {project.kicker}
            </p>
            <a
              href="https://zenodo.org/records/15839739"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 shrink-0 rounded-full border border-(--border) px-5 py-2 text-sm font-medium text-(--muted) hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Paper on Zenodo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              Paper
            </a>
          </div>
          <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-(--muted) whitespace-pre-line">
            {project.longSummary}
          </p>
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
                <span
                  key={tag}
                  className="rounded-full border border-(--border) px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <section className="mb-10">
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">
            What I built
          </p>
          <ul className="flex flex-col gap-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm leading-relaxed text-(--foreground)/80"
              >
                <span className="mt-0.5 shrink-0 text-(--accent)">&#9670;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-(--muted) uppercase">
            Pipeline
          </p>
          <div className="flex flex-col gap-2 text-sm">
            {[
              "Dataset collection — 3,000+ Billboard album covers with genre metadata",
              "Image captioning — BLIP generates natural language descriptions per cover",
              "Object candidate extraction — parse captions into candidate object labels",
              "Zero-shot detection — Grounding DINO locates objects without task-specific training",
              "Aggregation & analysis — object frequencies analysed across genres and artists",
            ].map((step, i) => (
              <div
                key={step}
                className="flex items-center gap-3 rounded-lg border border-(--border) bg-(--surface) px-4 py-2.5"
              >
                <span className="shrink-0 text-[10px] font-semibold text-(--muted) w-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-(--foreground)/80">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 rounded-2xl border border-(--border) bg-(--surface) px-6 py-5">
          <p className="mb-2 text-[10px] font-semibold tracking-[0.22em] text-(--muted) uppercase">
            Outcome
          </p>
          <p className="text-sm leading-relaxed text-(--foreground)/80 whitespace-pre-line">
            {project.outcome}
          </p>
        </section>

        <div className="flex items-center gap-5 border-t border-(--border) pt-8 pb-10 text-sm">
          <Link href="/projects" className="text-(--muted) hover:text-foreground transition-colors">
            ← All projects
          </Link>
        </div>

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

