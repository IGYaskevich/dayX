import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";
import { cn } from "@/shared/lib/cn";

type Props = {
  className?: string;
  fullWidth?: boolean;
};

export const RsvpLink = ({ className, fullWidth = false }: Props) => {
  const isExternal = /^https?:\/\//i.test(weddingConfig.rsvpUrl);

  return (
    <a
      className={cn(fullWidth ? "block w-full" : "inline-flex")}
      href={weddingConfig.rsvpUrl}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <Button className={cn(fullWidth && "w-full", className)} size="lg">
        {weddingConfig.labels.rsvpCta}
      </Button>
    </a>
  );
};
