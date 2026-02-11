import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";

type Props = {
  className?: string;
};

export const OpenMap = ({ className }: Props) => {
  const href = weddingConfig.venueLinks?.twoGis ?? weddingConfig.mapUrl;

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Button className={className} variant="secondary">
        {weddingConfig.labels.mapCta}
      </Button>
    </a>
  );
};
