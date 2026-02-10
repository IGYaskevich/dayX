import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";
import { useToast } from "@/shared/ui/Toast";

type Props = {
  className?: string;
};

export const CopyAddress = ({ className }: Props) => {
  const { show } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(weddingConfig.venueAddress);
      show(weddingConfig.labels.copiedToast);
    } catch {
      show(weddingConfig.labels.copyErrorToast);
    }
  };

  return (
    <Button className={className} variant="ghost" onClick={handleCopy}>
      {weddingConfig.labels.copyAddressCta}
    </Button>
  );
};
