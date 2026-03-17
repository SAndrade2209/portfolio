import type { StaticImageData } from "next/image";

import ragImage from "@/images/rag.png";
import summarizeImage from "@/images/summarize.png";

export type Project = {
  slug: "scientific-rag" | "summarization";
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  longSummary: string;
  role: string;
  period: string;
  stack: string[];
  highlights: string[];
  outcome: string;
  github?: string;
  href: string;
  image: StaticImageData;
  imageAlt: string;
};

const projects = {
  "scientific-rag": {
    slug: "scientific-rag",
    title: "Scientific Conversational RAG System",
    shortTitle: "Scientific RAG",
    kicker: "LLM systems · retrieval · guardrails",
    summary:
      "A multi-stage retrieval system for scientific and technical documents with hybrid search, reranking, and conversational context.",
    longSummary:
      "I designed this project to make scientific question answering feel more dependable: better recall for niche terminology, better ranking for complex queries, and safer interactions through validation before generation.",
    role: "System design, retrieval strategy, evaluation, UX framing",
    period: "Independent project · 2025",
    stack: ["Python", "LangChain", "Qdrant", "BGE-M3", "OpenAI", "Streamlit"],
    highlights: [
      "Hybrid retrieval with dense vectors and BM25 to capture both semantics and rare terminology.",
      "Multi-query expansion to improve recall in multi-document and ambiguous searches.",
      "Cross-encoder reranking to tighten relevance before answer generation.",
      "Guardrails and memory layers for safer, more coherent conversational behaviour.",
    ],
    outcome:
      "The result is a cleaner retrieval pipeline that prioritises reliability over novelty, especially for technical material where precision matters.",
    github: "https://github.com/SAndrade2209/scientific-rag",
    href: "/projects/scientific-rag",
    image: ragImage,
    imageAlt: "Preview of the scientific conversational RAG interface.",
  },
  summarization: {
    slug: "summarization",
    title: "AI Literature Synthesis Pipeline",
    shortTitle: "Literature synthesis",
    kicker: "Document intelligence · summarisation · evaluation",
    summary:
      "A pipeline for synthesising large document collections into structured, reviewable reports with iterative quality checks.",
    longSummary:
      "This project turns a large stack of technical PDFs into something a human can actually use: staged summarisation, evaluation loops, and a final synthesis step that keeps outputs concise and grounded.",
    role: "Pipeline design, prompt orchestration, quality evaluation",
    period: "Independent project · 2025",
    stack: ["Python", "OpenAI API", "Embeddings", "Vector Search", "Evaluation loops"],
    highlights: [
      "Batch-based processing for large document sets without losing traceability.",
      "Evaluation-driven refinement to reduce hallucinations and improve coverage.",
      "Separate summarisation and report-combination phases for better structure.",
      "Vector retrieval to surface the most relevant passages before synthesis.",
    ],
    outcome:
      "The pipeline is designed for clarity and consistency, making long-form technical review faster while preserving a human-readable final output.",
    href: "/projects/summarization",
    image: summarizeImage,
    imageAlt: "Preview of the literature synthesis and summarisation workflow.",
  },
} satisfies Record<Project["slug"], Project>;

export const featuredProjects = Object.values(projects);

export function getProject<S extends Project["slug"]>(slug: S) {
  return projects[slug];
}

