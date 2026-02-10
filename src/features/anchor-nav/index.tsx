import { useState } from "react";
import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";

export const AnchorNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky pb-6 z-40">
      <div className="glass rounded-full px-3 py-2 flex items-center justify-between gap-3 border border-ivory-200/80">
        <span className="text-xs uppercase tracking-[0.2em] text-ivory-800">
          {weddingConfig.labels.navBadge}
        </span>
        <div className="hidden md:flex items-center gap-4">
          {weddingConfig.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-ivory-800 hover:text-ivory-900"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="md" onClick={() => setOpen((prev) => !prev)}>
            {open ? weddingConfig.labels.menuClose : weddingConfig.labels.menuOpen}
          </Button>
        </div>
      </div>
      {open && (
        <div className="mt-2 glass rounded-2xl p-4 md:hidden border border-ivory-200/80">
          <div className="flex flex-col gap-2">
            {weddingConfig.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-ivory-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
