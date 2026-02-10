import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";

type Props = {
  className?: string;
};

export const RsvpLink = ({ className }: Props) => {
  return (
    <a href={weddingConfig.rsvpUrl} target="_blank" rel="noreferrer">
      <Button className={className} size="lg">
        {weddingConfig.labels.rsvpCta}
      </Button>
    </a>
  );
};
