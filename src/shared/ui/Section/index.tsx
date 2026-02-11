import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type Props = HTMLAttributes<HTMLElement> & {
  id?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
};

export const Section = ({ id, title, subtitle, className, children, ...props }: Props) => {
  return (
    <section
      id={id}
      className={cn("py-12 md:py-20", className)}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-8 md:mb-12">
          {title && <h2 className="type-title-lg text-ivory-900">{title}</h2>}
          {subtitle && <p className="type-body mt-2 text-ivory-800 max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};
