import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Accordion } from "@/shared/ui/Accordion";
import { Reveal } from "@/shared/ui/Reveal";

export const FaqSection = ({ id }: { id: string }) => {
  if (weddingConfig.faq.length === 0) return null;

  return (
    <Section id={id} title={weddingConfig.labels.faqTitle}>
      <Reveal>
        <Accordion
          items={weddingConfig.faq.map((item, index) => ({
            id: `${index}-${item.q}`,
            title: item.q,
            content: item.a,
          }))}
        />
      </Reveal>
    </Section>
  );
};
