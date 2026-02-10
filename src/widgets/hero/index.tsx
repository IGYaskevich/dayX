import { weddingConfig } from "@/shared/config/wedding";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { RsvpLink } from "@/features/rsvp-link";
import { formatDate } from "@/shared/lib/date";
import { Reveal } from "@/shared/ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const date = formatDate(weddingConfig.eventDate, weddingConfig.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <section className="relative pt-10 md:pt-16 pb-12 md:pb-20 overflow-hidden">
      <motion.div
        className="absolute inset-0 parallax-layer"
        style={{
          y: backgroundY,
          backgroundImage: `url(${weddingConfig.backgrounds.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/30" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-white/70 bg-white/60 px-4 py-1 text-xs uppercase tracking-[0.35em] text-sand-600">
                {weddingConfig.labels.heroBadge}
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-sand-900 leading-tight">
                {weddingConfig.coupleNames}
              </h1>
              <p className="text-2xl md:text-3xl font-display text-gradient">{date}</p>
              {weddingConfig.heroSubtitle && (
                <p className="text-base md:text-lg text-sand-700 max-w-xl">
                  {weddingConfig.heroSubtitle}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <RsvpLink />
                <a href={`#${weddingConfig.sections.location}`}>
                  <Button variant="secondary" size="lg">
                    {weddingConfig.labels.locationCta}
                  </Button>
                </a>
              </div>
              {weddingConfig.heroNote && (
                <p className="text-xs uppercase tracking-[0.2em] text-sand-500">
                  {weddingConfig.heroNote}
                </p>
              )}
            </div>
          </Reveal>
          <Reveal className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <motion.div
                className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-blush-200/70 blur-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-8 right-6 h-28 w-28 rounded-full bg-skyrose-200/70 blur-2xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="glass rounded-[2.5rem] p-6 text-center space-y-4">
                <div className="mx-auto h-36 w-36 rounded-full bg-white/70 shadow-soft overflow-hidden">
                  {weddingConfig.photos?.[0] ? (
                    <img
                      src={weddingConfig.photos[0].url}
                      alt={weddingConfig.photos[0].alt}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-blush-200 via-white to-skyrose-200" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-sand-600">{weddingConfig.labels.startTimeLabel}</p>
                  <p className="text-2xl font-display text-sand-900">{weddingConfig.startTime}</p>
                </div>
                <div className="text-xs text-sand-500">{weddingConfig.venueName}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
