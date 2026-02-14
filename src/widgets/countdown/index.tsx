import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Reveal } from "@/shared/ui/Reveal";
import { useCountdown } from "@/shared/lib/useCountdown";
import { Card } from "@/shared/ui/Card";

const formatPart = (value: number) => String(value).padStart(2, "0");

export const CountdownSection = ({ id }: { id: string }) => {
  const countdown = useCountdown(
    weddingConfig.eventDate,
    weddingConfig.startTime,
  );

  const items = [
    { value: countdown.days, label: weddingConfig.labels.countdownDays },
    { value: countdown.hours, label: weddingConfig.labels.countdownHours },
    { value: countdown.minutes, label: weddingConfig.labels.countdownMinutes },
    { value: countdown.seconds, label: weddingConfig.labels.countdownSeconds },
  ];

  return (
    <Section id={id}>
      <Reveal>
        <Card className="px-5 py-10 md:px-8 md:py-14 text-center">
          <h2 className="type-title-xl text-center text-ivory-900 leading-[1.05]">
            {weddingConfig.labels.countdownTitle}
          </h2>
          <div className="mt-8 grid grid-cols-4 gap-3 md:gap-6">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-ivory-200/80 bg-ivory-50/60 px-2 py-4 md:py-5"
              >
                <p className="type-title-lg text-ivory-900 tabular-nums">
                  {formatPart(item.value)}
                </p>
                <p className="mt-1 type-title-sm text-ivory-800">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </Section>
  );
};
