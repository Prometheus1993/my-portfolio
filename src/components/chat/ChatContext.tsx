"use client";

import React, { createContext, useCallback, useContext, useState } from "react";

interface ChatPanelCtx {
  open: boolean;
  setOpen: (v: boolean) => void;
  toggle: () => void;
  /** A message queued to be sent once the panel is open (set by `ask`). */
  pendingPrompt: string | null;
  /** Open the panel and queue `text` to be sent to the assistant. */
  ask: (text: string) => void;
  clearPending: () => void;
}

const Ctx = createContext<ChatPanelCtx | null>(null);

/**
 * Shared open state for the floating assistant, so other parts of the page (the
 * Ask section) can open it and queue a prompt. `open`/`pendingPrompt` are inert
 * on the server and first client render, so there is no hydration mismatch.
 */
export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string | null>(null);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const ask = useCallback((text: string) => {
    setPendingPrompt(text);
    setOpen(true);
  }, []);
  const clearPending = useCallback(() => setPendingPrompt(null), []);

  return (
    <Ctx.Provider value={{ open, setOpen, toggle, pendingPrompt, ask, clearPending }}>
      {children}
    </Ctx.Provider>
  );
}

export function useChatPanel(): ChatPanelCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useChatPanel must be used within a ChatProvider");
  }
  return ctx;
}
