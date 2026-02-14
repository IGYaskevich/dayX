import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Reveal } from "@/shared/ui/Reveal";

export const DresscodeSection = ({ id }: { id: string }) => {
  const examples = (weddingConfig.dresscodeExamples ?? []).slice(0, 2);
  const hasExamples = examples.length > 0;

  return (
    <Section id={id} title={weddingConfig.labels.dresscodeTitle}>
      <Reveal>
        <Card className="space-y-7">
          <p className="text-center type-title-sm text-ivory-900 leading-snug max-w-4xl mx-auto">
            {weddingConfig.dresscodeText}
          </p>
          <div className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-2 md:w-fit md:flex-nowrap md:gap-0 md:-space-x-4">
            {weddingConfig.dresscodePalette.map((color, index) => (
              <span
                key={color}
                className="h-11 w-11 sm:h-12 sm:w-12 md:h-16 md:w-16 rounded-full border border-ivory-600/45 shadow-soft opacity-95 transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: color,
                  zIndex: weddingConfig.dresscodePalette.length - index,
                }}
                aria-label={color}
              />
            ))}
          </div>
          {weddingConfig.labels.dresscodeHint && (
            <p className="text-center type-body text-ivory-800 max-w-3xl mx-auto leading-snug">
              <div>{weddingConfig.labels.dresscodeHintGirls}</div>
              <div>{weddingConfig.labels.dresscodeHint}</div>
            </p>
          )}
          {hasExamples && (
            <div className="mx-auto grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {examples.map((image) => (
                <figure
                  key={image.url}
                  className="rounded-3xl overflow-hidden border border-ivory-300/80 bg-ivory-100 shadow-soft self-start"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto object-contain block transition-transform duration-500 hover:scale-[1.01]"
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
