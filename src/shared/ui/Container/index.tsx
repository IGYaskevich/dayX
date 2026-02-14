import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type Props = HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, ...props }: Props) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}
      {...props}
    />
  );
};
