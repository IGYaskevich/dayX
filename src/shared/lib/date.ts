export const formatDate = (
  iso: string,
  locale: string,
  options?: Intl.DateTimeFormatOptions,
) => {
  const date = new Date(iso);
  const formatted = new Intl.DateTimeFormat(locale, options).format(date);

  if (/^ru(?:-|$)/i.test(locale)) {
    return formatted.replace(/[\s\u00A0\u202F]?\u0433\.?$/u, "");
  }

  return formatted;
};

export const formatWeekday = (iso: string, locale: string) => {
  return formatDate(iso, locale, { weekday: "long" });
};
