import { weddingConfig } from "@/shared/config/wedding";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { RsvpLink } from "@/features/rsvp-link";
import { AnchorNav } from "@/features/anchor-nav";
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
    <section className="relative pt-10 md:pt-10 pb-12 md:pb-20 overflow-hidden">
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
        <AnchorNav />
        <div className="grid gap-10">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-ivory-200/80 bg-ivory-50/80 px-4 py-1 text-xs uppercase tracking-[0.35em] text-ivory-900">
                {weddingConfig.labels.heroBadge}
              </div>
              <h1 className="font-display text-4xl md:text-6xl text-ivory-900 leading-tight text-shadow-soft">
                {weddingConfig.coupleNames}
              </h1>
              <p className="text-2xl md:text-3xl font-display text-gradient text-shadow-soft">{date}</p>
              {weddingConfig.heroSubtitle && (
                <p className="text-base md:text-lg text-ivory-800 max-w-xl">
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
                <p className="text-xs uppercase tracking-[0.2em] text-gold-600">
                  {weddingConfig.heroNote}
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
