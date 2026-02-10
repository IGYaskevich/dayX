import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

type Size = "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-skyrose-300 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-ivory-900 text-ivory-50 shadow-soft hover:shadow-card hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-ivory-50/80 text-ivory-900 border border-ivory-200/80 hover:bg-ivory-50",
  ghost: "text-ivory-900 hover:bg-ivory-100/60",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: Props) => {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
};
