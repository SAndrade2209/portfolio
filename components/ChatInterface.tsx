"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

type Message = { role: "user" | "assistant"; content: string };

const STARTERS = [
  "What projects have you worked on?",
  "Tell me about your data engineering background",
  "What AI systems have you built?",
  "Are you open to freelance work?",
];

export function ChatInterface({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          history: next.slice(0, -1).map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  const showStarters = messages.length === 0;

  return (
    <div className={`flex flex-col bg-background ${compact ? "h-full" : "min-h-[600px] rounded-2xl border border-border"}`}>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
        {showStarters && (
          <div className="flex flex-col items-center justify-center h-full gap-5 py-8">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <p className="text-[14px] font-semibold text-foreground mb-1">Ask me anything</p>
              <p className="text-[13px] text-muted/70">About my background, projects, or experience</p>
            </div>
            <div className="grid grid-cols-1 gap-2 w-full max-w-sm">
              {STARTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-left rounded-xl border border-border bg-surface px-4 py-2.5 text-[13px] text-muted hover:text-primary hover:border-primary/30 hover:bg-surface-strong transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            {m.role === "assistant" && (
              <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-primary">S</span>
              </div>
            )}
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
                m.role === "user"
                  ? "bg-primary/15 text-foreground rounded-br-sm whitespace-pre-wrap"
                  : "bg-surface border border-border text-foreground/90 rounded-bl-sm prose-chat"
              }`}
            >
              {m.role === "assistant" ? (
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                    ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-0.5">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-0.5">{children}</ol>,
                    li: ({ children }) => <li className="text-foreground/85">{children}</li>,
                    code: ({ children }) => <code className="bg-surface-strong px-1.5 py-0.5 rounded text-[12px] text-primary font-mono">{children}</code>,
                    a: ({ href, children }) => <a href={href} target="_blank" rel="noreferrer" className="text-primary underline hover:opacity-75">{children}</a>,
                    h1: ({ children }) => <p className="font-semibold text-foreground mb-1">{children}</p>,
                    h2: ({ children }) => <p className="font-semibold text-foreground mb-1">{children}</p>,
                    h3: ({ children }) => <p className="font-semibold text-foreground mb-1">{children}</p>,
                  }}
                >
                  {m.content}
                </ReactMarkdown>
              ) : (
                m.content
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-primary">S</span>
            </div>
            <div className="bg-surface border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-muted/60 animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="shrink-0 border-t border-border px-4 py-3">
        <div className="flex items-end gap-2.5">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me something…"
            rows={1}
            className="flex-1 resize-none rounded-xl border border-border bg-surface px-4 py-2.5 text-[13px] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/40 transition-colors max-h-32 overflow-y-auto"
            style={{ lineHeight: "1.5" }}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="shrink-0 flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-background transition-all hover:opacity-85 disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Send"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <p className="mt-2 text-[11px] text-muted/40 text-center">Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}
