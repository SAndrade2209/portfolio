import Link from "next/link";

export default function ScientificRAG() {
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
          Scientific Conversational RAG System
        </h2>

        <p className="text-gray-600 mb-8">
          Retrieval-Augmented Generation system designed for scientific and technical
          documents with hybrid retrieval, reranking, and guardrails.
        </p>

        {/* Problem */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Problem</h3>
          <p className="text-gray-700">
            Standard LLMs struggle with scientific documents due to rare terminology,
            multi-document reasoning, and conversational context.
          </p>
        </section>

        {/* Solution */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Solution</h3>
          <p className="text-gray-700">
            Designed a multi-stage RAG pipeline combining query expansion,
            hybrid search, and reranking to improve retrieval coverage and precision.
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Architecture</h3>

          <div className="grid gap-3 text-sm">
            <div className="p-3 bg-gray-100 rounded">User Query</div>
            <div className="p-3 bg-blue-100 rounded">Guardrail</div>
            <div className="p-3 bg-purple-100 rounded">Query Expansion</div>
            <div className="p-3 bg-yellow-100 rounded">Hybrid Retrieval</div>
            <div className="p-3 bg-orange-100 rounded">Reranking</div>
            <div className="p-3 bg-green-100 rounded">LLM Generation</div>
          </div>
        </section>

        {/* Key Decisions */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Key Decisions</h3>
          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Hybrid dense + BM25 retrieval to handle rare terms</li>
            <li>Multi-query expansion to improve recall</li>
            <li>Reranking against intent instead of raw query</li>
          </ul>
        </section>

        {/* Links */}
        <div className="flex gap-6 mt-10">
          <Link href="/" className="text-gray-600">
            ← Home
          </Link>

          <Link href="/projects" className="text-gray-600">
            Projects
          </Link>

          <a
            href="https://github.com/SAndrade2209/scientific-rag"
            className="text-blue-600"
            target="_blank"
          >
            GitHub →
          </a>
        </div>

      </section>
    </main>
  );
}