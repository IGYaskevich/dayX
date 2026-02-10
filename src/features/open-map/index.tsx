import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";

type Props = {
  className?: string;
};

export const OpenMap = ({ className }: Props) => {
  return (
    <a href={weddingConfig.mapUrl} target="_blank" rel="noreferrer">
      <Button className={className} variant="secondary">
        {weddingConfig.labels.mapCta}
      </Button>
    </a>
  );
};
