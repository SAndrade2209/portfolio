"use client";

import { useState } from "react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Chat with Selene's AI"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 shadow-[0_4px_20px_rgba(30,58,95,0.35)] transition-all hover:scale-105 hover:shadow-[0_6px_28px_rgba(30,58,95,0.45)] active:scale-95"
      >
        {/* Pulse ring */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
        </span>
        <span className="text-[13px] font-semibold text-white tracking-tight">
          Chat with my AI
        </span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Popup panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl border border-border bg-surface shadow-[0_8px_40px_rgba(0,0,0,0.18)] transition-all duration-300 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ width: "min(460px, calc(100vw - 2rem))", height: "min(620px, calc(100vh - 5rem))" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary/60 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
            </span>
            <span className="text-[13px] font-semibold text-primary">Chat with Selene</span>
            <span className="rounded-full bg-surface-strong px-2 py-0.5 text-[10px] text-muted/70 font-medium tracking-wide uppercase">AI</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full text-muted/60 transition-colors hover:bg-surface-strong hover:text-primary"
            aria-label="Close chat"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* iframe */}
        <div className="flex-1 overflow-hidden rounded-b-2xl">
          {open && (
            <iframe
              src="https://seleneandrade22-career-conversation.hf.space"
              className="h-full w-full border-0"
              allow="microphone"
              title="Chat with Selene — AI Career Agent"
            />
          )}
        </div>
      </div>
    </>
  );
}

