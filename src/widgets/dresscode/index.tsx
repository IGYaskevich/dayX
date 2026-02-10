import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Reveal } from "@/shared/ui/Reveal";

export const DresscodeSection = ({ id }: { id: string }) => {
  return (
    <Section id={id} title={weddingConfig.labels.dresscodeTitle}>
      <Reveal>
        <Card className="space-y-4">
          <p className="text-sm text-sand-700">{weddingConfig.dresscodeText}</p>
          <div className="flex flex-wrap gap-3">
            {weddingConfig.dresscodePalette.map((color) => (
              <span
                key={color}
                className="h-9 w-9 rounded-full border border-white/70 shadow-soft"
                style={{ backgroundColor: color }}
                aria-label={color}
              />
            ))}
          </div>
        </Card>
      </Reveal>
    </Section>
  );
};
