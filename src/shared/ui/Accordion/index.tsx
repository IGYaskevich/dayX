import { useState } from "react";
import { cn } from "@/shared/lib/cn";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  items: AccordionItem[];
};

export const Accordion = ({ items }: Props) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div key={item.id} className="glass rounded-2xl">
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left text-ivory-900 font-body"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              type="button"
            >
              <span className="type-body font-medium text-ivory-900">
                {item.title}
              </span>
              <span className="text-ivory-600">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className={cn(
                "px-5 pb-4 type-body-sm text-ivory-800 transition-all",
                isOpen ? "block" : "hidden",
              )}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
