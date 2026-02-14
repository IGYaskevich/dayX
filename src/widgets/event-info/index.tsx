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
        <div className="section-grid md:grid-cols-2">
          <Card>
            <p className="type-overline text-ivory-600">
              {weddingConfig.labels.dateLabel}
            </p>
            <p className="mt-3 type-title-sm text-ivory-900">{date}</p>
            <p className="mt-2 type-body-sm text-ivory-800 capitalize">
              {weekday}
            </p>
          </Card>
          {weddingConfig.schedule.map((item) => (
            <Card key={`${item.time}-${item.title}`}>
              <p className="type-title-sm text-ivory-900 tabular-nums">
                {item.time}
              </p>
              <p className="mt-1 type-body text-ivory-900 font-medium">
                {item.title}
              </p>
              {item.description && (
                <p className="mt-1 type-body-sm text-ivory-700">
                  {item.description}
                </p>
              )}
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};
