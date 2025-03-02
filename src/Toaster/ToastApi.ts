import { ReactNode } from "react";
import { toastObserver } from "./ToastObserver";

export const Toast = {
  success: (message: string, duration = 3000) =>
    toastObserver.addToast(message, "success", duration),
  error: (message: string, duration = 3000) =>
    toastObserver.addToast(message, "error", duration),
  custom: (message: ReactNode, duration = 3000) =>
    toastObserver.addToast(message, "custom", duration),
};
