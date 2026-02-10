import type { HTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type Props = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...props }: Props) => {
  return <div className={cn("glass rounded-3xl p-6", className)} {...props} />;
};
