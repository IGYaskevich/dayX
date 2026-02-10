import { HomePage } from "@/pages/home";
import { ToastProvider } from "@/shared/ui/Toast";

export const App = () => {
  return (
    <ToastProvider>
      <HomePage />
    </ToastProvider>
  );
};
