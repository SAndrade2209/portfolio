import type { StaticImageData } from "next/image";

import ragImage from "@/images/rag_visual.svg";
import ragIcon from "@/images/rag_icon.png";
import summarizeImage from "@/images/summarize_1.png";
import summarizeIcon from "@/images/sum_icon.png";
import albumIcon from "@/images/album_icon.png";
import albumImage from "@/images/album_hero2.png";


export type Project = {
  slug: "scientific-rag" | "summarization" | "album-covers";
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
  github?: string | undefined;
  href: string;
  image: StaticImageData;
  iconImage: StaticImageData;
  imageAlt: string;
};

const projects = {
  "scientific-rag": {
    slug: "scientific-rag",
    title: "Conversational AI System for Scientific Documents (RAG)",
    shortTitle: "Scientific RAG",
    kicker: "LLM systems · retrieval · guardrails",
    summary:
      "A multi-stage retrieval system for scientific and technical documents with hybrid search, reranking, and conversational context.",
    longSummary:
      "I designed this project to make scientific question answering feel more dependable: better recall for niche terminology, better ranking for complex queries, and safer interactions through validation before generation.",
    role: "System design, retrieval strategy, evaluation, UX framing",
    period: "Independent project · 2026",
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
    iconImage: ragIcon,
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
    period: "Project developed for a U.S.-based startup · 2025",
    stack: ["Python", "OpenAI API", "Embeddings", "Vector Search", "Evaluation loops"],
    highlights: [
      "Batch-based processing for large document sets without losing traceability.",
      "Evaluation-driven refinement to reduce hallucinations and improve coverage.",
      "Separate summarisation and report-combination phases for better structure.",
      "Vector retrieval to surface the most relevant passages before synthesis.",
    ],
    outcome:
      "The pipeline produces a fully validated, evidence-grounded technical report by combining retrieval-augmented summarization with iterative evaluation and correction loops. It ensures high factual accuracy through claim-level validation against source PDFs, structured completeness via batch-wise synthesis and controlled combination, and reduced hallucinations using strict evaluation thresholds and repair cycles.\n\nConsistent terminology and citation hygiene — including abbreviation control — and full traceability of information, as all outputs are grounded in retrieved document segments.\n\nThe final output is not just a summary, but a systematically verified synthesis, where unsupported claims are eliminated or corrected, and the best-performing version is selected when perfect convergence is not reached.\n\nThis results in a scalable, reproducible pipeline for generating long-form technical reviews with measurable quality guarantees, significantly reducing manual review effort while preserving analytical rigour.",
    href: "/projects/summarization",
    image: summarizeImage,
    iconImage: summarizeIcon,
    imageAlt: "Preview of the literature synthesis and summarisation workflow.",
  },
  "album-covers": {
    slug: "album-covers",
    title: "Zero-shot Object Detection for Music Album Covers",
    shortTitle: "Zero-shot Visual Analysis",
    kicker: "Computer vision · multimodal ML · zero-shot learning",
    summary:
      "A large-scale pipeline for analysing visual patterns in music album covers using image captioning and zero-shot object detection.",
    longSummary:
      "This project explores how visual elements in music album covers can be analysed at scale using modern vision-language models.\n\nI built a pipeline that combines image captioning and zero-shot object detection to identify and quantify objects across thousands of album covers, without requiring task-specific training data.\n\nThe goal was to move beyond qualitative analysis and enable a more systematic understanding of visual patterns across genres, artists, and time.",
    role: "Research, pipeline design, data collection, model integration, evaluation",
    period: "Research project · MSc Artificial Intelligence · 2025",
    stack: ["Python", "PyTorch", "Hugging Face", "BLIP", "Grounding DINO", "Transformers"],
    highlights: [
      "Built a dataset of 3,000+ Billboard album covers with associated metadata.",
      "Designed a two-stage pipeline: image captioning (BLIP) + zero-shot detection (Grounding DINO).",
      "Generated object candidates from captions to guide open-set detection.",
      "Achieved ~71% mAP in zero-shot detection without task-specific training.",
      'Analysed object distributions across genres, revealing distinct visual patterns (e.g. "skull" in metal, "cowboy hat" in country).',
    ],
    outcome:
      "The project demonstrates how combining language and vision models can enable structured analysis of visual data at scale, even in domains with no labeled datasets.\n\nIt also highlights how zero-shot approaches can be used in practice to extract meaningful signals from unstructured image collections.\n\nPublished at Sound and Music Computing Conference (SMC 2025).",
    href: "/projects/album-covers",
    image: albumImage,
    iconImage: albumIcon,
    imageAlt: "Preview of the zero-shot album cover analysis pipeline.",
  },
} satisfies Record<Project["slug"], Project>;

export const featuredProjects: Project[] = Object.values(projects);

export function getProject<S extends Project["slug"]>(slug: S) {
  return projects[slug];
}
