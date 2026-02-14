import { FormEvent, useMemo, useState } from "react";
import { weddingConfig } from "@/shared/config/wedding";
import { Section } from "@/shared/ui/Section";
import { Card } from "@/shared/ui/Card";
import { Button } from "@/shared/ui/Button";
import { Reveal } from "@/shared/ui/Reveal";
import { useToast } from "@/shared/ui/Toast";
import { logRsvpToConsole, sendRsvpViaEmailJs } from "@/features/rsvp-submit";

export const RsvpFormSection = ({ id }: { id: string }) => {
  const { show } = useToast();
  const formConfig = weddingConfig.rsvpForm;

  const [fullName, setFullName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [transfer, setTransfer] = useState("");
  const [alcoholValues, setAlcoholValues] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const alcoholLabelMap = useMemo(
    () =>
      new Map(
        formConfig.alcoholOptions.map((option) => [option.value, option.label]),
      ),
    [formConfig.alcoholOptions],
  );

  const toggleAlcohol = (value: string) => {
    setAlcoholValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const attendanceLabel =
      formConfig.attendanceOptions.find((option) => option.value === attendance)
        ?.label ?? attendance;
    const transferLabel =
      formConfig.transferOptions.find((option) => option.value === transfer)
        ?.label ?? transfer;
    const alcoholLabels = alcoholValues.map(
      (value) => alcoholLabelMap.get(value) ?? value,
    );

    const payload = {
      fullName: fullName.trim(),
      attendance: attendanceLabel,
      alcoholPreferences: alcoholLabels,
      transfer: transferLabel,
      submittedAt: new Date().toISOString(),
    };

    logRsvpToConsole(payload);
    setIsSubmitting(true);

    const submitResult = await sendRsvpViaEmailJs(payload);
    setIsSubmitting(false);

    if (submitResult.ok) {
      const successText =
        formConfig.submitSuccessToast ?? formConfig.consoleToast;
      show(successText, "success");
      setFullName("");
      setAttendance("");
      setTransfer("");
      setAlcoholValues([]);
      return;
    }

    if (submitResult.reason === "config_missing") {
      const errorText =
        formConfig.submitConfigErrorToast ??
        "EmailJS не настроен: добавьте template/public key в .env.local";
      show(errorText, "error");
      return;
    }

    const errorText =
      formConfig.submitErrorToast ??
      "Не удалось отправить анкету. Попробуйте ещё раз.";
    show(errorText, "error");
  };

  return (
    <Section id={id} title={formConfig.title} subtitle={formConfig.subtitle}>
      <Reveal>
        <Card className="mx-auto w-full max-w-3xl">
          <form className="space-y-10" onSubmit={handleSubmit}>
            {formConfig.pairNotice && (
              <p className="type-body-sm text-ivory-700">
                {formConfig.pairNotice}
              </p>
            )}

            <div className="space-y-3">
              <label
                className="block type-title-sm text-ivory-900"
                htmlFor="guest-name"
              >
                {formConfig.nameLabel}
              </label>
              <input
                id="guest-name"
                required
                autoComplete="name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full border-b border-ivory-500 bg-transparent py-2 type-body text-ivory-900 outline-none placeholder:text-ivory-500 focus:border-ivory-800"
                placeholder="Введите имя и фамилию"
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="type-title-md text-ivory-900">
                  {formConfig.attendanceQuestion}
                </p>
                {formConfig.attendanceHint && (
                  <p className="mt-1 type-body-sm text-ivory-700">
                    {formConfig.attendanceHint}
                  </p>
                )}
              </div>
              <div className="grid gap-3">
                {formConfig.attendanceOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 type-body text-ivory-900 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      required
                      checked={attendance === option.value}
                      onChange={(event) => setAttendance(event.target.value)}
                      className="h-5 w-5 accent-ivory-800"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="type-title-md text-ivory-900">
                {formConfig.alcoholTitle}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {formConfig.alcoholOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 type-body text-ivory-900 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={alcoholValues.includes(option.value)}
                      onChange={() => toggleAlcohol(option.value)}
                      className="h-5 w-5 accent-ivory-800"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="type-title-md text-ivory-900">
                {formConfig.transferQuestion}
              </p>
              <div className="grid gap-3">
                {formConfig.transferOptions.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 type-body text-ivory-900 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="transfer"
                      value={option.value}
                      required
                      checked={transfer === option.value}
                      onChange={(event) => setTransfer(event.target.value)}
                      className="h-5 w-5 accent-ivory-800"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto md:px-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : formConfig.submitCta}
            </Button>
          </form>
        </Card>
      </Reveal>
    </Section>
  );
};
