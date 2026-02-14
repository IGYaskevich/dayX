import type { ReactNode } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { cn } from "@/shared/lib/cn";

export type ToastMessage = {
  id: string;
  title: string;
  kind?: "success" | "error" | "info";
};

type ToastContextValue = {
  show: (title: string, kind?: "success" | "error" | "info") => void;
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

  const show = useCallback(
    (title: string, kind: "success" | "error" | "info" = "info") => {
      const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      setMessages((prev) => [...prev, { id, title, kind }]);
      window.setTimeout(() => {
        setMessages((prev) => prev.filter((item) => item.id !== id));
      }, 2400);
    },
    [],
  );

  const value = useMemo(() => ({ show }), [show]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex flex-col gap-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "rounded-2xl px-4 py-3 type-body-sm shadow-soft animate-fadeUp border",
              message.kind === "success" &&
                "border-emerald-300 bg-emerald-50/95 text-emerald-900",
              message.kind === "error" &&
                "border-rose-300 bg-rose-50/95 text-rose-900",
              (!message.kind || message.kind === "info") &&
                "glass text-ivory-900 border-ivory-200/70",
            )}
          >
            {message.title}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
