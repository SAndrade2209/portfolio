import { SiteHeader } from "@/components/SiteHeader";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1060px] px-6 py-8 md:px-16">
        <SiteHeader active="/chat" />

        <div className="mb-10">
          <p className="mb-3 text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase">
            AI Career Agent
          </p>
          <h1 className="text-[2rem] font-bold leading-snug tracking-[-0.02em] text-primary md:text-[2.5rem]">
            Chat with Selene
          </h1>
          <p className="mt-4 text-[15px] leading-[1.8] text-foreground/55 max-w-2xl">
            Ask me about my background, projects, technical decisions, or anything career-related. This agent is built with DeepSeek and knows everything about my work.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface overflow-hidden" style={{ height: "720px" }}>
          <iframe
            src="https://seleneandrade22-career-conversation.hf.space"
            className="w-full h-full border-0"
            allow="microphone"
            title="Chat with Selene — AI Career Agent"
          />
        </div>

        <p className="mt-4 text-[12px] text-muted/50 text-center">
          Powered by DeepSeek · Deployed on{" "}
          <a
            href="https://huggingface.co/spaces/SeleneAndrade22/career_conversation"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Hugging Face Spaces
          </a>
        </p>

        <section className="border-t border-border pt-20 pb-24 mt-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary/70 uppercase mb-8">
            Get in touch directly
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:selene.andradelopez@gmail.com"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
            >
              selene.andradelopez@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/selene-andrade-a23367163/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-3.5 text-[13px] text-foreground/60 transition-all hover:text-primary hover:border-primary/20 hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

