import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";

type Props = {
  className?: string;
};

export const RsvpLink = ({ className }: Props) => {
  const isExternal = /^https?:\/\//i.test(weddingConfig.rsvpUrl);

  return (
    <a
      href={weddingConfig.rsvpUrl}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <Button className={className} size="lg">
        {weddingConfig.labels.rsvpCta}
      </Button>
    </a>
  );
};
