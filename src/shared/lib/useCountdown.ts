import { useEffect, useMemo, useState } from "react";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getCountdownState = (targetDate: Date): CountdownState => {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export const useCountdown = (isoDate: string, startTime?: string) => {
  const target = useMemo(() => {
    if (startTime) {
      return new Date(`${isoDate}T${startTime}:00`);
    }
    return new Date(`${isoDate}T00:00:00`);
  }, [isoDate, startTime]);

  const [state, setState] = useState<CountdownState>(() => getCountdownState(target));

  useEffect(() => {
    const tick = () => setState(getCountdownState(target));
    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, [target]);

  return state;
};
