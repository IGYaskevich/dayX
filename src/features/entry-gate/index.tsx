import { useEffect, useState } from "react";
import { weddingConfig } from "@/shared/config/wedding";
import { Button } from "@/shared/ui/Button";
import { cn } from "@/shared/lib/cn";

const OPEN_ANIMATION_MS = 900;

export const EntryGate = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  const openInvite = () => {
    if (isOpening) return;

    setIsOpening(true);
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.dispatchEvent(new CustomEvent("wedding-audio-start"));

    window.setTimeout(() => {
      setIsVisible(false);
    }, OPEN_ANIMATION_MS);
  };

  if (!isVisible) return null;

  return (
    <div
      className="entry-gate"
      role="dialog"
      aria-modal="true"
      aria-label="Экран приветствия"
    >
      <div
        className={cn(
          "entry-gate-heart",
          isOpening && "entry-gate-heart--open",
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          "entry-gate-content",
          isOpening && "entry-gate-content--hide",
        )}
      >
        <p className="type-overline text-ivory-700">Wedding Day</p>
        <h2 className="type-title-md text-ivory-900 text-center">
          {weddingConfig.coupleNames}
        </h2>
        <Button
          type="button"
          size="lg"
          variant="primary"
          className="px-8"
          onClick={openInvite}
        >
          Открыть
        </Button>
        <p className="type-body-sm text-ivory-700 text-center">
          Нажмите, чтобы запустить музыку и открыть приглашение
        </p>
      </div>
    </div>
  );
};
