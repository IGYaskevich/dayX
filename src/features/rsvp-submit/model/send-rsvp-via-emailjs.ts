export type EmailJsSubmitResult =
  | { ok: true }
  | { ok: false; reason: "config_missing" | "request_failed" | "network_error" };

export type EmailJsPayload = {
  fullName: string;
  attendance: string;
  alcoholPreferences: string[];
  transfer: string;
  submittedAt: string;
};

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
// const DEFAULT_SERVICE_ID = "service_4dtjz3h";
// const DEFAULT_TEMPLATE_ID = "template_79onwfn";
const DEFAULT_EMAIL_TITLE = "RSVP";

const getEmailJsConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return { serviceId, templateId, publicKey };
};

export const sendRsvpViaEmailJs = async (
  payload: EmailJsPayload
): Promise<EmailJsSubmitResult> => {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  if (!serviceId || !templateId || !publicKey) {
    return { ok: false, reason: "config_missing" };
  }

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          title: DEFAULT_EMAIL_TITLE,
          full_name: payload.fullName,
          fullName: payload.fullName,
          attendance: payload.attendance,
          alcohol_preferences: payload.alcoholPreferences.join(", ") || "не указано",
          alcoholPreferences: payload.alcoholPreferences.join(", ") || "не указано",
          transfer: payload.transfer,
          submitted_at: payload.submittedAt,
          submittedAt: payload.submittedAt,
        },
      }),
    });

    if (!response.ok) {
      return { ok: false, reason: "request_failed" };
    }

    return { ok: true };
  } catch {
    return { ok: false, reason: "network_error" };
  }
};
