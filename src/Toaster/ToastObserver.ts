import { ReactNode } from "react";

type Listener = () => void;

type Toast = {
  id: string;
  message: string | ReactNode;
  type?: "success" | "error" | "custom";
  duration?: number;
};

class ToastObserver {
  private toasts: Toast[] = [];
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach((listener) => listener());
  }

  addToast(
    message: string | ReactNode,
    type: Toast["type"] = "success",
    duration = 3000
  ) {
    const toast: Toast = { id: crypto.randomUUID(), message, type, duration };
    this.toasts.push(toast);
    this.notify();

    setTimeout(() => this.removeToast(toast.id), duration);
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter((t) => t.id !== id);
    this.notify();
  }

  getToasts() {
    return this.toasts;
  }
}

export const toastObserver = new ToastObserver();
