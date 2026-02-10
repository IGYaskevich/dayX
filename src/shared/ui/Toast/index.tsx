import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { cn } from "@/shared/lib/cn";

export type ToastMessage = {
  id: string;
  title: string;
};

type ToastContextValue = {
  show: (title: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const show = useCallback((title: string) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setMessages((prev) => [...prev, { id, title }]);
    window.setTimeout(() => {
      setMessages((prev) => prev.filter((item) => item.id !== id));
    }, 2400);
  }, []);

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex flex-col gap-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "glass rounded-2xl px-4 py-3 text-sm text-ivory-900 shadow-soft animate-fadeUp border border-ivory-200/70"
            )}
          >
            {message.title}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
