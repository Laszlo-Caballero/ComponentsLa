import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { useCloseDiv } from "../main";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  setIsOpen?: (value: boolean) => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  open = false,
  setIsOpen,
  ...props
}) => {
  const ref = useCloseDiv({ closeFunction: setIsOpen });

  return (
    open && (
      <div
        className={cn(
          "fixed top-0 left-0 w-full min-h-screen z-[1000] flex items-center justify-center backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <div ref={ref}>{children}</div>
      </div>
    )
  );
};
