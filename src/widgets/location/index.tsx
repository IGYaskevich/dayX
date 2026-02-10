import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { OpenMap } from "@/features/open-map";
import { CopyAddress } from "@/features/copy-address";
import { Reveal } from "@/shared/ui/Reveal";

export const LocationSection = ({ id }: { id: string }) => {
  return (
    <Section id={id} title={weddingConfig.labels.locationTitle}>
      <Reveal>
        <Card className="section-grid md:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ivory-600">
              {weddingConfig.labels.venueLabel}
            </p>
            <p className="text-2xl font-display text-ivory-900">{weddingConfig.venueName}</p>
            <p className="text-sm text-ivory-900">
              {weddingConfig.labels.addressLabel}: {weddingConfig.venueAddress}
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <OpenMap />
            <CopyAddress />
          </div>
        </Card>
      </Reveal>
    </Section>
  );
};
