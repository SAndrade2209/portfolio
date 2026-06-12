 "use client";

export function ChatNudge() {
  return (
    <div className="mb-16 rounded-xl border border-border bg-surface p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-foreground leading-snug mb-1">
            Want to know more? Ask my AI directly.
          </p>
          <p className="text-[13px] leading-relaxed text-muted max-w-md">
            I built an AI agent that knows everything about my background, projects and experience.
          </p>
        </div>
      </div>

      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}
        className="shrink-0 inline-flex items-center gap-2.5 self-start sm:self-auto rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-[13px] font-medium text-primary transition-all hover:bg-primary/20 active:scale-95"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
        </span>
        Chat with my AI
      </button>
    </div>
  );
}

