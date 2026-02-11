export type RsvpSubmitPayload = {
  fullName: string;
  attendance: string;
  alcoholPreferences: string[];
  transfer: string;
  submittedAt: string;
};

export const logRsvpToConsole = (payload: RsvpSubmitPayload) => {
  // Temporary transport: keep full payload visible for quick manual checks.
  console.groupCollapsed(`[RSVP] ${payload.fullName}`);
  console.table({
    "Имя и фамилия": payload.fullName,
    "Присутствие": payload.attendance,
    "Алкоголь": payload.alcoholPreferences.join(", ") || "не указано",
    "Трансфер": payload.transfer,
    "Отправлено": payload.submittedAt,
  });
  console.log("payload", payload);
  console.groupEnd();
};
