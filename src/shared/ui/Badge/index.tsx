import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type Props = HTMLAttributes<HTMLSpanElement>;

export const Badge = ({ className, ...props }: Props) => {
  return (
    <span
      className={cn(
        "type-overline inline-flex items-center rounded-full border border-ivory-200/80 bg-ivory-50/70 px-3 py-1 text-ivory-900",
        className
      )}
      {...props}
    />
  );
};
