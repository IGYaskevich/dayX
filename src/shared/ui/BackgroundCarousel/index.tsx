import { useEffect, useMemo, useState } from "react";
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
  onToneChange?: (tone: "light" | "dark") => void;
  className?: string;
};

export const BackgroundCarousel = ({
  images,
  mobileImages,
  intervalMs = 7000,
  transitionMs = 1200,
  overlayOpacity = 0.3,
  zoom = true,
  onToneChange,
  className,
}: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const safeImages = useMemo(() => images.filter((item) => item.url), [images]);
  const safeMobileImages = useMemo(
    () => (mobileImages ?? []).filter((item) => item.url),
    [mobileImages]
  );
  const activeImages =
    isMobile && safeMobileImages.length > 0 ? safeMobileImages : safeImages;
  const [index, setIndex] = useState(0);

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

  if (activeImages.length === 0) return null;

  const active = activeImages[index % activeImages.length];
  const darkOverlayAlpha = 0.3;
  const gradientDarken = overlayOpacity * 0.25;
  const threshold = 140;

  useEffect(() => {
    if (!active?.url || !onToneChange) return;
    let cancelled = false;
    const image = new Image();
    image.decoding = "async";
    image.src = active.url;
    image.onload = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      const size = 24;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) {
        onToneChange("dark");
        return;
      }
      ctx.drawImage(image, 0, 0, size, size);
      const { data } = ctx.getImageData(0, 0, size, size);
      let total = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        total += 0.2126 * r + 0.7152 * g + 0.0722 * b;
      }
      const avg = total / (data.length / 4);
      const adjusted = avg * (1 - darkOverlayAlpha - gradientDarken);
      onToneChange(adjusted < threshold ? "light" : "dark");
    };
    image.onerror = () => {
      if (!cancelled) onToneChange("dark");
    };
    return () => {
      cancelled = true;
    };
  }, [active?.url, onToneChange, darkOverlayAlpha, gradientDarken]);

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
