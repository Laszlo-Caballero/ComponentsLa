"use client";
import { useDetailsContext } from "../Details/DetailsContext";
import { cn } from "../utils/cn";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface SummaryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  onOpen?: () => void;
}

export const Summary: FC<SummaryProps> = ({
  onOpen,
  children,
  className,
  ...props
}) => {
  const { setOpen, open } = useDetailsContext();

  return (
    <summary
      className={cn(
        "list-none flex items-center gap-3 py-4 w-full  px-2",
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        setOpen(!open);
        onOpen?.();
      }}
      {...props}
    >
      {children}
    </summary>
  );
};
