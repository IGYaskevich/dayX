import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type Props = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-card border border-ivory-200/70",
        className
      )}
      {...props}
    />
  );
};
