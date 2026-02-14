export const formatDate = (
  iso: string,
  locale: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  const date = new Date(iso);
  return new Intl.DateTimeFormat(locale, options).format(date);
};

export const formatWeekday = (iso: string, locale: string) => {
  return formatDate(iso, locale, { weekday: "long" });
};
