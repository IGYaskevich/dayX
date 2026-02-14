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
  helpText?: string;
  transportTitle?: string;
  transportText?: string;
};

export type VenueLinks = {
  twoGis?: string;
  yandex?: string;
  instagram?: string;
  instagramLabel?: string;
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

export type FormOption = {
  value: string;
  label: string;
};

export type RsvpFormConfig = {
  title: string;
  subtitle?: string;
  pairNotice?: string;
  nameLabel: string;
  attendanceQuestion: string;
  attendanceHint?: string;
  attendanceOptions: FormOption[];
  alcoholTitle: string;
  alcoholOptions: FormOption[];
  transferQuestion: string;
  transferOptions: FormOption[];
  submitCta: string;
  consoleToast: string;
  submitSuccessToast?: string;
  submitErrorToast?: string;
  submitConfigErrorToast?: string;
};

export type Labels = {
  countdownTitle: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  heroBadge: string;
  startTimeLabel: string;
  rsvpCta: string;
  locationCta: string;
  mapCta: string;
  yandexMapCta: string;
  instagramCta: string;
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
  scheduleNote?: string;
  dresscodeHint?: string;
  dresscodeHintGirls?: string;
  dresscodeCarouselHint?: string;
};

export type SectionIds = {
  countdown: string;
  details: string;
  location: string;
  schedule: string;
  dresscode: string;
  wishes: string;
  rsvp: string;
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
  venueLinks?: VenueLinks;
  venuePhoto?: PhotoItem;
  rsvpUrl: string;
  dresscodeText: string;
  dresscodePalette: string[];
  dresscodeExamples?: PhotoItem[];
  schedule: ScheduleItem[];
  wishes: WishItem[];
  faq: FaqItem[];
  contacts: ContactItem[];
  photos?: PhotoItem[];
  rsvpForm: RsvpFormConfig;
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
