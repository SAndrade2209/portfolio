import type { StaticImageData } from "next/image";

import ragImage from "@/images/rag_hero.png";
import ragIcon from "@/images/ragicon2.png";
import summarizeImage from "@/images/summarize_1.png";
import summarizeIcon from "@/images/sum_icon.png";
import albumIcon from "@/images/album_icon.png";
import albumImage from "@/images/album_hero2.png";
import snowflakeHeroImage from "@/images/snowflake_project/heropaysim.png";
import snowflakeIconImage from "@/images/snowflake_project/iconsnowflake.png";


export type ProjectCategory = "data-engineering" | "ai" | "research";

export type Project = {
  slug: "scientific-rag" | "summarization" | "album-covers" | "paysim-fraud";
  category: ProjectCategory;
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
    "paysim-fraud": {
    slug: "paysim-fraud",
    category: "data-engineering" as const,
    title: "PaySim Fraud Analytics Platform",
    shortTitle: "Fraud Analytics Platform",
    kicker: "Data engineering · fraud analytics · modern data stack",
    summary:
      "End-to-end fraud analytics pipeline built on the modern data stack. PaySim synthetic transactions → GCS → PySpark → Snowflake → dbt → Airflow.",
    longSummary:
      "This platform simulates a real-world fraud detection data pipeline using the PaySim dataset  with 6.3 million synthetic mobile money transactions across 31 CSV batches. For this I designed every layer from scratch: batch ingestion into GCS, distributed PySpark processing into Snowflake, a full medallion architecture in dbt, and end-to-end orchestration with Airflow. The goal was to build something that mirrors production data engineering patterns at scale.",
    role: "Data engineering, pipeline design, infrastructure, orchestration",
    period: "Independent project · 2026",
    stack: ["PySpark", "Snowflake", "dbt", "Apache Airflow", "GCS", "Terraform"],
    highlights: [
      "Medallion architecture across four layers: Landing (GCS) → Raw (Snowflake) → Staging (dbt incremental) → Trusted (star schema).",
      "PySpark ingestion job reads 6.3M rows from GCS, enforces schema, and appends to Snowflake via the Spark Connector.",
      "dbt incremental merge and transformation between layers.",
      "Star schema with fact tables (fct_fraud_events, fct_balance_movements, agg_account_balances) and SCD Type 2 dimension snapshots.",
      "dbt data quality gate blocks trusted layer population if any test fails — unique keys, not-null, accepted values, FK relationships.",
      "Airflow DAG with batch state management via Variables, supporting both automatic sequential runs and manual backfills.",
      "Terraform IaC for GCS bucket lifecycle rules, GCP service accounts, and Snowflake resource provisioning.",
    ],
    outcome:
      "The platform answers operational fraud questions — transaction counts, monetary exposure by type, account patterns — at scale, with full auditability and replay capability. Every design decision prioritises observability and production readiness over shortcut solutions.",
    github: "https://github.com/SAndrade2209/paysim-fraud-analytics-platform",
    href: "/projects/paysim-fraud",
    image: snowflakeHeroImage,
    iconImage: snowflakeIconImage,
    imageAlt: "End-to-end architecture overview of the PaySim Fraud Analytics Platform.",
  },
  "scientific-rag": {
    slug: "scientific-rag",
    category: "ai" as const,
    title: "Conversational AI System for Scientific Documents (RAG)",
    shortTitle: "Scientific RAG",
    kicker: "LLM systems · retrieval · guardrails",
    summary:
      "A multi-stage retrieval system for scientific and technical documents with hybrid search, reranking, and conversational context.",
    longSummary:
      "A conversational retrieval system designed for dense scientific and technical texts. The pipeline combines multi-query expansion, hybrid dense + BM25 retrieval, Reciprocal Rank Fusion (RRF), cross-encoder reranking, and conversational memory to improve recall for rare terminology, multi-document reasoning, and context-dependent follow-up questions. Built with GPT-4.1, BAAI/bge-m3, Qdrant, and LangChain, the system delivers citation-grounded answers through a multi-stage retrieval and validation architecture optimized for technical question answering and long-form scientific documents.\n",
    role: "System design, retrieval strategy, evaluation, UX framing",
    period: "Independent project · 2026",
    stack: ["Python", "LangChain", "Qdrant", "BGE-M3", "OpenAI", "Streamlit"],
    highlights: [
    "Hybrid retrieval pipeline combining dense embeddings, BM25 sparse search, and Reciprocal Rank Fusion (RRF) to improve recall across rare scientific terminology, synonym-heavy queries, and long technical documents.",
    "LLM-driven multi-query expansion and intent extraction to retrieve semantically diverse evidence across multiple papers, improving performance on ambiguous, conversational, and multi-step scientific questions.",
    "Two-stage cross-encoder reranking architecture using BAAI/bge-reranker-base to filter noisy retrievals, strengthen contextual relevance, and prioritize the most informative document chunks before generation.",
    "Guardrail validation, conversational memory, and session persistence layers designed to support safer interactions, context-aware follow-up reasoning, and coherent multi-turn scientific conversations."
  ],
    outcome:
      "The result is a production-oriented retrieval pipeline designed for scientific and technical question answering, where precision, recall, and citation grounding matter more than generative novelty. By combining hybrid retrieval, multi-query expansion, reranking, and conversational memory, the system produces more reliable answers across dense documents, rare terminology, and context-dependent follow-up queries.",
    github: "https://github.com/SAndrade2209/scientific-rag",
    href: "/projects/scientific-rag",
    image: ragImage,
    iconImage: ragIcon,
    imageAlt: "Preview of the scientific conversational RAG interface.",
  },
  summarization: {
    slug: "summarization",
    category: "ai" as const,
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
    category: "research" as const,
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
