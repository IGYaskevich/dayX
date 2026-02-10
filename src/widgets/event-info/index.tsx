import { weddingConfig } from "@/shared/config/wedding";
import { Card } from "@/shared/ui/Card";
import { Section } from "@/shared/ui/Section";
import { formatDate, formatWeekday } from "@/shared/lib/date";
import { Reveal } from "@/shared/ui/Reveal";

export const EventInfo = ({ id }: { id: string }) => {
  const date = formatDate(weddingConfig.eventDate, weddingConfig.locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const weekday = formatWeekday(weddingConfig.eventDate, weddingConfig.locale);

  return (
    <Section id={id} title={weddingConfig.labels.detailsTitle}>
      <Reveal>
        <div className="section-grid md:grid-cols-3">
          <Card>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-600">
              {weddingConfig.labels.dateLabel}
            </p>
            <p className="mt-3 text-xl font-display text-ivory-900">{date}</p>
            <p className="mt-2 text-sm text-ivory-700 capitalize">{weekday}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-600">
              {weddingConfig.labels.timeLabel}
            </p>
            <p className="mt-3 text-xl font-display text-ivory-900">{weddingConfig.startTime}</p>
          </Card>
          <Card>
            <p className="text-xs uppercase tracking-[0.2em] text-gold-600">
              {weddingConfig.labels.formatLabel}
            </p>
            <p className="mt-3 text-base text-ivory-800">{weddingConfig.eventFormat}</p>
          </Card>
        </div>
      </Reveal>
    </Section>
  );
};
