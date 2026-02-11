import { useEffect, useState } from "react";
import { weddingConfig } from "@/shared/config/wedding";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { RsvpLink } from "@/features/rsvp-link";
import { AnchorNav } from "@/features/anchor-nav";
import { formatDate } from "@/shared/lib/date";
import { Reveal } from "@/shared/ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { BackgroundCarousel } from "@/shared/ui/BackgroundCarousel";
import { cn } from "@/shared/lib/cn";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFloatingCta, setShowMobileFloatingCta] = useState(false);
  const tone = "light";
  const date = formatDate(weddingConfig.eventDate, weddingConfig.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 400], [0, 120]);
  const carouselConfig = weddingConfig.backgroundCarousel;
  const carouselEnabled = Boolean(
    carouselConfig?.enabled && carouselConfig.images && carouselConfig.images.length > 0
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowMobileFloatingCta(false);
      return;
    }
    const onScroll = () => {
      const threshold = window.innerHeight * 0.9;
      setShowMobileFloatingCta(window.scrollY >= threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);

  return (
    <section
      className="relative min-h-[100svh] md:pt-10 pb-12 md:pb-20 overflow-hidden"
      data-tone={tone}
    >
      <motion.div
        className="absolute inset-0 parallax-layer"
        style={isMobile ? undefined : { y: backgroundY }}
        aria-hidden="true"
      >
        {carouselEnabled ? (
          <BackgroundCarousel
            images={carouselConfig?.images ?? []}
            mobileImages={carouselConfig?.mobileImages}
            intervalMs={carouselConfig?.intervalMs}
            transitionMs={carouselConfig?.transitionMs}
            overlayOpacity={carouselConfig?.overlayOpacity}
            zoom={carouselConfig?.zoom}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${weddingConfig.backgrounds.hero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
            }}
          />
        )}
      </motion.div>

      <Container className="relative">
        <AnchorNav />
        <div className="grid gap-10 items-start min-h-[calc(100svh-6rem)]">
          <Reveal>
            <div className="space-y-6 max-w-xl md:max-w-2xl">
              <div
                className={cn(
                  "inline-flex items-center rounded-full border px-4 py-1 text-xs uppercase tracking-[0.22em] transition-colors duration-500",
                  tone === "light"
                    ? "border-white/40 bg-black/30 text-ivory-50"
                    : "border-ivory-200/80 bg-ivory-50/80 text-ivory-900"
                )}
              >
                {weddingConfig.labels.heroBadge}
              </div>
              <h1
                className={cn(
                  "font-display text-4xl md:text-6xl leading-tight text-shadow-readability transition-colors duration-500",
                  tone === "light" ? "text-ivory-50" : "text-ivory-900"
                )}
              >
                {weddingConfig.coupleNames}
              </h1>
              <p
                className={cn(
                  "text-2xl md:text-3xl font-display transition-colors duration-500",
                  tone === "light" ? "date-outline-light" : "date-outline"
                )}
              >
                {date}
              </p>
              {weddingConfig.heroSubtitle && (
                <p
                  className={cn(
                    "text-base md:text-lg max-w-xl text-shadow-readability transition-colors duration-500",
                    tone === "light" ? "text-ivory-50" : "text-ivory-900"
                  )}
                >
                  {weddingConfig.heroSubtitle}
                </p>
              )}
            </div>
          </Reveal>
        </div>
        <div className="hidden md:block absolute inset-x-0 bottom-8">
          <div className="flex justify-end">
            <div className="flex flex-col items-end gap-4 text-right">
              <div className="flex gap-3">
                <RsvpLink />
                <a href={`#${weddingConfig.sections.location}`}>
                  <Button variant="secondary" size="lg">
                    {weddingConfig.labels.locationCta}
                  </Button>
                </a>
              </div>
              {weddingConfig.heroNote && (
                <p className="text-xs uppercase tracking-[0.2em] text-ivory-50/90 text-shadow-readability">
                  {weddingConfig.heroNote}
                </p>
              )}
            </div>
          </div>
        </div>
        {!showMobileFloatingCta && (
          <div className="md:hidden absolute inset-x-0 bottom-6 z-30 flex justify-center pointer-events-none">
            <div className="rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ivory-50/90 text-shadow-readability">
                Прокрутите вниз
              </p>
            </div>
          </div>
        )}
      </Container>
      {showMobileFloatingCta && (
        <div className="md:hidden fixed inset-x-0 bottom-5 z-40 px-4 pb-[env(safe-area-inset-bottom)]">
          <div className="mx-auto w-full max-w-[460px] rounded-3xl border border-white/15 bg-black/45 backdrop-blur-md px-4 py-3 shadow-soft">
            <div className="flex flex-col gap-2 items-center text-center">
              {weddingConfig.heroNote && (
                <p className="text-xs uppercase tracking-[0.2em] text-ivory-50/90 text-shadow-readability">
                  {weddingConfig.heroNote}
                </p>
              )}
              <RsvpLink className="w-full" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
