import Link from "next/link";

export default function Projects() {
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
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-3">Projects</h1>
          <p className="text-gray-600">
            Independet work in data engineering and AI systems
          </p>
        </header>

        {/* Projects */}
        <div className="space-y-6">

          {/* Project 1 */}
          <Link
            href="/projects/scientific-rag"
            className="block p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              Scientific Conversational RAG System
            </h2>
            <p className="text-gray-600 mt-2">
              Multi-stage retrieval system with hybrid search, reranking, and guardrails.
            </p>
          </Link>

          {/* Project 2 */}
          <Link
            href="/projects/summarization"
            className="block p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              AI Literature Synthesis Pipeline
            </h2>
            <p className="text-gray-600 mt-2">
              LLM pipeline with evaluation and iterative refinement for large document sets.
            </p>
          </Link>

        </div>

      </section>
    </main>
  );
}