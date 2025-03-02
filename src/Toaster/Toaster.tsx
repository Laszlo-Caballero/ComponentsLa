"use client";
import { cva, VariantProps } from "class-variance-authority";
import { FC, useEffect, useState } from "react";
import { CheckCircleIcon } from "../Icons/CheckCircleIcon";
import { ErrorCircleIcon } from "../Icons/ErrorCircleIcon";
import { toastObserver } from "./ToastObserver";
import { cn } from "../utils/cn";

const toasterClass = cva("absolute z-[1000] flex flex-col gap-y-4", {
  variants: {
    size: {
      sm: "w-40",
      md: "w-60",
      lg: "w-80",
    },
    position: {
      "top-left": "top-4 left-4",
      "top-right": "top-4 right-4",
      "bottom-right": "bottom-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "mid-top": "top-2 left-1/2 -translate-x-1/2 ",
      "mid-bottom": "bottom-2 left-1/2 -translate-x-1/2 ",
    },
  },
  defaultVariants: {
    size: "md",
    position: "top-left",
  },
});

export const Toaster: FC<VariantProps<typeof toasterClass>> = ({
  size,
  position,
}) => {
  const [toasts, setToasts] = useState(toastObserver.getToasts());

  useEffect(() => {
    const unsubscribe = toastObserver.subscribe(() => {
      setToasts([...toastObserver.getToasts()]);
    });
    return unsubscribe;
  }, []);

  return (
    <div className={cn(toasterClass({ size, position }))}>
      {toasts.map((toast, index) => {
        return (
          <div key={index} className="bg-white p-2 rounded-md w-full shadow-md">
            {toast.type === "success" && (
              <span className="flex items-center gap-x-2">
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
                {toast.message}
              </span>
            )}
            {toast.type === "error" && (
              <span className="flex items-center gap-x-2">
                <ErrorCircleIcon className="w-4 h-4 text-red-500" />
                {toast.message}
              </span>
            )}

            {toast.type === "custom" && toast.message}
          </div>
        );
      })}
    </div>
  );
};
