import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Reveal } from "@/shared/ui/Reveal";
import { Card } from "@/shared/ui/Card";
import { Badge } from "@/shared/ui/Badge";

export const ScheduleSection = ({ id }: { id: string }) => {
  return (
    <Section id={id} title={weddingConfig.labels.scheduleTitle}>
      <Reveal>
        <Card className="px-6 py-8 md:px-10 md:py-10">
          {weddingConfig.labels.scheduleNote && (
            <div className="mb-5">
              <Badge>{weddingConfig.labels.scheduleNote}</Badge>
            </div>
          )}
          <div className="grid gap-6">
            {weddingConfig.schedule.map((item) => (
              <div
                key={`${item.time}-${item.title}`}
                className="rounded-2xl border border-ivory-200/80 bg-ivory-50/60 px-5 py-5 md:px-6 md:py-6"
              >
                <p className="type-title-md leading-tight text-ivory-900">
                  <span className="tabular-nums">{item.time}</span> - {item.title}
                </p>
                {item.description && (
                  <p className="mt-2 type-body text-ivory-700">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </Section>
  );
};
