import { Dispatch, FC, HTMLAttributes, SetStateAction } from "react";
import { cn } from "../utils/cn";
import { OutsideContainer } from "../hooks";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  classNameContainer?: string;
}

export const Modal: FC<ModalProps> = ({
  children,
  className,
  classNameContainer,
  open = false,
  setIsOpen,
  ...props
}) => {
  return (
    open && (
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full z-[1000] flex items-center justify-center backdrop-blur-sm",
          classNameContainer
        )}
        {...props}
      >
        <OutsideContainer
          setIsOpen={setIsOpen}
          className={cn("flex items-center justify-center", className)}
        >
          {children}
        </OutsideContainer>
      </div>
    )
  );
};
