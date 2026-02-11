import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { weddingConfig } from "@/shared/config/wedding";

export const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const slow = useTransform(scrollY, [0, 1200], [0, 160]);
  const fast = useTransform(scrollY, [0, 1200], [0, 320]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-hero-glow"
        style={{ y: isMobile ? 0 : slow, opacity: 0.65 }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          y: isMobile ? 0 : fast,
          backgroundImage: `url(${weddingConfig.backgrounds.page})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }}
      />
      <div className="absolute inset-0 animated-gradient opacity-40" />
      <div className="absolute inset-0 noise opacity-25" />

      <motion.div
        className="hidden md:block absolute -top-24 left-[10%] h-64 w-64 rounded-full bg-ivory-200/70 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute top-[20%] right-[5%] h-80 w-80 rounded-full bg-ivory-200/70 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 0.96, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hidden md:block absolute bottom-[10%] left-[20%] h-72 w-72 rounded-full bg-ivory-200/70 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -25, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};
