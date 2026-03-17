import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-5xl mx-auto">

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-12">
          <div className="font-semibold"></div>

          <div className="flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </nav>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl font-bold mb-3">Selene Andrade</h1>
          <p className="text-xl text-gray-600">
            Data Engineer · MSc Artificial Intelligence · LLM & RAG Systems
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Valencia, Spain
          </p>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Data Engineer with experience building production data pipelines using
            PySpark, Databricks, and AWS. Recently focused on LLM systems, designing
            retrieval-augmented generation pipelines with hybrid search, reranking,
            and guardrails.

            Interested in systems where data engineering and machine learning meet:
            reliable pipelines, retrieval systems, and applied AI.
          </p>
        </section>

        {/* Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Projects</h2>

          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow p-8 mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Scientific Conversational RAG System
            </h3>

            <p className="text-gray-600 mb-6">
              Retrieval-Augmented Generation system designed for scientific and
              technical documents. Combines hybrid retrieval (dense + BM25),
              multi-query expansion, and reranking to improve answer accuracy
              in multi-document and conversational queries.
            </p>
            <div className="mb-6">
              <p className="font-semibold mb-2">Key Contributions:</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Hybrid search (dense + BM25) using Qdrant</li>
                <li>Multi-query expansion to improve recall</li>
                <li>Cross-encoder reranking for precise relevance scoring</li>
                <li>Guardrail layer for safety and query validation</li>
                <li>Conversational memory with SQLite / Redis persistence</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-1">Tech Stack:</p>
              <p className="text-gray-700">
                OpenAI · BGE-M3 · Qdrant · LangChain · Python · Streamlit
              </p>
            </div>

            <div className="flex gap-4 mt-4">

              <a
                href="https://github.com/SAndrade2209/scientific-rag"
                className="text-gray-500"
                target="_blank" 
              >
                GitHub
              </a>
              <Link
                href="/projects/scientific-rag"
                className="text-blue-600 font-medium"
              >
                View Project →
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow p-8 mb-8">
            <h3 className="text-2xl font-bold mb-3">
              Document Summarization Pipeline (RAG)
            </h3>

            <p className="text-gray-600 mb-4">
              Pipeline for summarizing large collections of documents (+100 PDFs)
              using embeddings, vector search, and LLM-based generation.
            </p>

            <div className="mb-4">
              <p className="font-semibold mb-1">What it does:</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Processes large document sets into structured chunks</li>
                <li>Retrieves relevant context using vector similarity</li>
                <li>Generates concise summaries using LLMs</li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-1">Tech Stack:</p>
              <p className="text-gray-700">
                Python · OpenAI API · Embeddings · Vector Search
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <Link
                href="/projects/summarization"
                className="text-blue-600 font-medium"
              >
                View Project →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">Email: selene.andradelopez@gmail.com</p>
          <a
                href="https://www.linkedin.com/in/selene-andrade-a23367163/"
                className="text-gray-700"
                target="_blank" 
              >
                linkedin.com/in/selene-andrade-a23367163
              </a>
        </section>

      </section>
    </main>
  );
}