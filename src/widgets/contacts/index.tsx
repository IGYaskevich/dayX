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
        <div className="grid gap-6 md:grid-cols-2">
          {weddingConfig.contacts.map((contact) => (
            <Card key={contact.name} className="p-7 md:p-10">
              <div className="space-y-3">
                <p className="type-title-lg text-ivory-900">Для связи</p>
                {contact.helpText ? (
                  <p className="type-body text-ivory-800">{contact.helpText}</p>
                ) : (
                  <p className="type-body text-ivory-800">
                    По любым вопросам обращайтесь к организатору
                  </p>
                )}
                <p className="type-title-md text-ivory-900">{contact.name}</p>
                {contact.role && <Badge className="mt-1">{contact.role}</Badge>}
              </div>
              {contact.phone && (
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="mt-6 block type-title-md text-ivory-900 underline underline-offset-8 decoration-ivory-500/40 hover:decoration-ivory-700"
                >
                  {contact.phone}
                </a>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                {contact.whatsappUrl && (
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="primary">
                      {weddingConfig.labels.writeCta} WhatsApp
                    </Button>
                  </a>
                )}
              </div>
              {(contact.transportTitle || contact.transportText) && (
                <div className="mt-8 rounded-2xl border border-ivory-200/80 bg-ivory-50/60 px-4 py-4 md:px-5">
                  {contact.transportTitle && (
                    <p className="type-title-sm text-ivory-900">
                      {contact.transportTitle}
                    </p>
                  )}
                  {contact.transportText && (
                    <p className="mt-2 type-body text-ivory-800">
                      {contact.transportText}
                    </p>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
};
