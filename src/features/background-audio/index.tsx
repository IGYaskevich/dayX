import {useCallback, useEffect, useRef, useState} from "react";
import trackSrc from "@/shared/assets/The Goo Goo Dolls – Iris (Sefon.me).mp3";
import {Button} from "@/shared/ui/Button";
import playIcon from "@/shared/assets/play-button.png";
import stopIcon from "@/shared/assets/stop.png";

const emitAudioState = (isPlaying: boolean, autoplayBlocked: boolean) => {
  window.dispatchEvent(
    new CustomEvent("wedding-audio-state", {
      detail: { isPlaying, autoplayBlocked },
    })
  );
};

export const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlayingRef = useRef(false);
  const autoplayBlockedRef = useRef(false);
  const musicEnabledRef = useRef(true);
  const unlockCleanupRef = useRef<(() => void) | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  const syncAudioState = useCallback((playing: boolean, blocked: boolean) => {
    isPlayingRef.current = playing;
    autoplayBlockedRef.current = blocked;
    setIsPlaying(playing);
    setAutoplayBlocked(blocked);
    emitAudioState(playing, blocked);
  }, []);

  const clearUnlockListeners = useCallback(() => {
    if (!unlockCleanupRef.current) return;
    unlockCleanupRef.current();
    unlockCleanupRef.current = null;
  }, []);

  const tryPlay = useCallback(
    async () => {
      const audio = audioRef.current;
      if (!audio) return false;

      try {
        await audio.play();
        syncAudioState(true, false);
        clearUnlockListeners();
        return true;
      } catch {
        syncAudioState(false, true);
        return false;
      }
    },
    [clearUnlockListeners, syncAudioState]
  );

  const attachUnlockListeners = useCallback(() => {
    if (unlockCleanupRef.current) return;

    const onUserGesture = () => {
      if (!musicEnabledRef.current) return;
      void tryPlay();
    };

    const events: Array<keyof WindowEventMap> = ["pointerdown", "touchstart", "keydown", "click"];
    for (const eventName of events) {
      window.addEventListener(eventName, onUserGesture, { passive: true });
    }

    unlockCleanupRef.current = () => {
      for (const eventName of events) {
        window.removeEventListener(eventName, onUserGesture);
      }
    };
  }, [tryPlay]);

  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      musicEnabledRef.current = true;
      const started = await tryPlay();
      if (!started) {
        attachUnlockListeners();
      }
      return;
    }

    musicEnabledRef.current = false;
    audio.pause();
    clearUnlockListeners();
    syncAudioState(false, false);
  }, [attachUnlockListeners, clearUnlockListeners, syncAudioState, tryPlay]);

  const startPlayback = useCallback(async () => {
    musicEnabledRef.current = true;
    const started = await tryPlay();
    if (!started) {
      attachUnlockListeners();
    }
  }, [attachUnlockListeners, tryPlay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;

    const onPlay = () => {
      syncAudioState(true, false);
      clearUnlockListeners();
    };
    const onPause = () => syncAudioState(false, autoplayBlockedRef.current);

    const onToggle = () => {
      void togglePlayback();
    };
    const onStart = () => {
      void startPlayback();
    };
    const onRequestState = () => {
      emitAudioState(isPlayingRef.current, autoplayBlockedRef.current);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    window.addEventListener("wedding-audio-toggle", onToggle as EventListener);
    window.addEventListener("wedding-audio-start", onStart as EventListener);
    window.addEventListener("wedding-audio-request-state", onRequestState as EventListener);

    const initPlayback = () => {
      musicEnabledRef.current = true;
      audio.pause();
      syncAudioState(false, false);
      clearUnlockListeners();
    };

    initPlayback();

    return () => {
      clearUnlockListeners();
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      window.removeEventListener("wedding-audio-toggle", onToggle as EventListener);
      window.removeEventListener("wedding-audio-start", onStart as EventListener);
      window.removeEventListener("wedding-audio-request-state", onRequestState as EventListener);
    };
  }, [clearUnlockListeners, startPlayback, syncAudioState, togglePlayback]);

  return (
    <>
      <audio ref={audioRef} src={trackSrc} preload="auto" />
      <div className="hidden md:block fixed left-4 bottom-5 z-50 pb-[env(safe-area-inset-bottom)]">
        <Button
          type="button"
          size="md"
          variant={isPlaying ? "primary" : "secondary"}
          onClick={() => void togglePlayback()}
          className="shadow-card"
        >
          <img
            src={isPlaying ? stopIcon : playIcon}
            alt=""
            aria-hidden="true"
            className="h-4 w-4 object-contain"
          />
          {isPlaying ? "Остановить музыку" : autoplayBlocked ? "Включить музыку" : "Включить музыку"}
        </Button>
      </div>
    </>
  );
};
