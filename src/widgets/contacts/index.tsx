import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Badge } from "@/shared/ui/Badge";
import { Button } from "@/shared/ui/Button";
import { Reveal } from "@/shared/ui/Reveal";

export const ContactsSection = ({ id }: { id: string }) => {
  return (
    <Section id={id} title={weddingConfig.labels.contactsTitle}>
      <Reveal>
        <div className="section-grid md:grid-cols-2">
          {weddingConfig.contacts.map((contact) => (
            <Card key={contact.name} className="space-y-3">
              <div>
                <p className="text-base font-medium text-sand-900">{contact.name}</p>
                {contact.role && <Badge className="mt-2">{contact.role}</Badge>}
              </div>
              {contact.phone && <p className="text-sm text-sand-600">{contact.phone}</p>}
              <div className="flex flex-wrap gap-2">
                {contact.whatsappUrl && (
                  <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                    <Button variant="secondary">
                      {weddingConfig.labels.writeCta} WhatsApp
                    </Button>
                  </a>
                )}
                {contact.telegramUrl && (
                  <a href={contact.telegramUrl} target="_blank" rel="noreferrer">
                    <Button variant="secondary">
                      {weddingConfig.labels.writeCta} Telegram
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};
