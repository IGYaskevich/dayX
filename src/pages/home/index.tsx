import { weddingConfig } from "@/shared/config/wedding";
import { Container } from "@/shared/ui/Container";
import { AnchorNav } from "@/features/anchor-nav";
import { Hero } from "@/widgets/hero";
import { EventInfo } from "@/widgets/event-info";
import { LocationSection } from "@/widgets/location";
import { ScheduleSection } from "@/widgets/schedule";
import { DresscodeSection } from "@/widgets/dresscode";
import { WishesSection } from "@/widgets/wishes";
import { FaqSection } from "@/widgets/faq";
import { ContactsSection } from "@/widgets/contacts";

export const HomePage = () => {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${weddingConfig.backgrounds.page})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <main className="relative pb-20">
        <Container className="pt-6">
          <AnchorNav />
        </Container>
        <Hero />
        <Container>
          <EventInfo id={weddingConfig.sections.details} />
          <LocationSection id={weddingConfig.sections.location} />
          <ScheduleSection id={weddingConfig.sections.schedule} />
          <DresscodeSection id={weddingConfig.sections.dresscode} />
          <WishesSection id={weddingConfig.sections.wishes} />
          <FaqSection id={weddingConfig.sections.faq} />
          <ContactsSection id={weddingConfig.sections.contacts} />
        </Container>
      </main>
    </div>
  );
};
