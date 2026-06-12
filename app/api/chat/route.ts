import { NextRequest, NextResponse } from "next/server";

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY!;
const PUSHOVER_USER    = process.env.PUSHOVER_USER!;
const PUSHOVER_TOKEN   = process.env.PUSHOVER_TOKEN!;

// ── Selene's context ─────────────────────────────────────────────────────────
const SUMMARY = `My name is Selene Andrade. I'm an electronic engineer, data engineer and AI amateur. I'm originally from Cali, Colombia, but I moved to Valencia, Spain in 2024. I love all foods, particularly Italian food. I love learning and doing, I'm very responsible and goal driven, and I firmly believe in doing things the best as possible and not just for doing them!

## Background
I hold a degree in Electronic Engineering and a MSc in Artificial Intelligence from Linz, Austria. I work at the intersection of data engineering and AI, building production-oriented systems that combine modern data infrastructure with machine learning.

## Projects

### 1. PaySim Fraud Analytics Platform
- Type: Data engineering / modern data stack
- Period: Independent project · 2026
- Stack: PySpark, Snowflake, dbt, Apache Airflow, GCS, Terraform
- GitHub: https://github.com/SAndrade2209/paysim-fraud-analytics-platform

End-to-end fraud analytics pipeline using the PaySim dataset (6.3M synthetic transactions). Designed every layer: GCS ingestion → PySpark → Snowflake → dbt medallion architecture → Airflow orchestration.

Key highlights: Medallion architecture (Landing → Raw → Staging → Trusted), SCD Type 2 snapshots, dbt quality gates, Terraform IaC.

### 2. Conversational AI System for Scientific Documents (RAG)
- Type: LLM systems · retrieval · guardrails
- Period: Independent project · 2026
- Stack: Python, LangChain, Qdrant, BAAI/bge-m3, OpenAI GPT-4.1, Streamlit
- GitHub: https://github.com/SAndrade2209/scientific-rag

Multi-stage RAG pipeline: multi-query expansion, hybrid dense+BM25 retrieval, RRF fusion, cross-encoder reranking, conversational memory, guardrails. 8-stage pipeline producing citation-grounded answers.

### 3. AI Literature Synthesis Pipeline
- Type: Document intelligence · summarisation · evaluation
- Period: Developed for a U.S.-based startup · 2025
- Stack: Python, OpenAI API, Embeddings, Vector Search, Evaluation loops

Turns large stacks of technical PDFs into structured reports using staged summarisation, evaluation loops, and vector retrieval.

### 4. Zero-shot Object Detection for Music Album Covers
- Type: Computer vision · multimodal ML · zero-shot learning
- Period: Research · MSc Artificial Intelligence · 2025
- Stack: Python, PyTorch, BLIP, Grounding DINO, Transformers
- Published: Sound and Music Computing Conference (SMC 2025)

~71% mAP zero-shot detection on 3,000+ Billboard album covers. Two-stage pipeline: BLIP captioning → Grounding DINO detection.

## Skills & Tools
- Data Engineering: PySpark, Snowflake, dbt, Airflow, GCS, Terraform, medallion architecture, SCD Type 2
- AI/ML: RAG, LLM orchestration, LangChain, Qdrant, vector search, hybrid retrieval, reranking, embeddings, zero-shot detection
- Languages: Python, SQL, TypeScript
- Infrastructure: Docker, Redis, SQLite, GCP
- Models: GPT-4.1, BAAI/bge-m3, bge-reranker-base, BLIP, Grounding DINO, DeepSeek

## Contact
- Email: selene.andradelopez@gmail.com
- LinkedIn: https://www.linkedin.com/in/selene-andrade-a23367163/
`;

// ── Tool definitions ─────────────────────────────────────────────────────────
const tools = [
  {
    type: "function",
    function: {
      name: "record_user_details",
      description: "Use this tool to record that a user is interested in being in touch and provided an email address",
      parameters: {
        type: "object",
        properties: {
          email: { type: "string", description: "The email address of this user" },
          name:  { type: "string", description: "The user's name, if provided" },
          notes: { type: "string", description: "Any additional context worth recording" },
        },
        required: ["email"],
        additionalProperties: false,
      },
    },
  },
  {
    type: "function",
    function: {
      name: "record_unknown_question",
      description: "Always use this tool to record any question that couldn't be answered",
      parameters: {
        type: "object",
        properties: {
          question: { type: "string", description: "The question that couldn't be answered" },
        },
        required: ["question"],
        additionalProperties: false,
      },
    },
  },
];

// ── Pushover notification ─────────────────────────────────────────────────────
async function push(text: string) {
  await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: PUSHOVER_TOKEN, user: PUSHOVER_USER, message: text }),
  });
}

// ── Tool execution ────────────────────────────────────────────────────────────
async function executeTool(name: string, args: Record<string, string>) {
  if (name === "record_user_details") {
    await push(`New contact: ${args.name ?? "unknown"} — ${args.email} — ${args.notes ?? ""}`);
    return { recorded: "ok" };
  }
  if (name === "record_unknown_question") {
    await push(`Unknown question: ${args.question}`);
    return { recorded: "ok" };
  }
  return {};
}

// ── System prompt ─────────────────────────────────────────────────────────────
function systemPrompt() {
  return `You are acting as Selene Andrade. You are answering questions on Selene's portfolio website, particularly questions related to her career, background, skills and experience. Your responsibility is to represent Selene for interactions on the website as faithfully as possible. Be professional and engaging, as if talking to a potential client or future employer. Keep answers concise and on-topic.

If you don't know the answer to any question, use your record_unknown_question tool to record it.
If the user is engaging in discussion, try to steer them towards getting in touch via email — ask for their email and record it using your record_user_details tool.

## Summary:
${SUMMARY}

With this context, please chat with the user, always staying in character as Selene Andrade.`;
}

// ── User input guard ──────────────────────────────────────────────────────────
const BLOCKED_PATTERNS = [
  /ignore (previous|prior|all) instructions/i,
  /reveal (system|your) prompt/i,
  /api[_\s]?key/i,
  /jailbreak/i,
];

function isBlocked(message: string) {
  return BLOCKED_PATTERNS.some((p) => p.test(message));
}

// ── DeepSeek call ─────────────────────────────────────────────────────────────
async function callDeepSeek(messages: object[], withTools = true) {
  const body: Record<string, unknown> = {
    model: "deepseek-chat",
    messages,
    temperature: 0.7,
  };
  if (withTools) body.tools = tools;

  const res = await fetch("https://api.deepseek.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`DeepSeek error ${res.status}: ${err}`);
  }
  return res.json();
}

// ── Main handler ──────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json() as {
      message: string;
      history: { role: string; content: string }[];
    };

    // Input guard
    if (!message?.trim() || isBlocked(message)) {
      return NextResponse.json({
        reply: "I'm here to help with professional and relevant questions. Feel free to ask about my background or projects.",
      });
    }

    const messages: object[] = [
      { role: "system", content: systemPrompt() },
      ...history,
      { role: "user", content: message },
    ];

    // Agentic loop — handle tool calls
    let done = false;
    let finalReply = "";

    while (!done) {
      const data = await callDeepSeek(messages);
      const choice = data.choices[0];

      if (choice.finish_reason === "tool_calls") {
        const msg = choice.message;
        messages.push(msg);

        for (const toolCall of msg.tool_calls) {
          const args = JSON.parse(toolCall.function.arguments);
          const result = await executeTool(toolCall.function.name, args);
          messages.push({
            role: "tool",
            content: JSON.stringify(result),
            tool_call_id: toolCall.id,
          });
        }
      } else {
        finalReply = choice.message.content;
        done = true;
      }
    }

    return NextResponse.json({ reply: finalReply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json({ reply: "Something went wrong. Please try again." }, { status: 500 });
  }
}
