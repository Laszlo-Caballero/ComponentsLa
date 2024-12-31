import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import { cn } from "../utils/cn";
import { OutsideContainer } from "../Hooks/OutsideClick";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  open = false,
  setIsOpen,
  ...props
}) => {
  return (
    open && (
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full z-[1000] flex items-center justify-center backdrop-blur-sm",
          className
        )}
        {...props}
      >
        <OutsideContainer setIsOpen={setIsOpen}>{children}</OutsideContainer>
      </div>
    )
  );
};
