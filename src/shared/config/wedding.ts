import type { WeddingInviteConfig } from "@/entities/wedding-invite/model/types";
import heroBg from "@/shared/assets/hero-bg.svg";
import pageBg from "@/shared/assets/page-bg.svg";

export const weddingConfig: WeddingInviteConfig = {
  locale: "ru-RU",
  coupleNames: "Имя невесты & Имя жениха",
  heroSubtitle: "Мы будем счастливы разделить с вами наш особенный день",
  heroNote: "Пожалуйста, подтвердите присутствие до 10 июня",
  eventDate: "2026-07-18",
  startTime: "16:00",
  eventFormat: "Церемония и ужин на закате",
  venueName: "Сады Вереска",
  venueAddress: "Москва, ул. Цветочная, 12",
  mapUrl: "https://maps.app.goo.gl/your-map-link",
  rsvpUrl: "https://forms.gle/your-rsvp-link",
  dresscodeText:
    "Нежные пастельные оттенки, светлые костюмы и легкие платья. Просим избегать чисто белого цвета.",
  dresscodePalette: ["#f7dce5", "#f2e9f5", "#e9f2f2", "#f5efe6", "#dbe2f4"],
  schedule: [
    {
      time: "16:00",
      title: "Сбор гостей",
      description: "Легкий welcome и приветственные напитки",
    },
    {
      time: "16:30",
      title: "Церемония",
      description: "Трогательные слова и обмен клятвами",
    },
    {
      time: "17:15",
      title: "Фотосессия",
      description: "Общие фотографии и прогулка по саду",
    },
    {
      time: "18:00",
      title: "Ужин и программа",
      description: "Теплая атмосфера, музыка и танцы",
    },
  ],
  wishes: [
    {
      title: "Подарки",
      text: "Мы будем рады конверту или вкладу в наше семейное путешествие.",
    },
    {
      title: "Цветы",
      text: "Просим заменить цветы на доброе письмо или открытку.",
    },
  ],
  faq: [
    {
      q: "Можно ли прийти с детьми?",
      a: "Да, мы будем рады маленьким гостям. Сообщите об этом в форме RSVP.",
    },
    {
      q: "Что делать, если не могу прийти?",
      a: "Пожалуйста, сообщите нам об этом заранее через форму RSVP.",
    },
  ],
  contacts: [
    {
      name: "Анна Петрова",
      role: "Организатор",
      phone: "+7 900 000-00-00",
      whatsappUrl: "https://wa.me/79000000000",
      telegramUrl: "https://t.me/username",
    },
  ],
  photos: [
    {
      url: "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=1200&q=80",
      alt: "Абстрактная цветочная композиция",
    },
  ],
  backgrounds: {
    page: pageBg,
    hero: heroBg,
  },
  sections: {
    details: "details",
    location: "location",
    schedule: "schedule",
    dresscode: "dresscode",
    wishes: "wishes",
    faq: "faq",
    contacts: "contacts",
  },
  nav: [
    { id: "details", label: "Детали" },
    { id: "location", label: "Локация" },
    { id: "schedule", label: "Тайминг" },
    { id: "dresscode", label: "Дресс-код" },
    { id: "wishes", label: "Пожелания" },
    { id: "faq", label: "FAQ" },
    { id: "contacts", label: "Контакты" },
  ],
  labels: {
    heroBadge: "Wedding Day",
    startTimeLabel: "Начало в",
    rsvpCta: "Подтвердить присутствие",
    locationCta: "Посмотреть локацию",
    mapCta: "Открыть карту",
    copyAddressCta: "Скопировать адрес",
    copiedToast: "Адрес скопирован",
    copyErrorToast: "Не удалось скопировать",
    scheduleTitle: "Тайминг",
    dresscodeTitle: "Дресс-код",
    wishesTitle: "Пожелания",
    faqTitle: "Частые вопросы",
    contactsTitle: "Контакты",
    detailsTitle: "Детали события",
    locationTitle: "Локация",
    dateLabel: "Дата",
    timeLabel: "Время",
    formatLabel: "Формат",
    venueLabel: "Площадка",
    addressLabel: "Адрес",
    navBadge: "Invite",
    menuOpen: "Меню",
    menuClose: "Закрыть",
    writeCta: "Написать",
  },
};
