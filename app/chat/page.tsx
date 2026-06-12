import { SiteHeader } from "@/components/SiteHeader";
import { ChatInterface } from "@/components/ChatInterface";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1100px] px-8 py-0 md:px-20">
        <SiteHeader active="/chat" />

        <section className="mb-8">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase mb-5">
            / ai agent
          </p>
          <h1 className="text-[2rem] font-bold leading-tight tracking-[-0.02em] text-foreground mb-3">
            Chat with Selene
          </h1>
          <p className="text-[15px] text-muted max-w-xl leading-relaxed">
            Ask me about my background, projects, or technical decisions. This agent knows everything about my work.
          </p>
        </section>

        <div className="rounded-2xl border border-border overflow-hidden" style={{ height: "680px" }}>
          <ChatInterface compact />
        </div>

        <p className="mt-3 text-[11px] text-muted/40 text-center">
          Powered by DeepSeek · Running natively on this site
        </p>

        <section className="border-t border-border pt-14 pb-20 mt-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-secondary uppercase mb-7">
            / get in touch directly
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:selene.andradelopez@gmail.com" className="text-[13px] text-muted hover:text-primary transition-colors">
              selene.andradelopez@gmail.com →
            </a>
            <a href="https://www.linkedin.com/in/selene-andrade-a23367163/" target="_blank" rel="noreferrer" className="text-[13px] text-muted hover:text-primary transition-colors">
              LinkedIn →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
