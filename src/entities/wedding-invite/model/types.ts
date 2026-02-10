export type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
};

export type WishItem = {
  title: string;
  text: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type ContactItem = {
  name: string;
  role?: string;
  phone?: string;
  whatsappUrl?: string;
  telegramUrl?: string;
};

export type PhotoItem = {
  url: string;
  alt: string;
};

export type HeroMedia = {
  type: "image" | "video";
  url: string;
  alt?: string;
  poster?: string;
};

export type BackgroundCarouselConfig = {
  enabled: boolean;
  images: PhotoItem[];
  mobileImages?: PhotoItem[];
  intervalMs?: number;
  transitionMs?: number;
  overlayOpacity?: number;
  zoom?: boolean;
};

export type NavItem = {
  id: string;
  label: string;
};

export type Labels = {
  heroBadge: string;
  startTimeLabel: string;
  rsvpCta: string;
  locationCta: string;
  mapCta: string;
  copyAddressCta: string;
  copiedToast: string;
  copyErrorToast: string;
  scheduleTitle: string;
  dresscodeTitle: string;
  wishesTitle: string;
  faqTitle: string;
  contactsTitle: string;
  detailsTitle: string;
  locationTitle: string;
  dateLabel: string;
  timeLabel: string;
  formatLabel: string;
  venueLabel: string;
  addressLabel: string;
  navBadge: string;
  menuOpen: string;
  menuClose: string;
  writeCta: string;
};

export type SectionIds = {
  details: string;
  location: string;
  schedule: string;
  dresscode: string;
  wishes: string;
  faq: string;
  contacts: string;
};

export type WeddingInviteConfig = {
  locale: string;
  coupleNames: string;
  heroSubtitle?: string;
  heroNote?: string;
  eventDate: string;
  startTime: string;
  eventFormat: string;
  venueName: string;
  venueAddress: string;
  mapUrl: string;
  rsvpUrl: string;
  dresscodeText: string;
  dresscodePalette: string[];
  schedule: ScheduleItem[];
  wishes: WishItem[];
  faq: FaqItem[];
  contacts: ContactItem[];
  photos?: PhotoItem[];
  photoSize?: {
    width: number;
    height: number;
  };
  heroMedia?: HeroMedia;
  backgroundCarousel?: BackgroundCarouselConfig;
  backgrounds: {
    page: string;
    hero: string;
  };
  sections: SectionIds;
  nav: NavItem[];
  labels: Labels;
};
