import type { HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/shared/lib/cn";

type Props = HTMLMotionProps<"div">;

export const Reveal = ({ className, children, ...props }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
