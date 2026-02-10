import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Reveal } from "@/shared/ui/Reveal";

export const WishesSection = ({ id }: { id: string }) => {
  return (
    <Section id={id} title={weddingConfig.labels.wishesTitle}>
      <Reveal>
        <div className="section-grid md:grid-cols-2">
          {weddingConfig.wishes.map((item) => (
            <Card key={item.title}>
              <p className="text-base font-medium text-sand-900">{item.title}</p>
              <p className="text-sm text-sand-600 mt-2">{item.text}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};
