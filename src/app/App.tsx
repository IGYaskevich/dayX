import { HomePage } from "@/pages/home";
import { ToastProvider } from "@/shared/ui/Toast";
import { BackgroundAudio } from "@/features/background-audio";
import { EntryGate } from "@/features/entry-gate";

export const App = () => {
  return (
    <ToastProvider>
      <HomePage />
      <BackgroundAudio />
      <EntryGate />
    </ToastProvider>
  );
};
