import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { OpenMap } from "@/features/open-map";
import { Reveal } from "@/shared/ui/Reveal";
import { Button } from "@/shared/ui/Button";

export const LocationSection = ({ id }: { id: string }) => {
  return (
    <Section id={id} title={weddingConfig.labels.locationTitle}>
      <Reveal>
        <Card>
          <div className="section-grid md:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="type-overline text-ivory-600">{weddingConfig.labels.venueLabel}</p>
                <p className="type-title-md text-ivory-900">{weddingConfig.venueName}</p>
                {weddingConfig.venueLinks?.instagram && (
                  <a
                    href={weddingConfig.venueLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 type-body-sm text-ivory-900 hover:text-ivory-700"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                      <circle cx="12" cy="12" r="3.8" />
                      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    <span>{weddingConfig.venueLinks.instagramLabel ?? "Instagram"}</span>
                  </a>
                )}
              </div>
              <div className="flex flex-col gap-3 items-start">
                <OpenMap />
                {weddingConfig.venueLinks?.yandex && (
                  <a href={weddingConfig.venueLinks.yandex} target="_blank" rel="noreferrer">
                    <Button variant="secondary">{weddingConfig.labels.yandexMapCta}</Button>
                  </a>
                )}
              </div>
            </div>
            <figure className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-ivory-200/80 bg-ivory-100">
              {weddingConfig.venuePhoto ? (
                <img
                  src={weddingConfig.venuePhoto.url}
                  alt={weddingConfig.venuePhoto.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <figcaption className="h-full w-full grid place-items-center px-4 text-center type-overline text-ivory-600">
                  Фото локации
                </figcaption>
              )}
            </figure>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
};
