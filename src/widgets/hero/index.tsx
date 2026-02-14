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
import { HandwriteTitle } from "@/shared/ui/HandwriteTitle";

export const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFloatingCta, setShowMobileFloatingCta] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
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
    carouselConfig?.enabled &&
    carouselConfig.images &&
    carouselConfig.images.length > 0,
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
      const isPastHero = window.scrollY >= threshold;
      const rsvpSection = document.getElementById(weddingConfig.sections.rsvp);
      const rsvpRect = rsvpSection?.getBoundingClientRect();
      const isRsvpInView = Boolean(
        rsvpRect &&
        rsvpRect.top <= window.innerHeight * 0.8 &&
        rsvpRect.bottom >= 120,
      );
      setShowMobileFloatingCta(isPastHero && !isRsvpInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    const onAudioState = (event: Event) => {
      const detail = (event as CustomEvent<{ isPlaying: boolean }>).detail;
      if (!detail) return;
      setIsMusicPlaying(Boolean(detail.isPlaying));
    };

    window.addEventListener(
      "wedding-audio-state",
      onAudioState as EventListener,
    );
    window.dispatchEvent(new CustomEvent("wedding-audio-request-state"));

    return () => {
      window.removeEventListener(
        "wedding-audio-state",
        onAudioState as EventListener,
      );
    };
  }, []);

  const toggleMusic = () => {
    window.dispatchEvent(new CustomEvent("wedding-audio-toggle"));
  };

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
              <HandwriteTitle text={weddingConfig.coupleNames} tone={tone} />
              <p
                className={cn(
                  "hero-write-reveal text-2xl md:text-3xl font-display transition-colors duration-500",
                  tone === "light"
                    ? "text-ivory-50 text-shadow-readability"
                    : "text-ivory-900 text-shadow-soft",
                )}
              >
                {date}
              </p>
              {weddingConfig.heroSubtitle && (
                <p
                  className={cn(
                    "hero-write-reveal font-display text-xl md:text-2xl max-w-xxl leading-snug text-shadow-readability transition-colors duration-500",
                    tone === "light" ? "text-ivory-50" : "text-ivory-900",
                  )}
                >
                  {weddingConfig.heroSubtitle}
                </p>
              )}
              <div
                className={cn(
                  "hero-write-reveal type-overline inline-flex items-center rounded-full border px-4 py-1 transition-colors duration-500",
                  tone === "light"
                    ? "border-white/40 bg-black/30 text-ivory-50"
                    : "border-ivory-200/80 bg-ivory-50/80 text-ivory-900",
                )}
              >
                {weddingConfig.labels.heroBadge}
              </div>
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
                <p className="type-overline text-ivory-50/90 text-shadow-readability">
                  {weddingConfig.heroNote}
                </p>
              )}
            </div>
          </div>
        </div>
        {!showMobileFloatingCta && (
          <div className="md:hidden absolute inset-x-0 bottom-6 z-30 flex justify-center px-4">
            <div className="flex items-center gap-2">
              <div className="pointer-events-none rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-sm">
                <p className="type-overline text-ivory-50/90 text-shadow-readability text-[11px]">
                  Прокрутите вниз
                </p>
              </div>
              <div
                onClick={toggleMusic}
                className="rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-sm"
              >
                {isMusicPlaying ? (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                  >
                    <rect
                      x="6"
                      y="5"
                      width="4"
                      height="14"
                      rx="1"
                      fill="#F6F3EF"
                    />
                    <rect
                      x="14"
                      y="5"
                      width="4"
                      height="14"
                      rx="1"
                      fill="#F6F3EF"
                    />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                  >
                    <path
                      d="M8 5.5C8 4.72 8.85 4.24 9.52 4.64L19.08 10.15C19.74 10.53 19.74 11.47 19.08 11.85L9.52 17.36C8.85 17.76 8 17.28 8 16.5V5.5Z"
                      fill="#F6F3EF"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        )}
      </Container>
      {showMobileFloatingCta && (
        <div className="md:hidden fixed inset-x-0 bottom-5 z-40 px-4 pb-[env(safe-area-inset-bottom)]">
          <div className="mx-auto w-full max-w-[460px] rounded-3xl border border-white/15 bg-black/45 backdrop-blur-md px-4 py-3 shadow-soft">
            <div className="flex flex-col gap-2 items-center text-center">
              {weddingConfig.heroNote && (
                <p className="type-overline text-ivory-50/90 text-shadow-readability">
                  {weddingConfig.heroNote}
                </p>
              )}
              <div className="flex w-full items-stretch gap-2">
                <RsvpLink
                  fullWidth
                  className="h-12 text-[clamp(0.95rem,4vw,1.15rem)] px-4"
                />
                <Button
                  type="button"
                  variant="primary"
                  onClick={toggleMusic}
                  aria-label={
                    isMusicPlaying ? "Пауза музыки" : "Воспроизвести музыку"
                  }
                  title={
                    isMusicPlaying ? "Пауза музыки" : "Воспроизвести музыку"
                  }
                  className="h-12 w-14 min-w-14 shrink-0 rounded-full p-0"
                >
                  {isMusicPlaying ? (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-8 w-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                    >
                      <rect
                        x="6"
                        y="5"
                        width="4"
                        height="14"
                        rx="1"
                        fill="#F6F3EF"
                      />
                      <rect
                        x="14"
                        y="5"
                        width="4"
                        height="14"
                        rx="1"
                        fill="#F6F3EF"
                      />
                    </svg>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-8 w-8 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                    >
                      <path
                        d="M8 5.5C8 4.72 8.85 4.24 9.52 4.64L19.08 10.15C19.74 10.53 19.74 11.47 19.08 11.85L9.52 17.36C8.85 17.76 8 17.28 8 16.5V5.5Z"
                        fill="#F6F3EF"
                      />
                    </svg>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
