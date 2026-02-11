import {weddingConfig} from "@/shared/config/wedding";
import {Container} from "@/shared/ui/Container";
import {Hero} from "@/widgets/hero";
import {CountdownSection} from "@/widgets/countdown";
import {EventInfo} from "@/widgets/event-info";
import {LocationSection} from "@/widgets/location";
import {DresscodeSection} from "@/widgets/dresscode";
import {WishesSection} from "@/widgets/wishes";
import {FaqSection} from "@/widgets/faq";
import {ContactsSection} from "@/widgets/contacts";
import {RsvpFormSection} from "@/widgets/rsvp-form";
import {AnimatedBackground} from "@/shared/ui/AnimatedBackground";

export const HomePage = () => {
  return (
    <div className="relative">
      <AnimatedBackground />
      <main className="relative pb-20">
        <Hero />
        <Container>
          <EventInfo id={weddingConfig.sections.details} />
            <CountdownSection id={weddingConfig.sections.countdown} />
            <LocationSection id={weddingConfig.sections.location} />
          <DresscodeSection id={weddingConfig.sections.dresscode} />
          <WishesSection id={weddingConfig.sections.wishes} />
          <RsvpFormSection id={weddingConfig.sections.rsvp} />
          <FaqSection id={weddingConfig.sections.faq} />
          <ContactsSection id={weddingConfig.sections.contacts} />
        </Container>
      </main>
    </div>
  );
};
