import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Reveal } from "@/shared/ui/Reveal";

export const ScheduleSection = ({ id }: { id: string }) => {
  return (
    <Section id={id} title={weddingConfig.labels.scheduleTitle}>
      <Reveal>
        <div className="grid gap-4">
          {weddingConfig.schedule.map((item) => (
            <Card key={`${item.time}-${item.title}`} className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="text-2xl font-display text-ivory-900 min-w-[80px]">{item.time}</div>
              <div>
                <p className="text-base font-medium text-ivory-900">{item.title}</p>
                {item.description && <p className="text-sm text-ivory-700 mt-1">{item.description}</p>}
              </div>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};
