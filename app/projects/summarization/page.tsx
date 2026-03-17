import Link from "next/link";

export default function SummarizationProject() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-5xl mx-auto">

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-12">
          <div className="font-semibold">Selene Andrade</div>

          <div className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </nav>

        {/* Header */}
        {/*<header className="mb-16">
          <h1 className="text-5xl font-bold mb-3">Projects</h1>
          <p className="text-gray-600">
            Selected work in data engineering and AI systems
          </p>
        </header>*/}

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          AI Literature Synthesis Pipeline
        </h2>

        <p className="text-gray-600 mb-8">
          Automated pipeline for summarizing and synthesizing large collections
          of technical documents into structured reports using LLMs, evaluation
          loops, and iterative refinement.
        </p>

        {/* Problem */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Problem</h3>
          <p className="text-gray-700">
            Reviewing large collections of technical documents is time-consuming and
            error-prone. Traditional summarization approaches often miss context,
            introduce hallucinations, or fail to maintain consistency across documents.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Solution</h3>
          <p className="text-gray-700">
            Designed a multi-stage pipeline that processes documents in batches,
            generates summaries, evaluates them against quality criteria, and
            iteratively refines outputs before combining them into a final report.
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Architecture</h3>

          <div className="grid gap-3 text-sm">
            <div className="p-3 bg-gray-100 rounded">PDF Documents</div>

            <div className="p-3 bg-purple-100 rounded">
              Chunking + Vector Store
            </div>

            <div className="p-3 bg-blue-100 rounded">
              Batch Summarization (LLM)
            </div>

            <div className="p-3 bg-yellow-100 rounded">
              Evaluation (accuracy, completeness, tone)
            </div>

            <div className="p-3 bg-orange-100 rounded">
              Correction Loop (LLM refinement)
            </div>

            <div className="p-3 bg-green-100 rounded">
              Combination into Final Report
            </div>

            <div className="p-3 bg-gray-200 rounded">
              Final Evaluation + Selection
            </div>
          </div>
        </section>

        {/* Key Design Decisions */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Key Design Decisions</h3>

          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Batch-based processing to handle large document sets</li>
            <li>Evaluation-driven refinement to reduce hallucinations</li>
            <li>Separation of summarization and combination phases</li>
            <li>Iterative correction loops with quality thresholds</li>
            <li>Use of vector stores for scalable document retrieval</li>
          </ul>
        </section>

        {/* Why it works */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Why this approach works</h3>

          <p className="text-gray-700">
            Instead of relying on a single LLM pass, the system introduces evaluation
            and correction loops that enforce quality constraints such as factual
            accuracy, completeness, and neutral tone. This improves reliability when
            working with large document collections.
          </p>
        </section>

        {/* Tech */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
          <p className="text-gray-700">
            Python · OpenAI API · Vector Stores · LLM Evaluation Pipelines
          </p>
        </section>

        {/* Navigation */}
        <div className="flex gap-6 mt-10">
          <Link href="/" className="text-gray-600">
            ← Home
          </Link>

          <Link href="/projects" className="text-gray-600">
            Projects
          </Link>
        </div>

      </section>
    </main>
  );
}