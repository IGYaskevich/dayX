import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type Props = HTMLAttributes<HTMLSpanElement>;

export const Badge = ({ className, ...props }: Props) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-medium text-sand-700",
        className
      )}
      {...props}
    />
  );
};
