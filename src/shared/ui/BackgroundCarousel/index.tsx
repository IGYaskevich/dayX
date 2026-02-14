import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/shared/lib/cn";

type ImageItem = {
  url: string;
  alt?: string;
};

type Props = {
  images: ImageItem[];
  mobileImages?: ImageItem[];
  intervalMs?: number;
  transitionMs?: number;
  overlayOpacity?: number;
  zoom?: boolean;
  className?: string;
};

export const BackgroundCarousel = ({
  images,
  mobileImages,
  intervalMs = 7000,
  transitionMs = 1200,
  overlayOpacity = 0.3,
  zoom = true,
  className,
}: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const safeImages = useMemo(() => images.filter((item) => item.url), [images]);
  const safeMobileImages = useMemo(
    () => (mobileImages ?? []).filter((item) => item.url),
    [mobileImages],
  );
  const activeImages =
    isMobile && safeMobileImages.length > 0 ? safeMobileImages : safeImages;
  const [index, setIndex] = useState(0);
  const preloadedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (activeImages.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % activeImages.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [activeImages.length, intervalMs]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const allImages = [...safeImages, ...safeMobileImages];
    if (allImages.length === 0) return;

    const preload = () => {
      allImages.forEach((item) => {
        if (!item.url || preloadedRef.current.has(item.url)) return;
        const img = new Image();
        img.src = item.url;
        preloadedRef.current.add(item.url);
      });
    };

    const idle = (
      globalThis as {
        requestIdleCallback?: (
          cb: () => void,
          opts?: { timeout: number },
        ) => number;
      }
    ).requestIdleCallback;
    if (typeof idle === "function") {
      idle(preload, { timeout: 1500 });
    } else {
      globalThis.setTimeout(preload, 0);
    }
  }, [safeImages, safeMobileImages]);

  if (activeImages.length === 0) return null;

  const active = activeImages[index % activeImages.length];
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={`${active.url}-${index}`}
          src={active.url}
          alt={active.alt ?? "Фоновая фотография"}
          className="absolute inset-0 h-full w-full object-cover object-center origin-center will-change-transform will-change-opacity"
          initial={{ opacity: 0, scale: zoom ? 1.02 : 1 }}
          animate={{ opacity: 1, scale: zoom ? 1.06 : 1 }}
          exit={{ opacity: 0, scale: zoom ? 1.02 : 1 }}
          transition={{
            opacity: { duration: transitionMs / 1000, ease: "easeInOut" },
            scale: { duration: intervalMs / 1000, ease: "easeOut" },
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/45 via-black/25 to-black/10"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};
