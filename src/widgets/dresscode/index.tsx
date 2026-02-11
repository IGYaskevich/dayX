import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Reveal } from "@/shared/ui/Reveal";
import { cn } from "@/shared/lib/cn";

export const DresscodeSection = ({ id }: { id: string }) => {
  const examples = (weddingConfig.dresscodeExamples ?? []).slice(0, 6);
  const hasExamples = examples.length > 0;

  return (
    <Section id={id} title={weddingConfig.labels.dresscodeTitle}>
      <Reveal>
        <Card className="space-y-7">
          <p className="text-center type-title-sm text-ivory-900 leading-snug max-w-4xl mx-auto">
            {weddingConfig.dresscodeText}
          </p>
          <div className="mx-auto flex w-fit items-center justify-center -space-x-3 md:-space-x-4">
            {weddingConfig.dresscodePalette.map((color, index) => (
              <span
                key={color}
                className="h-14 w-14 md:h-16 md:w-16 rounded-full border border-ivory-600/45 shadow-soft opacity-95 transition-transform duration-300 hover:scale-105"
                style={{ backgroundColor: color, zIndex: weddingConfig.dresscodePalette.length - index }}
                aria-label={color}
              />
            ))}
          </div>
          {weddingConfig.labels.dresscodeHint && (
            <p className="text-center type-body text-ivory-800 max-w-3xl mx-auto leading-snug">
              {weddingConfig.labels.dresscodeHint}
            </p>
          )}
          {hasExamples && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {examples.map((image, index) => (
                <figure
                  key={image.url}
                  className={cn(
                    "rounded-3xl overflow-hidden border border-ivory-300/80 bg-ivory-100 shadow-soft",
                    "aspect-[3/4]",
                    (index === 1 || index === 4) && "md:translate-y-4"
                  )}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-full w-full object-cover block transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )}
          {weddingConfig.labels.dresscodeCarouselHint && (
            <p className="text-center type-overline text-ivory-700">
              {weddingConfig.labels.dresscodeCarouselHint}
            </p>
          )}
        </Card>
      </Reveal>
    </Section>
  );
};
