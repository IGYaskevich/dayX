import { useMemo } from "react";
import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Reveal } from "@/shared/ui/Reveal";

export const DresscodeSection = ({ id }: { id: string }) => {
  const examples = weddingConfig.dresscodeExamples ?? [];
  const hasExamples = examples.length > 0;
  const loopedExamples = useMemo(
    () => (examples.length > 1 ? [...examples, ...examples] : examples),
    [examples]
  );

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
            <div className="dresscode-marquee ">
              <div className="dresscode-marquee-track">
                {loopedExamples.map((image, index) => (
                  <figure
                    key={`${image.url}-${index}`}
                    className={`dresscode-feed-tile ${
                      index % 3 === 0 ? "dresscode-feed-tile-wide" : "dresscode-feed-tile-narrow"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="h-full w-full object-cover block"
                      loading="lazy"
                    />
                  </figure>
                ))}
              </div>
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
