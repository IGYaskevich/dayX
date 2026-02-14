import type { WeddingInviteConfig } from "@/entities/wedding-invite/model/types";
import heroBg from "@/shared/assets/hero-bg.svg";
import pageBg from "@/shared/assets/page-bg.svg";
import heroPhoto from "@/shared/assets/photo_16x9.jpg";
import bg01 from "@/shared/assets/x-day/bg/234D8749-34E8-4570-90B2-DE5909CE94E0.jpg";
import bg02 from "@/shared/assets/x-day/bg/236BBACD-0906-4321-B3FE-A884648211CE.jpg";
import bg03 from "@/shared/assets/x-day/bg/420B36A1-B09D-4CD3-BBD2-2B030252CBA6.jpg";
import bg04 from "@/shared/assets/x-day/bg/4D21A63C-0169-42FE-8BA2-ED7BDEA07D72.jpg";
import bg05 from "@/shared/assets/x-day/bg/59FC10F9-F878-4C55-82C1-4FA00EF2C5F4.jpg";
import bg06 from "@/shared/assets/x-day/bg/6344CD1D-E147-494E-9554-96AE6B648755.jpg";
import bg07 from "@/shared/assets/x-day/bg/B2642C96-62C5-4BEB-8A57-52117AF94F4C.jpg";
import bg08 from "@/shared/assets/x-day/bg/C62025A2-308E-457B-B09C-00EF6F7ECC57.jpg";
import bg09 from "@/shared/assets/x-day/bg/C7B51E56-D323-42B9-AD19-3DECF3A7F0A2.jpg";
import bg10 from "@/shared/assets/x-day/bg/CF708314-5DAB-44A9-ADD8-D839D4C0AA5F.jpg";
import bg11 from "@/shared/assets/x-day/bg/D4A37102-6EA7-4143-B5AB-3F58CA6C95D9.jpg";
import bg12 from "@/shared/assets/x-day/bg/FD20DAF5-455E-43C4-BA50-93DDCFCFA4D6.jpg";
import mb01 from "@/shared/assets/x-day/mobile-bg/234D8749-34E8-4570-90B2-DE5909CE94E0.jpg";
import mb02 from "@/shared/assets/x-day/mobile-bg/236BBACD-0906-4321-B3FE-A884648211CE.jpg";
import mb03 from "@/shared/assets/x-day/mobile-bg/420B36A1-B09D-4CD3-BBD2-2B030252CBA6.jpg";
import mb04 from "@/shared/assets/x-day/mobile-bg/4D21A63C-0169-42FE-8BA2-ED7BDEA07D72.jpg";
import mb05 from "@/shared/assets/x-day/mobile-bg/59FC10F9-F878-4C55-82C1-4FA00EF2C5F4.jpg";
import mb06 from "@/shared/assets/x-day/mobile-bg/6344CD1D-E147-494E-9554-96AE6B648755.jpg";
import mb07 from "@/shared/assets/x-day/mobile-bg/B1D51EB2-D2BB-490A-AA95-C1D7EF8C3B65.jpg";
import mb08 from "@/shared/assets/x-day/mobile-bg/B2642C96-62C5-4BEB-8A57-52117AF94F4C.jpg";
import mb09 from "@/shared/assets/x-day/mobile-bg/C62025A2-308E-457B-B09C-00EF6F7ECC57.jpg";
import mb10 from "@/shared/assets/x-day/mobile-bg/C7B51E56-D323-42B9-AD19-3DECF3A7F0A2.jpg";
import mb11 from "@/shared/assets/x-day/mobile-bg/CF708314-5DAB-44A9-ADD8-D839D4C0AA5F.jpg";
import mb12 from "@/shared/assets/x-day/mobile-bg/D4A37102-6EA7-4143-B5AB-3F58CA6C95D9.jpg";
import mb13 from "@/shared/assets/x-day/mobile-bg/FD20DAF5-455E-43C4-BA50-93DDCFCFA4D6.jpg";
import {
  buildCldImages,
  buildCldImagesNoCrop,
  type CloudinaryImageRef,
  createCloudinary,
} from "@/shared/lib/cloudinary";

const cloudName = "dpqfojtav";
const cld = createCloudinary(cloudName);

const cloudDesktopIds: CloudinaryImageRef[] = [
  { id: "D4A37102-6EA7-4143-B5AB-3F58CA6C95D9_ryog6l", alt: "Фон — момент 1" },
  { id: "FD20DAF5-455E-43C4-BA50-93DDCFCFA4D6_pj5niy", alt: "Фон — момент 2" },
  { id: "59FC10F9-F878-4C55-82C1-4FA00EF2C5F4_jwl7ua", alt: "Фон — момент 3" },
  { id: "CF708314-5DAB-44A9-ADD8-D839D4C0AA5F_rjvuvt", alt: "Фон — момент 4" },
  { id: "4D21A63C-0169-42FE-8BA2-ED7BDEA07D72_c2trlo", alt: "Фон — момент 5" },
  { id: "B2642C96-62C5-4BEB-8A57-52117AF94F4C_hohtzf", alt: "Фон — момент 6" },
  { id: "420B36A1-B09D-4CD3-BBD2-2B030252CBA6_mqp5w2", alt: "Фон — момент 7" },
  { id: "6344CD1D-E147-494E-9554-96AE6B648755_gpmhei", alt: "Фон — момент 8" },
  { id: "236BBACD-0906-4321-B3FE-A884648211CE_cwx19a", alt: "Фон — момент 9" },
  { id: "234D8749-34E8-4570-90B2-DE5909CE94E0_e9cdxn", alt: "Фон — момент 10" },
  { id: "C62025A2-308E-457B-B09C-00EF6F7ECC57_rbf2rh", alt: "Фон — момент 11" },
  { id: "C7B51E56-D323-42B9-AD19-3DECF3A7F0A2_oiumaw", alt: "Фон — момент 12" },
];

const cloudMobileIds: CloudinaryImageRef[] = [
  { id: "D4A37102-6EA7-4143-B5AB-3F58CA6C95D9_ea0u7p", alt: "Фон — момент 1" },
  { id: "FD20DAF5-455E-43C4-BA50-93DDCFCFA4D6_mjbysl", alt: "Фон — момент 2" },
  { id: "59FC10F9-F878-4C55-82C1-4FA00EF2C5F4_gsxath", alt: "Фон — момент 3" },
  { id: "CF708314-5DAB-44A9-ADD8-D839D4C0AA5F_mzxbkp", alt: "Фон — момент 4" },
  { id: "4D21A63C-0169-42FE-8BA2-ED7BDEA07D72_cpg8xf", alt: "Фон — момент 5" },
  { id: "B2642C96-62C5-4BEB-8A57-52117AF94F4C_js6nq5", alt: "Фон — момент 7" },
  { id: "420B36A1-B09D-4CD3-BBD2-2B030252CBA6_kvbbf4", alt: "Фон — момент 8" },
  { id: "6344CD1D-E147-494E-9554-96AE6B648755_tyyoxf", alt: "Фон — момент 9" },
  { id: "236BBACD-0906-4321-B3FE-A884648211CE_fkthk6", alt: "Фон — момент 10" },
  { id: "234D8749-34E8-4570-90B2-DE5909CE94E0_clfowp", alt: "Фон — момент 11" },
  { id: "C62025A2-308E-457B-B09C-00EF6F7ECC57_rvhqdo", alt: "Фон — момент 12" },
  { id: "C7B51E56-D323-42B9-AD19-3DECF3A7F0A2_somudo", alt: "Фон — момент 13" },
];

const cloudDesktop = buildCldImages(cld, cloudDesktopIds, {
  width: 1920,
  height: 1080,
});
const cloudMobile = buildCldImages(cld, cloudMobileIds, {
  width: 1080,
  height: 1620,
});
const dresscodeExampleIds: CloudinaryImageRef[] = [
  { id: "girls_zzlbwz", alt: "Референс женского образа" },
  { id: "man_yl1ixz", alt: "Референс мужского образа" },
];
const dresscodeExamples = buildCldImagesNoCrop(cld, dresscodeExampleIds);
const cloudVenuePhoto = buildCldImages(
  cld,
  [{ id: "IMG_2668_atcncl", alt: "Локация МегаДача" }],
  { width: 1600, height: 1200 },
)[0];

export const weddingConfig: WeddingInviteConfig = {
  locale: "ru-RU",
  coupleNames: "Игнат & Лейла",
  heroSubtitle: "Мы будем счастливы разделить с вами наш особенный день",
  heroNote: "Пожалуйста, подтвердите присутствие до 10 июня",
  eventDate: "2026-07-18",
  startTime: "15:00",
  eventFormat: "Сбор гостей, церемония и банкет",
  venueName: "МегаДача",
  venueAddress: "",
  mapUrl: "https://go.2gis.com/7xxva",
  venueLinks: {
    twoGis: "https://go.2gis.com/7xxva",
    yandex: "https://yandex.kz/maps/ru/-/CPQgvFL-",
    instagram: "https://www.instagram.com/megadacha.kz/",
    instagramLabel: "megadacha.kz",
  },
  venuePhoto: cloudVenuePhoto,
  rsvpUrl: "#rsvp",
  dresscodeText:
    "Мы с любовью продумываем детали праздника и будем рады, если вы поддержите его цветовую гамму и общий стиль в своих образах. По возможности просим девушек избегать белых и черных цветов.",
  dresscodePalette: [
    "#E9DCCB",
    "#5A3E36",
    "#7A7F4F",
    "#EEDC9A",
    "#A7B7C9",
    "#7B3F3F",
    "#7B9A95",
  ],
  dresscodeExamples:
    dresscodeExamples.length > 0
      ? dresscodeExamples
      : [
          { url: mb01, alt: "Референс образа 1" },
          { url: mb02, alt: "Референс образа 2" },
        ],
  schedule: [
    {
      time: "15:00",
      title: "Сбор гостей",
      description: "И праздничный фуршет",
    },
    {
      time: "16:00",
      title: "Церемония",
    },
    {
      time: "17:00",
      title: "Банкет",
      description: "Время танцев, поздравления и вкусной еды",
    },
  ],
  wishes: [
    {
      title: "Подарки",
      text: "Мы будем рады конверту или вкладу в наше семейное путешествие.",
    },
    {
      title: "Цветы",
      text: "Если вы захотите поздравить нас цветами, будем рады, если эту часть подарка вы направите в наш общий свадебный фонд.",
    },
  ],
  faq: [
    {
      q: "Можно ли прийти с детьми?",
      a: "Праздник запланирован в формате только для взрослых, поэтому просим прийти без детей.",
    },
    {
      q: "Что делать, если не могу прийти?",
      a: "Обязательно свяжитесь с нами заранее и сообщите, что не сможете присутствовать.",
    },
  ],
  contacts: [
    {
      name: "Анна",
      role: "Организатор",
      phone: "+7 702 240 92 24",
      whatsappUrl: "https://wa.me/77022409224",
      helpText:
        "В день свадьбы или до праздника по любым вопросам можно обращаться к нашему свадебному организатору Анне.",
      transportTitle: "Про трансфер",
      transportText:
        "Наш праздник будет проходить за городом. Чтобы вам было удобно добраться, мы планируем организовать трансфер для гостей без машины (и для тех, кто не захочет садиться за руль после праздника).",
    },
  ],
  rsvpForm: {
    title: "Пожалуйста, заполните анкету",
    subtitle:
      "Если вы приглашены парой, просим заполнить анкету по отдельности.",
    pairNotice: "Ответ займет около одной минуты.",
    nameLabel: "Имя и фамилия",
    attendanceQuestion: "Будете ли вы на свадьбе?",
    attendanceHint: "Просим дать ответ до 10 июня.",
    attendanceOptions: [
      { value: "yes", label: "Конечно, да" },
      { value: "no", label: "К сожалению, нет" },
      { value: "later", label: "Скажу ответ чуть позже" },
    ],
    alcoholTitle: "Пожелания по алкоголю",
    alcoholOptions: [
      { value: "sparkling", label: "Игристое" },
      { value: "white-wine", label: "Вино белое" },
      { value: "red-wine", label: "Вино красное" },
      { value: "beer", label: "Пиво" },
      { value: "non-alcohol", label: "Предпочитаю безалкогольное" },
    ],
    transferQuestion: "Потребуется ли вам трансфер?",
    transferOptions: [
      { value: "yes", label: "Да" },
      { value: "no", label: "Нет" },
    ],
    submitCta: "Отправить",
    consoleToast: "Анкета отправлена",
    submitSuccessToast: "Спасибо! Анкета отправлена.",
    submitErrorToast: "Не удалось отправить анкету. Попробуйте ещё раз.",
    submitConfigErrorToast: "Форма пока не настроена. Сообщите нам в WhatsApp.",
  },
  photos: [
    {
      url: heroPhoto,
      alt: "Фотография пары",
    },
    {
      url: heroPhoto,
      alt: "Тёплый момент вместе",
    },
    {
      url: heroPhoto,
      alt: "Светлое настроение свадьбы",
    },
  ],
  photoSize: {
    width: 176,
    height: 176,
  },
  heroMedia: {
    type: "image",
    url: heroPhoto,
    alt: "Главная фотография пары",
  },
  backgroundCarousel: {
    enabled: true,
    images:
      cloudDesktop.length > 0
        ? cloudDesktop
        : [
            { url: bg01, alt: "Фон — момент 1" },
            { url: bg02, alt: "Фон — момент 2" },
            { url: bg03, alt: "Фон — момент 3" },
            { url: bg04, alt: "Фон — момент 4" },
            { url: bg05, alt: "Фон — момент 5" },
            { url: bg06, alt: "Фон — момент 6" },
            { url: bg07, alt: "Фон — момент 7" },
            { url: bg08, alt: "Фон — момент 8" },
            { url: bg09, alt: "Фон — момент 9" },
            { url: bg10, alt: "Фон — момент 10" },
            { url: bg11, alt: "Фон — момент 11" },
            { url: bg12, alt: "Фон — момент 12" },
          ],
    mobileImages:
      cloudMobile.length > 0
        ? cloudMobile
        : [
            { url: mb01, alt: "Фон — момент 1" },
            { url: mb02, alt: "Фон — момент 2" },
            { url: mb03, alt: "Фон — момент 3" },
            { url: mb04, alt: "Фон — момент 4" },
            { url: mb05, alt: "Фон — момент 5" },
            { url: mb06, alt: "Фон — момент 6" },
            { url: mb07, alt: "Фон — момент 7" },
            { url: mb08, alt: "Фон — момент 8" },
            { url: mb09, alt: "Фон — момент 9" },
            { url: mb10, alt: "Фон — момент 10" },
            { url: mb11, alt: "Фон — момент 11" },
            { url: mb12, alt: "Фон — момент 12" },
            { url: mb13, alt: "Фон — момент 13" },
          ],
    intervalMs: 5000,
    transitionMs: 1400,
    overlayOpacity: 0.5,
    zoom: true,
  },
  backgrounds: {
    page: pageBg,
    hero: heroBg,
  },
  sections: {
    countdown: "countdown",
    details: "details",
    location: "location",
    schedule: "schedule",
    dresscode: "dresscode",
    wishes: "wishes",
    rsvp: "rsvp",
    faq: "faq",
    contacts: "contacts",
  },
  nav: [
    { id: "details", label: "Детали" },
    { id: "countdown", label: "Отсчет" },
    { id: "location", label: "Локация" },
    { id: "dresscode", label: "Дресс-код" },
    { id: "wishes", label: "Пожелания" },
    { id: "rsvp", label: "Анкета" },
    { id: "faq", label: "FAQ" },
    { id: "contacts", label: "Контакты" },
  ],
  labels: {
    countdownTitle: "До свадьбы осталось:",
    countdownDays: "дней",
    countdownHours: "часа",
    countdownMinutes: "минут",
    countdownSeconds: "секунд",
    heroBadge: "Wedding Day",
    startTimeLabel: "Начало в",
    rsvpCta: "Подтвердить присутствие",
    locationCta: "Посмотреть локацию",
    mapCta: "Открыть в 2GIS",
    yandexMapCta: "Открыть в Yandex",
    instagramCta: "Instagram площадки",
    copyAddressCta: "Скопировать адрес",
    copiedToast: "Адрес скопирован",
    copyErrorToast: "Не удалось скопировать",
    scheduleTitle: "Программа",
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
    writeCta: "Написать в",
    scheduleNote: "План нашего дня",
    dresscodeHint: "Для вдохновения мы собрали несколько примеров образов.",
    dresscodeHintGirls:
      "Девушкам лучше выбрать обувь без тонких шпилек: на траве и в горах удобнее устойчивый каблук.",
    dresscodeCarouselHint: "Референсы дресс-кода",
  },
};
