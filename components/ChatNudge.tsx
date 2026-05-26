 "use client";

export function ChatNudge() {
  return (
    <div className="mb-12 relative overflow-hidden rounded-2xl border border-secondary/25 bg-linear-to-br from-secondary/8 via-primary/5 to-transparent px-8 py-7">
      {/* decorative blurred blob */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          {/* icon */}
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/15">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#3A7CA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <div>
            <p className="text-[14.5px] font-semibold text-primary leading-snug mb-1">
              Want to know more? Ask my AI directly.
            </p>
            <p className="text-[13px] leading-relaxed text-foreground/55 max-w-md">
              I built an AI agent that knows everything about my background, projects and experience.
            </p>
          </div>
        </div>

        {/* button — dispatches a custom event the ChatWidget listens to */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-chat-widget"))}
          className="shrink-0 inline-flex items-center gap-2.5 self-start sm:self-auto rounded-full bg-primary px-6 py-2.5 text-[13px] font-semibold text-white shadow-[0_2px_10px_rgba(30,58,95,0.28)] transition-all hover:shadow-[0_4px_18px_rgba(30,58,95,0.38)] hover:-translate-y-0.5 active:scale-95"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Chat with my AI
        </button>
      </div>
    </div>
  );
}

