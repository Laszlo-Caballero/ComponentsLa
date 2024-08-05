import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  open = false,
  onClose,
  ...props
}) => {
  return (
    open && (
      <div
        className="absolute top-0 left-0 w-full h-full z-[1000] flex items-center justify-center"
        {...props}
        onClick={onClose}
      >
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-slate-950 opacity-30",
            className
          )}
        ></div>
        {children}
      </div>
    )
  );
};
