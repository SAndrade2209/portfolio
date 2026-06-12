"use client";

import { useState, useEffect } from "react";
import { ChatInterface } from "@/components/ChatInterface";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat-widget", handler);
    return () => window.removeEventListener("open-chat-widget", handler);
  }, []);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Chat with Selene's AI"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all hover:scale-105 hover:opacity-90 active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-background/50 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-background" />
        </span>
        <span className="text-[13px] font-semibold text-background tracking-tight">
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
        className={`fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl border border-border bg-background shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ width: "min(680px, calc(100vw - 3rem))", height: "min(80vh, 680px)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5 shrink-0 bg-surface">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-[13px] font-semibold text-foreground">Chat with Selene</span>
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

        {/* Chat UI */}
        <div className="flex-1 overflow-hidden">
          {open && <ChatInterface compact />}
        </div>
      </div>
    </>
  );
}
