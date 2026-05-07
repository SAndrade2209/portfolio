"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject } from "@/app/data/projects";

export default function ScientificRAG() {
  const project = getProject("scientific-rag");
  const github = project.github;
  const [open, setOpen] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">
        <SiteHeader active="/projects" />

        {/* Hero */}
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl bg-surface-strong">
          <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 768px) 100vw, 1060px" quality={90} className="object-contain" priority />
        </div>

        {/* Title block */}
        <div className="mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">{project.kicker}</p>
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="flex items-center gap-2 shrink-0 rounded-full border border-border bg-surface px-5 py-2 text-[13px] font-medium text-muted transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5">
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

        {/* The Problem */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">The Problem</p>
          <p className="mb-5 text-[14px] leading-[1.8] text-justify text-foreground/55">
            Technical professionals need precise answers buried inside hundreds of dense PDFs. Standard keyword search — and even naive single-vector RAG — breaks down in this domain for several compounding reasons.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: "Synonym fragmentation", body: 'A concept appears under multiple synonyms — "skid resistance", "friction coefficient", "µ" — so a single query embedding misses most of the relevant literature.' },
              { title: "Multi-document synthesis", body: "The answer often requires synthesising information across 3–4 separate papers, not extracting a single passage." },
              { title: "Conversational context", body: 'Follow-up questions depend on earlier turns ("What about under wet conditions?") — context a stateless retriever cannot resolve.' },
              { title: "Rare domain terminology", body: "Terms like CEL, LTPP, TDR, SMA have very low frequency and collapse into indistinguishable regions inside dense embeddings." },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-surface px-6 py-5">
                <p className="text-[13px] font-semibold text-foreground/80 mb-1.5">{c.title}</p>
                <p className="text-[13px] leading-[1.7] text-justify text-foreground/50">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pipeline */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Pipeline</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            Each turn passes through a fixed sequence of stages. Every stage has a single responsibility and can be independently tested. Only <strong className="text-foreground/75">one LLM completion</strong> is made per turn regardless of how many sub-queries are generated — the <code className="text-[12px] bg-surface border border-border rounded px-1.5 py-0.5">retrieve_only</code> flag ensures sub-queries skip generation entirely. Click each stage to expand.
          </p>
          <div className="flex flex-col gap-2.5">
            {[
              { step: "01", label: "Guardrail", desc: "GPT-4.1 screens the user input for safety, domain relevance, and prompt injection before anything else runs. Off-topic or unsafe queries are rejected here — before any embedding, retrieval, or LLM call is made." },
              { step: "02", label: "Memory load", desc: "The running conversation summary is loaded from SQLite (or Redis). LangChain's ConversationSummaryBufferMemory keeps older turns compressed so the context window stays bounded across long sessions." },
              { step: "03", label: "Query expansion", desc: "GPT-4.1-mini rewrites the input into N semantically diverse sub-queries and extracts an explicit INTENT statement — for example, \"Understand hydroplaning physics under low-speed conditions\". This covers synonyms and related angles that the original query embedding alone would miss." },
              { step: "04", label: "Hybrid retrieval (per sub-query)", desc: "Each sub-query runs two Prefetch queries in parallel inside Qdrant — one dense (bge-m3 cosine similarity) and one sparse (BM25). FusionQuery(Fusion.RRF) merges both ranked lists without any manual weight tuning. Items appearing in both lists naturally rise to the top." },
              { step: "05", label: "Cross-encoder reranking (per sub-query)", desc: "bge-reranker-base scores every retrieved chunk against its own sub-query before results are merged across sub-queries. This filters noise at the per-query level, so the global merge starts from a cleaner pool." },
              { step: "06", label: "Deduplication & global re-rank", desc: "All sub-query results are merged, duplicates removed (keeping the best rerank score per chunk), and the pool is re-ranked a second time — this time against the extracted INTENT rather than the raw query. Conversational follow-ups have low lexical signal; the INTENT anchor gives stable relevance." },
              { step: "07", label: "Answer generation", desc: "GPT-4.1-mini generates a cited response using an academic citation prompt that outputs APA-format inline references derived from document metadata. Only the top-ranked chunks after global re-rank are included in context." },
              { step: "08", label: "Memory save", desc: "The completed turn is persisted to ConversationSummaryBufferMemory. Older turns are summarised automatically by the LLM, keeping the total prompt length predictable regardless of session length." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-border bg-surface overflow-hidden">
                <button
                  className="w-full flex items-center gap-4 px-6 py-4 text-left"
                  onClick={() => setOpen(open === s.step ? null : s.step)}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-[11px] font-bold text-primary/70">{s.step}</span>
                  <span className="text-[14px] font-medium text-foreground/75 flex-1">{s.label}</span>
                  <span className="text-muted/40 text-[18px] leading-none">{open === s.step ? "−" : "+"}</span>
                </button>
                {open === s.step && (
                  <div className="px-6 pb-5 pt-1 border-t border-border">
                    <p className="text-[13px] leading-[1.8] text-justify text-foreground/55">{s.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Why each stage exists */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Why each stage exists</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            Every component was added to solve a specific, observable failure mode — not for completeness. This is the explicit mapping from problem to solution.
          </p>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Stage</th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Problem it solves</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { stage: "Guardrail", problem: "Blocks jailbreaks, off-topic queries, and prompt injections before they hit the expensive retrieval chain." },
                  { stage: "Query expansion", problem: "A single embedding misses synonyms and related angles; N diverse sub-queries cover more of the vector space." },
                  { stage: "BM25 sparse vectors", problem: "Dense embeddings compress rare terms (LTPP, CEL, TDR) into indistinguishable regions; BM25 preserves exact-term signal." },
                  { stage: "RRF fusion", problem: "Merges dense + sparse rankings without manual weight tuning — items appearing in both lists rise to the top naturally." },
                  { stage: "retrieve_only flag", problem: "Sub-queries skip the LLM completion entirely; only 1 generation call is made per turn regardless of query count." },
                  { stage: "Re-rank vs INTENT", problem: "Conversational follow-ups have low lexical signal; ranking against the extracted intent gives better relevance than the raw utterance." },
                  { stage: "ConversationSummaryBufferMemory", problem: "Avoids repeating full history in every prompt — LangChain summarises older turns, keeping the context window bounded." },
                ].map((r) => (
                  <tr key={r.stage} className="hover:bg-primary/2 transition-colors">
                    <td className="px-5 py-3 font-medium text-foreground/70 whitespace-nowrap">{r.stage}</td>
                    <td className="px-5 py-3 text-foreground/50 leading-relaxed">{r.problem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Engineering decisions */}
        <section className="mb-16">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Key Engineering Decisions</p>
          <p className="mb-6 text-[14px] leading-[1.8] text-justify text-foreground/55">
            These are the non-obvious choices that shaped the architecture — each made deliberately to address a specific constraint or failure mode.
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Local embedder over API embeddings",
                body: "BAAI/bge-m3 runs locally with no per-call cost, supports 8,192-token context windows, and performs competitively with text-embedding-3-large on scientific text. Chunking long technical sections without truncation was a hard requirement — API models with 512-token limits would silently lose critical passage tails.",
              },
              {
                title: "Hybrid dense + BM25 in a single Qdrant collection",
                body: "Both vector types live in the same collection. At query time, two Prefetch queries run in parallel and FusionQuery(Fusion.RRF) merges them — no infrastructure split, no synchronisation problem, no double-write logic. Dense vectors handle semantic similarity; BM25 independently catches rare terms that dense compression destroys.",
              },
              {
                title: "Two reranking passes with different anchors",
                body: "The first pass ranks each sub-query's chunks against that sub-query, filtering noise before the global merge. The second pass re-ranks the merged pool against the extracted INTENT — not the raw query. This distinction matters: a follow-up like \"tell me more about that\" has almost no lexical signal, but the intent \"Understand hydroplaning physics under low-speed conditions\" is rich and specific.",
              },
              {
                title: "Stateless ChatEngine with external memory",
                body: "ChatEngine.process_turn() is a pure function: (user_input, memory) → TurnResult. All state lives in the caller. This makes the engine trivially unit-testable, interface-agnostic (Streamlit, notebook, API server), and safe to run concurrently across sessions without shared mutable state.",
              },
              {
                title: "SQLite-first, Redis-ready session store",
                body: "Sessions persist to SQLite locally with zero infrastructure overhead. Swapping to Redis — with TTL expiry for session cleanup at scale — requires only a build_session_store(backend=\"redis\") call. The interface is identical by design, so the system can be scaled without any code changes in the application layer.",
              },
            ].map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-surface px-6 py-5">
                <p className="text-[13px] font-semibold text-foreground/80 mb-2">{d.title}</p>
                <p className="text-[13px] leading-[1.8] text-justify text-foreground/50">{d.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What I built */}
        <section className="mb-16">
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

        {/* Tech stack */}
        <section className="mb-16">
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">Tech Stack</p>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Layer</th>
                  <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-[0.15em] text-muted/60">Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { layer: "LLM", tech: "OpenAI GPT-4.1 / GPT-4.1-mini" },
                  { layer: "Embeddings", tech: "BAAI/bge-m3 (local, 8 192-token context)" },
                  { layer: "Sparse encoding", tech: "fastembed BM25" },
                  { layer: "Vector store", tech: "Qdrant (hybrid dense + sparse, RRF fusion)" },
                  { layer: "Reranker", tech: "BAAI/bge-reranker-base" },
                  { layer: "Memory", tech: "LangChain ConversationSummaryBufferMemory" },
                  { layer: "Session store", tech: "SQLite (local) / Redis (production)" },
                  { layer: "PDF parsing", tech: "Docling" },
                  { layer: "UI", tech: "Streamlit" },
                  { layer: "Infrastructure", tech: "Docker / docker compose (Qdrant)" },
                ].map((r) => (
                  <tr key={r.layer} className="hover:bg-primary/2 transition-colors">
                    <td className="px-5 py-3 font-medium text-foreground/70">{r.layer}</td>
                    <td className="px-5 py-3 text-foreground/50">{r.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Outcome */}
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
